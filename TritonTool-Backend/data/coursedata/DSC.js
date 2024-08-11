const DSC = [
  {
    "course_code": "DSC 10",
    "course_name": "DSC 10. Principles of Data Science",
    "credits": "4",
    "description": "This first course in data science introduces students to data exploration, statistical inference, and prediction. It introduces the Python programming language as a tool for tabular data manipulation, visualization, and simulation. Through homework assignments and projects, students are given an opportunity to develop their analytical skills while working with real-world datasets from a variety of domains.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "DSC 20",
    "course_name": "DSC 20. Programming and Basic Data Structures for Data Science",
    "credits": "4",
    "description": "Provides an understanding of the structures that underlie the programs, algorithms, and languages used in data science by expanding the repertoire of computational concepts introduced in DSC 10 and exposing students to techniques of abstraction. Course will be taught in Python and will cover topics including recursion, higher-order functions, function composition, object-oriented programming, interpreters, classes, and simple data structures such as arrays, lists, and linked lists.",
    "prerequisite_segments": [
      [
        "DSC 10",
        "0"
      ]
    ],
    "prerequisites": "DSC 10",
    "notes": "Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 30",
    "course_name": "DSC 30. Data Structures and Algorithms for Data Science",
    "credits": "4",
    "description": "Builds on topics covered in DSC 20 and provides practical experience in composing larger computational systems through several significant programming projects using Java. Students will study advanced programming techniques including encapsulation, abstract data types, interfaces, algorithms and complexity, and data structures such as stacks, queues, priority queues, heaps, linked lists, binary trees, binary search trees, and hash tables.",
    "prerequisite_segments": [
      [
        "DSC 20",
        "0"
      ]
    ],
    "prerequisites": "DSC 20",
    "notes": "Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 40A",
    "course_name": "DSC 40A. Theoretical Foundations of Data Science I",
    "credits": "4",
    "description": "The sequence DSC 40A-B introduces the theoretical foundations of data science. DSC 40A, the first course in the sequence, exposes students to the mathematical theory underlying fundamental topics in machine learning. Topics include empirical risk minimization, optimization, regression, classification, and discrete probability. Students practice creative problem-solving while learning how to rigorously justify and communicate mathematical ideas.",
    "prerequisite_segments": [
      [
        "DSC 10, MATH 20C",
        "0"
      ],
      [
        "MATH 31BH, and MATH 18",
        "0"
      ],
      [
        "MATH 20F",
        "0"
      ],
      [
        "MATH 31AH",
        "0"
      ]
    ],
    "prerequisites": "DSC 10, MATH 20C or MATH 31BH, and MATH 18 or MATH 20F or MATH 31AH",
    "notes": "Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 40B",
    "course_name": "DSC 40B. Theoretical Foundations of Data Science II",
    "credits": "4",
    "description": "The marriage of data, computation, and inferential thinking, or “data science,” is redefining how people and organizations solve challenging problems and understand the world. This course bridges lower- and upper-division data science courses as well as methods courses in other fields. Students master the data science life-cycle and learn many of the fundamental principles and techniques of data science spanning algorithms, statistics, machine learning, visualization, and data systems.",
    "prerequisite_segments": [
      [
        "DSC 30 and DSC 40A",
        "0"
      ]
    ],
    "prerequisites": "DSC 30 and DSC 40A",
    "notes": "Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 80",
    "course_name": "DSC 80. The Practice and Application of Data Science",
    "credits": "4",
    "description": "The marriage of data, computation, and inferential thinking, or “data science,” is redefining how people and organizations solve challenging problems and understand the world. This course bridges lower- and upper-division data science courses as well as methods courses in other fields. Students master the data science life-cycle and learn many of the fundamental principles and techniques of data science spanning algorithms, statistics, machine learning, visualization, and data systems.",
    "prerequisite_segments": [
      [
        "DSC 30 and DSC 40A",
        "0"
      ]
    ],
    "prerequisites": "DSC 30 and DSC 40A",
    "notes": "Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 90",
    "course_name": "DSC 90. Seminar in Data Science",
    "credits": "2",
    "description": "Students will learn about a variety of topics in data science through interactive presentations from faculty and industry professionals. May be taken for credit up to four times.",
    "prerequisite_segments": [
      [
        "DSC 10",
        "0"
      ]
    ],
    "prerequisites": "DSC 10",
    "notes": "Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 95",
    "course_name": "DSC 95. Tutor Apprenticeship in Data Science",
    "credits": "2",
    "description": "Students will receive training in skills and techniques necessary to be effective tutors for data science courses. Students will also gain practical experience in tutoring students on data science topics.",
    "prerequisite_segments": [
      [
        "DSC 10",
        "0"
      ]
    ],
    "prerequisites": "DSC 10",
    "notes": "Students must have applied for and been accepted as a tutor for a DSC course for the first time; enrollment in DSC 95 is required for these students."
  },
  {
    "course_code": "DSC 96",
    "course_name": "DSC 96. Workshop in Data Science",
    "credits": "2",
    "description": "Students will explore topics and tools relevant to the practice of data science in a workshop format. The instructor works with students on guided projects to help students acquire knowledge and skills to complement their course work in the core data science classes. Topics vary from quarter to quarter. Students are strongly recommended to enroll in either DSC 10 or DSC 20 concurrently.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 97",
    "course_name": "DSC 97. Internship in Data Science",
    "credits": "2 or 4",
    "description": "Individual research on a topic related to data science, by special arrangement with and under the direction of a UC San Diego faculty member, in connection with an internship at an organization. It is the students’ responsibility to find an internship related to data science prior to enrolling in this course. Internship work will inform but not necessarily define the research topic. The research topic is expected to promote the study of the principles and techniques involved in the internship work. May be taken for credit up to two times.",
    "prerequisite_segments": [
      [
        "MATH 20C",
        "0"
      ],
      [
        "MATH 31BH and MATH 18",
        "0"
      ],
      [
        "MATH 31AH and DSC 20 and DSC 40A",
        "0"
      ]
    ],
    "prerequisites": "MATH 20C or MATH 31BH and MATH 18 or MATH 31AH and DSC 20 and DSC 40A",
    "notes": "Completion of thirty units at UC San Diego with a university GPA of 3.0. Special Studies form, consent of the instructor, and approval of the department required. Priority enrollment is given to data science majors DS25. Restricted to first-year and sophomore level students."
  },
  {
    "course_code": "DSC 98",
    "course_name": "DSC 98. Directed Group Study in Data Science",
    "credits": "2 or 4",
    "description": "Students will investigate a topic in data science through directed reading, discussion, and project work under the supervision of a faculty member. May be taken for credit up to two times.",
    "prerequisite_segments": [
      [
        "MATH 20C",
        "0"
      ],
      [
        "MATH 31BH and MATH 18",
        "0"
      ],
      [
        "MATH 31AH and DSC 20 and DSC 40A",
        "0"
      ]
    ],
    "prerequisites": "MATH 20C or MATH 31BH and MATH 18 or MATH 31AH and DSC 20 and DSC 40A",
    "notes": "Completion of thirty units at UC San Diego with a university GPA of 3.0. Special Studies form, consent of the instructor, and approval of the department required. Priority enrollment is given to data science majors DS25. Restricted to first-year and sophomore level students."
  },
  {
    "course_code": "DSC 99",
    "course_name": "DSC 99. Independent Study in Data Science",
    "credits": "2 or 4",
    "description": "Students will participate in independent study or research in data science under the direction of a UC San Diego faculty member. May be taken for credit up to two times.",
    "prerequisite_segments": [
      [
        "MATH 20C",
        "0"
      ],
      [
        "MATH 31BH and MATH 18",
        "0"
      ],
      [
        "MATH 31AH and DSC 20 and DSC 40A",
        "0"
      ]
    ],
    "prerequisites": "MATH 20C or MATH 31BH and MATH 18 or MATH 31AH and DSC 20 and DSC 40A",
    "notes": "Completion of thirty units at UC San Diego with a university GPA of 3.0. Special Studies form, consent of the instructor, and approval of the department required. Priority enrollment is given to data science majors DS25. Restricted to first-year and sophomore level students."
  },
  {
    "course_code": "DSC 100",
    "course_name": "DSC 100. Introduction to Data Management",
    "credits": "4",
    "description": "This course is an introduction to storage and management of large-scale data using classical relational (SQL) systems, with an eye toward applications in data science. The course covers topics including the SQL data model and query language, relational data modeling and schema design, elements of cost-based query optimizations, relational data base architecture, and database-backed applications.",
    "prerequisite_segments": [
      [
        "DSC 40B and DSC 80",
        "0"
      ]
    ],
    "prerequisites": "DSC 40B and DSC 80",
    "notes": "Restricted to students with upper-division standing. Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 102",
    "course_name": "DSC 102. Systems for Scalable Analytics",
    "credits": "4",
    "description": "This course introduces the principles of computing systems and infrastructure for scaling analytics to large datasets. Topics include memory hierarchy, distributed systems, model selection, heterogeneous datasets, and deployment at scale. The course will also discuss the design of systems such as MapReduce/Hadoop and Spark, in conjunction with their implementation. Students will also learn how dataflow operations can be used to perform data preparation, cleaning, and feature engineering.",
    "prerequisite_segments": [
      [
        "DSC 100",
        "0"
      ]
    ],
    "prerequisites": "DSC 100",
    "notes": "Restricted to students with upper-division standing. Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 104",
    "course_name": "DSC 104. Beyond Relational Data Management",
    "credits": "4",
    "description": "The course will introduce a variety of No-SQL data formats, data models, high-level query languages, and programming abstractions representative of the needs of modern data analytic tasks. Topics include hierarchical graph database systems, unrestricted graph database systems, array databases, comparison of expressive power of the data models, and parallel programming abstractions, including Map/Reduce and its descendants.",
    "prerequisite_segments": [
      [
        "DSC 100",
        "0"
      ]
    ],
    "prerequisites": "DSC 100",
    "notes": "Restricted to students with upper-division standing. Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 106",
    "course_name": "DSC 106. Introduction to Data Visualization",
    "credits": "4",
    "description": "Data visualization helps explore and interpret data through interaction. This course introduces the principles, techniques, and algorithms for creating effective visualizations. The course draws on the knowledge from several disciplines including computer graphics, human-computer interaction, cognitive psychology, design, and statistical graphics and synthesizes relevant ideas. Students will design visualization systems using D3 or other web-based software and evaluate their effectiveness.",
    "prerequisite_segments": [
      [
        "DSC 80",
        "0"
      ]
    ],
    "prerequisites": "DSC 80",
    "notes": "Restricted to students with upper-division standing. Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 120",
    "course_name": "DSC 120. Signal Processing for Data Analysis",
    "credits": "4",
    "description": "This course will focus on ideas from classical and modern signal processing, with the main themes of sampling continuous data and building informative representations using orthonormal bases, frames, and data dependent operators. Topics include sampling theory, Fourier analysis, lossy transformations and compression, time and spatial filters, and random Fourier features and connections to kernel methods. Sources of data include time series and streaming signals and various imaging modalities.",
    "prerequisite_segments": [
      [
        "MATH 18",
        "0"
      ],
      [
        "MATH 31AH and MATH 20C and DSC 40B",
        "0"
      ]
    ],
    "prerequisites": "MATH 18 or MATH 31AH and MATH 20C and DSC 40B",
    "notes": "Restricted to students with upper-division standing. Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 140A",
    "course_name": "DSC 140A. Probabilistic Modeling and Machine Learning",
    "credits": "4",
    "description": "The course covers learning and using probabilistic models for knowledge representation and decision-making. Topics covered include graphical models, temporal models, and online learning, as well as applications to natural language processing, adversarial learning, computational biology, and robotics. Prior completion of MATH 181A is strongly recommended.",
    "prerequisite_segments": [
      [
        "DSC 80 and ECE 109",
        "0"
      ],
      [
        "ECON 120A",
        "0"
      ],
      [
        "MAE 108",
        "0"
      ],
      [
        "MATH 180A",
        "0"
      ],
      [
        "MATH 183",
        "0"
      ],
      [
        "MATH 186",
        "0"
      ]
    ],
    "prerequisites": "DSC 80 and ECE 109 or ECON 120A or MAE 108 or MATH 180A or MATH 183 or MATH 186",
    "notes": "Restricted to students with upper-division standing. Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 140B",
    "course_name": "DSC 140B. Representation Learning",
    "credits": "4",
    "description": "This course is an introduction to machine learning which explores techniques for learning suitable representations from data. Topics include clustering, dimensionality reduction, manifold learning, principal component analysis, spectral embeddings, multilayer perceptrons, autoencoders, convolutional and recurrent neural networks, and other aspects of deep learning. The course focuses on the underlying mathematical principles, but some attention is also given to implementation.",
    "prerequisite_segments": [
      [
        "DSC 80, ECE 109",
        "0"
      ],
      [
        "ECON 120A",
        "0"
      ],
      [
        "MAE 108",
        "0"
      ],
      [
        "MATH 180A",
        "0"
      ],
      [
        "MATH 183",
        "0"
      ],
      [
        "MATH 186",
        "0"
      ]
    ],
    "prerequisites": "DSC 80, ECE 109 or ECON 120A or MAE 108 or MATH 180A or MATH 183 or MATH 186",
    "notes": "Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 148",
    "course_name": "DSC 148. Introduction to Data Mining",
    "credits": "4",
    "description": "This course mainly focuses on introducing current methods and models that are useful in analyzing and mining real-world data. It will cover frequent pattern mining, regression and classification, clustering, and representation learning. All participants should be comfortable with programming, and with basic optimization and linear algebra.",
    "prerequisite_segments": [
      [
        "DSC 40B",
        "0"
      ],
      [
        "CSE 12, DSC 80",
        "0"
      ],
      [
        "CSE 15L, MATH 180A",
        "0"
      ],
      [
        "MATH 181A",
        "0"
      ],
      [
        "MATH 183",
        "0"
      ],
      [
        "CSE 103",
        "0"
      ],
      [
        "ECE 109",
        "0"
      ],
      [
        "ECON 120A",
        "0"
      ]
    ],
    "prerequisites": "DSC 40B or CSE 12, DSC 80 or CSE 15L, MATH 180A or MATH 181A or MATH 183 or CSE 103 or ECE 109 or ECON 120A",
    "notes": "Students may not receive credit for DSC 148 and CSE 158 or CSE 158R. Restricted to students within the DS25 major. All other students will be allowed as space permits."
  },
  {
    "course_code": "DSC 155",
    "course_name": "DSC 155. Hidden Data in Random Matrices",
    "credits": "4",
    "description": "Rigorous treatment of principal component analysis, one of the most effective methods in finding signals amidst the noise of large data arrays. Topics include singular value decomposition for matrices, maximal likelihood estimation, least squares methods, unbiased estimators, random matrices, Wigner’s semicircle law, Markchenko-Pastur laws, universality of eigenvalue statistics, outliers, the BBP transition, applications to community detection, and stochastic block model.",
    "prerequisite_segments": [
      [
        "MATH 180A and (MATH 18",
        "0"
      ],
      [
        "MATH 31AH)",
        "0"
      ]
    ],
    "prerequisites": "MATH 180A and (MATH 18 or MATH 31AH)",
    "notes": "Students will not receive credit for both MATH 182 and DSC 155."
  },
  {
    "course_code": "DSC 160",
    "course_name": "DSC 160. Data Science and the Arts",
    "credits": "4",
    "description": "This course addresses the intersection of data science and contemporary arts and culture, exploring four main themes of authorship, representation, visualization, and data provenance. The course is not solely an introduction to data science techniques nor merely an arts practice course, but explores significant new possibilities for both fields arising from their intersection. Students will examine problems from complementary perspectives of artist-researchers and data scientists.",
    "prerequisite_segments": [
      [
        "DSC 80",
        "0"
      ]
    ],
    "prerequisites": "DSC 80",
    "notes": "none"
  },
  {
    "course_code": "DSC 161",
    "course_name": "DSC 161. Text as Data",
    "credits": "4",
    "description": "This class explores statistical and computational methods to enable students to use text as a data source in the social sciences. Hands-on examples will equip students to work with text data in final projects.",
    "prerequisite_segments": [
      [
        "ECON 5",
        "0"
      ],
      [
        "POLI 170A",
        "0"
      ],
      [
        "POLI 171",
        "0"
      ],
      [
        "POLI 30",
        "0"
      ],
      [
        "POLI 30D",
        "0"
      ],
      [
        "POLI 5",
        "0"
      ],
      [
        "POLI 5D",
        "0"
      ]
    ],
    "prerequisites": "ECON 5 or POLI 170A or POLI 171 or POLI 30 or POLI 30D or POLI 5 or POLI 5D",
    "notes": "Students will not receive credit for both POLI 176 and DSC 161. Restricted to junior and senior level students. Restricted to students with upper-division standing."
  },
  {
    "course_code": "DSC 167",
    "course_name": "DSC 167. Fairness and Algorithmic Decision-Making",
    "credits": "4",
    "description": "This course examines the greater context under which the practice of data science exists and explores concrete ways these issues surface in technical work. Students learn frameworks for understanding how individuals relate to social institutions, how to use them to identify how issues of fairness arise in the “life of a data scientist,” and use them to propose and critique potential solutions.",
    "prerequisite_segments": [
      [
        "DSC 80",
        "0"
      ]
    ],
    "prerequisites": "DSC 80",
    "notes": "none"
  },
  {
    "course_code": "DSC 170",
    "course_name": "DSC 170. Spatial Data Science and Applications",
    "credits": "4",
    "description": "Spatial data science is a set of concepts and methods that deal with accessing, managing, visualizing, analyzing, and reasoning about spatial data in applications where location, shape and size of objects, and their mutual arrangement are important. This upper-division course explores advanced data science concepts for spatial data, introducing students to principles and techniques of spatial data analysis, including geographic information systems, spatial big data management, and geostatistics.",
    "prerequisite_segments": [
      [
        "DSC 80",
        "0"
      ]
    ],
    "prerequisites": "DSC 80",
    "notes": "Restricted to students with upper-division standing."
  },
  {
    "course_code": "DSC 180A",
    "course_name": "DSC 180A. Data Science Project I",
    "credits": "4",
    "description": "In this two-course sequence students will investigate a topic and design a system to produce statistically informed output. The investigation will span the entire lifecycle, including assessing the problem, learning domain knowledge, collecting/cleaning data, creating a model, addressing ethical issues, designing the system, analyzing the output, and presenting the results. 180A deals with research, methodology, and system design. Students will produce a research summary and a project proposal.",
    "prerequisite_segments": [
      [
        "DSC 102 and MATH 189 and CSE 151A",
        "0"
      ],
      [
        "COGS 188",
        "0"
      ],
      [
        "CSE 158",
        "0"
      ],
      [
        "CSE 158R",
        "0"
      ],
      [
        "DSC 148 and DSC 106",
        "0"
      ]
    ],
    "prerequisites": "DSC 102 and MATH 189 and CSE 151A or COGS 188 or CSE 158 or CSE 158R or DSC 148 and DSC 106",
    "notes": "Restricted to students with upper-division standing. Restricted to students within the DS25 major."
  },
  {
    "course_code": "DSC 180B",
    "course_name": "DSC 180B. Data Science Project II",
    "credits": "4",
    "description": "In this two-course sequence students will investigate a topic and design a system to produce statistically informed output. The investigation will span the entire lifecycle, including assessing the problem, learning domain knowledge, collecting/cleaning data, creating a model, addressing ethical issues, designing the system, analyzing the output, and presenting the results. 180B will consist of implementing the project while studying the best practices for evaluation.",
    "prerequisite_segments": [
      [
        "DSC 180A",
        "0"
      ]
    ],
    "prerequisites": "DSC 180A",
    "notes": "Students are only cleared to enroll into the discussion section associated with their DSC 180A discussion section. Restricted to students with upper-division standing. Restricted to students within the DS25 major."
  },
  {
    "course_code": "DSC 190",
    "course_name": "DSC 190. Topics in Data Science",
    "credits": "4",
    "description": "Topics of special interest in data science. Topics vary from quarter to quarter. May be taken for credit up to four times when topic varies.",
    "prerequisite_segments": [
      [
        "department and instructor approval required to monitor enrollment and to ensure that students have the sufficient educational background for a given topic",
        "0"
      ]
    ],
    "prerequisites": "department and instructor approval required to monitor enrollment and to ensure that students have the sufficient educational background for a given topic",
    "notes": "Restricted to students with upper-division standing."
  },
  {
    "course_code": "DSC 191",
    "course_name": "DSC 191. Seminar in Data Science",
    "credits": "1 or 2",
    "description": "A seminar course on topics of current interest in data science. Topics may vary from quarter to quarter. May be taken for credit three times.",
    "prerequisite_segments": [
      [
        "restricted to students with upper-division standing",
        "0"
      ]
    ],
    "prerequisites": "restricted to students with upper-division standing",
    "notes": "Department and instructor approval is required to monitor enrollment and to ensure that students have the sufficient educational background for a given topic."
  },
  {
    "course_code": "DSC 197",
    "course_name": "DSC 197. Data Science Internship",
    "credits": "1–4",
    "description": "Directed study and research at laboratories/institutions outside of campus. It is the students’ responsibility to find an internship related to data science prior to enrolling in this course.",
    "prerequisite_segments": [
      [
        "restricted to students with upper-division standing",
        "0"
      ]
    ],
    "prerequisites": "restricted to students with upper-division standing",
    "notes": "Consent of the instructor and approval of the department. An application for Special Studies must be filed with the Registrar’s office after approval from the instructor and the department chair."
  },
  {
    "course_code": "DSC 198",
    "course_name": "DSC 198. Directed Group Study in Data Science",
    "credits": "2 or 4",
    "description": "Data science topics whose study involves reading and discussion by a small group of students under supervision of a faculty member. May be taken for credit up to two times.",
    "prerequisite_segments": [
      [
        "restricted to students with upper-division standing",
        "0"
      ]
    ],
    "prerequisites": "restricted to students with upper-division standing",
    "notes": "Consent of the instructor and approval of the department. Department stamp required. An application for Special Studies must be filed with the Registrar’s office after approval from the instructor and the department chair."
  },
  {
    "course_code": "DSC 199",
    "course_name": "DSC 199. Independent Study for Data Science Undergraduates",
    "credits": "2 or 4",
    "description": "Independent reading or research on a topic related to data science by special arrangement with a faculty member. May be taken for credit up to two times.",
    "prerequisite_segments": [
      [
        "restricted to students with upper-division standing",
        "0"
      ]
    ],
    "prerequisites": "restricted to students with upper-division standing",
    "notes": "Consent of the instructor and approval of the department. An application for Special Studies must be filed with the Registrar’s Office after approval from the instructor and the department chair."
  },
  {
    "course_code": "DSC 200",
    "course_name": "DSC 200. Data Science Programming",
    "credits": "4",
    "description": "Computing structures and programming concepts such as object orientation, data structures such as queues, heaps, lists, search trees, and hash tables. Laboratory skills include Jupyter notebooks, RESTful interfaces, and various software development kits (SDKs).",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 202",
    "course_name": "DSC 202. Data Management for Data Science",
    "credits": "4",
    "description": "Principles of data management, relational data model, relational algebra, SQL for data science, NoSQL databases (document, key-value, graph, column-family), multidimensional data management (data warehousing, OLAP Queries, OLAP Cubes, visualizing multidimensional data).",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 203",
    "course_name": "DSC 203. Data Visualization and Scalable Visual Analytics",
    "credits": "4",
    "description": "Commonly used algorithms and techniques in data visualization. Interactive reasoning and exploratory analysis through visual interfaces. Application of data visualization in various domains including science, engineering, and medicine. Scalable interactive methods involving exploring big data and visualization methods. Techniques to evaluate effectivity and interpretability of analytical products for diverse users to obtain insights in support of assessment, planning, and decision making.",
    "prerequisite_segments": [
      [
        "DSC 202",
        "0"
      ]
    ],
    "prerequisites": "DSC 202",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 204A",
    "course_name": "DSC 204A. Scalable Data Systems",
    "credits": "4",
    "description": "Storage/memory hierarchy, distributed scalable computing (cluster, cloud, edge) principles. Big data storage, management, and processing at scale. Dataflow programming systems and programming models (MapReduce/Hadoop and Spark).",
    "prerequisite_segments": [
      [
        "DSC 202",
        "0"
      ]
    ],
    "prerequisites": "DSC 202",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 205",
    "course_name": "DSC 205. Geometry of Data",
    "credits": "4",
    "description": "This course will cover graph-based data modeling, analysis, and representation. Topics include spectral graph theory, spectral clustering, kernel-based manifold learning, dimensionality reduction and visualization, multiway data analysis, graph signal processing, graph neural networks.",
    "prerequisite_segments": [
      [
        "DSC 210",
        "0"
      ],
      [
        "ECE 269 and DSC 212 and DSC 240",
        "0"
      ]
    ],
    "prerequisites": "DSC 210 or ECE 269 and DSC 212 and DSC 240",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 206",
    "course_name": "DSC 206. Algorithms for Data Science",
    "credits": "4",
    "description": "This course studies the mathematical foundations of massive data processing, developing algorithms, and analyzing them. We explore methods for sampling, sketching, and distributed processing of large scale databases, clustering, dimensionality reduction, and methods of optimization for the purpose of scalable statistical description, querying, pattern mining, and learning from data.",
    "prerequisite_segments": [
      [
        "DSC 212",
        "0"
      ]
    ],
    "prerequisites": "DSC 212",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 207R",
    "course_name": "DSC 207R. Python for Data Science",
    "credits": "4",
    "description": "Essential tools for data science including the basic process of data science; Python and Jupyter notebooks; finding answers within large datasets by using Python to import data, explore it, analyze it, learn from it, visualize it, and generate easily shareable reports. An applied understanding of how to manipulate and analyze uncurated datasets; basic statistical analysis and machine learning methods; and how to effectively visualize results. This is a distance education course.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to major code DS77. All other students with graduate standing may be considered as space permits."
  },
  {
    "course_code": "DSC 208R",
    "course_name": "DSC 208R. Data Management for Analytics",
    "credits": "4",
    "description": "Principles, techniques, and tools for organizing, storing, querying, transforming, and using data for analytics and machine learning computations at scale; including the relational data model, relational algebra, database system features for faster querying, and non-relational data systems. Introduction to data quality issues, data cleansing, cluster and cloud computing, and transformation for feature engineering. Evaluation of analytics results including reasoning about bias and fairness. This is a distance education course.",
    "prerequisite_segments": [
      [
        "DSC 207R",
        "0"
      ]
    ],
    "prerequisites": "DSC 207R",
    "notes": "Restricted to major code DS77. All other students with graduate standing may be considered as space permits."
  },
  {
    "course_code": "DSC 209R",
    "course_name": "DSC 209R. Data Visualization",
    "credits": "4",
    "description": "Techniques for creating effective visualizations to explore trends, identify relationships, confirm hypotheses, communicate findings, and gain insight about data. This course will focus on teaching students the principles and techniques for creating visual representation from raw data, including static and dynamic visualizations. This is a distance education course.",
    "prerequisite_segments": [
      [
        "DSC 208R",
        "0"
      ]
    ],
    "prerequisites": "DSC 208R",
    "notes": "Restricted to major code DS77. All other students with graduate standing may be considered as space permits."
  },
  {
    "course_code": "DSC 210",
    "course_name": "DSC 210. Numerical Linear Algebra",
    "credits": "4",
    "description": "Linear algebraic systems, least squares problems and regularization, orthogonalization methods, ill-conditioned problems, eigenvalue and singular value decomposition, principal component analysis, structured matrix factorization and fast algorithms, randomized linear algebra, JL lemma, sparse approximations.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 211",
    "course_name": "DSC 211. Introduction to Optimization",
    "credits": "4",
    "description": "Continuity and differentiability of a function of several variables, gradient vector, Hessian matrices, Taylor approximation, fundamentals of optimization, Lagrange multipliers, convexity, gradient descent.",
    "prerequisite_segments": [
      [
        "DSC 210",
        "0"
      ]
    ],
    "prerequisites": "DSC 210",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 212",
    "course_name": "DSC 212. Probability and Statistics for Data Science",
    "credits": "4",
    "description": "Probability, random variables, distributions, central limit theorem, maximum likelihood estimation, method of moments, confidence intervals, hypothesis testing, Bayesian estimation, introduction to simulation and the bootstrap.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 213",
    "course_name": "DSC 213. Statistics on Manifolds",
    "credits": "4",
    "description": "This is a graduate topics course covering statistics with manifold constraints. Topics include Frechet means and variances, principal geodesic analysis, directional statistics, random fields on manifolds, statistical distances between distributions, transport problems, and information geometry. Manifold constraints will be considered on simplexes, spheres, Stiefel manifold, stratified manifolds, cone of positive definite matrices, trees, compositional data, and other relevant manifolds.",
    "prerequisite_segments": [
      [
        "DSC 210 and DSC 212",
        "0"
      ]
    ],
    "prerequisites": "DSC 210 and DSC 212",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 214",
    "course_name": "DSC 214. Topological Data Analysis",
    "credits": "4",
    "description": "Topology provides a powerful way to describe essential features of functions and spaces. In recent years topological methods have attracted much attention for analyzing complex data. Fundamental developments have been made and the resulting methods have been applied in many fields, e.g., graphics, visualization, neuroscience, and material science. This course introduces basic concepts and topological structures behind these developments, algorithms for them, and examples of applications.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 215",
    "course_name": "DSC 215. Statistical Thinking and Experimental Design",
    "credits": "4",
    "description": "The goal of this course is to evaluate any paper in data science, regardless of application area. Topics include experimental design, claims, evidence, and statistical significance, the replication crisis, falsifiability, philosophy of science, history of probability and statistics. This class will be in the form of an open discussion based on provided reading materials.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 215R",
    "course_name": "DSC 215R. Foundations of Probability and Statistics in Data Science",
    "credits": "4",
    "description": "Foundations of probability and statistics needed for data science, including mathematical theory, and hands-on experience of applying this theory to actual data using Jupyter notebooks. Random variables, dependence, correlation, regression, PCA, entropy and MDL. This course is a distance education course.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to major code DS77. All other students with graduate standing may be considered as space permits."
  },
  {
    "course_code": "DSC 231",
    "course_name": "DSC 231. Embedded Sensing, IOT Data Models, and Methods",
    "credits": "4",
    "description": "Sensory data and control is mediated by devices near the edge of sensor networks, referred to as IOT (Internet of Things) devices. Components of IOT platforms: signal processing, communications/networking, control, real-time operating systems. Interfaces to cloud computing stack, publish-subscribe protocols such as MQTT, embedded software/middleware components, metadata schema, metadata normalization methods, applications in selected CPS (cyber-physical system) applications.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "The class is designed for electronic enthusiasts who are quick learners on new embedded, sensor network devices. Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 232R",
    "course_name": "DSC 232R. Big Data Analytics Using Spark",
    "credits": "4",
    "description": "This course covers techniques for achieving scalability in data analysis, using tools such as MapReduce, Hadoop, and Spark. Topics include programming Spark using PySpark; identifying the computational tradeoffs in a Spark application; performing data loading and cleaning using Spark and Parquet; modeling data through statistical and machine learning methods, and mitigating bottlenecks that arise in massive parallel computations by using the Spark framework. This is a distance education course.",
    "prerequisite_segments": [
      [
        "DSC 255R",
        "0"
      ]
    ],
    "prerequisites": "DSC 255R",
    "notes": "Restricted to major code DS77. All other students with graduate standing may be considered as space permits."
  },
  {
    "course_code": "DSC 240",
    "course_name": "DSC 240. Machine Learning",
    "credits": "4",
    "description": "A graduate level course in machine learning algorithms: decision trees, principal component analysis, k-means, clustering, logistic regression, random forests, boosting, neural networks, kernel methods, deep learning.",
    "prerequisite_segments": [
      [
        "DSC 210 and DSC 212",
        "0"
      ]
    ],
    "prerequisites": "DSC 210 and DSC 212",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 241",
    "course_name": "DSC 241. Statistical Models",
    "credits": "4",
    "description": "Linear/nonlinear models, generalized linear models, model fitting and model selection (cross-validation, knockoffs, etc.), regularization and penalization (ridge regression, lasso, etc.), robust methods, nonparametric regression, conformal prediction, causal inference.",
    "prerequisite_segments": [
      [
        "DSC 210 and DSC 212",
        "0"
      ]
    ],
    "prerequisites": "DSC 210 and DSC 212",
    "notes": "Restricted to students within the DS75 and DS76 major."
  },
  {
    "course_code": "DSC 242",
    "course_name": "DSC 242. High-Dimensional Probability and Statistics",
    "credits": "4",
    "description": "Concentration inequalities, Markov processes and ergodicity, martingale inequalities, empirical processes, sparse linear models in high dimensions, principal component analysis in high dimensions, estimation of large covariance matrices.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to DS75 and DS76 students."
  },
  {
    "course_code": "DSC 243",
    "course_name": "DSC 243. Advanced Optimization",
    "credits": "4",
    "description": "Linear/quadratic programming, optimization under constraints, gradient descent (deterministic and stochastic), convergence rate of gradient descent, acceleration phenomena in convex optimization, stochastic optimization with large data sets, complexity lower bounds for convex optimization.",
    "prerequisite_segments": [
      [
        "DSC 211 and DSC 212",
        "0"
      ]
    ],
    "prerequisites": "DSC 211 and DSC 212",
    "notes": "Restricted to DS75 and DS76 students."
  },
  {
    "course_code": "DSC 244",
    "course_name": "DSC 244. Large-Scale Statistical Analysis",
    "credits": "4",
    "description": "Exploratory data analysis, diagnostics, bootstrap, large-scale (multiple) hypothesis testing, false discovery rate, empirical Bayes methods.",
    "prerequisite_segments": [
      [
        "DSC 210 and DSC 212 and DSC 241",
        "0"
      ]
    ],
    "prerequisites": "DSC 210 and DSC 212 and DSC 241",
    "notes": "Restricted to DS75 and DS76 students."
  },
  {
    "course_code": "DSC 245",
    "course_name": "DSC 245. Introduction to Causal Inference",
    "credits": "4",
    "description": "Causal versus predictive inference, potential outcomes and randomized experiments (A/B testing), structural causal models (interventions, counterfactuals, causal diagram, do-operator, d-separation), causal structure learning, identification of causal effect, estimation of causal effect, causal discovery and inference in presence of distribution shifts, selection bias, hidden confounders, cycles, nonlinear causal mechanisms, missing values, causal representation learning.",
    "prerequisite_segments": [
      [
        "DSC 212 and DSC 240",
        "0"
      ]
    ],
    "prerequisites": "DSC 212 and DSC 240",
    "notes": "Restricted to DS75 and DS76 students."
  },
  {
    "course_code": "DSC 250",
    "course_name": "DSC 250. Advanced Data Mining",
    "credits": "4",
    "description": "Graph mining and basic text analysis (including keyphrase extraction and generation), set expansion and taxonomy construction, graph representation learning, graph convolutional neural networks, heterogeneous information networks, label propagation, and truth findings.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to DS75 and DS76 students."
  },
  {
    "course_code": "DSC 251",
    "course_name": "DSC 251. Machine Learning in Control",
    "credits": "4",
    "description": "Estimation of stability and uncertainty, optimal control, and sequential decision making.",
    "prerequisite_segments": [
      [
        "DSC 211 and DSC 240",
        "0"
      ]
    ],
    "prerequisites": "DSC 211 and DSC 240",
    "notes": "Restricted to DS75 and DS76 students."
  },
  {
    "course_code": "DSC 252",
    "course_name": "DSC 252. Statistical Natural Language Processing",
    "credits": "4",
    "description": "Diving deep to the classical NLP pipeline: tokenization, stemming, lemmatization, part-of-speech tagging, named entity recognition, parsing, and machine translation. Finite-state transducer, context-free grammar, hidden Markov models (HMM), and conditional random fields (CRF) will be covered in detail.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to DS75 and DS76 students."
  },
  {
    "course_code": "DSC 253",
    "course_name": "DSC 253. Advanced Data-Driven Text Mining",
    "credits": "4",
    "description": "Unsupervised, weakly supervised, and distantly supervised methods for text mining problems, including information retrieval, open-domain information extraction, text summarization (both extractive and generative), and knowledge graph construction. Bootstrapping, comparative analysis, learning from seed words and existing knowledge bases will be the key methodologies.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to DS75 and DS76 students."
  },
  {
    "course_code": "DSC 254",
    "course_name": "DSC 254. Statistical Signal and Image Analysis",
    "credits": "4",
    "description": "A graduate level course on signal and image analysis spanning three main themes. Statistical signal processing: random processes, stochasticity, stationarity, Wiener filter, Kalman filter, matched filter; signal processing: time-frequency representations, wavelets, signal processing with sparse representation (dictionary learning); image processing: registration, image degradation and restoration: noise models + denoising, image pyramids, random fields.",
    "prerequisite_segments": [
      [
        "DSC 210",
        "0"
      ],
      [
        "ECE 269 and DSC 212",
        "0"
      ]
    ],
    "prerequisites": "DSC 210 or ECE 269 and DSC 212",
    "notes": "Need to verify background in signal processing from undergraduate or other graduate courses. Restricted to DS75 and DS76 students."
  },
  {
    "course_code": "DSC 255R",
    "course_name": "DSC 255R. Machine Learning Fundamentals",
    "credits": "4",
    "description": "Supervised and unsupervised learning algorithms, and the theory behind those algorithms. Using case studies, covered topics include classification, regression, and conditional probability estimation; generative and discriminative models; linear models and extensions to non-linearity using kernel methods; ensemble methods: boosting, bagging, random forests; representation learning: clustering, dimensionality reduction, auto-encoders, deep neural networks. This is a distance education course.",
    "prerequisite_segments": [
      [
        "DSC 215R",
        "0"
      ]
    ],
    "prerequisites": "DSC 215R",
    "notes": "Restricted to major code DS77. All other students with graduate standing may be considered as space permits."
  },
  {
    "course_code": "DSC 256R",
    "course_name": "DSC 256R. Data Mining on the Web",
    "credits": "4",
    "description": "Application of machine learning and data mining techniques, recommender systems, data mining, and predictive analytics. Building models to understand data in order to gain insights and make predictions. Covered topics include regression; classification; unsupervised learning and dimensionality reduction; recommender systems; text mining; social network analysis; data visualization; and online advertising. This course is a distance education course.",
    "prerequisite_segments": [
      [
        "DSC 215R",
        "0"
      ]
    ],
    "prerequisites": "DSC 215R",
    "notes": "Restricted to major code DS77. All other students with graduate standing may be considered as space permits."
  },
  {
    "course_code": "DSC 257R",
    "course_name": "DSC 257R. Unsupervised Learning",
    "credits": "4",
    "description": "Broad view of the field of unsupervised learning, in particular its most common methods and use cases. Topics include descriptive statistics; clustering; projection, singular value decomposition, and spectral embedding; common probability distributions; density estimation; graphical models and latent variable modeling; sparse coding and dictionary learning; autoencoders, shallow and deep; and self-supervised learning.",
    "prerequisite_segments": [
      [
        "DSC 255R",
        "0"
      ]
    ],
    "prerequisites": "DSC 255R",
    "notes": "Restricted to major code DS77. All other students with graduate standing may be considered as space permits."
  },
  {
    "course_code": "DSC 258R",
    "course_name": "DSC 258R. Natural Language Processing",
    "credits": "4",
    "description": "Introduction to classical methods that are useful in analyzing and mining real-world text data, including tokenization, stemming and lemmatization, bag-of-words classification, word embedding, language models, sentiment analysis, part-of-speech tagging, named entity recognition, and sequence-to-sequence models. Consideration of possible biases, privacy, and societal implications in these models. This is a distance education course.",
    "prerequisite_segments": [
      [
        "DSC 255R",
        "0"
      ]
    ],
    "prerequisites": "DSC 255R",
    "notes": "Restricted to major code DS77. All other students with graduate standing may be considered as space permits."
  },
  {
    "course_code": "DSC 260",
    "course_name": "DSC 260. Data Science, Ethics, and Society",
    "credits": "4",
    "description": "This course will consider foundational concepts including power, justice, bias, privacy, and explainability; societal practices including delegation, organizational incentives, and accountability; and governance mechanisms including law, regulation, and norms.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to DS75 and DS76 students."
  },
  {
    "course_code": "DSC 261",
    "course_name": "DSC 261. Responsible Data Science",
    "credits": "4",
    "description": "Data science lifecycle, data cleaning and quality management, data profiling, causal inference, algorithmic fairness (fairness definitions, impossibility results, causal fairness, building fair ML models, fairness beyond classification), algorithmic transparency (interpretability versus explainability, auditing-black-box algorithms, algorithmic recourse).",
    "prerequisite_segments": [
      [
        "DSC 210 and DSC 240",
        "0"
      ]
    ],
    "prerequisites": "DSC 210 and DSC 240",
    "notes": "Restricted to DS75 and DS76 students."
  },
  {
    "course_code": "DSC 266R",
    "course_name": "DSC 266R. Human-Centered Artificial Intelligence",
    "credits": "4",
    "description": "Examination of artificial intelligence (AI) through a human-first approach: the creation of AI systems, where the human perspective and needs drive the technological innovations throughout all stages of the system design including data collection, learning models, inference strategies, interaction paradigms, validation, deployment, evaluation, and maintenance.",
    "prerequisite_segments": [
      [
        "DSC 208R and DSC 255R",
        "0"
      ]
    ],
    "prerequisites": "DSC 208R and DSC 255R",
    "notes": "Restricted to major code DS77. All other students with graduate standing may be considered as space permits."
  },
  {
    "course_code": "DSC 267R",
    "course_name": "DSC 267R. Data Fairness and Ethics",
    "credits": "4",
    "description": "Examination of the inevitable ethical questions and issues that arise in all stages of data science, including issues of privacy, bias, trust, and more. Conceptual and mathematical tools that can be used both to recognize and address these ethical issues as they arise in real-world practice. This is a distance education course.",
    "prerequisite_segments": [
      [
        "DSC 208R and DSC 255R",
        "0"
      ]
    ],
    "prerequisites": "DSC 208R and DSC 255R",
    "notes": "Restricted to major code DS77. All other students with graduate standing may be considered as space permits."
  },
  {
    "course_code": "DSC 288R",
    "course_name": "DSC 288R. Graduate Capstone in Data Science",
    "credits": "4",
    "description": "Following the life cycle of a data science project, students apply advanced data science knowledge and techniques to a specific domain. Cleaning and structuring data for hypothesis generation and data analysis; creating a scalable big date pipeline from data ingestion and exploration, to modeling and evaluation; building machine learning models and evaluating insights; communicating finding through visualizations and reports; fully considering ethical implications throughout.",
    "prerequisite_segments": [
      [
        "DSC 208R, DSC 255R, and DSC 256R",
        "0"
      ]
    ],
    "prerequisites": "DSC 208R, DSC 255R, and DSC 256R",
    "notes": "Restricted to students within the DS77 degree program."
  },
  {
    "course_code": "DSC 290",
    "course_name": "DSC 290. Seminar in Data Science",
    "credits": "1 or 2",
    "description": "A graduate seminar course in which topics of special interest in data science will be presented by faculty or by graduate students under faculty direction. Restricted to graduate level students. May be repeated for credit twenty-four times as topics vary.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "DSC 291",
    "course_name": "DSC 291. Topics in Data Science",
    "credits": "4",
    "description": "Topics of special interest in data science. Topics may vary quarter to quarter. Restricted to graduate level students.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "DSC 293",
    "course_name": "DSC 293. Faculty Research Seminar",
    "credits": "1",
    "description": "Weekly faculty research seminar. Individual HDSI colloquia and distinguished lecturers may be included at the discretion of the instructor. May be taken for credit up to twenty-four times.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "DSC 294",
    "course_name": "DSC 294. Research Rotation",
    "credits": "4",
    "description": "Research rotations provide the opportunity for first-year PhD students to obtain research experience in data analysis under the guidance of HDSI affiliated faculty members. Through the rotations, students can identify a faculty member under whose supervision their dissertation research will be completed. Each research rotation is quarter-long; working with a HDSI faculty member and students are required to complete three separate rotations. Each student is required to take the course three times with at least two different instructors.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Only first-year PhD students are eligible."
  },
  {
    "course_code": "DSC 295",
    "course_name": "DSC 295. Academia Survival Skills",
    "credits": "1",
    "description": "Basic skills necessary to succeed as a researcher in data science including scripting, cloud computing skills, fellowship proposal preparation, CV preparation, writing reviews, preparing posters, etc.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "DSC 297",
    "course_name": "DSC 297. DSC Graduate Internship",
    "credits": "1",
    "description": "Internship with institution or agency allowing students to pursue topics raised in the data science core and/or elective courses. May be taken for credit up to four times.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Restricted to DS75 and DS76 students."
  },
  {
    "course_code": "DSC 299",
    "course_name": "DSC 299. Graduate Research",
    "credits": "1–16",
    "description": "Graduate research. May be taken for credit up to twenty-four times.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "DSC 500",
    "course_name": "DSC 500. Teaching Assistantship",
    "credits": "2 or 4",
    "description": "A course in which teaching assistants are aided in learning proper teaching methods by means of supervision of their work by the faculty: handling of discussions, preparation and grading of examinations and other written exercises, and student relations. Number of units for credit depends on number of hours devoted to class or section assistance. May be taken for credit up to seventy-two units.",
    "prerequisite_segments": [
      [
        "DSC 500 is for selected teaching assistants only",
        "0"
      ]
    ],
    "prerequisites": "DSC 500 is for selected teaching assistants only",
    "notes": "therefore, consent of instructor is required."
  },
  {
    "course_code": "DSC 599",
    "course_name": "DSC 599. Teaching Methods in Data Science",
    "credits": "2",
    "description": "Training in teaching methods in the field of data science. This course examines theoretical and practical communication and teaching techniques particularly appropriate to data science.",
    "prerequisite_segments": [
      [
        "Consent of faculty required",
        "0"
      ]
    ],
    "prerequisites": "Consent of faculty required",
    "notes": "Only graduate students who are TAing for the first time in the data science program are eligible to enroll."
  }
];

module.exports = DSC;