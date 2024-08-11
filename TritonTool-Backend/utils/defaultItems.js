
function getDefaultCalendar() {
    return '2024-2025'
}

async function getDefaultResources(client) {
    let results = await client.query('SELECT * FROM default_resources');
    if (results.rows.length === 0) {
        results = await populateDefaultResources(client);
    }
    return results.rows;
}

async function getDefaultLabels(client) {
    const results = await client.query('SELECT DISTINCT label_name FROM default_resources');
    return results.rows;
}

async function populateDefaultResources(client) {
    let resources = await client.query(`
        INSERT INTO default_resources (resource_name, link, label_name, description) 
        VALUES 
        ('CSE Website', 'https://cse.ucsd.edu/', 'CSE', 'Primary website for all things UCSD CSE Related'),
        ('Triton Research & Experiential Learning Scholars (TRELS)', 'https://ugresearch.ucsd.edu/programs/all-urh-programs/trels/index.html', 'Research', 'TRELS empowers students to pursue intellectual opportunities beyond the classroom, by providing support in the form of funding and mentorship. This program is intended to expose students to experiential learning, including, but not limited to research, guided artistic or creative projects, and public service opportunities, under the guidance of a UC San Diego faculty member.'),
        ('Faculty Mentor Program (FMP)', 'https://ugresearch.ucsd.edu/programs/all-urh-programs/fmp/index.html', 'Research', 'Through the Faculty Mentor Program (FMP), students can develop valuable relationships with UC San Diego faculty mentors while participating in an independent study course (99 or 199) designed to build their research skills. FMP offers assistance every step of the way—finding and establishing a connection with a mentor, learning research & writing skills, and exploring post-graduate career paths through workshops and seminars. FMP is open to all majors!'),
        ('Research Experience & Applied Learning Portal', 'https://real.ucsd.edu/', 'Research', 'The REAL Portal is one of the Engaged Learning Tools designed to help students discover, capture, and share their career-readiness competencies developed while at UC San Diego.'),
        ('UCSD incoming FAQ - The Document', 'https://docs.google.com/document/d/1IBOha62mF0onJOq-f5FuGR4MdNZDLZwhR1GnSrnA1es/edit#heading=h.4j5n9agiyipl', 'Incoming Students', 'Thorough document for information useful to incoming students (freshmen)'),
        ('Undergraduate Research Hub', 'https://ugresearch.ucsd.edu/', 'Research', 'The Undergraduate Research Hub (URH) empowers undergraduates seeking to become integrated in the UC San Diego research community with the skills to be successful in a post-baccalaureate career.'),
        ('Undergraduate Committee (UGCOM) Advising and Mentorship', 'https://cse.ucsd.edu/undergraduate/advising/undergraduate-committee-ugcom-advising-and-mentorship', 'CSE', 'CSE Undergraduate advising'),
        ('CSE MS Advising', 'https://cse.ucsd.edu/graduate/advising/graduate-student-affairs-ms-advising', 'CSE', ''),
        ('CSE BS/MS Program', 'https://cse.ucsd.edu/graduate/bachelorsmasters-program', 'CSE', ''),
        ('ESRP Youtube Video', 'https://www.youtube.com/watch?v=D3bSsfRMNCg&t=398s', 'Research', 'YouTube video highlighting the CSE ERSP program.'),
        ('CSE Undergraduate Research', 'https://cse.ucsd.edu/undergraduate/undergraduate-research', 'CSE', 'CSE Undergrad Research Homepage'),
        ('CSE Newsletter', 'https://csestudent7.wixsite.com/ucsd-cse-newsletter', 'CSE', 'Website hosting CSE announcements, resources, and opportunities'),
        ('Fall 2024 Undegraduate CSE Course Updates', 'https://cse.ucsd.edu/undergraduate/fall-2024-undergraduate-course-updates', 'CSE', 'Here you will learn: important Fall 2024 course information, how we manage the waitlists, enrollment priority information for CSE majors, when we are opening any available seats, and how non-CSE majors can request to enroll in CSE restricted courses.'),
        ('CSE Tentative Undergraduate Course Offerings', 'https://cse.ucsd.edu/undergraduate/tentative-course-offerings', 'CSE', ''),
        ('CSE Tentative Undergraduate Course Offerings', 'https://cse.ucsd.edu/undergraduate/tentative-course-offerings', '24-25 Course Offerings', ''),
        ('CSE Undergraduate Prerequisites', 'https://cse.ucsd.edu/undergraduate/courses/prerequisites-cse-undergraduate-classes', 'CSE', ''),
        ('2024-2025 CSE Electives and Technical Electives', 'https://cse.ucsd.edu/undergraduate/2024-2025-cse-electives-and-technical-electives', 'CSE', 'This page includes a list of upper-division courses from other departments that can be counted as either CSE Electives or Technical Electives.'),
        ('CSE Student Affairs Office Hours', 'https://cse.ucsd.edu/undergraduate/advising/cse-student-affairs-office-hours', 'CSE', ''),
        ('2024-2025 Mathematics Course Offerings', 'https://math.ucsd.edu/students/planned-course-offerings', '24-25 Course Offerings', ''),
        ('Enrollment Checklist (Undergraduates)', 'https://students.ucsd.edu/academics/enroll/undergraduate-enrollment/checklist.html#Enrollment-appointment-times', 'Enrollment', '')
    `);
    return resources;
}

module.exports = {
    getDefaultCalendar,
    getDefaultResources,
    getDefaultLabels,
};