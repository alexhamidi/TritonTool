//500?
//=========================================================================================
//===================================[IMPORTS AND SETUP]===================================
//=========================================================================================

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const { Client } = require('pg');
const { handleGenericServerError } = require('./utils/handleGenericServerError');
const { getAllCourses, getOneCourse } = require('./utils/courseUtils');
const { getDefaultCalendar, getDefaultLabels, getDefaultResources } = require('./utils/defaultItems');
const { addDefaultCalendar, addDefaultLabels, addDefaultResources } = require('./utils/defaultInits');
const app = express();
require('dotenv').config();

app.use(cookieParser());
app.use(express.json()); 
app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.FRONTEND_URL_ANGULAR], 
    methods: ['POST', 'GET', 'DELETE'], 
    credentials: true 
}));

const PORT = process.env.PORT;

let client;

if (process.env.NODE_ENV === 'development') {
    client = new Client({
        user: process.env.USER,
        host: 'localhost',
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: process.env.DB_PORT,
    })
} else if (process.env.NODE_ENV === 'production') {
    client = new Client({
        connectionString: process.env.DATABASE_URL,
    })
}

client.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Error connecting to database', err));


//======================================================================================
//===================================[AUTHENTICATION]===================================
//======================================================================================

//middleware to authenticate valid requests (users)
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Missing token' });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.clearCookie('token'); // Clear the invalid token
            return res.status(401).json({error: err.name === 'TokenExpiredError' ? 'Unauthorized: Token expired' : 'Unauthorized: Invalid token' });
        }
        req.userID = decoded.userID;
        next();
    });
};
    
//API endpoint to test middleware functionality
app.get('/api/verifytoken', authenticateToken, (req, res) => { 
    res.status(200).json({ message: 'Token is valid', userID: req.userID });
});

//================================================================================
//===================================[LOGGING OUT]================================
//================================================================================

app.post('/api/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
});

//============================================================================================================================
//===================================[LOGGING IN, REGISTERING, AND DEFAULT INITIALIZATIONS]===================================
//============================================================================================================================


//logging in  API endpoint
app.post('/api/login', async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length === 0) return res.status(404).json({ error: 'User not found' });
        const passwordMatch = await bcrypt.compare(password, user.rows[0].hashed_password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        const token = jwt.sign(
            { userID: user.rows[0].user_id, random: Math.random().toString(36).substring(7) },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict',
            maxAge: 3600000 
        });

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        handleGenericServerError(error, res)
    }
})

//registering API endpoint
app.post('/api/register', async (req, res) => { 
    const { email, password } = req.body;
    try {
        const existingUser = await client.query('SELECT * FROM users WHERE email = $1', [email]); 
        if (existingUser.rows.length > 0) return res.status(400).json({ error: 'User already exists with that email' });
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await client.query(
            'INSERT INTO users (email, hashed_password) VALUES ($1, $2) RETURNING *',
            [email, hashedPassword]
        );
    
        const userID = newUser.rows[0].user_id;       

        const defaultCalendar = getDefaultCalendar(client);
        await addDefaultCalendar(defaultCalendar, userID, client);

        const defaultResources = await getDefaultResources(client);
        await addDefaultResources(defaultResources, userID, client);

        const defaultLabels = await getDefaultLabels(client)
        await addDefaultLabels(defaultLabels, userID, client);

        const token = jwt.sign(
            { userID: userID, random: Math.random().toString(36).substring(7) },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, { //cookie holds a piece of data that is maintained between the server and
            httpOnly: true,
            secure: true,
            sameSite: process.env.NODE_ENV === 'production',
            maxAge: 3600000 
        });
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        handleGenericServerError(error, res)
    }
});



//==============================================================================================
//===================================[RETRIEVING COURSE INFO]===================================
//==============================================================================================

//Search for a course or set of courses
app.post('/api/searchcourse', async (req, res) => {
    try {
        const courseCode = req.body.course_code.trim().toUpperCase();
        if (!courseCode) return res.status(400).json({ error: 'Course code is required' });
        const parts = courseCode.trim().split(' ');
        const course_info = (parts.length === 1 ? 
            await getAllCourses(courseCode, client) : 
            await getOneCourse(courseCode, client));
        res.status(200).json({ course_info });
    } catch (error) {
        console.error(error);
        if (error.message.includes('Course')) {
            res.status(404).json({ error: 'Course not found', details: error.message });
        } else if (error.message.includes('URL not found')) {
            res.status(404).json({ error: 'Invalid URL', details: error.message });
        } else {
            res.status(500).json({ error: 'Internal server error', details: error.message });
        }
    }
});


//=========================================================================================================
//===================================[CALENDAR INFO AND FUNCTIONALITIES]===================================
//=========================================================================================================

//retreive all calendars in the calendars database
app.get('/api/calendars', authenticateToken, async(req, res) => {
    try {
        const userID = req.userID;
        const calendars = await client.query(
            'SELECT * FROM calendars WHERE user_id = $1', 
            [userID]
        )   
        res.json(calendars.rows)
    } catch (error) {
        handleGenericServerError(error, res)
    } 
})


//add a new calendar 
app.post('/api/addcalendar', authenticateToken, async(req,res) => {
    try {
        const {calendar_name} = req.body;
        const userID = req.userID;

        const existingCalendar = await client.query(
            'SELECT * FROM calendars WHERE user_id = $1 AND calendar_name = $2',
            [userID, calendar_name]
        );

        if (existingCalendar.rows.length > 0) {
            return res.status(409).json({error: "Calendar Already Exists"});
        }

        const updatedCalendars = await client.query(
            'INSERT INTO calendars (user_id, calendar_name) VALUES ($1, $2) RETURNING *', 
            [userID, calendar_name]
        )   
        res.json(updatedCalendars.rows)
    } catch (error) {
        handleGenericServerError(error, res)
    } 
})

//delete a calendar. Deletes the calendar in the calendars table as well as all associated courses.
app.delete('/api/deletecalendar/:calendar_name', authenticateToken, async(req, res) => {
    try {
        const { calendar_name } = req.params;
        const userID = req.userID;

        const updatedCourses = await client.query(
            'DELETE FROM courses_user WHERE user_id = $1 AND calendar_name = $2 RETURNING *',
            [userID, calendar_name]
        );     
        
        const updatedCalendars = await client.query(
            'DELETE FROM calendars WHERE user_id = $1 AND calendar_name = $2 RETURNING *',
            [userID, calendar_name]
        );     

        res.json({courses: updatedCourses.rows, calendars: updatedCalendars.rows});
    } catch (error) {
        handleGenericServerError(error, res)
    }
});



//====================================================================================================
//===================================[LOADING AND UPDATING COURSES]===================================
//====================================================================================================


//retrieves all courses that a user has added to their schedule
app.get('/api/courses', authenticateToken, async(req, res) => {
    try {
        const userID = req.userID;
        const courses = await client.query(
            'SELECT * FROM courses_user WHERE user_id = $1',
            [userID]
        );
        res.json(courses.rows);
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

//Adds a course to the database
app.post('/api/addcourse', authenticateToken, async(req, res) => {
    try {
        const {course_name, quarter, subject_code, calendar_name, credits, prerequisites, notes, description, course_code} = req.body;
        const userID = req.userID;

        const existingCourse = await client.query(
            'SELECT * FROM courses_user WHERE user_id = $1 AND course_name = $2 AND quarter = $3 AND calendar_name = $4',
            [userID, course_name, quarter, calendar_name]
        );

        if (existingCourse.rows.length > 0) {
            return res.status(409).json({error: "Course already exists in this quarter and calendar"});
        }
         
        const insertedCourse = await client.query(
            'INSERT INTO courses_user (user_id, course_name, subject_code, quarter, calendar_name, credits, prerequisites, notes, description, course_code, takeable) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
            [userID, course_name, subject_code, quarter, calendar_name, credits, prerequisites, notes, description, course_code, false]
        );

        const catalogCourse = await client.query('SELECT course_id FROM courses_catalog WHERE course_code = $1',[course_code]);
        const catalogCourseId = catalogCourse.rows[0].course_id;
        const segmentResults = await client.query(
            'SELECT segment_name FROM prerequisite_segments_catalog WHERE course_id = $1',
            [catalogCourseId]
        );
        for (let row of segmentResults.rows) {
            await client.query(
                'INSERT INTO prerequisite_segments_user (user_id, course_id, segment_name, checked) VALUES ($1, $2, $3, $4)',
                [userID, insertedCourse.rows[0].course_id, row.segment_name, false]
            );
        }

        res.json(insertedCourse.rows[0]);
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

app.delete('/api/deletecourse/:course_id', authenticateToken, async(req, res) => {
    try {
        const { course_id } = req.params;
        const userID = req.userID;
        const result = await client.query(`
            WITH deleted_prerequisites AS (
                DELETE FROM prerequisite_segments_user
                WHERE user_id = $1 AND course_id = $2
                RETURNING *
            ),
            deleted_course AS (
                DELETE FROM courses_user
                WHERE user_id = $1 AND course_id = $2
                RETURNING *
            )
            SELECT * FROM deleted_course;
        `, [userID, course_id]);
        res.json(result.rows);
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

app.get('/api/segments/:course_id', authenticateToken, async (req, res) => {
    try {
        const { course_id } = req.params;
        const userID = req.userID;
        
        const results = await client.query(
            `SELECT * FROM prerequisite_segments_user
             WHERE user_id = $1 AND course_id = $2`,
            [userID, course_id]
        );
        res.json(results.rows);
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

app.post('/api/updatesegment', authenticateToken, async (req, res) => { 
    try {
        const {course_id, segment_id} = req.body;
        const userID = req.userID;
        
        const result = await client.query(
            `UPDATE prerequisite_segments_user 
             SET checked = NOT checked
             WHERE user_id = $1 AND course_id = $2 AND segment_id = $3
             RETURNING *`,
            [userID, course_id, segment_id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Prerequisite segment not found" });
        }

        res.json({ message: "Prerequisite segment updated successfully", segment_name: result.rows[0]});
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

app.post('/api/updatetakeable', authenticateToken, async (req, res) => {
    try {
        const { course_id } = req.body;
        const userID = req.userID;
        const result = await client.query(
            `UPDATE courses_user
             SET takeable = NOT takeable
             WHERE user_id = $1 AND course_id = $2
             RETURNING *`,
            [userID, course_id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Course not found" });
        }

        res.json({ message: "Takeable updated successfully", course: result.rows[0] });
    } catch (error) {
        handleGenericServerError(error, res)
    }
});


//================================================================================
//===================================[RESOURCES]==================================
//================================================================================

//get all existing resources for a user
app.get('/api/resources', authenticateToken, async(req, res) => {
    try {
        const userID = req.userID;
        const resources = await client.query(
            'SELECT * FROM resources WHERE user_id = $1',
            [userID]
        );
        res.json(resources.rows);
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

//load default resources (if the user is logged in as a guest)
app.get('/api/defaultresources', async(req, res) => {
    try {
        const defaultResources = await getDefaultResources(client)
        res.json(defaultResources);
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

app.get('/api/labels', authenticateToken, async(req, res) => {
    try {
        const userID = req.userID;
        const labels = await client.query(
            'SELECT * FROM labels WHERE user_id = $1',
            [userID]
        );
        res.json(labels.rows);
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

app.get('/api/defaultlabels', async(req, res) => {
    try {
        const defaultLabels = await getDefaultLabels(client);
        res.json(defaultLabels);
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

//add a new resource to ther users database
app.post('/api/addresource', authenticateToken, async(req, res) => {
    try {
        const {resource_name, description, label_name, link} = req.body;
        const userID = req.userID;
        const updatedResources = await client.query(
            'INSERT INTO resources (user_id, resource_name, description, label_name, link) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [userID, resource_name, description, label_name, link]
        );
        res.json(updatedResources.rows);
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

app.post('/api/addlabel', authenticateToken, async(req, res) => {
    try {
        const {label_name} = req.body;
        const userID = req.userID;
        const existingLabel = await client.query(
            'SELECT * FROM labels WHERE user_id = $1 AND label_name = $2',
            [userID, label_name]
        );
        if (existingLabel.rows.length > 0) {
            return res.status(409).json({error: "Course already exists in this quarter and calendar"});
        }
        const updatedResources = await client.query(
            'INSERT INTO labels (user_id, label_name) VALUES ($1, $2) RETURNING *',
            [userID, label_name]
        );
        res.json(updatedResources.rows);
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

//delete a resource from the user's database
app.delete('/api/deleteresource/:resource_id', authenticateToken, async(req, res) => {
    try {
        const { resource_id } = req.params;
        const userID = req.userID;
        const updatedResources = await client.query(
            'DELETE FROM resources WHERE user_id = $1 AND resource_id = $2 RETURNING *',
            [userID, resource_id]
        );        
        res.json(updatedResources.rows);
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

//delete all resources with the given label. 
app.delete('/api/deletelabel/:label_name', authenticateToken, async(req, res) => {
    try {
        const { label_name } = req.params;
        const userID = req.userID;
        const updatedResources = await client.query(
            'DELETE FROM resources WHERE user_id = $1 AND label_name = $2 RETURNING *',
            [userID, label_name]
        );     
        const updatedLabels = await client.query(
            'DELETE FROM labels WHERE user_id = $1 AND label_name = $2 RETURNING *',
            [userID, label_name]
        );    
        res.json(updatedLabels.rows);
    } catch (error) {
        handleGenericServerError(error, res)
    }
});

//=======================================================================================
//===================================[STARTING SERVER]===================================
//=======================================================================================

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

