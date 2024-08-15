// courseUtils.js
const axios = require('axios');
const cheerio = require('cheerio');

async function getSelectCourses(courseCode, client) {
    const parts = courseCode.split(' ');
    const subject_code = parts[0];
    const secondPart = parts.slice(1).join(' ');
    const courses_info = await getAllCourses(subject_code, client);
    const course_info = courses_info.filter(course => course.course_name.toLowerCase().includes(secondPart.toLowerCase()));
    if (course_info.length === 0) throw new Error('Course Not Found');
    return course_info;
}

async function getAllCourses(subject_code, client) {
    const subjectMap = {
        'LIGN': 'LING', 'BILD': 'BIOL', 'BICD': 'BIOL', 'AAS': 'AASM', 'AUD': 'AUDL',
        'BNFO': 'BIOI', 'CLX': 'CLS', 'FILM': 'CIN', 'CLASSIC': 'CLAS', 'SIOC': 'CSP',
        'AESE': 'MAS', 'WES': 'MAS', 'DSE': 'MAS', 'GPCO': 'GPS', 'HILD': 'HIS',
        'MGTA': 'MGT', 'MGTP': 'MGT', 'MUIR': 'MCWP', 'NEUG': 'NEU', 'FPM': 'FMPH',
        'SIOG': 'SIO', 'SIOB': 'SIO', 'SOCI': 'SOC ', 'SOCG': 'SOC ',
        'TDAC': 'THEA', 'TDDE': 'THEA', 'TDDM': 'THEA', 'TDDR': 'THEA',
        'TDGE': 'THEA', 'TDGR': 'THEA', 'TDHD': 'THEA', 'TDHT': 'THEA',
        'TDMV': 'THEA', 'TDPF': 'THEA', 'TDPR': 'THEA', 'TDTR': 'THEA',
        'WCWP': 'WARR'
    };
    subject_code = (subjectMap[subject_code] || subject_code);
    subject_code = subject_code.startsWith('LT') ? 'LIT' : subject_code;
    subject_code = subject_code.startsWith('HI') ? 'HIST' : subject_code;

    const coursesFromDB = await client.query('SELECT * FROM courses_catalog WHERE subject_code = $1', [subject_code]);
    if (coursesFromDB.rows.length > 0) return coursesFromDB.rows;

    console.log(`Fetching courses for ${subject_code} from website...`);
    const url = `https://catalog.ucsd.edu/courses/${subject_code}.html`;
    
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        let courses_info = [];

        const anchors = $('.anchor-parent');
        for (let i = 0; i < anchors.length; i++) {
            const anchor = $(anchors[i]).find('a');
            const name = anchor.attr('id');
            const course_info = await getCourseInfo($, name);
            if (course_info.course_name) {
                courses_info.push(course_info);
                const insertedCourse = await client.query(
                    'INSERT INTO courses_catalog (subject_code, course_code, course_name, credits, description, prerequisites, notes) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING course_id',
                    [subject_code, course_info.course_code, course_info.course_name, course_info.credits, course_info.description, course_info.prerequisites, course_info.notes]
                );
                for (let segment_name of course_info.prerequisite_segments) {
                    await client.query(
                        'INSERT INTO prerequisite_segments_catalog (course_id, segment_name) VALUES ($1, $2)',
                        [insertedCourse.rows[0].course_id, segment_name]
                    );
                }
            }
        }
        return courses_info;
    } catch (error) {
        console.error(error);
        if (error.response?.status === 404) throw new Error(`URL not found: ${url}`);
        throw error;
    }
}



async function getCourseInfo($, modCourseCode) {
    let course_info = {}
    let upperCaseCode = modCourseCode.toUpperCase();
    course_info['course_code'] = upperCaseCode.slice(0, upperCaseCode.search(/\d/)) + ' ' + upperCaseCode.slice(upperCaseCode.search(/\d/));
    try {
        const anchorParent = $(`#${modCourseCode}`).closest('.anchor-parent');
        if (!anchorParent.length) throw new Error(`Course ${modCourseCode} not found`);

        const fullCourseName = anchorParent.next('.course-name').text().trim();
        const matchResult = fullCourseName.match(/\((.*?)\)(.*?)$/);

        let credits = 'N/A';
        let textAfterCredits = '';
        
        if (matchResult) {
            credits = matchResult[1] || 'N/A';
            textAfterCredits = matchResult[2] || '';
        }        
        
        course_info.credits = credits.trim();
        course_info.course_name = fullCourseName.replace(/\(.*?\).*$/, '').trim();

        const fullDescription = anchorParent.nextAll('.course-descriptions').first().text().trim();
        course_info.description = fullDescription.replace(/(Prerequisites|Note):\s*(.*?)\..*$/i, '').trim();

        const prerequisitesMatch = fullDescription.match(/Prerequisites:\s*(.*?)[.;]/);
        const noteMatch = fullDescription.match(/Note:\s*(.*?)(?=(?:$))/i);

        course_info.prerequisite_segments = [];
        course_info.prerequisites = 'none';
        course_info.notes = noteMatch ? noteMatch[1] : 'none';

        if (prerequisitesMatch) {
            course_info.prerequisites = prerequisitesMatch[1].trim();
            course_info.prerequisite_segments = course_info.prerequisites === 'none' ? [] : parsePrerequisites(course_info.prerequisites);
            course_info.notes = fullDescription.slice(prerequisitesMatch.index + prerequisitesMatch[0].length).trim() || 'none';
        }

        course_info.notes = textAfterCredits ? (course_info.notes === 'none' ? textAfterCredits : `${textAfterCredits}. ${course_info.notes}`) : course_info.notes;
                
        return course_info;
    } catch (error) {
        if (error.response?.status === 404) {
            throw new Error(`URL not found: ${url}`);
        }
        throw error; 
    }
}

function parsePrerequisites(prerequisites) {
    const parts = prerequisites.split(/,\s*or\s+|\s+or\s+/);
    const segments = [];
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i].trim();
        const nextPart = parts[i + 1]?.trim();
        if (part.startsWith('AP') && /^\d+$/.test(nextPart)) {
            segments.push(`${part} or ${nextPart}`);
            i++;
        } else if (/[A-Z]{2,4}\s+\d+[A-Z]?/.test(part) && part.includes('grade of')) {
            segments.push(part + (nextPart === 'better' ? ' or better' : ''));
            if (nextPart === 'better') i++;
        } else if (/\b(SAT|ACT|SAT II)\b/.test(part)) {
            let scoreRequirement = `${part} ${nextPart}`;
            if (['higher', 'better'].includes(parts[i + 2]?.trim())) {
                scoreRequirement += ` or ${parts[i + 2]}`;
                i += 2;
            } else {
                i++;
            }
            segments.push(scoreRequirement);
        } else {
            segments.push(part);
        }
    }
    return segments;
}

module.exports = {
    getAllCourses,
    getSelectCourses,
    getCourseInfo,
    parsePrerequisites
};