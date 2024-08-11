const MUS = [
  {
    "course_code": "MUS 1A",
    "course_name": "MUS 1A. Fundamentals of Music A",
    "credits": "4",
    "description": "This course, first in a three-quarter sequence, is primarily intended for students without previous musical experience. It introduces music notation and basic music theory topics such as intervals, scales, keys, and chords, as well as basic rhythm skills.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 1B",
    "course_name": "MUS 1B. Fundamentals of Music B",
    "credits": "4",
    "description": "This course, second in a three-quarter sequence, focuses on understanding music theory and in developing musical ability through rhythm, ear training, and sight singing exercises. Topics include major and minor scales, seventh-chords, transposition, compound meter and rudiments of musical form.",
    "prerequisite_segments": [
      [
        "MUS 1A",
        "0"
      ]
    ],
    "prerequisites": "MUS 1A",
    "notes": "none"
  },
  {
    "course_code": "MUS 1C",
    "course_name": "MUS 1C. Fundamentals of Music C",
    "credits": "4",
    "description": "This course, third in a three-quarter sequence, offers solid foundation in musical literacy through exercises such as harmonic and melodic dictation, sight singing exercises and rhythm in various meters. Topics include complex rhythm, harmony, and basic keyboard skills.",
    "prerequisite_segments": [
      [
        "MUS 1B",
        "0"
      ]
    ],
    "prerequisites": "MUS 1B",
    "notes": "none"
  },
  {
    "course_code": "MUS 2C",
    "course_name": "MUS 2A-B-C. Basic Musicianship",
    "credits": "4-4-4",
    "description": "Primarily intended for music majors. Development of basic skills: perception and notation of pitch and temporal relationships. Introduction to functional harmony. Studies in melodic writing. Drills in sight singing, rhythmic reading, and dictation.",
    "prerequisite_segments": [
      [
        "passing score on proficiency exam",
        "0"
      ]
    ],
    "prerequisites": "passing score on proficiency exam",
    "notes": "Must be taken in sequence. Music majors must be concurrently enrolled in MUS 2AK, 2BK, and 2CK (Basic Keyboard)."
  },
  {
    "course_code": "MUS 2CK",
    "course_name": "MUS 2AK-BK-CK. Basic Keyboard",
    "credits": "2-2-2",
    "description": "Scales, chords, harmonic progressions, transposition, and simple pieces.",
    "prerequisite_segments": [
      [
        "concurrent enrollment in MUS 2A, B, C",
        "0"
      ]
    ],
    "prerequisites": "concurrent enrollment in MUS 2A, B, C",
    "notes": "none"
  },
  {
    "course_code": "MUS 2JK",
    "course_name": "MUS 2JK. Jazz Keyboard",
    "credits": "2",
    "description": "This course will acquaint students with basic concepts in jazz piano. Students will learn chord voicing, how to read a lead sheet, and modes for improvising. Major pianists from the idiom will be listened to and discussed. The course is ideal for non-pianists as well as pianists because its emphasis is theoretical, not technical.",
    "prerequisite_segments": [
      [
        "MUS 2AK and 2BK",
        "0"
      ],
      [
        "passing proficiency exam",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "MUS 2AK and 2BK or passing proficiency exam, or consent of instructor",
    "notes": "Concurrent enrollment in MUS 2C. Majors only."
  },
  {
    "course_code": "MUS 4",
    "course_name": "MUS 4. Introduction to Western Music",
    "credits": "4",
    "description": "A brief survey of the history of Western music from the Middle Ages to the present. Much attention will be paid to the direct experience of listening to music and attendance of concerts. Class consists of lectures, listening labs, and live performances.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 5",
    "course_name": "MUS 5. Sound in Time",
    "credits": "4",
    "description": "An examination and exploration of the art and science of music making. Topics include acoustics, improvisation, composition, and electronic and popular forms. There will be required listening, reading, and creative assignments. No previous musical background required.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 6",
    "course_name": "MUS 6. Electronic Music",
    "credits": "4",
    "description": "Lectures and listening sessions devoted to the most significant works of music realized through the use of computers and other electronic devices from the middle of this century through the present.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 7",
    "course_name": "MUS 7. Music, Science, and Computers",
    "credits": "4",
    "description": "Exploration of the interactions among music, science, and technology, including the history and current development of science and technology from the perspective of music.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 8",
    "course_name": "MUS 8. American Music: Jazz Cultures",
    "credits": "4",
    "description": "Jazz is one of the primary foundations for American music in the twentieth and twenty-first centuries. This course highlights the multicultural and international scope of jazz by taking a thematic rather than a chronological approach to the subject, and by highlighting the music and lives of a diverse array of jazz practitioners from around the country and around the world. Students may not receive credit for both MUS 8 and MUS 8GS.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "(Offered in selected years.)"
  },
  {
    "course_code": "MUS 9",
    "course_name": "MUS 9. Symphony",
    "credits": "4",
    "description": "This course will consist of lectures and listening sessions devoted to a detailed discussion of a selection of representative orchestral works (e.g., Mozart, Beethoven, Berlioz, Stravinsky, Ligeti, etc.).",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "(Offered in selected years.)"
  },
  {
    "course_code": "MUS 11",
    "course_name": "MUS 11. Folk Music",
    "credits": "4",
    "description": "A course on folk music of the world, covered through lectures, films, and listening sessions devoted to detailed discussion of music indigenous to varying countries/areas of the world. Topics vary from year to year. May be taken for credit twice.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 12",
    "course_name": "MUS 12. Opera",
    "credits": "4",
    "description": "A study of works from the history of opera to coincide when possible with operas presented in the San Diego opera season. Class consists of lectures, listening labs, live performances, and opera on video.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 13",
    "course_name": "MUS 13. Worlds of Music",
    "credits": "4",
    "description": "Through surveying selected musical traditions and practices from around the world, this course explores the ways in which music both reflects and affects social, cultural, and ecological relationships. Specific case studies will be covered through lectures, films, and listening sessions.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 14",
    "course_name": "MUS 14. Contemporary Music",
    "credits": "4",
    "description": "This course offers opportunities to prepare oneself for experiences with new music (through preview lectures), hear performances (by visiting or faculty artists), to discuss each event informally with a faculty panel: an effort to foster informed listening to the new in music.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 15",
    "course_name": "MUS 15. Popular Music",
    "credits": "4",
    "description": "A course on popular music from different time periods, covered through lectures, films, and listening sessions. Topics vary from year to year. May be taken for credit twice.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 16",
    "course_name": "MUS 16. The Beatles",
    "credits": "4",
    "description": "This course will explore The Beatles from musical, cultural, historical, technological, and critical angles. It will place them in context, examining their assorted confluences and wide influences. The group will be critically examined as artists, innovators, and public personalities. Listening, watching, and discussion will provide a broader, deeper, and more personal understanding of the group’s enduring appeal.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 17",
    "course_name": "MUS 17. Hip-Hop",
    "credits": "4",
    "description": "This class presents a broad chronological overview of the development of hip-hop as a musical form from the late 1970s through today. It examines the development of the style in relation to direct context and to earlier African American musical and cultural forms and considers the technological and legal issues that have impacted its development. The class is listening intensive and students will be expected to know and recognize essential structures and production techniques.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 18",
    "course_name": "MUS 18. Klezmer Music",
    "credits": "4",
    "description": "A survey of Eastern European Jewish folk music, Yiddish theatre and popular song, and their transition to America. Credit not allowed for MUS 18 and JUDA 18. (Cross-listed with JUDA 18.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 19",
    "course_name": "MUS 19. Blacktronika: Afrofuturism in Electronic Music",
    "credits": "4",
    "description": "Explores the lineage of electronic music’s Black pioneers, who have been integral but overlooked in the discussion around the creation and development of house, techno, drum and bass, and experimental music. These musics were developed with sociopolitical movements at the foundation of the sounds. We will investigate the African diaspora lens through the artists’ usage of science fiction, technology, and futurist ideologies.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 20",
    "course_name": "MUS 20. Exploring the Musical Mind",
    "credits": "4",
    "description": "How do we transform complex sounds into comprehensible and meaningful music? What physiological, neurological, cognitive, and cultural systems are involved? Why do we make music in such diverse ways around the globe? Does music have evolutionary or ecological significance? What is the relationship between music, motion, and emotions? This course explores contemporary understandings of how we hear and how we become musical and invites students to listen to new music in new ways. Students may not receive credit for both MUS 20 and COGS 20. (Cross-listed with COGS 20.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 32",
    "course_name": "MUS 32. Instrumental/Vocal Instruction",
    "credits": "2",
    "description": "Individual instruction on intermediate level in instrumental technique and repertory. For declared music majors and minors. Students must be simultaneously enrolled in a performance ensemble or nonperformance music course. May be taken for credit six times.",
    "prerequisite_segments": [
      [
        "audition and department approval",
        "0"
      ]
    ],
    "prerequisites": "audition and department approval",
    "notes": "none"
  },
  {
    "course_code": "MUS 32G",
    "course_name": "MUS 32G. Group Instrumental Instruction",
    "credits": "2",
    "description": "Group instruction in instrumental or vocal technique and repertory. Intermediate level. Intended for students who make an important contribution to Department of Music ensembles.",
    "prerequisite_segments": [
      [
        "written recommendation of ensemble director and audition for performance faculty on first day of classes required",
        "0"
      ]
    ],
    "prerequisites": "written recommendation of ensemble director and audition for performance faculty on first day of classes required",
    "notes": "Department approval required. May be taken for credit six times. (Offered in selected years.)"
  },
  {
    "course_code": "MUS 32V",
    "course_name": "MUS 32V. Vocal Instruction",
    "credits": "1",
    "description": "Individual instruction on intermediate level in vocal technique and repertory. For declared music majors and minors. Students must be simultaneously enrolled in a performance ensemble or nonperformance music course and in MUS 32VM. May be taken for credit six times.",
    "prerequisite_segments": [
      [
        "audition and department approval",
        "0"
      ]
    ],
    "prerequisites": "audition and department approval",
    "notes": "none"
  },
  {
    "course_code": "MUS 32VM",
    "course_name": "MUS 32VM. Vocal Master Class",
    "credits": "1",
    "description": "All students enrolled in voice lessons (32V, 132V, or 132C) perform for one another and their instructors. Students critique in-class performances, with emphasis on presentation, diction, dramatic effect, vocal quality, and musicality.",
    "prerequisite_segments": [
      [
        "concurrent enrollment in MUS 32V, 132V",
        "0"
      ],
      [
        "132C",
        "0"
      ]
    ],
    "prerequisites": "concurrent enrollment in MUS 32V, 132V, or 132C",
    "notes": "none"
  },
  {
    "course_code": "MUS 33A",
    "course_name": "MUS 33A. Introduction to Composition I",
    "credits": "4",
    "description": "First course in a sequence for music majors and nonmajors pursuing an emphasis in composition. The course examines “sound” itself and various ways of building sounds into musical structures and develops skills in music notation. Students compose solo pieces in shorter forms. Students may not receive credit for both MUS 33 and 33A.",
    "prerequisite_segments": [
      [
        "MUS 2C",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "MUS 2C or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 33B",
    "course_name": "MUS 33B. Introduction to Composition II",
    "credits": "4",
    "description": "Second part of course sequence for students pursuing a composition emphasis. Course continues the building of skills with the organization of basic compositional elements: pitch, rhythm, and timbre. It explores issues of musical texture, expression, and structure in traditional and contemporary repertoire. Writing for two instruments in more extended forms.",
    "prerequisite_segments": [
      [
        "MUS 33A",
        "0"
      ]
    ],
    "prerequisites": "MUS 33A",
    "notes": "none"
  },
  {
    "course_code": "MUS 33C",
    "course_name": "MUS 33C. Introduction to Composition III",
    "credits": "4",
    "description": "Third part of course sequence for students pursuing a composition emphasis. Course continues the development of skills in instrumentation and analysis. It includes a survey of advanced techniques in contemporary composition, with additional focus on notation, part-preparation, and the art of writing for small groups of instruments.",
    "prerequisite_segments": [
      [
        "MUS 33B",
        "0"
      ]
    ],
    "prerequisites": "MUS 33B",
    "notes": "none"
  },
  {
    "course_code": "MUS 43",
    "course_name": "MUS 43. Department Seminar",
    "credits": "1",
    "description": "The department seminar serves both as a general department meeting and as a forum for the presentation of research and performances by visitors, faculty, and students. Required of all undergraduate music and music humanities majors every quarter a student is a declared music major. Four units or four quarters of enrollment are required of all undergraduate ICAM music majors who choose the MUS 43. Department Seminar option for their Visitor Series requirement. P/NP grades only. May be taken for credit twelve times.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 80",
    "course_name": "MUS 80. Special Topics in Music",
    "credits": "1–4",
    "description": "This course presents selected topics in music and consists of lecture and listening sessions. No prior technical knowledge is necessary. The course will be offered during summer session.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 87",
    "course_name": "MUS 87. First-year Student Seminar",
    "credits": "1",
    "description": "The First-year Student Seminar Program is designed to provide new students with the opportunity to explore an intellectual topic with a faculty member in a small seminar setting. First-year student seminars are offered in all campus departments and undergraduate colleges, and topics vary from quarter to quarter. Enrollment is limited to fifteen to twenty students, with preference given to entering first-year students.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 95",
    "course_name": "MUS 95. Ensemble Performance",
    "credits": "2",
    "description": "Performance in an ensemble appropriate to student abilities and interests. Normally each section requires student participation for the whole academic year, with credit for participation each quarter. Sections of MUS 95W have included: African drumming, Korean percussion, Indian sitar and tabla, koto, and Indonesian flute. Not all sections will be offered every year. May be repeated for credit. Grading on participation level, individual testing, comparative papers on repertoire covered, etc.",
    "prerequisite_segments": [
      [
        "audition and consent of instructor for each section",
        "0"
      ]
    ],
    "prerequisites": "audition and consent of instructor for each section",
    "notes": "Materials fee required."
  },
  {
    "course_code": "MUS 101A",
    "course_name": "MUS 101A. Music Theory and Practice I",
    "credits": "4",
    "description": "Study of modal counterpart in the style of the sixteenth century. Two-voice species counterpoint studies. Analysis of music of the period. Musicianship studies: sight-singing, dictation, and keyboard skills.",
    "prerequisite_segments": [
      [
        "MUS 2C and 2CK",
        "0"
      ]
    ],
    "prerequisites": "MUS 2C and 2CK",
    "notes": "none"
  },
  {
    "course_code": "MUS 101B",
    "course_name": "MUS 101B. Music Theory and Practice II",
    "credits": "4",
    "description": "Study of tonal harmony and counterpoint. Analysis of Bach chorales and other music from the Baroque period. Musicianship studies: sight-singing, dictation, and keyboard skills.",
    "prerequisite_segments": [
      [
        "MUS 2C",
        "0"
      ]
    ],
    "prerequisites": "MUS 2C",
    "notes": "none"
  },
  {
    "course_code": "MUS 101C",
    "course_name": "MUS 101C. Music Theory and Practice III",
    "credits": "4",
    "description": "Tonal harmony and counterpoint. Analysis of larger classical forms: Sonata, Variation, Minuet and Trio, Rondo. Musicianship studies: sight-singing, dictation, and keyboard skills.",
    "prerequisite_segments": [
      [
        "MUS 101B",
        "0"
      ]
    ],
    "prerequisites": "MUS 101B",
    "notes": "none"
  },
  {
    "course_code": "MUS 102",
    "course_name": "MUS 102. Topics in Music Theory",
    "credits": "4",
    "description": "Selected topics in music theory. Covers Western classical repertoire from 1850 to the present. Includes chromatic and post-tonal harmony, formal analysis. May be taken for credit twice.",
    "prerequisite_segments": [
      [
        "MUS 101B",
        "0"
      ]
    ],
    "prerequisites": "MUS 101B",
    "notes": "none"
  },
  {
    "course_code": "MUS 103A",
    "course_name": "MUS 103A. Seminar in Composition I",
    "credits": "4",
    "description": "First part in composition course sequence. Individual projects will be reviewed in seminar. Techniques of instrumentation will be developed through examination of scores and creative application. Assignments will include short exercises and analysis, and final project for standard ensemble.",
    "prerequisite_segments": [
      [
        "MUS 33C",
        "0"
      ]
    ],
    "prerequisites": "MUS 33C",
    "notes": "none"
  },
  {
    "course_code": "MUS 103B",
    "course_name": "MUS 103B. Seminar in Composition II",
    "credits": "4",
    "description": "Second part in composition course sequence. Intensive work in free composition by drafting a composition for presentation at the end of MUS 103C. Written analysis of contemporary repertoire is introduced. Instruction about calligraphic conventions including computer engraving programs.",
    "prerequisite_segments": [
      [
        "MUS 103A",
        "0"
      ]
    ],
    "prerequisites": "MUS 103A",
    "notes": "none"
  },
  {
    "course_code": "MUS 103C",
    "course_name": "MUS 103C. Seminar in Composition III",
    "credits": "4",
    "description": "Third part in composition course sequence. A mixture of individual lessons as well as group meetings, with discussion of topics germane to the development of composers, including musical aesthetics and contemporary orchestration techniques. Final performance of students’ work will take place at the end of the quarter.",
    "prerequisite_segments": [
      [
        "MUS 103B",
        "0"
      ]
    ],
    "prerequisites": "MUS 103B",
    "notes": "none"
  },
  {
    "course_code": "MUS 103F",
    "course_name": "MUS 103D-E-F. Honors Seminar in Composition",
    "credits": "4-4-4",
    "description": "Advanced individual projects for senior music majors pursuing honors in composition. Projects will be critically reviewed in seminar with fellow students and faculty composers.",
    "prerequisite_segments": [
      [
        "MUS 103A-B-C and admission into the Department of Music Honors Program in composition",
        "0"
      ]
    ],
    "prerequisites": "MUS 103A-B-C and admission into the Department of Music Honors Program in composition",
    "notes": "Department approval required."
  },
  {
    "course_code": "MUS 105",
    "course_name": "MUS 105. Jazz Composition",
    "credits": "4",
    "description": "This course will explore a range of compositional possibilities from song forms to modal and more extended forms. May be taken for credit twice.",
    "prerequisite_segments": [
      [
        "MUS 101A and 101B",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "MUS 101A and 101B or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 106",
    "course_name": "MUS 106. Topics in Musical Analysis",
    "credits": "4",
    "description": "Topics in musical analysis. Covers full range of musical repertoire 1900 to present, including music that does not depend on notation. May be taken for credit twice.",
    "prerequisite_segments": [
      [
        "MUS 2C",
        "0"
      ]
    ],
    "prerequisites": "MUS 2C",
    "notes": "none"
  },
  {
    "course_code": "MUS 107",
    "course_name": "MUS 107. Critical Studies Seminar",
    "credits": "4",
    "description": "This seminar explores the history of music in relation to critical issues, such as race, gender, sexuality, the environment, and politics. Readings include recent literature in cultural studies, musicology, and sociology. Topics vary. May be taken for credit twice.",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing",
    "notes": "Restricted to music majors or consent of instructor; department approval required."
  },
  {
    "course_code": "MUS 110",
    "course_name": "MUS 110. Introduction to Ethnomusicology Seminar",
    "credits": "4",
    "description": "This seminar introduces the central theories, methods, and approaches used to study the music of contemporary cultures, in their local contexts. In addition to surveying key writings, students will document music from their local environment.",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 111",
    "course_name": "MUS 111. Topics/World Music Traditions",
    "credits": "4",
    "description": "A study of particular regional music in their repertory, cultural context, and interaction with other traditions. Topics vary. May be taken for credit three times.",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 112",
    "course_name": "MUS 112. Topics in European Music Before 1750",
    "credits": "4",
    "description": "This course will address topics in medieval, Renaissance, and Baroque music; topics will vary from year to year. May be taken for credit five times.",
    "prerequisite_segments": [
      [
        "knowledge of music notation",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "knowledge of music notation or consent of instructor",
    "notes": "MUS 4, 8–10, or 120 recommended."
  },
  {
    "course_code": "MUS 113",
    "course_name": "MUS 113. Topics in Classic, Romantic, and Modern Music",
    "credits": "4",
    "description": "This course will focus on topics in Western music from 1750 to the early twentieth century. May be taken for credit five times.",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing or consent of instructor",
    "notes": "Department approval required. MUS 4, 8–10, or 120 recommended."
  },
  {
    "course_code": "MUS 114",
    "course_name": "MUS 114. Music and Ideas Since 1900",
    "credits": "4",
    "description": "A critical examination of music from the early twentieth century to the present, focusing on the generation and embodiment of cultural ideas through and in music.",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 115",
    "course_name": "MUS 115. Women in Music",
    "credits": "4",
    "description": "A survey of the biographical, historical, sociological, and political issues affecting woman musicians, their creativity, their opportunities, and their perception by others. It compares and contrasts the work of women composers, performers, patrons, teachers, and writers on music from the Middle Ages through the present.",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 116",
    "course_name": "MUS 116. Popular Music Studies Seminar",
    "credits": "4",
    "description": "This course examines special topics in popular music from various sociopolitical, aesthetic, and performance perspectives. Readings include recent literature in cultural studies, musicology, and/or performance practice. Topics vary. May be taken for credit three times.",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 120A",
    "course_name": "MUS 120A. History of Music in Western Culture I",
    "credits": "4",
    "description": "This sequence introduces key concepts, histories, and practices in contemporary music studies. Students will explore methodological approaches and learn about current research through focused historical and ethnographic case studies.",
    "prerequisite_segments": [
      [
        "MUS 1C",
        "0"
      ],
      [
        "2C",
        "0"
      ],
      [
        "passing grade on proficiency exam",
        "0"
      ]
    ],
    "prerequisites": "MUS 1C or 2C or passing grade on proficiency exam",
    "notes": "Music majors are recommended to take MUS 101A concurrently. Department approval required for nonmajors."
  },
  {
    "course_code": "MUS 120B",
    "course_name": "MUS 120B. History of Music in Western Culture II",
    "credits": "4",
    "description": "This sequence introduces key concepts, histories, and practices in contemporary music studies. In this course, students will develop original applications for research skills discussed in MUS 120A.",
    "prerequisite_segments": [
      [
        "MUS 120A",
        "0"
      ]
    ],
    "prerequisites": "MUS 120A",
    "notes": "Music majors are recommended to take MUS 101B concurrently. Department approval required for nonmajors."
  },
  {
    "course_code": "MUS 120C",
    "course_name": "MUS 120C. History of Music in Western Culture III",
    "credits": "4",
    "description": "This sequence introduces key concepts, histories, and practices in contemporary music studies. In this course, students carry out projects developed in MUS 120A-B with peer feedback and faculty advising.",
    "prerequisite_segments": [
      [
        "MUS 120B",
        "0"
      ]
    ],
    "prerequisites": "MUS 120B",
    "notes": "Music majors are recommended to take MUS 101C concurrently. Department approval required for nonmajors."
  },
  {
    "course_code": "MUS 126",
    "course_name": "MUS 126. Blues: An Oral Tradition",
    "credits": "4",
    "description": "This course will examine the development of the Blues from its roots in work-songs and the minstrel show to its flowering in the Mississippi Delta to the development of Urban Blues and the close relationship of the Blues with Jazz, Rhythm and Blues, and Rock and Roll. (Cross-listed with ETHN 178.)",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 127",
    "course_name": "MUS 127. Discover Jazz",
    "credits": "4",
    "description": "Offers an introduction to jazz, including important performers and their associated styles and techniques. Explores the often-provocative role jazz has played in American and global society, the diverse perceptions and arguments that have surrounded its production and reception, and how these have been inflected by issues of race, class, gender, and sexuality. Specific topics vary from year to year. (Cross-listed with ETHN 179.)",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 128",
    "course_name": "MUS 128. Principles and Practice of Conducting",
    "credits": "4",
    "description": "The theory and practice of instrumental and/or choral conducting as they have to do with basic baton techniques, score reading, interpretation, orchestration, program building, and functional analysis. Members of the class will be expected to demonstrate their knowledge in the conducting of a small ensemble performing literature from the eighteenth, nineteenth, and twentieth centuries.",
    "prerequisite_segments": [
      [
        "MUS 2A-B-C and 101A-B-C",
        "0"
      ]
    ],
    "prerequisites": "MUS 2A-B-C and 101A-B-C",
    "notes": "Department approval required."
  },
  {
    "course_code": "MUS 130",
    "course_name": "MUS 130. Chamber Music Performance",
    "credits": "2–4/0",
    "description": "Instruction in the preparation of small group performances of representative instrumental and vocal chamber music literature. May be taken for credit six times, after which students must enroll for zero units.",
    "prerequisite_segments": [
      [
        "consent of instructor through audition",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor through audition",
    "notes": "Department approval required."
  },
  {
    "course_code": "MUS 131",
    "course_name": "MUS 131. Advanced Improvisation Performance",
    "credits": "4/0",
    "description": "Master class instruction in advanced improvisation performance for declared majors and minors only or consent of instructor. Audition required at first class meeting. May be taken for credit six times.",
    "prerequisite_segments": [
      [
        "consent of instructor through audition",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor through audition",
    "notes": "Department approval required."
  },
  {
    "course_code": "MUS 132",
    "course_name": "MUS 132. Proseminar in Music Performance",
    "credits": "4",
    "description": "Individual or master class instruction in advanced instrumental performance. For declared music majors and minors. Students must be simultaneously enrolled in a performance ensemble or nonperformance music course. May be taken for credit six times.",
    "prerequisite_segments": [
      [
        "audition and department approval",
        "0"
      ]
    ],
    "prerequisites": "audition and department approval",
    "notes": "none"
  },
  {
    "course_code": "MUS 132C",
    "course_name": "MUS 132C. Vocal Coaching",
    "credits": "4",
    "description": "Individual instruction in advanced vocal coaching. Emphasis placed on diction and musical issues. For declared music majors and minors. Students must be simultaneously enrolled in the Vocal Master Class, MUS 32VM. May be taken for credit six times.",
    "prerequisite_segments": [
      [
        "at least one quarter of MUS 132V and consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "at least one quarter of MUS 132V and consent of instructor",
    "notes": "Department approval required."
  },
  {
    "course_code": "MUS 132R",
    "course_name": "MUS 132R. Recital Preparation",
    "credits": "4",
    "description": "Advanced instrumental/vocal preparation for senior music majors pursuing honors in performance. Repertoire for a solo recital will be developed under the direction of the appropriate instrumental/vocal faculty member. Special audition required during Welcome Week preceding fall quarter.",
    "prerequisite_segments": [
      [
        "by audition only",
        "0"
      ]
    ],
    "prerequisites": "by audition only",
    "notes": "MUS 132. Department approval required."
  },
  {
    "course_code": "MUS 132V",
    "course_name": "MUS 132V. Proseminar in Vocal Instruction",
    "credits": "4",
    "description": "Individual instruction in advanced vocal performance. For declared music majors and minors. Students must be simultaneously enrolled in a performance ensemble or nonperformance music course and in the Vocal Master Class, MUS 32VM. May be taken for credit six times.",
    "prerequisite_segments": [
      [
        "audition and department approval",
        "0"
      ]
    ],
    "prerequisites": "audition and department approval",
    "notes": "none"
  },
  {
    "course_code": "MUS 133",
    "course_name": "MUS 133. Projects in New Music Performance",
    "credits": "4",
    "description": "Ensemble performances of music from the recent past. Required a minimum of one time for all music majors. May be taken for credit twice.",
    "prerequisite_segments": [
      [
        "consent of instructor through audition",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor through audition",
    "notes": "none"
  },
  {
    "course_code": "MUS 134",
    "course_name": "MUS 134. Symphonic Orchestra",
    "credits": "4",
    "description": "Repertoire is drawn from the classic symphonic literature of the eighteenth, nineteenth, and twentieth centuries with a strong emphasis on recently composed and new music. Distinguished soloists, as well as The La Jolla Symphony Chorus, frequently appear with the orchestra. The La Jolla Symphony Orchestra performs two full-length programs each quarter, each program being performed twice. May be taken for credit six times.",
    "prerequisite_segments": [
      [
        "audition and department approval required",
        "0"
      ]
    ],
    "prerequisites": "audition and department approval required",
    "notes": "none"
  },
  {
    "course_code": "MUS 137A",
    "course_name": "MUS 137A. Jazz Theory and Improvisation",
    "credits": "4",
    "description": "Study of jazz theory and improvisation, focused on fundamental rhythmic, harmonic, melodic, and formal aspects of modern jazz style. Application of theoretical knowledge to instruments and concepts will be reinforced through listening, transcription work, and composition and improvisation exercises. First course of a yearlong sequence.",
    "prerequisite_segments": [
      [
        "MUS 2A-B-C, proficiency exam",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "MUS 2A-B-C, proficiency exam, or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 137B",
    "course_name": "MUS 137B. Jazz Theory and Improvisation",
    "credits": "4",
    "description": "Study of jazz theory and improvisation, focused on fundamental rhythmic, harmonic, melodic, and formal aspects of modern jazz style. Application of theoretical knowledge to instruments and concepts will be reinforced through listening, transcription work, and composition and improvisation exercises. Second course of a yearlong sequence; continuation of MUS 137A.",
    "prerequisite_segments": [
      [
        "MUS 137A",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "MUS 137A or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 137C",
    "course_name": "MUS 137C. Jazz Theory and Improvisation",
    "credits": "4",
    "description": "Study of jazz theory and improvisation, focused on fundamental rhythmic, harmonic, melodic, and formal aspects of modern jazz style. Application of theoretical knowledge to instruments and concepts will be reinforced through listening, transcription work, and composition and improvisation exercises. Third course of a yearlong sequence; continuation of MUS 137B.",
    "prerequisite_segments": [
      [
        "MUS 137B",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "MUS 137B or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 137D",
    "course_name": "MUS 137D. Seminar in Jazz Studies I",
    "credits": "4",
    "description": "Advanced individual projects for senior music majors pursuing honors in jazz and music of the African diaspora. Projects will be critically reviewed in seminar with fellow students and jazz faculty. First course of a yearlong sequence.",
    "prerequisite_segments": [
      [
        "MUS 137A-B-C and admission into the Music Department Honors Program in jazz",
        "0"
      ]
    ],
    "prerequisites": "MUS 137A-B-C and admission into the Music Department Honors Program in jazz",
    "notes": "Department approval required."
  },
  {
    "course_code": "MUS 137E",
    "course_name": "MUS 137E. Seminar in Jazz Studies II",
    "credits": "4",
    "description": "Advanced individual projects for senior music majors pursuing honors in jazz and music of the African diaspora. Projects will be critically reviewed in seminar with fellow students and jazz faculty. Second course of a yearlong sequence; continuation of 137D.",
    "prerequisite_segments": [
      [
        "MUS 137D and department approval",
        "0"
      ]
    ],
    "prerequisites": "MUS 137D and department approval",
    "notes": "none"
  },
  {
    "course_code": "MUS 137F",
    "course_name": "MUS 137F. Seminar in Jazz Studies III",
    "credits": "4",
    "description": "Advanced individual projects for senior music majors pursuing honors in jazz and music of the African diaspora. Projects will be critically reviewed in seminar with fellow students and jazz faculty. Third course of a yearlong sequence; continuation of 137E.",
    "prerequisite_segments": [
      [
        "MUS 137E and department approval",
        "0"
      ]
    ],
    "prerequisites": "MUS 137E and department approval",
    "notes": "none"
  },
  {
    "course_code": "MUS 143",
    "course_name": "MUS 143. Department Seminar",
    "credits": "1",
    "description": "The department seminar serves both as a general department meeting and as a forum for the presentation of research and performances by visitors, faculty, and students. Required of all undergraduate music majors every quarter.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 150",
    "course_name": "MUS 150. Jazz and the Music of the African Diaspora: Special Topics Seminar",
    "credits": "4",
    "description": "An in-depth writing and listening intensive investigation into a jazz or diaspora-related music history topic. Topics vary from year to year. May be taken for credit twice.",
    "prerequisite_segments": [
      [
        "MUS 126/ETHN 178",
        "0"
      ],
      [
        "MUS 127/ETHN 179",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "MUS 126/ETHN 178, or MUS 127/ETHN 179, or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 151",
    "course_name": "MUS 151. Race, Culture, and Social Change",
    "credits": "4",
    "description": "Aggrieved groups generate distinctive cultural expressions by turning negative ascription into positive affirmation and by transforming segregation into congregation. This course examines the role of cultural expressions in struggles for social change by these communities inside and outside the United States. (Cross-listed with ETHN 108.)",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 152",
    "course_name": "MUS 152. Hip Hop: The Politics of Culture",
    "credits": "4",
    "description": "Examination of hip hop’s music, technology, lyrics, and its influence in graffiti, film, music video, fiction, advertising, gender, corporate investment, government, and censorship with a critical focus on race, gender, popular culture, and the politics of creative expression. (Cross-listed with ETHN 128.)",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 153",
    "course_name": "MUS 153. African Americans and the Mass Media",
    "credits": "4",
    "description": "Examination of media representations of African Americans from slavery to the present focusing on emergence and transmission of enduring stereotypes, their relationship to changing social, political, and economic frameworks, and African Americans’ responses to and interpretations of these mediated images. (Cross-listed with ETHN 164.)",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 160A",
    "course_name": "MUS 160A. Senior Project in Computing Arts I",
    "credits": "4",
    "description": "Students pursue projects of their own design over two quarters with support from faculty in a seminar environment. Project proposals are developed, informed by project development guidelines from real world examples. Collaborations are possible. Two production-course limitation. Renumber from ICAM 160A. Students may receive credit for only one of the following: MUS 160A, VIS 160A, ICAM 160A.",
    "prerequisite_segments": [
      [
        "VIS 141B",
        "0"
      ],
      [
        "VIS 145B",
        "0"
      ],
      [
        "VIS 147B",
        "0"
      ],
      [
        "MUS 172",
        "0"
      ]
    ],
    "prerequisites": "VIS 141B or VIS 145B or VIS 147B or MUS 172",
    "notes": "Open to music and ICAM majors only. Department approval required."
  },
  {
    "course_code": "MUS 160B",
    "course_name": "MUS 160B. Senior Project in Computing Arts II",
    "credits": "4",
    "description": "Continuation of MUS 160A or VIS 160A. Completion and presentation of independent projects along with documentation. Two production-course limitation. Renumbered from ICAM 160B. Students may receive credit for only one of the following: MUS 160B, VIS 160B, ICAM 160B.",
    "prerequisite_segments": [
      [
        "MUS 160A",
        "0"
      ],
      [
        "VIS 160A",
        "0"
      ]
    ],
    "prerequisites": "MUS 160A or VIS 160A",
    "notes": "Open to music and ICAM majors only. Department approval required."
  },
  {
    "course_code": "MUS 170",
    "course_name": "MUS 170. Art of Sound",
    "credits": "4",
    "description": "Survey of applications of audio technology to music and related art forms. Physical and perceptual properties of sound and its artistic uses.",
    "prerequisite_segments": [
      [
        "MUS 1A, 2A, 5, 6",
        "0"
      ],
      [
        "7",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "MUS 1A, 2A, 5, 6, or 7, or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 171",
    "course_name": "MUS 171. Computer Music I",
    "credits": "4",
    "description": "This course provides a practical introduction to computer techniques for audio synthesis, processing, and analysis.",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing",
    "notes": "MUS 170 recommended."
  },
  {
    "course_code": "MUS 172",
    "course_name": "MUS 172. Computer Music II",
    "credits": "4",
    "description": "Computer synthesis techniques including wavetable and additive synthesis, waveshaping, and sampling. Transformation of musical sounds using filters, modulation, and delay effects. Fourier analysis of sounds.",
    "prerequisite_segments": [
      [
        "MUS 171",
        "0"
      ]
    ],
    "prerequisites": "MUS 171",
    "notes": "Depending on the instructor, this course may include the following tools: Max/MSP, pd."
  },
  {
    "course_code": "MUS 173A",
    "course_name": "MUS 173A. Electronic Music Production and Composition",
    "credits": "4",
    "description": "Creative music production using digital audio workstations (DAWs), emphasizing hands-on composition projects including tempo warping, beat and tonality matching, virtual drum kits, chord progressions, sound processing and effects, arrangement, and remixing in the context of both popular and experimental genres. Existing works are analyzed and dissected for aesthetic value and production technique.",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing",
    "notes": "restricted to music, ICAM-music, and ICAM-visual arts majors and minors, or consent of instructor."
  },
  {
    "course_code": "MUS 173B",
    "course_name": "MUS 173B. Advanced Electronic Music Production",
    "credits": "4",
    "description": "Advanced creative music production using digital audio workstations (DAWs), emphasizing creative mixing, sound processing, and experimental techniques in sound design and sampling. Existing works are analyzed and dissected for aesthetic value and production technique.",
    "prerequisite_segments": [
      [
        "MUS 173A",
        "0"
      ]
    ],
    "prerequisites": "MUS 173A",
    "notes": "restricted to music and ICAM-music majors. Consent of instructor if students do not meet prerequisites."
  },
  {
    "course_code": "MUS 174A",
    "course_name": "MUS 174A. Audio/MlDI Studio Techniques I",
    "credits": "4",
    "description": "First class in a yearlong sequence. Surveys hardware and software resources in an advanced analog/digital and media studio. Required course for use of the studio. Topics include: electronic and computer music, digital and analog audio signal mixing and manipulation, studio devices, interfacing, compositional applications, MIDI synchronization, performance and student projects. 174A focuses on signals, mics, device-based recording, mixing, monitoring.",
    "prerequisite_segments": [
      [
        "MUS 170",
        "0"
      ]
    ],
    "prerequisites": "MUS 170",
    "notes": "restricted to music, ICAM-music, and ICAM-visual arts majors and minors, or consent of instructor."
  },
  {
    "course_code": "MUS 174B",
    "course_name": "MUS 174B. Audio/MlDI Studio Techniques II",
    "credits": "4",
    "description": "Second class in a yearlong sequence. Surveys hardware and software resources in an advanced analog/digital and media studio. Required course for use of the studio. Topics include: electronic and computer music, digital and analog audio signal mixing and manipulation, studio devices, interfacing, compositional applications, MIDI synchronization, performance and studio techniques, and student projects. 174B focuses on digital audio workstations, computer-based mixing and editing, sound file transformation.",
    "prerequisite_segments": [
      [
        "MUS 170, MUS 174A",
        "0"
      ]
    ],
    "prerequisites": "MUS 170, MUS 174A",
    "notes": "restricted to music, ICAM-music, and ICAM-visual arts majors and minors, or consent of instructor."
  },
  {
    "course_code": "MUS 174C",
    "course_name": "MUS 174C. Audio/MlDI Studio Techniques III",
    "credits": "4",
    "description": "Third class in a yearlong sequence. Surveys hardware and software resources in an advanced analog/digital and media studio. Required course for use of the studio. Topics include: electronic and computer music, digital and analog audio signal mixing and manipulation, studio devices, interfacing, compositional applications, MIDI synchronization, performance and studio techniques, and student projects. 174C focuses on MIDI, synchronization, and sound-for-picture.",
    "prerequisite_segments": [
      [
        "MUS 170, MUS 174B",
        "0"
      ]
    ],
    "prerequisites": "MUS 170, MUS 174B",
    "notes": "restricted to music, ICAM-music, and ICAM-visual arts majors and minors, or consent of instructor."
  },
  {
    "course_code": "MUS 175",
    "course_name": "MUS 175. Musical Psychoacoustics",
    "credits": "4",
    "description": "Survey of psychoacoustical phenomena, theories of hearing, and their relation to musical perception and cognition. Techniques of psychoacoustical experimentation.",
    "prerequisite_segments": [
      [
        "MUS 170 recommended",
        "0"
      ]
    ],
    "prerequisites": "MUS 170 recommended",
    "notes": "restricted to music, ICAM-music, and ICAM-visual arts majors and minors, or consent of instructor. Depending on the instructor, this course may include the following tools: MATLAB."
  },
  {
    "course_code": "MUS 176",
    "course_name": "MUS 176. Music Technology Seminar",
    "credits": "4",
    "description": "Selected topics in music technology and its application to composition and/or performance. Offerings vary according to faculty availability and interest. May be taken for credit twice. Department approval required.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 177",
    "course_name": "MUS 177. Music Programming",
    "credits": "4",
    "description": "Fundamentals of programming music software in C and C++. DSP implementation of oscillators, filters, delay, reverb and spectral processing; programming techniques specific to audio and MIDI and simple GUI design for parameter control and signal display. Implementation using a plug-in or external programming interface such as for VST, Audio Unit, PD, or Max/MSP. May be taken for credit twice.",
    "prerequisite_segments": [
      [
        "MUS 172 (formerly MUS 161)",
        "0"
      ]
    ],
    "prerequisites": "MUS 172 (formerly MUS 161)",
    "notes": "restricted to music, ICAM-music, and ICAM-visual arts majors and minors, or consent of instructor."
  },
  {
    "course_code": "MUS 192",
    "course_name": "MUS 192. Senior Seminar in Music",
    "credits": "1",
    "description": "The Senior Seminar Program is designed to allow senior undergraduates to meet with faculty members in a small group setting to explore an intellectual topic in music (at the upper-division level). Topics will vary from quarter to quarter. Senior Seminars may be taken for credit four times, with a change in topic, and permission of the department. Enrollment is limited to twenty students, with preference given to seniors.",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing",
    "notes": "department approval and/or consent of instructor required."
  },
  {
    "course_code": "MUS 195",
    "course_name": "MUS 195. Instructional Assistance",
    "credits": "2",
    "description": "Assisting in the instruction of an undergraduate music class under the direct and constant supervision of a faculty member. May be taken for credit three times.",
    "prerequisite_segments": [
      [
        "consent of instructor and department approval",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor and department approval",
    "notes": "none"
  },
  {
    "course_code": "MUS 198",
    "course_name": "MUS 198. Directed Group Study",
    "credits": "1–4",
    "description": "Concentrated inquiry into various problems not covered in the usual undergraduate courses.",
    "prerequisite_segments": [
      [
        "consent of instructor and department chair approval",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor and department chair approval",
    "notes": "Pass/Not Pass grade only."
  },
  {
    "course_code": "MUS 199",
    "course_name": "MUS 199. Independent Study",
    "credits": "1–4",
    "description": "Independent reading, research, or creative work under the direction of a faculty member, provided no course covering the material to be studied already exists, and the study area derives from previous course work.",
    "prerequisite_segments": [
      [
        "consent of instructor and department chair approval",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor and department chair approval",
    "notes": "Department approval required. Pass/Not Pass grade only. May be taken for credit twice."
  },
  {
    "course_code": "MUS 201F",
    "course_name": "MUS 201A-B-C-D-E-F. Projects in New Music Performance",
    "credits": "1–4, 1–4, 1–4, 1–4, 1–4, 1–4",
    "description": "Performance of contemporary music. Different sections represent active performance ensembles. A core requirement for music graduate students as outlined in the curriculum.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 202",
    "course_name": "MUS 202. Advanced Projects in Performance",
    "credits": "1–4",
    "description": "Advanced performance of new music with members of the performance faculty (SONOR). Students taking this course do not need to take MUS 201 that quarter. Enrollment by consent of instructor/director of SONOR.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "others by written consent of instructor and department approval."
  },
  {
    "course_code": "MUS 203A",
    "course_name": "MUS 203A. Advanced Projects in Composition",
    "credits": "6",
    "description": "Meetings and laboratory sessions devoted to the study of composition in small groups. Consent of instructor required.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 203B",
    "course_name": "MUS 203B. Advanced Projects in Composition",
    "credits": "6",
    "description": "Meetings and laboratory sessions devoted to the study of composition in small groups. Consent of instructor required.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 203C",
    "course_name": "MUS 203C. Advanced Projects in Composition",
    "credits": "6",
    "description": "Meetings and laboratory sessions devoted to the study of composition in small groups. Consent of instructor required.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 203D",
    "course_name": "MUS 203D. Advanced Projects in Composition",
    "credits": "1–4",
    "description": "Meetings on group basis with faculty composer in sessions devoted to the study of composition.",
    "prerequisite_segments": [
      [
        "203A-B-C and consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "203A-B-C and consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 204",
    "course_name": "MUS 204. Focus on Composition",
    "credits": "2",
    "description": "The purpose of this seminar is to bring in the entire population of the graduate composition program (all students and faculty) for in-depth discussion of critical issues in music theory and composition. Each meeting will feature a formal presentation by either a student, faculty member, or visitor, followed by lively and challenging debate on relevant issues.",
    "prerequisite_segments": [
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 205",
    "course_name": "MUS 205. Focus on Integrative Studies",
    "credits": "2",
    "description": "Meets on a biweekly basis to facilitate presentations by advanced students and invited guests and to encourage in-depth discussion between students, faculty, and visitors about theoretical and artistic issues of interest. Participation is required of all enrolled IS students until advanced to candidacy. Others are welcome to participate.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "none"
  },
  {
    "course_code": "MUS 206",
    "course_name": "MUS 206. Experimental Studies Seminar",
    "credits": "4",
    "description": "Seminars growing out of current faculty interests. The approach tends to be speculative and includes individual projects or papers as well as assigned readings. In the past, such areas as new instrumental and vocal resources, mixed media, and compositional linguistics have been offered.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "others by written consent of instructor and department approval."
  },
  {
    "course_code": "MUS 207",
    "course_name": "MUS 207. Theoretical Studies Seminar",
    "credits": "4",
    "description": "Seminars on subject areas relating to the established dimensions of music and in which theoreticians have produced a substantial body of work. These include studies in analysis, timbre, rhythm, notation, and psychoacoustics. Offerings vary depending on faculty availability and interest. Analytical paper required.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "others by written consent of instructor and department approval."
  },
  {
    "course_code": "MUS 209",
    "course_name": "MUS 209. Advanced Music Theory and Practice",
    "credits": "4",
    "description": "Advanced integrated studies in music theory; composition and styles study through analysis and performance. This course is intended primarily for doctoral students and may be taken by MA students only with special approval of MA adviser and course instructor. A major research or analytical publishable paper required.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "others by written consent of instructor and department approval."
  },
  {
    "course_code": "MUS 210",
    "course_name": "MUS 210. Musical Analysis",
    "credits": "4",
    "description": "The analysis of complex music. The course will assume that the student has a background in traditional music analysis. The goal of the course is to investigate and develop analytical procedures that yield significant information about specific works of music, old and new. Reading, projects, and analytical papers.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "others by written consent of instructor and department approval."
  },
  {
    "course_code": "MUS 211",
    "course_name": "MUS 211. Introduction to Ethnomusicology",
    "credits": "2",
    "description": "Introduces the field of ethnomusicology by highlighting important thinkers, concepts, and issues and by orienting students toward work of an anthropological, ethnographic, or comparative nature. Students who have taken and passed MUS 208A may not get credit for MUS 211.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "none"
  },
  {
    "course_code": "MUS 212",
    "course_name": "MUS 212. Introduction to System Inquiry",
    "credits": "2",
    "description": "Introduces the network of concepts and approaches that comprise systems inquiry and explores the theoretical, philosophical, and methodological implications of systems thinking for musical research and practice. Students who have taken MUS 208B for credit may not take MUS 212 for credit.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "none"
  },
  {
    "course_code": "MUS 213",
    "course_name": "MUS 213. Introduction to Critical Studies",
    "credits": "2",
    "description": "Introduces important themes and thinkers from the fields of critical theory and cultural studies and explores how musical behaviors and phenomena relate to matters of ideology, nationality, ethnicity, social class, race, and gender. Students who have taken MUS 208C for credit may not take MUS 213 for credit.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "none"
  },
  {
    "course_code": "MUS 214",
    "course_name": "MUS 214. Introduction to Creative Practices",
    "credits": "2",
    "description": "Surveys the terrain of contemporary creative music and investigates the social, cultural, historical, and technological dimensions of its manifestations and practice. Students who have taken MUS 208D for credit may not take MUS 214 for credit.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "none"
  },
  {
    "course_code": "MUS 228",
    "course_name": "MUS 228. Conducting",
    "credits": "4",
    "description": "This course will give practical experience in conducting a variety of works from various eras of instrumental and/or vocal music. Students will study problems of instrumental or vocal techniques, formal and expressive analysis of the music, and manners of rehearsal. Required of all graduate students.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "others by written consent of instructor and department approval. (Offered in selected years.)"
  },
  {
    "course_code": "MUS 229",
    "course_name": "MUS 229. Seminar in Orchestration",
    "credits": "4",
    "description": "A seminar to give practical experience in orchestration. Students will study works from various eras of instrumental music and will demonstrate their knowledge by orchestrating works in the styles of these various eras, learning the capabilities, timbre, and articulation of all the instruments in the orchestra.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "(Offered in selected years.)"
  },
  {
    "course_code": "MUS 230",
    "course_name": "MUS 230. Chamber Music Performance",
    "credits": "4",
    "description": "Performance of representative chamber music literature, instrumental and/or vocal, through coached rehearsal and seminar studies. Course may be repeated for credit since the literature studied varies from quarter to quarter.",
    "prerequisite_segments": [
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 232",
    "course_name": "MUS 232. Proseminar in Music Performance",
    "credits": "1–4",
    "description": "Individual or master class instruction in advanced instrumental/vocal performance.",
    "prerequisite_segments": [
      [
        "consent of instructor through audition",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor through audition",
    "notes": "none"
  },
  {
    "course_code": "MUS 234",
    "course_name": "MUS 234. Symphonic Orchestra",
    "credits": "4",
    "description": "Repertoire is drawn from the classic symphonic literature of the eighteenth, nineteenth, and twentieth centuries with a strong emphasis on recently composed and new music. Distinguished soloists, as well as The La Jolla Symphony Chorus, frequently appear with the orchestra. The La Jolla Symphony Orchestra performs two full-length programs each quarter, each program being performed twice. May be taken for credit six times.",
    "prerequisite_segments": [
      [
        "audition required",
        "0"
      ]
    ],
    "prerequisites": "audition required",
    "notes": "none"
  },
  {
    "course_code": "MUS 245",
    "course_name": "MUS 245. Focus on Performance",
    "credits": "2",
    "description": "The purpose of this seminar is to bring together performance students, faculty, and guests for discussion, presentation of student and faculty projects, performances by guest artists, and master classes with different members of the performance faculty.",
    "prerequisite_segments": [
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor",
    "notes": "(S/U grade option only.)"
  },
  {
    "course_code": "MUS 251",
    "course_name": "MUS 251. Integrative Studies Seminar in Ethnomusicology",
    "credits": "4",
    "description": "Provides an in-depth look at the shifting definitions, methods, and scope of ethnomusicology and explores contemporary writings and issues that are shaping the field today.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "none"
  },
  {
    "course_code": "MUS 252",
    "course_name": "MUS 252. Integrative Studies Seminar in Systems Inquiry",
    "credits": "4",
    "description": "Traces the development of systems thinking and encourages work of a transdisciplinary nature, integrating models, strategies, methods, and tools from natural, human, social, and technological realms.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "none"
  },
  {
    "course_code": "MUS 253",
    "course_name": "MUS 253. Integrative Studies Seminar in Critical Studies",
    "credits": "4",
    "description": "Develops critical thinking and self-reflexive inquiry through in-depth study of a diverse range of critical and scholarly traditions as they relate to music. Students are encouraged to investigate their own sense of identity and voice, as embodied in their creative and/or scholarly work.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "none"
  },
  {
    "course_code": "MUS 254",
    "course_name": "MUS 254. Integrative Studies Seminar in Creative Practice",
    "credits": "4",
    "description": "Students will explore a variety of approaches to collaborative work and will be challenged to develop a personal aesthetic in experimental art and new media and design original work for presentation at faculty juries.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "none"
  },
  {
    "course_code": "MUS 267",
    "course_name": "MUS 267. Advanced Music Technology Seminar",
    "credits": "4",
    "description": "Advanced topics in music technology and its application to composition and/or performance. Offerings vary according to faculty availability and interest. May be repeated for credit.",
    "prerequisite_segments": [
      [
        "MUS 173",
        "0"
      ],
      [
        "equivalent and consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "MUS 173 or equivalent and consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 270A",
    "course_name": "MUS 270A. Digital Audio Processing",
    "credits": "4",
    "description": "Digital techniques for analysis, synthesis, and processing of musical sounds. Sampling theory. Software synthesis techniques. Digital filter design. The short-time Fourier transform. Numerical accuracy considerations.",
    "prerequisite_segments": [
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 270B",
    "course_name": "MUS 270B. Musical Cognitive Science",
    "credits": "4",
    "description": "Theoretical bases for analyzing musical sound. Approaches to perception and cognition, including psychoacoustics and information processing, both ecological and computational. Models of audition including Helmholtz’s consonance/dissonance theory and Bregman’s streaming model. Musical cognition theories of Lerdahl and Narmour. Neural network models of music perception and cognition. Models of rhythm. The problem of timbre and timbre perception.",
    "prerequisite_segments": [
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 270C",
    "course_name": "MUS 270C. Compositional Algorithms",
    "credits": "4",
    "description": "Transformations in musical composition; series and intervallic structures; serial approaches to rhythm and dynamic. The stochastic music of Xenakis and Cage. Hiller’s automatic composition. Improvisational models. Computer analysis of musical style. Neurally inspired and other quasiparallel algorithms.",
    "prerequisite_segments": [
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "MUS 270D",
    "course_name": "MUS 270D. Advanced Projects in Computer Music",
    "credits": "4",
    "description": "Meetings on group basis with computer music faculty in support of individual student research projects.",
    "prerequisite_segments": [
      [
        "consent of instructor and completion of MUS 270A-B-C",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor and completion of MUS 270A-B-C",
    "notes": "none"
  },
  {
    "course_code": "MUS 271A",
    "course_name": "MUS 271A. Survey of Electronic Music Techniques I",
    "credits": "4",
    "description": "A hands-on encounter with several important works from the classic electronic repertory, showing a representative subset of the electronic techniques available to musicians. Students who have taken MUS 271 for credit may not take MUS 271A for credit.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "none"
  },
  {
    "course_code": "MUS 271B",
    "course_name": "MUS 271B. Survey of Electronic Music Techniques II",
    "credits": "4",
    "description": "A continuation of 271A, with emphasis on live interactive techniques (e.g., audio processing; analysis/resynthesis; score following).",
    "prerequisite_segments": [
      [
        "MUS 271A and graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "MUS 271A and graduate standing in music",
    "notes": "none"
  },
  {
    "course_code": "MUS 271C",
    "course_name": "MUS 271C. Survey of Electronic Music Techniques III",
    "credits": "4",
    "description": "A continuation of 271A and B, with emphasis on compositional techniques (e.g., computer-aided composition, production, spatialization).",
    "prerequisite_segments": [
      [
        "MUS 271B and graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "MUS 271B and graduate standing in music",
    "notes": "none"
  },
  {
    "course_code": "MUS 272",
    "course_name": "MUS 272. Seminar in Live Computer Music",
    "credits": "4",
    "description": "Group projects to create new pieces of live electronic music involving research in electronic music and/or instrumental techniques. May be repeated for credit.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 291",
    "course_name": "MUS 291. Music Research Methods",
    "credits": "2",
    "description": "Consideration and development of research methods appropriate to graduate-level scholarship and practice-based research.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "(Letter grade option only.)"
  },
  {
    "course_code": "MUS 296",
    "course_name": "MUS 296. Directed Group Research in Performance",
    "credits": "4",
    "description": "This group research seminar involves the investigation and exploration of new and experimental performance concerns. Areas could include: improvisation, graphic notation, performance electronics, and working with combined media (such as dance, poetry, and theatre).",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "(S/U grade option only.)"
  },
  {
    "course_code": "MUS 298",
    "course_name": "MUS 298. Directed Research",
    "credits": "1–4",
    "description": "Individual research. (S/U grades permitted.) May be repeated for credit. Enrollment by consent of instructor only.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "MUS 299",
    "course_name": "MUS 299. Advanced Research Projects and Independent Study",
    "credits": "1–12",
    "description": "Individual research projects relevant to the student’s selected area of graduate interest conducted in continuing relationship with a faculty adviser in preparation of the master’s thesis or doctoral dissertation.",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "others by written consent of instructor and department approval. (S/U grades permitted.)"
  },
  {
    "course_code": "MUS 500",
    "course_name": "MUS 500. Apprentice Teaching",
    "credits": "1–4",
    "description": "Participation in the undergraduate teaching program is required of all graduate students at the equivalent of twenty-five percent time for three quarters (six units is required for all graduate students).",
    "prerequisite_segments": [
      [
        "graduate standing in music",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in music",
    "notes": "others by written consent of instructor and department approval. (S/U grade option only.)"
  },
  {
    "course_code": "MUS 501",
    "course_name": "MUS 501. Apprentice Teaching—Nondepartmental",
    "credits": "4",
    "description": "Consideration and development of pedagogical methods appropriate to undergraduate teaching.",
    "prerequisite_segments": [
      [
        "graduate standing and consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and consent of instructor",
    "notes": "(S/U grade option only.)"
  }
];

module.exports = MUS;