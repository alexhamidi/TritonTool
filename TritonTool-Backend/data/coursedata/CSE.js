const CSE = [
  {
    "course_code": "CSE 3",
    "course_name": "CSE 3. Fluency in Information Technology",
    "credits": "4",
    "description": "Introduces the concepts and skills necessary to effectively use information technology. Includes basic concepts and some practical skills with computer and networks.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 4GS",
    "course_name": "CSE 4GS. Mathematical Beauty in Rome",
    "credits": "4",
    "description": "Exploration of topics in mathematics and engineering as they relate to classical architecture in Rome, Italy. In depth geometrical analysis and computer modeling of basic structures (arches, vaults, domes), and on-site studies of the Colosseum, Pantheon, Roman Forum, and St. Peter’s Basilica.",
    "prerequisite_segments": [
      [
        "MATH 10A",
        "0"
      ],
      [
        "MATH 20A",
        "0"
      ]
    ],
    "prerequisites": "MATH 10A or MATH 20A",
    "notes": "department approval, and corequisite of CSE 6GS."
  },
  {
    "course_code": "CSE 6GS",
    "course_name": "CSE 6GS. Mathematical Beauty in Rome Lab",
    "credits": "4",
    "description": "Companion course to CSE 4GS where theory is applied and lab experiments are carried out “in the field” in Rome, Italy. For final projects, students will select a complex structure (e.g., the Colosseum, the Pantheon, St. Peter’s, etc.) to analyze and model, in detail, using computer-based tools.",
    "prerequisite_segments": [
      [
        "MATH 10A",
        "0"
      ],
      [
        "MATH 20A",
        "0"
      ]
    ],
    "prerequisites": "MATH 10A or MATH 20A",
    "notes": "department approval, and corequisite of CSE 4GS."
  },
  {
    "course_code": "CSE 6R",
    "course_name": "CSE 6R. Introduction to Computer Science and Object-Oriented Programming: Python",
    "credits": "4",
    "description": "An introduction to computer science and programming using the Python language. The course will cover topics such as basic data types (e.g., integer, float, string), loops and iteration, basic data structures (e.g., list, set, dictionary), memory models, conditional statements, recursion, basic algorithm time complexity analysis, class design, and inheritance.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 8A",
    "course_name": "CSE 8A. Introduction to Programming and Computational Problem-Solving I",
    "credits": "4",
    "description": "Introductory course for students interested in computer science and programming. Basics of programming including variables, conditionals, loops, functions/methods. Structured data storage such as arrays/lists and dictionaries, including data mutation. Hands-on experience with designing, writing, hand-tracing, compiling or interpreting, executing, testing, and debugging programs. Students solve relevant computational problems using a high-level programming language. CSE 8A is part of a two-course sequence (CSE 8A-B) that is equivalent to CSE 11. Students should take CSE 8B to complete the CSE 8A-B track. Students who have taken CSE 8B or CSE 11 may not take or receive credit for CSE 8A. Students may only receive credit for one of the following: BILD 62, COGS 18, CSE 8A, or CSE 6R. Recommended preparation: No prior programming experience is assumed, but comfort using computers is helpful. Students should consult the “CSE Course Placement Advice” web page for assistance in choosing which CSE course to take first.",
    "prerequisite_segments": [
      [
        "restricted to undergraduates",
        "0"
      ]
    ],
    "prerequisites": "restricted to undergraduates",
    "notes": "Graduate students will be allowed as space permits."
  },
  {
    "course_code": "CSE 8B",
    "course_name": "CSE 8B. Introduction to Programming and Computational Problem-Solving II",
    "credits": "4",
    "description": "Introductory programming using an object-oriented approach with the Java programming language. Builds on basic programming constructs introduced in CSE 8A to introduce class design and use, interfaces, basic class hierarchies, recursion, event-based programming, error reporting with exceptions, and file I/O. Basics of command-line navigation for file management and running programs. Development, testing, and debugging of more complex programs. CSE 8B is part of a two-course sequence (CSE 8A-B) that is equivalent to CSE 11. No credit offered for CSE 8B if CSE 11 taken previously. Students may not receive credit for CSE 8B and CSE 11. Students should consult the “CSE Course Placement Advice” web page for assistance in choosing which CSE course to take first",
    "prerequisite_segments": [
      [
        "CSE 8A",
        "0"
      ]
    ],
    "prerequisites": "CSE 8A",
    "notes": "restricted to undergraduates. Graduate students will be allowed as space permits."
  },
  {
    "course_code": "CSE 11",
    "course_name": "CSE 11. Introduction to Programming and Computational Problem-Solving: Accelerated Pace",
    "credits": "4",
    "description": "Accelerated introductory programming including an object-oriented approach. Covers basic programming topics from CSE 8A including variables, conditionals, loops, functions/methods, structured data storage, and mutation. Also covers topics from CSE 8B including the Java programming language, class design, interfaces, basic class hierarchies, recursion, event-based programming, and file I/O. Basics of command-line navigation for file management and running programs. Zero units of credit offered for CSE 11 if CSE 8B taken previously or concurrently. Recommended preparation: Significant prior programming experience (for example, high school AP CSA). Students should consult the “CSE Course Placement Advice” web page for assistance in choosing a first CSE course.",
    "prerequisite_segments": [
      [
        "restricted to undergraduates",
        "0"
      ]
    ],
    "prerequisites": "restricted to undergraduates",
    "notes": "Graduate students will be allowed as space permits."
  },
  {
    "course_code": "CSE 12",
    "course_name": "CSE 12. Basic Data Structures and Object-Oriented Design",
    "credits": "4",
    "description": "Use and implementation of basic data structures including linked lists, stacks, and queues. Use of advanced structures such as binary trees and hash tables. Object-oriented design including interfaces, polymorphism, encapsulation, abstract data types, pre-/post-conditions. Recursion. Uses Java and Java Collections.",
    "prerequisite_segments": [
      [
        "CSE 8B",
        "0"
      ],
      [
        "CSE 11",
        "0"
      ]
    ],
    "prerequisites": "CSE 8B or CSE 11",
    "notes": "restricted to undergraduates. Graduate students will be allowed as space permits."
  },
  {
    "course_code": "CSE 15L",
    "course_name": "CSE 15L. Software Tools and Techniques Laboratory",
    "credits": "2",
    "description": "Hands-on exploration of software development tools and techniques. Investigation of the scientific process as applied to software development and debugging. Emphasis is on weekly hands-on laboratory experiences, development of laboratory notebooking techniques as applied to software design.",
    "prerequisite_segments": [
      [
        "CSE 8B",
        "0"
      ],
      [
        "CSE 11",
        "0"
      ],
      [
        "CSE 12",
        "0"
      ],
      [
        "DSC 30",
        "0"
      ]
    ],
    "prerequisites": "CSE 8B or CSE 11 or CSE 12 or DSC 30",
    "notes": "restricted to undergraduates. Graduate students will be allowed as space permits."
  },
  {
    "course_code": "CSE 20",
    "course_name": "CSE 20. Discrete Mathematics",
    "credits": "4",
    "description": "This course will introduce the ways logic is used in computer science: for reasoning, as a language for specifications, and as operations in computation. Concepts include sets, relations, functions, equivalence relations, partial orders, number systems, and proof methods (especially induction and recursion). Propositional and predicate logic will be introduced and applied to various computer science domains such as circuit design, databases, cryptography, and program correctness. Students who have completed MATH 109 may not receive credit for CSE 20. Credit not offered for both MATH 15A and CSE 20. Equivalent to MATH 15A.",
    "prerequisite_segments": [
      [
        "CSE 11",
        "0"
      ],
      [
        "CSE 6R",
        "0"
      ],
      [
        "CSE 8A",
        "0"
      ],
      [
        "CSE 8B",
        "0"
      ],
      [
        "ECE 15",
        "0"
      ]
    ],
    "prerequisites": "CSE 11 or CSE 6R or CSE 8A or CSE 8B or ECE 15",
    "notes": "Prerequisite courses must have been completed with a grade of C– or better; restricted to undergraduates. Graduate students will be allowed as space permits."
  },
  {
    "course_code": "CSE 21",
    "course_name": "CSE 21. Mathematics for Algorithms and Systems",
    "credits": "4",
    "description": "This course will cover mathematical concepts used to model and analyze algorithms and computer systems. Topics include counting techniques (inclusion-exclusion; recursive counting; permutations and combinations), data representations, analysis of algorithms (order notation; time complexities; loop invariants), recurrence relations, graphs and trees (data structure representations; basic graph algorithms; special classes of graphs), and basic probability and its applications.",
    "prerequisite_segments": [
      [
        "CSE 20",
        "0"
      ],
      [
        "MATH 15A",
        "0"
      ],
      [
        "MATH 31CH",
        "0"
      ]
    ],
    "prerequisites": "CSE 20 or MATH 15A or MATH 31CH",
    "notes": "students who have completed MATH 154 or MATH 184 or MATH 188 previously or concurrently may not receive credit for CSE 21; restricted to undergraduates. Graduate students will be allowed as space permits."
  },
  {
    "course_code": "CSE 29",
    "course_name": "CSE 29. Systems Programming and Software Tools",
    "credits": "4",
    "description": "A programmer's view of how computer systems execute programs, store information, and communicate. Emphasis on understanding the details of how a single computer program executes on a computer. Hands-on systems programming using the C programming language and software tools (e.g., gdb, valgrind, make) in the UNIX environment. Builds foundation for courses on computer organization, operating systems, networks, and compilers.",
    "prerequisite_segments": [
      [
        "CSE 11",
        "0"
      ],
      [
        "CSE 8B",
        "0"
      ],
      [
        "ECE 15",
        "0"
      ]
    ],
    "prerequisites": "CSE 11 or CSE 8B or ECE 15",
    "notes": "two units of credit offered for CSE 29 if CSE 15L taken previously."
  },
  {
    "course_code": "CSE 30",
    "course_name": "CSE 30. Computer Organization",
    "credits": "4",
    "description": "Introduction to organization of modern digital computers. Students learn how to write programs in assembly, design basic processors capable of executing the assembly programs, and how to build the basic components of processors using digital logic. Topics include assembly programming, combinational and sequential logic, processor performance, processor design, and the memory hierarchy.",
    "prerequisite_segments": [
      [
        "CSE 15L",
        "0"
      ],
      [
        "CSE 29",
        "0"
      ],
      [
        "ECE 15",
        "0"
      ]
    ],
    "prerequisites": "CSE 15L or CSE 29 or ECE 15",
    "notes": "restricted to undergraduates. Graduate students will be allowed as space permits."
  },
  {
    "course_code": "CSE 42",
    "course_name": "CSE 42. Building and Programming Electronic Devices",
    "credits": "2",
    "description": "This course allows students to use what they learned in introductory programming courses to make things happen in the real world. Working in teams, students will first learn to program Arduino-based devices. Teams of students will design a custom device and program it to do their bidding. This course is targeted to first-year students and sophomores in engineering and science disciplines who want to practice applying what they have learned in a programming class and to have the chance to program things other than computers. Program or materials fees may apply.",
    "prerequisite_segments": [
      [
        "restricted to first-year and sophomore students",
        "0"
      ]
    ],
    "prerequisites": "restricted to first-year and sophomore students",
    "notes": "instructor approval required."
  },
  {
    "course_code": "CSE 86",
    "course_name": "CSE 86. C++ for Java Programmers",
    "credits": "2",
    "description": "Helps the Java programmer to be productive in the C++ programming environment. Topics include the similarities and differences between Java and C++ with special attention to pointers, operator overloading, templates, the STL, the preprocessor, and the C++ Runtime Environment.",
    "prerequisite_segments": [
      [
        "CSE 12",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 12 or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 87",
    "course_name": "CSE 87. First-year Student Seminar",
    "credits": "1",
    "description": "The First-year Student Seminar Program is designed to provide new students with the opportunity to explore an intellectual topic with a faculty member in a small seminar setting. First-year student seminars are offered in all campus departments and undergraduate colleges, and topics vary from quarter to quarter. Enrollment is limited to fifteen to twenty students, with preference given to entering first-year students.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 89",
    "course_name": "CSE 89. Introduction to Computer Science and Engineering Seminar",
    "credits": "2",
    "description": "A seminar format discussion led by CSE faculty on topics in central areas of computer science, concentrating on the relation among them, recent developments, and future directions. This seminar introduces incoming students to resources and opportunities in the CSE department. May be taken for credit up to three times. Restricted to students in the CSE-PACE program.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 90",
    "course_name": "CSE 90. Undergraduate Seminar",
    "credits": "1",
    "description": "A seminar providing an overview of a topic of current research interest to the instructor. The goal is to present a specialized topic in computer science and engineering students. May be taken for credit three times when topics vary.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 91",
    "course_name": "CSE 91. Perspectives in Computer Science and Engineering",
    "credits": "2",
    "description": "A seminar format discussion led by CSE faculty on topics in central areas of computer science, concentrating on the relation among them, recent developments, and future directions.",
    "prerequisite_segments": [
      [
        "majors only",
        "0"
      ]
    ],
    "prerequisites": "majors only",
    "notes": "none"
  },
  {
    "course_code": "CSE 95",
    "course_name": "CSE 95. Tutor Apprenticeship",
    "credits": "2",
    "description": "Students assigned to tutor for a CSE course for the first time receive individual and group mentoring and training on how to be effective tutors to help them develop the skills and tools needed to be effective in their tutor role. Students must have a concurrent tutor appointment in a CSE course. See CSE website for application information.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 99",
    "course_name": "CSE 99. Independent Study in Computer Science and Engineering",
    "credits": "4",
    "description": "Independent reading or research by special arrangement with a faculty member.",
    "prerequisite_segments": [
      [
        "lower-division standing",
        "0"
      ]
    ],
    "prerequisites": "lower-division standing",
    "notes": "Completion of thirty units at UC San Diego with a UC San Diego GPA of 3.0. Special Studies form required. Department stamp required. Consent of instructor and approval of the department."
  },
  {
    "course_code": "CSE 100",
    "course_name": "CSE 100. Advanced Data Structures",
    "credits": "4",
    "description": "High-performance data structures and supporting algorithms. Use and implementation of data structures like (un)balanced trees, graphs, priority queues, and hash tables. Also, memory management, pointers, recursion. Theoretical and practical performance analysis, both average case and amortized. Uses C++ and STL. Recommended preparation: background in C or C++ programming.",
    "prerequisite_segments": [
      [
        "CSE 21",
        "0"
      ],
      [
        "MATH 154",
        "0"
      ],
      [
        "MATH 158",
        "0"
      ],
      [
        "MATH 184",
        "0"
      ],
      [
        "MATH 188 and CSE 12 and CSE 15L and CSE 30",
        "0"
      ],
      [
        "ECE 15",
        "0"
      ]
    ],
    "prerequisites": "CSE 21 or MATH 154 or MATH 158 or MATH 184 or MATH 188 and CSE 12 and CSE 15L and CSE 30 or ECE 15",
    "notes": "restricted to undergraduates. Graduate students will be allowed as space permits. Students may not receive credit for both CSE 100R and CSE 100."
  },
  {
    "course_code": "CSE 100R",
    "course_name": "CSE 100R. Advanced Data Structures",
    "credits": "4",
    "description": "High-performance data structures and supporting algorithms. Use and implementation of data structures like (un)balanced trees, graphs, priority queues, and hash tables. Also memory management, pointers, recursion. Theoretical and practical performance analysis, both average case and amortized. Uses C++ and STL.",
    "prerequisite_segments": [
      [
        "CSE 21",
        "0"
      ],
      [
        "MATH 154",
        "0"
      ],
      [
        "MATH 158",
        "0"
      ],
      [
        "MATH 184",
        "0"
      ],
      [
        "MATH 188 and CSE 12 and CSE 15L and CSE 30",
        "0"
      ],
      [
        "ECE 15",
        "0"
      ]
    ],
    "prerequisites": "CSE 21 or MATH 154 or MATH 158 or MATH 184 or MATH 188 and CSE 12 and CSE 15L and CSE 30 or ECE 15",
    "notes": "This course is a distance education course. Students may not receive credit for both CSE 100R and CSE 100."
  },
  {
    "course_code": "CSE 101",
    "course_name": "CSE 101. Design and Analysis of Algorithms",
    "credits": "4",
    "description": "Design and analysis of efficient algorithms with emphasis of nonnumerical algorithms such as sorting, searching, pattern matching, and graph and network algorithms. Measuring complexity of algorithms, time and storage. NP-complete problems.",
    "prerequisite_segments": [
      [
        "CSE 21",
        "0"
      ],
      [
        "MATH 154",
        "0"
      ],
      [
        "MATH 158",
        "0"
      ],
      [
        "MATH 184",
        "0"
      ],
      [
        "MATH 188 and CSE 12",
        "0"
      ],
      [
        "DSC 30",
        "0"
      ]
    ],
    "prerequisites": "CSE 21 or MATH 154 or MATH 158 or MATH 184 or MATH 188 and CSE 12 or DSC 30",
    "notes": "restricted to undergraduates. Graduate students will be allowed as space permits."
  },
  {
    "course_code": "CSE 103",
    "course_name": "CSE 103. A Practical Introduction to Probability and Statistics",
    "credits": "4",
    "description": "Distributions over the real line. Independence, expectation, conditional expectation, mean, variance. Hypothesis testing. Learning classifiers. Distributions over R^n, covariance matrix. Binomial, Poisson distributions. Chernoff bound. Entropy. Compression. Arithmetic coding. Maximal likelihood estimation. Bayesian estimation. CSE 103 is not duplicate credit for ECE 109, ECON 120A, or MATH 183.",
    "prerequisite_segments": [
      [
        "MATH 20B and CSE 21",
        "0"
      ],
      [
        "MATH 154",
        "0"
      ],
      [
        "MATH 158",
        "0"
      ],
      [
        "MATH 184",
        "0"
      ],
      [
        "MATH 188",
        "0"
      ]
    ],
    "prerequisites": "MATH 20B and CSE 21 or MATH 154 or MATH 158 or MATH 184 or MATH 188",
    "notes": "restricted to CS25, CS26, CS27, and CS28 majors. Other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 105",
    "course_name": "CSE 105. Theory of Computability",
    "credits": "4",
    "description": "An introduction to the mathematical theory of computability. Formal languages. Finite automata and regular expressions. Push-down automata and context-free languages. Computable or recursive functions: Turing machines, the halting problem. Undecidability.",
    "prerequisite_segments": [
      [
        "CSE 12 and CSE 15L and CSE 20",
        "0"
      ],
      [
        "MATH 109",
        "0"
      ],
      [
        "MATH 15A",
        "0"
      ],
      [
        "MATH 31CH and CSE 21",
        "0"
      ],
      [
        "MATH 100A",
        "0"
      ],
      [
        "MATH 103A",
        "0"
      ],
      [
        "MATH 154",
        "0"
      ],
      [
        "MATH 158",
        "0"
      ],
      [
        "MATH 184",
        "0"
      ],
      [
        "MATH 188",
        "0"
      ]
    ],
    "prerequisites": "CSE 12 and CSE 15L and CSE 20 or MATH 109 or MATH 15A or MATH 31CH and CSE 21 or MATH 100A or MATH 103A or MATH 154 or MATH 158 or MATH 184 or MATH 188",
    "notes": " Tag: Theory/Abstraction. Graduate students will be allowed as space permits."
  },
  {
    "course_code": "CSE 106",
    "course_name": "CSE 106. Discrete and Continuous Optimization",
    "credits": "4",
    "description": "One frequently deals with problems in engineering, data science, business, economics, and other disciplines for which algorithmic solutions that optimize a given quantity under constraints are desired. This course is an introduction to the models, theory, methods, and applications of discrete and continuous optimization. Topics include shortest paths, flows, linear, integer, and convex programming, and continuous optimization techniques such as steepest descent and Lagrange multipliers.",
    "prerequisite_segments": [
      [
        "MATH 18",
        "0"
      ],
      [
        "MATH 31AH and MATH 20C",
        "0"
      ],
      [
        "MATH 31BH and CSE 21",
        "0"
      ],
      [
        "DSC 40B",
        "0"
      ],
      [
        "MATH 154",
        "0"
      ],
      [
        "MATH 158",
        "0"
      ],
      [
        "MATH 184",
        "0"
      ],
      [
        "MATH 188",
        "0"
      ]
    ],
    "prerequisites": "MATH 18 or MATH 31AH and MATH 20C or MATH 31BH and CSE 21 or DSC 40B or MATH 154 or MATH 158 or MATH 184 or MATH 188",
    "notes": " Tag: Theory/Abstraction"
  },
  {
    "course_code": "CSE 107",
    "course_name": "CSE 107. Introduction to Modern Cryptography",
    "credits": "4",
    "description": "Topics include private and public-key cryptography, block ciphers, data encryption, authentication, key distribution and certification, pseudorandom number generators, design and analysis of protocols, zero-knowledge proofs, and advanced protocols. Emphasizes rigorous mathematical approach including formal definitions of security goals and proofs of protocol security.",
    "prerequisite_segments": [
      [
        "CSE 21",
        "0"
      ],
      [
        "MATH 154",
        "0"
      ],
      [
        "MATH 158",
        "0"
      ],
      [
        "MATH 184",
        "0"
      ],
      [
        "MATH 188 and CSE 101 and CSE 105",
        "0"
      ]
    ],
    "prerequisites": "CSE 21 or MATH 154 or MATH 158 or MATH 184 or MATH 188 and CSE 101 and CSE 105",
    "notes": " Tag: Theory/Abstraction. restricted to students within the CS25, CS26, CS27, CS28, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 109",
    "course_name": "CSE 109. Introduction to Programming Contests",
    "credits": "2",
    "description": "This course introduces the algorithms and concepts necessary to compete in programming contests like ACM International Collegiate Programming Contest (ICPC). The course requires weekly completion of short problem sets. Topics covered include standard library classes and data structures useful for programming contest problems, basic complexity analysis, dynamic programming, graph algorithms, number theory, combinatorics, computational geometry, combinatorial games, and contest strategy.",
    "prerequisite_segments": [
      [
        "CSE 30",
        "0"
      ],
      [
        "permission of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 30 or permission of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 112",
    "course_name": "CSE 112. Advanced Software Engineering",
    "credits": "4",
    "description": "This course will cover software engineering topics associated with large systems development such as requirements and specifications, testing and maintenance, and design. Specific attention will be given to development tools and automated support environments.",
    "prerequisite_segments": [
      [
        "CSE 110",
        "0"
      ]
    ],
    "prerequisites": "CSE 110",
    "notes": " Tag: Applications of Computing. restricted to students within the CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 118",
    "course_name": "CSE 118. Ubiquitous Computing",
    "credits": "4",
    "description": "Explores emerging opportunities enabled by cheap sensors and networked computing devices. Small research projects will be conducted in teams, culminating in project presentations at the end of the term. Section will cover material relevant to the project, such as research methods, software engineering, teamwork, and project management.",
    "prerequisite_segments": [
      [
        "any course from the following: CSE 131, CSE 132B, COGS 102C, COGS 121, COGS 184, COMT 111B, COMT 115, ECE 111, ECE 118, ECE 191, ECE 192",
        "0"
      ],
      [
        "ICAM 160B",
        "0"
      ]
    ],
    "prerequisites": "any course from the following: CSE 131, CSE 132B, COGS 102C, COGS 121, COGS 184, COMT 111B, COMT 115, ECE 111, ECE 118, ECE 191, ECE 192, or ICAM 160B",
    "notes": " Tag: Applications of Computing. or consent of instructor."
  },
  {
    "course_code": "CSE 120",
    "course_name": "CSE 120. Principles of Computer Operating Systems",
    "credits": "4",
    "description": "Basic functions of operating systems; basic kernel structure, concurrency, memory management, virtual memory, file systems, process scheduling, security and protection.",
    "prerequisite_segments": [
      [
        "CSE 30 and CSE 101 and CSE 110",
        "0"
      ]
    ],
    "prerequisites": "CSE 30 and CSE 101 and CSE 110",
    "notes": " Tag: Systems. restricted to students within the CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 121",
    "course_name": "CSE 121. Real-World Operating Systems",
    "credits": "4",
    "description": "Case study of architecture and implementation of a modern operating system or parts of multiple operating systems. In-depth analysis through detailed study of deployed source code. Topics vary based on OS understudy each term. Emphasis on emerging concerns and the new techniques and technologies used to address them. Recommended preparation: Knowledge of programming languages and paradigms, the components that comprise them, and the principles of language design are strongly recommended but not required.",
    "prerequisite_segments": [
      [
        "CSE 120",
        "0"
      ]
    ],
    "prerequisites": "CSE 120",
    "notes": " Tag: Systems"
  },
  {
    "course_code": "CSE 122",
    "course_name": "CSE 122. Wireless Networks",
    "credits": "4",
    "description": "This course covers the design, operation, and use of wireless technologies, with emphasis on how physical resource constraints and application constraints meet to affect link, network, system, and application design, with hands-on experience in multiple technologies. May be coscheduled with CSE 222C. Recommended preparation: Basics of software engineering, modular design, data structures, physical (in-memory) representation of data structures, code compilation, build systems, version control, debuggers, C code, and pointer manipulation in C.",
    "prerequisite_segments": [
      [
        "CSE 30",
        "0"
      ],
      [
        "ECE 30 and CSE 101",
        "0"
      ],
      [
        "ECE 141A and CSE 110",
        "0"
      ],
      [
        "ECE 141B",
        "0"
      ]
    ],
    "prerequisites": "CSE 30 or ECE 30 and CSE 101 or ECE 141A and CSE 110 or ECE 141B",
    "notes": " Tag: Systems"
  },
  {
    "course_code": "CSE 123",
    "course_name": "CSE 123. Computer Networks",
    "credits": "4",
    "description": "Introduction to concepts, principles, and practice of computer communication networks with examples from existing architectures, protocols, and standards with special emphasis on the internet protocols. Layering and the OSI model; physical and data link layers; local and wide area networks; datagrams and virtual circuits; routing and congestion control; internetworking. Transport protocols. Credit may not be received for both CSE 123 and ECE 158A.",
    "prerequisite_segments": [
      [
        "CSE 30 and CSE 101 and CSE 110",
        "0"
      ]
    ],
    "prerequisites": "CSE 30 and CSE 101 and CSE 110",
    "notes": " Tag: Systems. restricted to students within the CS25, CS26, CS27, CS28, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 124",
    "course_name": "CSE 124. Networked Services",
    "credits": "4",
    "description": "(Renumbered from CSE 123B.) The architecture of modern networked services, including data center design, enterprise storage, fault tolerance, and load balancing. Protocol software structuring, the Transmission Control Protocol (TCP), remote procedure calls, protocols for digital audio and video communication, overlay and peer-to-peer systems, secure communication. Credit may not be received for both CSE 124 and ECE 158B. Students may not receive credit for both CSE 123B and CSE 124.",
    "prerequisite_segments": [
      [
        "CSE 30 and CSE 101 and CSE 110",
        "0"
      ]
    ],
    "prerequisites": "CSE 30 and CSE 101 and CSE 110",
    "notes": " Tag: Systems. restricted to students within the CS25, CS26, CS27, CS28, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 125",
    "course_name": "CSE 125. Software System Design and Implementation",
    "credits": "4",
    "description": "Design and implementation of large, complex software systems involving multiple aspects of CSE curriculum. Emphasis is on software system design applied to a single, large group project with close interaction with instructor.",
    "prerequisite_segments": [
      [
        "senior standing with substantial programming experience, and consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "senior standing with substantial programming experience, and consent of instructor",
    "notes": " Tag: Applications of Computing. Department stamp required."
  },
  {
    "course_code": "CSE 127",
    "course_name": "CSE 127. Introduction to Computer Security",
    "credits": "4",
    "description": "Topics include basic cryptography, security/threat analysis, access control, auditing, security models, distributed systems security, and theory behind common attack and defense techniques. The class will go over formal models as well as the bits and bytes of security exploits.",
    "prerequisite_segments": [
      [
        "CSE 21",
        "0"
      ],
      [
        "MATH 154",
        "0"
      ],
      [
        "MATH 158",
        "0"
      ],
      [
        "MATH 184",
        "0"
      ],
      [
        "MATH 188 and CSE 120",
        "0"
      ],
      [
        "CSE 123",
        "0"
      ],
      [
        "CSE 124",
        "0"
      ]
    ],
    "prerequisites": "CSE 21 or MATH 154 or MATH 158 or MATH 184 or MATH 188 and CSE 120 or CSE 123 or CSE 124",
    "notes": " Tags: Systems, Applications of Computing. restricted to students within the CS25, CS26, CS27, CS28, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 130",
    "course_name": "CSE 130. Programming Languages: Principles and Paradigms",
    "credits": "4",
    "description": "(Formerly CSE 173.) Introduction to programming languages and paradigms, the components that comprise them, and the principles of language design, all through the analysis and comparison of a variety of languages (e.g., Pascal, Ada, C++, PROLOG, ML.) Will involve programming in most languages studied.",
    "prerequisite_segments": [
      [
        "CSE 12 and CSE 100",
        "0"
      ],
      [
        "CSE 100R and CSE 105",
        "0"
      ]
    ],
    "prerequisites": "CSE 12 and CSE 100 or CSE 100R and CSE 105",
    "notes": " Tag: Theory/Abstraction. restricted to students within the CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 131",
    "course_name": "CSE 131. Compiler Construction",
    "credits": "4",
    "description": "(Formerly CSE 131B.) Introduction to the compilation of programming languages, practice of syntax-directed translation, type checking, code generation, optimization, interpretation, and compiler structure. Students may receive repeat credit for CSE 131A and CSE 131B by completing CSE 131. May be coscheduled with CSE 231.",
    "prerequisite_segments": [
      [
        "CSE 100",
        "0"
      ],
      [
        "CSE 100R and CSE 105 and CSE 130",
        "0"
      ]
    ],
    "prerequisites": "CSE 100 or CSE 100R and CSE 105 and CSE 130",
    "notes": " Tag: Applications of Computing. restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 132A",
    "course_name": "CSE 132A. Database System Principles",
    "credits": "4",
    "description": "Basic concepts of databases, including data modeling, relational databases, query languages, optimization, dependencies, schema design, and concurrency control. Exposure to one or several commercial database systems. Advanced topics such as deductive and object-oriented databases, time allowing.",
    "prerequisite_segments": [
      [
        "CSE 100",
        "0"
      ],
      [
        "CSE 100R",
        "0"
      ]
    ],
    "prerequisites": "CSE 100 or CSE 100R",
    "notes": " Tag: Theory/Abstraction. restricted to students within the CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 132B",
    "course_name": "CSE 132B. Database Systems Applications",
    "credits": "4",
    "description": "Design of databases, transactions, use of trigger facilities and datablades. Performance measuring, organization of index structures.",
    "prerequisite_segments": [
      [
        "CSE 132A",
        "0"
      ]
    ],
    "prerequisites": "CSE 132A",
    "notes": " Tag: Applications of Computing. restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 132C",
    "course_name": "CSE 132C. Database System Implementation",
    "credits": "4",
    "description": "This is a systems-focused course on the internals of a relational database management system (RDBMS). RDBMSs power large-scale structured data management in most digital applications. The topics span data storage, buffer management, indexing, sorting, relational operator implementations, query processing and optimization, parallel RDBMSs, and “Big Data” systems. Two C++ programming projects require implementation of a buffer manager and a B+ tree index using a given RDBMS skeleton. Recommended preparation: C++ programming knowledge is required; CSE 132B is recommended.",
    "prerequisite_segments": [
      [
        "CSE 132A",
        "0"
      ],
      [
        "DSC 102",
        "0"
      ]
    ],
    "prerequisites": "CSE 132A or DSC 102",
    "notes": " Tag: Systems. restricted to CS25, CS26, CS27, CS28, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 134B",
    "course_name": "CSE 134B. Web Client Languages",
    "credits": "4",
    "description": "Design and implementation of interactive World Wide Web clients using helper applications and plug-ins. The main language covered will be Java.",
    "prerequisite_segments": [
      [
        "CSE 100",
        "0"
      ],
      [
        "CSE 100R",
        "0"
      ]
    ],
    "prerequisites": "CSE 100 or CSE 100R",
    "notes": " Tag: Applications of Computing. restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 135",
    "course_name": "CSE 135. Online Database Analytics Applications",
    "credits": "4",
    "description": "Database, data warehouse, and data cube design; SQL programming and querying with emphasis on analytics; online analytics applications, visualizations, and data exploration; performance tuning.",
    "prerequisite_segments": [
      [
        "CSE 100",
        "0"
      ],
      [
        "CSE 100R",
        "0"
      ]
    ],
    "prerequisites": "CSE 100 or CSE 100R",
    "notes": " Tag: Applications of Computing. restricted to students within the CS25, CS26, CS27, CS28, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 136",
    "course_name": "CSE 136. Enterprise-Class Web Applications",
    "credits": "4",
    "description": "Design and implementation of very large-scale, web-based applications. Topics covered typically include modeling organizational needs, design and revision management, J2EE or similar software platforms, web server and application server functionality, reuse of object-oriented components, model-view-controller and other design patterns, clustering, load-balancing, fault-tolerance, authentication, and usage accounting.",
    "prerequisite_segments": [
      [
        "CSE 135",
        "0"
      ]
    ],
    "prerequisites": "CSE 135",
    "notes": " Tag: Applications of Computing"
  },
  {
    "course_code": "CSE 140",
    "course_name": "CSE 140. Components and Design Techniques for Digital Systems",
    "credits": "4",
    "description": "Design of Boolean logic and finite state machines; two-level, multilevel combinational logic design, combinational modules and modular networks, Mealy and Moore machines, analysis and synthesis of canonical forms, sequential modules.",
    "prerequisite_segments": [
      [
        "CSE 20",
        "0"
      ],
      [
        "MATH 109",
        "0"
      ],
      [
        "MATH 15A",
        "0"
      ],
      [
        "MATH 31CH and CSE 30",
        "0"
      ]
    ],
    "prerequisites": "CSE 20 or MATH 109 or MATH 15A or MATH 31CH and CSE 30",
    "notes": " Tags: Systems, Theory/Abstraction, Applications of Computing. CSE 140L must be taken concurrently; restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 140L",
    "course_name": "CSE 140L. Digital Systems Laboratory",
    "credits": "2",
    "description": "Implementation with computer-aided design tools for combinational logic minimization and state machine synthesis. Hardware construction of a small digital system.",
    "prerequisite_segments": [
      [
        "CSE 20",
        "0"
      ],
      [
        "MATH 109",
        "0"
      ],
      [
        "MATH 15A",
        "0"
      ],
      [
        "MATH 31CH and CSE 30",
        "0"
      ]
    ],
    "prerequisites": "CSE 20 or MATH 109 or MATH 15A or MATH 31CH and CSE 30",
    "notes": " Tags: Systems, Applications of Computing. CSE 140 must be taken concurrently; restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 141",
    "course_name": "CSE 141. Introduction to Computer Architecture",
    "credits": "4",
    "description": "Introduction to computer architecture. Computer system design. Processor design. Control design. Memory systems. Two units of credit offered for CSE 141 if CSE 142 taken previously.",
    "prerequisite_segments": [
      [
        "CSE 30 and CSE 140 and CSE 140L",
        "0"
      ]
    ],
    "prerequisites": "CSE 30 and CSE 140 and CSE 140L",
    "notes": " Tag: Systems. CSE 141L should be taken concurrently; restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 141L",
    "course_name": "CSE 141L. Project in Computer Architecture",
    "credits": "2",
    "description": "Hands-on computer architecture project aiming to familiarize students with instruction set architecture, and design of process. Control and memory systems.",
    "prerequisite_segments": [
      [
        "CSE 30 and CSE 140 and CSE 140L",
        "0"
      ]
    ],
    "prerequisites": "CSE 30 and CSE 140 and CSE 140L",
    "notes": " Tag: Systems. CSE 141 should be taken concurrently; restricted to CS25, CS26, CS27, CS28, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 142",
    "course_name": "CSE 142. Introduction to Computer Architecture: A Software Perspective",
    "credits": "4",
    "description": "This course covers the operation, structure, and programming interfaces of modern CPUs with an emphasis on exploiting processor features to improve software performance and efficiency. The topics covered in this course include performance, energy, x86 assembly, compiler optimizations, pipelining, instruction-level parallelism, caches, memory-level parallelism, multi-threading, multi-core processors, and SIMD. Two units of credit offered for CSE 142 if CSE 141 taken previously or concurrently.",
    "prerequisite_segments": [
      [
        "CSE 30 and CSE 100",
        "0"
      ],
      [
        "CSE 100R",
        "0"
      ]
    ],
    "prerequisites": "CSE 30 and CSE 100 or CSE 100R",
    "notes": " Tag: Systems. CSE 142L should be taken concurrently. Restricted to students within the CS25, CS26, CS27, CS28, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 142L",
    "course_name": "CSE 142L. Software Project for Computer Architecture",
    "credits": "2",
    "description": "This course provides hands-on experience in using the features of modern CPUs to increase the performance and efficiency of programs.",
    "prerequisite_segments": [
      [
        "CSE 30 and CSE 100",
        "0"
      ],
      [
        "CSE 100R",
        "0"
      ]
    ],
    "prerequisites": "CSE 30 and CSE 100 or CSE 100R",
    "notes": " Tags: Systems, Applications of Computing. CSE 142 should be taken concurrently. Restricted to students within the CS25, CS26, CS27, CS28, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 143",
    "course_name": "CSE 143. Microelectronic System Design",
    "credits": "4",
    "description": "VLSI process technologies; circuit characterization; logic design styles; clocking strategies; computer-aided design tools; subsystem design; design case studies. System design project from hardware description, logic synthesis, physical layout to design verification.",
    "prerequisite_segments": [
      [
        "CSE 140",
        "0"
      ]
    ],
    "prerequisites": "CSE 140",
    "notes": " Tag: Systems. Restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 145",
    "course_name": "CSE 145. Embedded System Design Project",
    "credits": "4",
    "description": "Project class building an embedded computing system. Learn fundamental knowledge of microcontrollers, sensors, and actuators. Introduction to the hardware and software tools to build project in a team environment and end-to-end system building.",
    "prerequisite_segments": [
      [
        "instructor approval required, by application only",
        "0"
      ]
    ],
    "prerequisites": "instructor approval required, by application only",
    "notes": " Tags: Systems, Applications of Computing"
  },
  {
    "course_code": "CSE 147",
    "course_name": "CSE 147. Introduction to Embedded Systems",
    "credits": "4",
    "description": "This course introduces the breadth of embedded systems, including hardware, software and modeling techniques. Embedded hardware topics include various types of processors and accelerators, memory, system and communication interfaces, sensors, and actuators. Embedded software includes timing, real-time and distributed scheduling, operating systems. The class will have design projects using off the shelf hardware and software components. Recommended preparation: Basic understanding of operating systems and computer architecture is strongly recommended.",
    "prerequisite_segments": [
      [
        "CSE 30",
        "0"
      ]
    ],
    "prerequisites": "CSE 30",
    "notes": " Tag: Systems"
  },
  {
    "course_code": "CSE 148",
    "course_name": "CSE 148. Advanced Processor Architecture Design Project",
    "credits": "4",
    "description": "Students will use hardware description language tools to add advanced architectural features to a basic processor design. These features may include pipelining, superscalar execution, branch prediction, and advanced cache features. Designs will be implemented in programmable logic devices.",
    "prerequisite_segments": [
      [
        "CSE 141 and CSE 141L",
        "0"
      ]
    ],
    "prerequisites": "CSE 141 and CSE 141L",
    "notes": " Tags: Systems, Applications of Computing. graduate students will be allowed as space permits."
  },
  {
    "course_code": "CSE 150A",
    "course_name": "CSE 150A. Introduction to Artificial Intelligence: Probabilistic Reasoning and Decision-Making",
    "credits": "4",
    "description": "Introduction to probabilistic models at the heart of modern artificial intelligence. Specific topics to be covered include probabilistic methods for reasoning and decision-making under uncertainty; inference and learning in Bayesian networks; prediction and planning in Markov decision processes; applications to intelligent systems, speech and natural language processing, information retrieval, and robotics.",
    "prerequisite_segments": [
      [
        "CSE 12",
        "0"
      ],
      [
        "DSC 40B and CSE 15L",
        "0"
      ],
      [
        "DSC 80 and COGS 118D",
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
      ],
      [
        "MATH 180A",
        "0"
      ],
      [
        "MATH 183 and MATH 20A and MATH 18",
        "0"
      ],
      [
        "MATH 31AH",
        "0"
      ]
    ],
    "prerequisites": "CSE 12 or DSC 40B and CSE 15L or DSC 80 and COGS 118D or CSE 103 or ECE 109 or ECON 120A or MATH 180A or MATH 183 and MATH 20A and MATH 18 or MATH 31AH",
    "notes": " Tag: Theory/Abstraction. restricted to students within the CS25, CS26, CS27, CS28, EC26, and DS25 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 150B",
    "course_name": "CSE 150B. Introduction to Artificial Intelligence: Search and Reasoning",
    "credits": "4",
    "description": "The course will introduce important ideas and algorithms in search and reasoning and demonstrate how they are used in practical AI applications. Topics include A* search, adversarial search, Monte Carlo tree search, reinforcement learning, constraint solving and optimization, propositional and first-order reasoning.",
    "prerequisite_segments": [
      [
        "CSE 12",
        "0"
      ],
      [
        "DSC 40B and CSE 15L",
        "0"
      ],
      [
        "DSC 80 and COGS 118D",
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
      ],
      [
        "MATH 180A",
        "0"
      ],
      [
        "MATH 183 and CSE 100",
        "0"
      ],
      [
        "CSE 100R",
        "0"
      ]
    ],
    "prerequisites": "CSE 12 or DSC 40B and CSE 15L or DSC 80 and COGS 118D or CSE 103 or ECE 109 or ECON 120A or MATH 180A or MATH 183 and CSE 100 or CSE 100R",
    "notes": " Tag: Applications of Computing. restricted to students within the CS25, CS26, CS27, CS28, EC26, and DS25 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 151A",
    "course_name": "CSE 151A. Machine Learning: Learning Algorithms",
    "credits": "4",
    "description": "Broad introduction to machine learning. The topics include some topics in supervised learning, such as k-nearest neighbor classifiers, decision trees, boosting, and perceptrons; and topics in unsupervised learning, such as k-means and hierarchical clustering. In addition to the actual algorithms, the course focuses on the principles behind the algorithms. Students may not receive credit for both CSE 151A and COGS 188, nor may they receive credit for both CSE 151A and CSE 151. Course may be coscheduled with CSE 251A.",
    "prerequisite_segments": [
      [
        "CSE 12",
        "0"
      ],
      [
        "DSC 40B and CSE 15L",
        "0"
      ],
      [
        "DSC 80 and COGS 118D",
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
        "MATH 180B",
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
        "MATH 186 and MATH 18",
        "0"
      ],
      [
        "MATH 31AH and MATH 20C",
        "0"
      ],
      [
        "MATH 31BH",
        "0"
      ]
    ],
    "prerequisites": "CSE 12 or DSC 40B and CSE 15L or DSC 80 and COGS 118D or CSE 103 or ECE 109 or ECON 120A or MAE 108 or MATH 180A or MATH 180B or MATH 181A or MATH 183 or MATH 186 and MATH 18 or MATH 31AH and MATH 20C or MATH 31BH",
    "notes": " Tag: Applications of Computing. restricted to students within the CS25, CS26, CS27, CS28, EC26, and DS25 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 151B",
    "course_name": "CSE 151B. Deep Learning",
    "credits": "4",
    "description": "This course covers the fundamentals of deep neural networks at the undergraduate level. We introduce linear regression, multi-layer perceptrons, backpropagation, and automatic differentiation. We will also discuss convolutional neural networks, recurrent neural networks, and transformers. The course will be a combination of lectures, presentations, and machine learning competitions. Renumbered from CSE 154. Students may receive credit for one of the following: CSE 151B, CSE 154, or COGS 181. May be coscheduled with CSE 251B. Recommended preparation: knowledge of Python.",
    "prerequisite_segments": [
      [
        "MATH 20C",
        "0"
      ],
      [
        "MATH 31BH and BENG 134",
        "0"
      ],
      [
        "COGS 118D",
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
        "MATH 180B",
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
        "MATH 186",
        "0"
      ],
      [
        "SE 125 and COGS 118A",
        "0"
      ],
      [
        "COGS 118B",
        "0"
      ],
      [
        "COGS 188",
        "0"
      ],
      [
        "CSE 151A",
        "0"
      ],
      [
        "ECE 175A",
        "0"
      ]
    ],
    "prerequisites": "MATH 20C or MATH 31BH and BENG 134 or COGS 118D or CSE 103 or ECE 109 or ECON 120A or MAE 108 or MATH 180A or MATH 180B or MATH 181A or MATH 183 or MATH 186 or SE 125 and COGS 118A or COGS 118B or COGS 188 or CSE 151A or ECE 175A",
    "notes": " Tag: Applications of Computing. restricted to students within the CS25, CS26, CS27, CS28, EC26, and DS25 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 152A",
    "course_name": "CSE 152A. Introduction to Computer Vision I",
    "credits": "4",
    "description": "This course provides a broad introduction to the foundations, algorithms, and applications of computer vision. It introduces classical models and contemporary methods, from image formation models to deep learning, to address problems of 3-D reconstruction and object recognition from images and video. Topics include filtering, feature detection, stereo vision, structure from motion, motion estimation, and recognition. Programming assignments will be in Python. Students may not receive credit for both CSE 152A and CSE 152.",
    "prerequisite_segments": [
      [
        "MATH 18",
        "0"
      ],
      [
        "MATH 31AH and CSE 12",
        "0"
      ],
      [
        "DSC 30 and CSE 15L",
        "0"
      ],
      [
        "DSC 80",
        "0"
      ]
    ],
    "prerequisites": "MATH 18 or MATH 31AH and CSE 12 or DSC 30 and CSE 15L or DSC 80",
    "notes": " Tag: Applications of Computing. Python programming experience recommended; restricted to students within the CS25, CS26, CS27, CS28, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 152B",
    "course_name": "CSE 152B. Introduction to Computer Vision II",
    "credits": "4",
    "description": "This course covers advanced topics needed to apply computer vision in industry or follow current research. Example topics include real-time systems for 3-D computer vision, machine learning tools such as support-vector machine (SVM) and boosting for image classification, and deep neural networks for object detection and semantic segmentation.",
    "prerequisite_segments": [
      [
        "CSE 152A",
        "0"
      ],
      [
        "CSE 152",
        "0"
      ],
      [
        "CSE 166",
        "0"
      ]
    ],
    "prerequisites": "CSE 152A or CSE 152 or CSE 166",
    "notes": " Tag: Applications of Computing. Python programming experience recommended; restricted to students within the CS25, CS26, CS27, CS28, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 156",
    "course_name": "CSE 156. Statistical Natural Language Processing",
    "credits": "4",
    "description": "Natural language processing (NLP) is a field of AI which aims to equip computers with the ability to intelligently process natural (human) language. This course will explore statistical techniques for the automatic analysis of natural language data. Specific topics covered include probabilistic language models, which define probability distributions over text passages; text classification; sequence models; parsing sentences into syntactic representations; and machine translation.",
    "prerequisite_segments": [
      [
        "CSE 12",
        "0"
      ],
      [
        "DSC 40B and CSE 15L",
        "0"
      ],
      [
        "DSC 80 and BENG 134",
        "0"
      ],
      [
        "COGS 118D",
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
      ],
      [
        "MATH 180A",
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
        "MATH 186",
        "0"
      ]
    ],
    "prerequisites": "CSE 12 or DSC 40B and CSE 15L or DSC 80 and BENG 134 or COGS 118D or CSE 103 or ECE 109 or ECON 120A or MATH 180A or MATH 181A or MATH 183 or MATH 186",
    "notes": " Tag: Applications of Computing. restricted to students within the CS25, CS26, CS27, CS28, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 158",
    "course_name": "CSE 158. Recommender Systems and Web Mining",
    "credits": "4",
    "description": "Current methods for data mining and predictive analytics. Emphasis is on studying real-world data sets, building working systems, and putting current ideas from machine learning research into practice.",
    "prerequisite_segments": [
      [
        "CSE 12",
        "0"
      ],
      [
        "DSC 40B and CSE 15L",
        "0"
      ],
      [
        "DSC 80 and BENG 100",
        "0"
      ],
      [
        "BENG 134",
        "0"
      ],
      [
        "COGS 118D",
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
      ],
      [
        "MATH 180A",
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
        "MATH 186",
        "0"
      ]
    ],
    "prerequisites": "CSE 12 or DSC 40B and CSE 15L or DSC 80 and BENG 100 or BENG 134 or COGS 118D or CSE 103 or ECE 109 or ECON 120A or MATH 180A or MATH 181A or MATH 183 or MATH 186",
    "notes": " Tag: Applications of Computing. restricted to students within the CS25, CS26, CS27, CS28, EC26, and DS25 majors. All other students will be allowed as space permits. May be coscheduled with CSE 258. Students may not receive credit for CSE 158 and CSE 158R or DSC 148."
  },
  {
    "course_code": "CSE 158R",
    "course_name": "CSE 158R. Recommender Systems and Web Mining",
    "credits": "4",
    "description": "Current methods for data mining and predictive analytics. Emphasis is on studying real-world data sets, building working systems, and putting current ideas from machine learning research into practice.",
    "prerequisite_segments": [
      [
        "CSE 12",
        "0"
      ],
      [
        "DSC 40B and CSE 15L",
        "0"
      ],
      [
        "DSC 80 and BENG 100",
        "0"
      ],
      [
        "BENG 134",
        "0"
      ],
      [
        "COGS 118D",
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
      ],
      [
        "MATH 180A",
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
        "MATH 186",
        "0"
      ]
    ],
    "prerequisites": "CSE 12 or DSC 40B and CSE 15L or DSC 80 and BENG 100 or BENG 134 or COGS 118D or CSE 103 or ECE 109 or ECON 120A or MATH 180A or MATH 181A or MATH 183 or MATH 186",
    "notes": " Tag: Applications of Computing. restricted to students within the CS25, CS26, CS27, CS28, EC26, and DS25 majors. All other students will be allowed as space permits. This will be a fully online class based on extensive educational materials and an online educational platform. May be coscheduled with CSE 258R. Students may not receive credit for CSE 158R and CSE 158 or DSC 148."
  },
  {
    "course_code": "CSE 160",
    "course_name": "CSE 160. Introduction to Parallel Computing",
    "credits": "4",
    "description": "Introduction to high performance parallel computing: parallel architecture, algorithms, software, and problem-solving techniques. Areas covered: Flynn’s taxonomy, processor-memory organizations, shared and nonshared memory models: message passing and multithreading, data parallelism; speedup, efficiency and Amdahl’s law, communication and synchronization, isoefficiency and scalability. Assignments given to provide practical experience.",
    "prerequisite_segments": [
      [
        "CSE 100",
        "0"
      ],
      [
        "CSE 100R",
        "0"
      ]
    ],
    "prerequisites": "CSE 100 or CSE 100R",
    "notes": " Tag: Systems. restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits"
  },
  {
    "course_code": "CSE 163",
    "course_name": "CSE 163. Advanced Computer Graphics",
    "credits": "4",
    "description": "Topics include an overview of many aspects of computer graphics, including the four main computer graphics areas of animation, modeling, rendering, and imaging. Programming projects in image and signal processing, geometric modeling, and real-time rendering.",
    "prerequisite_segments": [
      [
        "CSE 167",
        "0"
      ]
    ],
    "prerequisites": "CSE 167",
    "notes": " Tag: Applications of Computing. restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 165",
    "course_name": "CSE 165. 3-D User Interaction",
    "credits": "4",
    "description": "This course focuses on the design of three-dimensional (3-D) user interfaces, VR devices, and interaction techniques. The course consists of lectures, student presentations, and programming assignments. Students will be expected to create VR applications to learn how VR displays and 3-D interactions work.",
    "prerequisite_segments": [
      [
        "CSE 167",
        "0"
      ]
    ],
    "prerequisites": "CSE 167",
    "notes": " Tag: Applications of Computing. restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 166",
    "course_name": "CSE 166. Image Processing",
    "credits": "4",
    "description": "Principles of image formation, analysis, and representation. Image enhancement, restoration, and segmentation; stochastic image models. Filter design, sampling, Fourier and wavelet transforms. Selected applications in computer graphics and machine vision.",
    "prerequisite_segments": [
      [
        "DSC 40B",
        "0"
      ],
      [
        "MATH 18",
        "0"
      ],
      [
        "MATH 31AH and CSE 100",
        "0"
      ],
      [
        "CSE 100R",
        "0"
      ],
      [
        "DSC 80",
        "0"
      ]
    ],
    "prerequisites": "DSC 40B or MATH 18 or MATH 31AH and CSE 100 or CSE 100R or DSC 80",
    "notes": " Tag: Applications of Computing"
  },
  {
    "course_code": "CSE 167",
    "course_name": "CSE 167. Computer Graphics",
    "credits": "4",
    "description": "Representation and manipulation of pictorial data. Two-dimensional and three-dimensional transformations, curves, surfaces. Projection, illumination, and shading models. Raster and vector graphic I/O devices; retained-mode and immediate-mode graphics software systems and applications. Students may not receive credit for CSE 167 and CSE 167R or MATH 155A.",
    "prerequisite_segments": [
      [
        "CSE 100",
        "0"
      ],
      [
        "CSE 100R",
        "0"
      ]
    ],
    "prerequisites": "CSE 100 or CSE 100R",
    "notes": " Tag: Applications of Computing. restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 167R",
    "course_name": "CSE 167R. Computer Graphics",
    "credits": "4",
    "description": "Representation and manipulation of pictorial data. Two-dimensional and three-dimensional transformations, curves, surfaces. Projection, illumination, and shading models. Raster and vector graphic I/O devices; retained-mode and immediate-mode graphics software systems and applications. This course is a distance education course. Students may not receive credit for CSE 167 and CSE 167R or MATH 155A.",
    "prerequisite_segments": [
      [
        "CSE 100",
        "0"
      ],
      [
        "CSE 100R",
        "0"
      ]
    ],
    "prerequisites": "CSE 100 or CSE 100R",
    "notes": " Tag: Applications of Computing. restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 168",
    "course_name": "CSE 168. Computer Graphics II: Rendering",
    "credits": "4",
    "description": "Weekly programming assignments that will cover graphics rendering algorithms. During the course the students will learn about ray tracing, geometry, tessellation, acceleration structures, sampling, filtering, shading models, and advanced topics such as global illumination and programmable graphics hardware. Students may not receive credit for CSE 168 and CSE 168R.",
    "prerequisite_segments": [
      [
        "CSE 167",
        "0"
      ],
      [
        "CSE 167R",
        "0"
      ]
    ],
    "prerequisites": "CSE 167 or CSE 167R",
    "notes": " Tag: Applications of Computing. restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 168R",
    "course_name": "CSE 168R. Computer Graphics II: Rendering",
    "credits": "4",
    "description": "Weekly programming assignments that will cover graphics rendering algorithms. During the course the students will learn about ray tracing, geometry, tessellation, acceleration structures, sampling, filtering, shading models, and advanced topics such as global illumination and programmable graphics hardware. This course is a distance education course. Students may not receive credit for CSE 168R and CSE 168.",
    "prerequisite_segments": [
      [
        "CSE 167",
        "0"
      ],
      [
        "CSE 167R",
        "0"
      ]
    ],
    "prerequisites": "CSE 167 or CSE 167R",
    "notes": " Tag: Applications of Computing. restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 169",
    "course_name": "CSE 169. Computer Animation",
    "credits": "4",
    "description": "Advanced graphics focusing on the programming techniques involved in computer animation. Algorithms and approaches for both character animation and physically based animation. Particular subjects may include skeletons, skinning, key framing, facial animation, inverse kinematics, locomotion, motion capture, video game animation, particle systems, rigid bodies, clothing, and hair. Recommended preparation: an understanding of linear algebra.",
    "prerequisite_segments": [
      [
        "CSE 167",
        "0"
      ]
    ],
    "prerequisites": "CSE 167",
    "notes": " Tag: Applications of Computing. restricted to CS25, CS26, CS27, and EC26 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 170",
    "course_name": "CSE 170. Interaction Design",
    "credits": "5",
    "description": "Introduces fundamental methods and principles for designing, implementing, and evaluating user interfaces. Topics include user-centered design, rapid prototyping, experimentation, direct manipulation, cognitive principles, visual design, social software, software tools. Learn by doing: Work with a team on a quarter-long design project. Students may not receive credit for COGS 120 and CSE 170. Recommended preparation: Basic familiarity with HTML.",
    "prerequisite_segments": [
      [
        "COGS 108",
        "0"
      ],
      [
        "CSE 12",
        "0"
      ],
      [
        "DSC 30 and COGS 1",
        "0"
      ],
      [
        "COGS 10",
        "0"
      ],
      [
        "DSGN 1",
        "0"
      ],
      [
        "ENG 100D",
        "0"
      ]
    ],
    "prerequisites": "COGS 108 or CSE 12 or DSC 30 and COGS 1 or COGS 10 or DSGN 1 or ENG 100D",
    "notes": " Tag: Applications of Computing"
  },
  {
    "course_code": "CSE 175",
    "course_name": "CSE 175. Successful Entrepreneurship for Engineers",
    "credits": "4",
    "description": "A foundation course teaching the basics of starting and running a successful new business. Students learn how to think like entrepreneurs, pivot their ideas to match customer needs, with financial, market, timeline feasibility inputs. The end goal is an investor pitch and a business plan. Provides experiential education, encouragement, and coaching (E3CE) that prepares students for successful careers at start-up as well as large companies.",
    "prerequisite_segments": [
      [
        "instructor approval required to ensure sufficient project experience to be successful in the course",
        "0"
      ]
    ],
    "prerequisites": "instructor approval required to ensure sufficient project experience to be successful in the course",
    "notes": " Tag: Applications of Computing. No credit offered for CSE 175 if ECE 150 taken previously or concurrently."
  },
  {
    "course_code": "CSE 176A",
    "course_name": "CSE 176A. Health Care Robotics",
    "credits": "4",
    "description": "Robotics has the potential to improve well-being for millions of people and support caregivers and to aid the clinical workforce. We bring together engineers, clinicians, and end users to explore this exciting new field. The course is project-based, interactive, and hands-on, and involves working closely with stakeholders to develop prototypes that solve real-world problems. Students will explore the latest research in health care robotics, human-robot teaming, and health design. Program or materials fees may apply.",
    "prerequisite_segments": [
      [
        "CSE 110",
        "0"
      ],
      [
        "CSE 170",
        "0"
      ],
      [
        "COGS 120",
        "0"
      ]
    ],
    "prerequisites": "CSE 110 or CSE 170 or COGS 120",
    "notes": " Tag: Applications of Computing"
  },
  {
    "course_code": "CSE 176E",
    "course_name": "CSE 176E. Robot Systems Design and Implementation",
    "credits": "4",
    "description": "End-to-end system design of embedded electronic systems including PCB design and fabrication, software control system development, and system integration. Program or materials fees may apply. May be coscheduled with CSE 276E.",
    "prerequisite_segments": [
      [
        "restricted to junior and senior students",
        "0"
      ]
    ],
    "prerequisites": "restricted to junior and senior students",
    "notes": " Tag: Applications of Computing. instructor approval required."
  },
  {
    "course_code": "CSE 180",
    "course_name": "CSE 180. Biology Meets Computing",
    "credits": "4",
    "description": "Topics include an overview of various aspects of bioinformatics and will simultaneously introduce students to programming in Python. The assessments in the course represent various programming challenges and include solving diverse biological problems using popular bioinformatics tools. Students may not receive credit for CSE 180 and CSE 180R.",
    "prerequisite_segments": [
      [
        "BILD 1",
        "0"
      ],
      [
        "BILD 4",
        "0"
      ],
      [
        "CSE 11",
        "0"
      ],
      [
        "CSE 3",
        "0"
      ],
      [
        "CSE 8A",
        "0"
      ],
      [
        "CSE 8B",
        "0"
      ]
    ],
    "prerequisites": "BILD 1 or BILD 4 or CSE 11 or CSE 3 or CSE 8A or CSE 8B",
    "notes": "none"
  },
  {
    "course_code": "CSE 180R",
    "course_name": "CSE 180R. Biology Meets Computing",
    "credits": "4",
    "description": "Topics include an overview of various aspects of bioinformatics and will simultaneously introduce students to programming in Python. The assessments in the course represent various programming challenges and include solving diverse biological problems using popular bioinformatics tools. This will be a fully online class based on extensive educational materials and online educational platform Stepik developed with HHMI, NIH, and ILTI support. Students may not receive credit for CSE 180 and CSE 180R.",
    "prerequisite_segments": [
      [
        "BILD 1",
        "0"
      ],
      [
        "BILD 4",
        "0"
      ],
      [
        "CSE 11",
        "0"
      ],
      [
        "CSE 3",
        "0"
      ],
      [
        "CSE 8A",
        "0"
      ],
      [
        "CSE 8B",
        "0"
      ]
    ],
    "prerequisites": "BILD 1 or BILD 4 or CSE 11 or CSE 3 or CSE 8A or CSE 8B",
    "notes": "none"
  },
  {
    "course_code": "CSE 181",
    "course_name": "CSE 181. Molecular Sequence Analysis",
    "credits": "4",
    "description": "This course covers the analysis of nucleic acid and protein sequences, with an emphasis on the application of algorithms to biological problems. Topics include sequence alignments, database searching, comparative genomics, and phylogenetic and clustering analyses. Pairwise alignment, multiple alignment, DNS sequencing, scoring functions, fast database search, comparative genomics, clustering, phylogenetic trees, gene finding/DNA statistics. Students may receive credit for one of the following: CSE 181, BIMM 181, or BENG 181.",
    "prerequisite_segments": [
      [
        "CSE 100",
        "0"
      ],
      [
        "CSE 100R and CSE 101 and BIMM 100",
        "0"
      ],
      [
        "CHEM 114C",
        "0"
      ]
    ],
    "prerequisites": "CSE 100 or CSE 100R and CSE 101 and BIMM 100 or CHEM 114C",
    "notes": " Tag: Applications of Computing. restricted to BE28, BI34, CH37, and CS27 majors. Students may receive credit for one of the following: CSE 181, BIMM 181, or BENG 181."
  },
  {
    "course_code": "CSE 182",
    "course_name": "CSE 182. Biological Databases",
    "credits": "4",
    "description": "This course provides an introduction to the features of biological data, how those data are organized efficiently in databases, and how existing data resources can be utilized to solve a variety of biological problems. Object oriented databases, data modeling and description. Survey of current biological database with respect to above, implementation of a database on a biological topic. Students may receive credit for one of the following: CSE 182, BENG 182, or BIMM 182.",
    "prerequisite_segments": [
      [
        "CSE 100",
        "0"
      ],
      [
        "CSE 100R",
        "0"
      ]
    ],
    "prerequisites": "CSE 100 or CSE 100R",
    "notes": " Tag: Applications of Computing. restricted to BE28, BI34, CH37, and CS27 majors."
  },
  {
    "course_code": "CSE 184",
    "course_name": "CSE 184. Computational Molecular Biology",
    "credits": "4",
    "description": "This advanced course covers the application of machine learning and modeling techniques to biological systems. Topics include gene structure, recognition of DNA and protein sequence patterns, classification, and protein structure prediction. Pattern discovery, Hidden Markov models/support victor machines/neural network/profiles. Protein structure prediction, functional characterization or proteins, functional genomics/proteomics, metabolic pathways/gene networks. Cross-listed with BIMM 184/BENG 184/CHEM 184.",
    "prerequisite_segments": [
      [
        "BIMM 181",
        "0"
      ],
      [
        "BENG 181",
        "0"
      ],
      [
        "CSE 181, BENG 182",
        "0"
      ],
      [
        "BIMM 182",
        "0"
      ],
      [
        "CSE 182",
        "0"
      ],
      [
        "CHEM 182",
        "0"
      ]
    ],
    "prerequisites": "BIMM 181 or BENG 181 or CSE 181, BENG 182 or BIMM 182 or CSE 182 or CHEM 182",
    "notes": " Tag: Applications of Computing. Bioinformatics majors only."
  },
  {
    "course_code": "CSE 185",
    "course_name": "CSE 185. Advanced Bioinformatics Laboratory",
    "credits": "4",
    "description": "This course emphasizes the hands-on application of bioinformatics to biological problems. Students will gain experience in the application of existing software, as well as in combining approaches to answer specific biological questions. Topics include sequence alignment, fast database search, comparative genomics, expression analysis, computational proteomics, genome-wide association studies, next-generation sequencing, genomics, and big data. Students may not receive credit for CSE 185 and BIMM 185. Restricted to CS27, BI34, BE28, and CH37 majors.",
    "prerequisite_segments": [
      [
        "CSE 11",
        "0"
      ],
      [
        "CSE 8B and CSE 12 and MATH 20C",
        "0"
      ],
      [
        "MATH 31BH and BILD 1 and BIEB 123",
        "0"
      ],
      [
        "BILD 4",
        "0"
      ],
      [
        "BIMM 101",
        "0"
      ],
      [
        "CHEM 109",
        "0"
      ]
    ],
    "prerequisites": "CSE 11 or CSE 8B and CSE 12 and MATH 20C or MATH 31BH and BILD 1 and BIEB 123 or BILD 4 or BIMM 101 or CHEM 109",
    "notes": " Tag: Applications of Computing"
  },
  {
    "course_code": "CSE 190",
    "course_name": "CSE 190. Topics in Computer Science and Engineering",
    "credits": "4",
    "description": "Topics of special interest in computer science and engineering. Topics may vary from quarter to quarter. May be repeated for credit with the consent of instructor. May be taken for credit up to three times. May be coscheduled with CSE 291.",
    "prerequisite_segments": [
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor",
    "notes": "Department stamp required."
  },
  {
    "course_code": "CSE 191",
    "course_name": "CSE 191. Seminar in CSE",
    "credits": "1–4",
    "description": "A seminar course on topics of current interest. Students, as well as the instructor, will be actively involved in running the course/class. This course cannot be counted toward a technical elective.",
    "prerequisite_segments": [
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor",
    "notes": "Department stamp required."
  },
  {
    "course_code": "CSE 192",
    "course_name": "CSE 192. Senior Seminar in Computer Science and Engineering",
    "credits": "1",
    "description": "The Senior Seminar Program is designed to allow senior undergraduates to meet with faculty members in a small group setting to explore an intellectual topic in CSE (at the upper-division level). Topics will vary from quarter to quarter. Senior seminars may be taken for credit up to four times, with a change in topic, and permission of the department. Enrollment is limited to twenty students, with preference given to seniors. (P/NP grades only.)",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing",
    "notes": "department stamp required and consent of instructor."
  },
  {
    "course_code": "CSE 193",
    "course_name": "CSE 193. Introduction to Computer Science Research",
    "credits": "4",
    "description": "Introduction to research in computer science. Topics include defining a CS research problem, finding and reading technical papers, oral communication, technical writing, and independent learning. Course participants apprentice with a CSE research group and propose an original research project.",
    "prerequisite_segments": [
      [
        "consent of the department chair",
        "0"
      ]
    ],
    "prerequisites": "consent of the department chair",
    "notes": " Tag: Applications of Computing. Department stamp required."
  },
  {
    "course_code": "CSE 194",
    "course_name": "CSE 194. Race, Gender, and Computing",
    "credits": "4",
    "description": "This course explores the challenges of diversity, equity, and inclusion (DEI) in computing and technology through an introduction to and analysis of various social constructs and their impact on not only computing-related organizations, but also the technologies developed and the people affected by them. This course also introduces students to cultural competence in the context of computing.",
    "prerequisite_segments": [
      [
        "AAS 10",
        "0"
      ],
      [
        "CSE 12",
        "0"
      ],
      [
        "ECE 35",
        "0"
      ],
      [
        "ETHN 3",
        "0"
      ],
      [
        "HILD 7A",
        "0"
      ],
      [
        "LTEN 27 and CAT 125",
        "0"
      ],
      [
        "CAT 125R",
        "0"
      ],
      [
        "CAT 3",
        "0"
      ],
      [
        "DOC 3",
        "0"
      ],
      [
        "HUM 2",
        "0"
      ],
      [
        "MCWP 125",
        "0"
      ],
      [
        "MCWP 125R",
        "0"
      ],
      [
        "MCWP 50",
        "0"
      ],
      [
        "MCWP 50R",
        "0"
      ],
      [
        "MMW 121",
        "0"
      ],
      [
        "MMW 121R",
        "0"
      ],
      [
        "MMW 122",
        "0"
      ],
      [
        "MMW 13",
        "0"
      ],
      [
        "SYN 2",
        "0"
      ],
      [
        "WCWP 100",
        "0"
      ],
      [
        "WCWP 10B",
        "0"
      ]
    ],
    "prerequisites": "AAS 10 or CSE 12 or ECE 35 or ETHN 3 or HILD 7A or LTEN 27 and CAT 125 or CAT 125R or CAT 3 or DOC 3 or HUM 2 or MCWP 125 or MCWP 125R or MCWP 50 or MCWP 50R or MMW 121 or MMW 121R or MMW 122 or MMW 13 or SYN 2 or WCWP 100 or WCWP 10B",
    "notes": " Tag: Applications of Computing"
  },
  {
    "course_code": "CSE 197",
    "course_name": "CSE 197. Field Study in Computer Science and Engineering",
    "credits": "4",
    "description": "Directed study accompanying full-time on-site computer science internships. (P/NP grades only.)",
    "prerequisite_segments": [
      [
        "consent of the instructor and approval of the department required",
        "0"
      ]
    ],
    "prerequisites": "consent of the instructor and approval of the department required",
    "notes": "Students may receive credit for one of the following: CSE 197 or CSE 197C. Restricted to CS25, CS26, CS27, and CS28 majors only."
  },
  {
    "course_code": "CSE 197C",
    "course_name": "CSE 197C. Cooperative Practicum in Computer Science and Engineering",
    "credits": "12",
    "description": "Directed study accompanying full-time on-site computer science cooperative education practicum.",
    "prerequisite_segments": [
      [
        "department approval",
        "0"
      ]
    ],
    "prerequisites": "department approval",
    "notes": "Restricted to CS25, CS26, and CS27 majors only. Students may receive credit for one of the following: CSE 197C or CSE 197."
  },
  {
    "course_code": "CSE 198",
    "course_name": "CSE 198. Directed Group Study",
    "credits": "2 or 4",
    "description": "Computer science and engineering topics whose study involves reading and discussion by a small group of students under the supervision of a faculty member. (P/NP grades only.)",
    "prerequisite_segments": [
      [
        "consent of the instructor",
        "0"
      ]
    ],
    "prerequisites": "consent of the instructor",
    "notes": "Department stamp required."
  },
  {
    "course_code": "CSE 199",
    "course_name": "CSE 199. Independent Study for Undergraduates",
    "credits": "2 or 4",
    "description": "Independent reading or research by special arrangement with a faculty member. (P/NP grades only.)",
    "prerequisite_segments": [
      [
        "consent of the instructor",
        "0"
      ]
    ],
    "prerequisites": "consent of the instructor",
    "notes": "Department stamp required."
  },
  {
    "course_code": "CSE 199H",
    "course_name": "CSE 199H. CSE Honors Thesis Research for Undergraduates",
    "credits": "4",
    "description": "Undergraduate research for completing an honors project under the supervision of a CSE faculty member. May be taken across multiple quarters. Students should enroll for a letter grade. May be taken for credit three times.",
    "prerequisite_segments": [
      [
        "Admission to the CSE department honors program",
        "0"
      ]
    ],
    "prerequisites": "Admission to the CSE department honors program",
    "notes": "Consent of the instructor. Department stamp required."
  },
  {
    "course_code": "CSE 200",
    "course_name": "CSE 200. Computability and Complexity",
    "credits": "4",
    "description": "Computability review, including halting problem, decidable sets, r.e. sets, many-one reductions; TIME(t(n)), SPACE(s(n)) and general relations between these classes; L, P, PSPACE, NP; NP—completeness; hierarchy theorems; RP, BPP.",
    "prerequisite_segments": [
      [
        "CSE 105",
        "0"
      ],
      [
        "equivalent",
        "0"
      ]
    ],
    "prerequisites": "CSE 105 or equivalent",
    "notes": "none"
  },
  {
    "course_code": "CSE 201A",
    "course_name": "CSE 201A. Advanced Complexity",
    "credits": "4",
    "description": "Polynomial-time hierarchy (PH), BPP in second level of PH, Savitch’s theorem, NL=coNL, nonuniform and circuit complexity, some circuit lower bounds, IP=PSPACE, probabilistic proof checking (PCP), application of PCP to approximation hardness, complexity of proof systems, parallel complexity classes NC and AC, P-completeness. Recommended preparation: CSE 200.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "none"
  },
  {
    "course_code": "CSE 202",
    "course_name": "CSE 202. Algorithm Design and Analysis",
    "credits": "4",
    "description": "The basic techniques for the design and analysis of algorithms. Divide-and-conquer, dynamic programming, data structures, graph search, algebraic problems, randomized algorithms, lower bounds, probabilistic analysis, parallel algorithms.",
    "prerequisite_segments": [
      [
        "CSE 101",
        "0"
      ],
      [
        "equivalent",
        "0"
      ]
    ],
    "prerequisites": "CSE 101 or equivalent",
    "notes": "none"
  },
  {
    "course_code": "CSE 203A",
    "course_name": "CSE 203A. Advanced Algorithms",
    "credits": "4",
    "description": "Modern advances in design and analysis of algorithms. Exact syllabus varies. Topics include approximation, randomized algorithms, probabilistic analysis, heuristics, online algorithms, competitive analysis, models of memory hierarchy, parallel algorithms, number-theoretic algorithms, cryptanalysis, computational geometry, computational biology, network algorithms, VLSI CAD algorithms.",
    "prerequisite_segments": [
      [
        "CSE 202",
        "0"
      ]
    ],
    "prerequisites": "CSE 202",
    "notes": "none"
  },
  {
    "course_code": "CSE 203B",
    "course_name": "CSE 203B. Convex Optimization Formulations and Algorithms",
    "credits": "4",
    "description": "We study the formulations and algorithms solving convex optimization problems. The topics include convex sets, functions, optimality conditions, duality concepts, gradient descent, conjugate gradient, interior-point methods, and applications. The objective of the course is to provide students the background and techniques for scientific computing and system optimization. Students cannot receive credit for CSE 203B if they have taken either ECE 273 or MATH 245B.",
    "prerequisite_segments": [
      [
        "Linear Algebra is recommended",
        "0"
      ]
    ],
    "prerequisites": "Linear Algebra is recommended",
    "notes": "none"
  },
  {
    "course_code": "CSE 205A",
    "course_name": "CSE 205A. Logic in Computer Science",
    "credits": "4",
    "description": "(Formerly CSE 208D) Mathematical logic as a tool in computer science. Propositional logic, resolution, first-order logic, completeness and incompleteness theorems with computational viewpoint, finite model theory, descriptive complexity, logic programming, nonmonotonic reasoning, temporal logic. Applications to databases, automatic theorem proving, program verification, and distributed systems.",
    "prerequisite_segments": [
      [
        "CSE 200",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 200 or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 206A",
    "course_name": "CSE 206A. Lattice Algorithms and Applications",
    "credits": "4",
    "description": "(Formerly CSE 207C) Introduction to the algorithmic theory of point lattices (aka algorithmic geometry of numbers), and some of its most important applications in cryptography and cryptanalysis. Topics usually include LLL basis reduction algorithm, cryptanalysis of broadcast RSA, hardness of approximating lattice problems.",
    "prerequisite_segments": [
      [
        "CSE 202, CSE 200",
        "0"
      ],
      [
        "concurrent",
        "0"
      ]
    ],
    "prerequisites": "CSE 202, CSE 200, or concurrent",
    "notes": "none"
  },
  {
    "course_code": "CSE 207",
    "course_name": "CSE 207. Modern Cryptography",
    "credits": "4",
    "description": "Private and public key cryptography, introduction to reduction-based proofs of security, concrete security, block ciphers, pseudorandom functions and generators, symmetric encryption, asymmetric encryption, computational number theory, RSA and discrete log systems, message authentication, digital signatures, key distribution and key management.",
    "prerequisite_segments": [
      [
        "CSE 202",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 202 or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 208",
    "course_name": "CSE 208. Advanced Cryptography",
    "credits": "4",
    "description": "Zero-knowledge, secure computation, session-key distribution, protocols, electronic payment, one-way functions, trapdoor permutations, pseudorandom bit generators, hardcore bits.",
    "prerequisite_segments": [
      [
        "CSE 202, CSE 200, and CSE 207",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 202, CSE 200, and CSE 207 or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 209A",
    "course_name": "CSE 209A. Topics/Seminar in Algorithms, Complexity, and Logic",
    "credits": "1–4",
    "description": "Topics of special interest in algorithms, complexity, and logic to be presented by faculty and students under faculty direction. Topics vary from quarter to quarter. May be repeated for credit.",
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
    "course_code": "CSE 209B",
    "course_name": "CSE 209B. Topics/Seminar in Cryptography",
    "credits": "1–4",
    "description": "Topics of special interest in cryptography to be presented by faculty and students under faculty direction. Topics vary from quarter to quarter. May be repeated for credit.",
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
    "course_code": "CSE 210",
    "course_name": "CSE 210. Principles of Software Engineering",
    "credits": "4",
    "description": "(Formerly CSE 264A.) General principles in modern software engineering. Both theoretical and practical topics are covered. Theoretical topics include proofs of correctness, programming language semantics, and theory of testing. Practical topics include structured programming, modularization techniques, design of languages for reliable programming, and software tools.",
    "prerequisite_segments": [
      [
        "CSE 100, 131A, 120",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 100, 131A, 120, or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 211",
    "course_name": "CSE 211. Software Testing and Analysis",
    "credits": "4",
    "description": "Survey of testing and analysis methods. Introduction to advanced topics in area as well as traditional production methods. Topics include inspections and reviews, formal analysis, verification and validation standards, nonstatistical testing, statistical-testing and reliability models, coverage methods, testing and analysis tools, and organization management and planning. Methods special to special development approaches such as object-oriented testing will also be described.",
    "prerequisite_segments": [
      [
        "undergraduate major in computer science",
        "0"
      ],
      [
        "extensive industrial experience",
        "0"
      ]
    ],
    "prerequisites": "undergraduate major in computer science or extensive industrial experience",
    "notes": "none"
  },
  {
    "course_code": "CSE 216",
    "course_name": "CSE 216. Research Topics in Human-Computer Interaction",
    "credits": "4",
    "description": "Prepares students to conduct original HCI research by reading and discussing seminal and cutting-edge research papers. Topics include design, social software, input techniques, mobile, and ubiquitous computing. Student pairs perform a quarter-long mini research project that leverages campus research efforts. Cross-listed with COGS 230.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 217",
    "course_name": "CSE 217. Human-Centered Computing for Health",
    "credits": "HC4H",
    "description": "This interdisciplinary course brings together students from engineering, design, and medicine, and exposes them to designing technology for health and health care. The course is focused on studying how technology is used in health care and identifies opportunities for novel technology to be developed for specific health and health-care settings. Students will be exposed to the health domain at large through site visits and discussions with experts in a variety of health-care domains. Site visits will be coordinated by the department.",
    "prerequisite_segments": [
      [
        "department approval and instructor consent required",
        "0"
      ]
    ],
    "prerequisites": "department approval and instructor consent required",
    "notes": " (4)"
  },
  {
    "course_code": "CSE 218",
    "course_name": "CSE 218. Advanced Topics in Software Engineering",
    "credits": "4",
    "description": "This course will cover a current topic in software engineering in depth. Topics in the past have included software tools, impacts of programming language design, and software system structure. (S/U grades permitted.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 219",
    "course_name": "CSE 219. Design at Large",
    "credits": "1",
    "description": "New societal challenges, cultural values, and technological opportunities are changing design—and vice versa. The seminar explores this increased scale, real-world engagement, and disruptive impact. Invited speakers from UC San Diego and beyond share cutting-edge research on interaction, design, and learning. Cross-listed with COGS 229. (S/U grades only.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 221",
    "course_name": "CSE 221. Operating Systems",
    "credits": "4",
    "description": "Operating system structures, concurrent computation models, scheduling, synchronization mechanisms, address spaces, memory management protection and security, buffering, streams, data-copying reduction techniques, file systems, naming, caching, disk organization, mapped files, remote file systems, case studies of major operating systems.",
    "prerequisite_segments": [
      [
        "CSE 120 and 121",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 120 and 121, or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 222A",
    "course_name": "CSE 222A. Computer Communication Networks",
    "credits": "4",
    "description": "(Formerly CSE 222.) Computer communication network concepts, protocols, and architectures, with an emphasis on an analysis of algorithms, protocols, and design methodologies. Topics will include layering, error control, flow control, congestion control, switching and routing, quality of service management, mobility, naming, security, and selected contemporary topics.",
    "prerequisite_segments": [
      [
        "CSE 123A",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 123A or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 222B",
    "course_name": "CSE 222B. Internet Algorithmics",
    "credits": "4",
    "description": "(Formerly CSE 228H.) Techniques for speeding up internet implementations, including system restructuring, new algorithms, and hardware innovations. Topics include models for protocols, systems and hardware; efficiency principles; applying these principles to deriving techniques for efficient implementation of common endnode and router functions.",
    "prerequisite_segments": [
      [
        "CSE 123A",
        "0"
      ],
      [
        "CSE 222A",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 123A or CSE 222A, or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 222C",
    "course_name": "CSE 222C. Wireless Networks",
    "credits": "4",
    "description": "This course covers the design, operation, and use of wireless technologies, with emphasis on how physical resource constraints and application constraints meet to affect link, network, system, and application design, with hands-on experience in multiple technologies. Recommended preparation: basics of software engineering, modular design, data structures, physical (in-memory) representation of data structures, code compilation, build systems, version control, debuggers, C code and pointer manipulation in C. May be coscheduled with CSE 122.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 223B",
    "course_name": "CSE 223B. Distributed Computing and Systems",
    "credits": "4",
    "description": "Efficient primitives for distributed operating systems and high-performance network servers, including concurrent and event-driven server architectures, remote procedure calls, and load shedding. Distributed naming, directory, and storage services, replication for fault tolerance, and security in distributed systems.",
    "prerequisite_segments": [
      [
        "CSE 221, CSE 222A",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 221, CSE 222A, or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 224",
    "course_name": "CSE 224. Graduate Networked Systems",
    "credits": "4",
    "description": "This course will provide a broad understanding of network design and implementation. Topics include techniques for building distributed applications, sockets programming, remote procedure calls (RPC), scale-out distributed directories, distributed consensus and state management, fault tolerance, networked storage, indirection, overlay networks, load balancing, and datacenter design.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing or consent of instructor",
    "notes": "This course is intended for MS students. PhD students may only take the course if they are not in systems/networking concentrations."
  },
  {
    "course_code": "CSE 227",
    "course_name": "CSE 227. Computer Security",
    "credits": "4",
    "description": "Security and threat models, risk analysis, authentication and authorization, auditing, operating systems security, access control mechanisms, protection mechanisms, distributed systems/network security, security architecture, electronic commerce security mechanisms, security evaluation.",
    "prerequisite_segments": [
      [
        "CSE 221",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 221 or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 229A",
    "course_name": "CSE 229A. Topics/Seminar in Computer Systems",
    "credits": "1–4",
    "description": "Discussion on problems of current research interest in computer systems. Possible areas of focus include distributed computing, computational grid, operating systems, fault-tolerant computing, storage systems, system services for the World Wide Web. Topics to be presented by faculty and students under faculty direction. Topics vary from quarter to quarter. May be repeated for credit.",
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
    "course_code": "CSE 229C",
    "course_name": "CSE 229C. Topics/Seminar in Computer Security",
    "credits": "1–4",
    "description": "Discussion on problems of current research interest in computer security. Topics to be presented by faculty and students under faculty direction. Topics vary from quarter to quarter. May be repeated for credit.",
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
    "course_code": "CSE 230",
    "course_name": "CSE 230. Principles of Programming Languages",
    "credits": "4",
    "description": "(Formerly CSE 273.) Functional versus imperative programming. Type systems and polymorphism; the ML language. Higher order functions, lazy evaluation. Abstract versus concrete syntax, structural and well-founded induction. The lambda calculus, reduction strategies, combinators. Denotational semantics, elementary domain theory.",
    "prerequisite_segments": [
      [
        "CSE 130",
        "0"
      ],
      [
        "equivalent",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 130 or equivalent, or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 231",
    "course_name": "CSE 231. Compiler Construction",
    "credits": "4",
    "description": "(Formerly CSE 264C.) Advanced material in programming languages and translator systems. Topics include compilers and code optimization. May be coscheduled with CSE 131.",
    "prerequisite_segments": [
      [
        "restricted to students within the CS75, CS76, CS78, CS88, and CS89 majors",
        "0"
      ]
    ],
    "prerequisites": "restricted to students within the CS75, CS76, CS78, CS88, and CS89 majors",
    "notes": "All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 232",
    "course_name": "CSE 232. Principles of Database Systems",
    "credits": "4",
    "description": "(Formerly CSE 264D.) Database models including relational, hierarchic, and network approaches. Implementation of databases including query languages and system architectures.",
    "prerequisite_segments": [
      [
        "CSE 100",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 100 or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 232B",
    "course_name": "CSE 232B. Database System Implementation",
    "credits": "4",
    "description": "A hands-on approach to the principles of databases implementation. Algebraic rewriters/optimizers, query processors, triggers. Beyond centralized relational databases.",
    "prerequisite_segments": [
      [
        "CSE 232",
        "0"
      ]
    ],
    "prerequisites": "CSE 232",
    "notes": "none"
  },
  {
    "course_code": "CSE 233",
    "course_name": "CSE 233. Database Theory",
    "credits": "4",
    "description": "Theory of databases. Theory of query languages, dependency theory, deductive databases, incomplete information, complex objects, object-oriented databases, and more. Connections to logic and complexity theory including finite model theory and descriptive complexity.",
    "prerequisite_segments": [
      [
        "CSE 200",
        "0"
      ]
    ],
    "prerequisites": "CSE 200",
    "notes": "none"
  },
  {
    "course_code": "CSE 237A",
    "course_name": "CSE 237A. Introduction to Embedded Computing",
    "credits": "4",
    "description": "Embedded system technologies including processors, DSP, memory, and software. System interfacing basics, communication strategies, sensors, and actuators. Mobile and wireless technology in embedded systems. Using predesigned hardware and software components. Design case studies in wireless, multimedia, and/or networking domains.",
    "prerequisite_segments": [
      [
        "basic courses in digital hardware, algorithms and data structures, elementary calculus, and probability",
        "0"
      ]
    ],
    "prerequisites": "basic courses in digital hardware, algorithms and data structures, elementary calculus, and probability",
    "notes": "or consent of instructor."
  },
  {
    "course_code": "CSE 237B",
    "course_name": "CSE 237B. Software for Embedded Systems",
    "credits": "4",
    "description": "Embedded computing elements, device interfaces, time-critical IO handling. Embedded software design under size, performance, and reliability constraints. Software timing and functional validation. Programming methods and compilation for embeddable software. Embedded runtime systems. Case studies of real-time software systems.",
    "prerequisite_segments": [
      [
        "CSE 237A",
        "0"
      ]
    ],
    "prerequisites": "CSE 237A",
    "notes": "or basic courses in programming, algorithms and data structures, elementary calculus, discrete math, computer architecture; or consent of instructor."
  },
  {
    "course_code": "CSE 237C",
    "course_name": "CSE 237C. Validation and Testing of Embedded Systems",
    "credits": "4",
    "description": "Embedded system building blocks including IP cores. Cosimulation. Formal verification using model checking. Verification environments. Test challenges in core integration: compliance, feature, random, and collision testing. Core access and test integration. Interface-based verification and standards.",
    "prerequisite_segments": [
      [
        "CSE 237A",
        "0"
      ]
    ],
    "prerequisites": "CSE 237A",
    "notes": "or basic courses in algorithms and data structures, elementary calculus, discrete math, symbolic logic, computer architecture; or consent of instructor."
  },
  {
    "course_code": "CSE 237D",
    "course_name": "CSE 237D. Design Automation and Prototyping for Embedded Systems",
    "credits": "4",
    "description": "System representation and modeling. Abstract and language models. Simulation as a modeling activity. Computational and hw/sw system prototypes. System analysis using models. Constraint and interface modeling. Behavioral compilation and synthesis.",
    "prerequisite_segments": [
      [
        "CSE 237A",
        "0"
      ]
    ],
    "prerequisites": "CSE 237A",
    "notes": "or basic courses in digital logic design, algorithms and data structures, elementary calculus, discrete math, symbolic logic, computer architecture; or consent of instructor."
  },
  {
    "course_code": "CSE 239A",
    "course_name": "CSE 239A. Topics/Seminar in Databases",
    "credits": "1–4",
    "description": "Discussion on problems of current research interest in databases. Possible areas of focus include core database issues, data management on the web, data integration, new database models and applications, formal methods in databases. Topics to be presented by faculty and students under faculty direction. Topics vary from quarter to quarter. May be repeated for credit.",
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
    "course_code": "CSE 239B",
    "course_name": "CSE 239B. Topics/Seminar in Programming Languages",
    "credits": "1–2",
    "description": "Discussion on problems of current research interest in programming languages, formal methods, and software engineering. Possible areas of focus include program verification, program synthesis, language design and implementation, developer productivity tools, language-based security. Topics to be presented by faculty and students under faculty direction. Topics vary from quarter to quarter. May be taken for credit up to eighteen times for a maximum of eighteen units.",
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
    "course_code": "CSE 239C",
    "course_name": "CSE 239C. Human-Computer Interaction Seminar",
    "credits": "1",
    "description": "This course will introduce current trends in human-computer interaction (HCI) within and outside UC San Diego. The course will give an overview of the different research groups and environments at UC San Diego that focus on HCI, and then report on current work in the field across several HCI topics. May be taken for credit up to eighteen times.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 240A",
    "course_name": "CSE 240A. Principles of Computer Architecture",
    "credits": "4",
    "description": "(Formerly CSE 240.) This course will cover fundamental concepts in computer architecture. Topics include instruction set architecture, pipelining, pipeline hazards, bypassing, dynamic scheduling, branch prediction, superscalar issue, memory-hierarchy design, advanced cache architectures, and multiprocessor architecture issues.",
    "prerequisite_segments": [
      [
        "CSE 141",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 141 or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 240B",
    "course_name": "CSE 240B. Parallel Computer Architecture",
    "credits": "4",
    "description": "This course covers advanced topics in parallel computer architecture, including on-chip and off-chip interconnection networks, cache coherence, cache consistency, hardware multithreading, multicore and tiled architectures. It incorporates the latest research and development on parallel architectures and compilation techniques for those architectures. CSE 240A recommended.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "none"
  },
  {
    "course_code": "CSE 240C",
    "course_name": "CSE 240C. Advanced Microarchitecture",
    "credits": "4",
    "description": "This course covers advanced topics in computer architecture. It incorporates the latest research and development on topics such as branch prediction, instruction-level parallelism, cache hierarchy design, speculative multithreading, reliable architectures, and power-management techniques. CSE 240A recommended.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "none"
  },
  {
    "course_code": "CSE 241A",
    "course_name": "CSE 241A/ECE 260B. VLSI Integration of Computing Circuitry",
    "credits": "4",
    "description": "VLSI integrated-circuit building blocks of computing systems, and their implementation. Computer-aided design and performance simulations, design exercises and projects. Devices, standard cells and interconnects, clocking, power/ground distribution, arithmetic modules, memories. Methodologies and tradeoffs in system implementation.",
    "prerequisite_segments": [
      [
        "layout (CSE 165",
        "0"
      ],
      [
        "ECE 260A) and logic design (CSE 140",
        "0"
      ],
      [
        "ECE 111)",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "layout (CSE 165 or ECE 260A) and logic design (CSE 140 or ECE 111), or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 243A",
    "course_name": "CSE 243A. Introduction to Synthesis Methodologies in VLSI CAD",
    "credits": "4",
    "description": "Hardware software codesign, architectural level synthesis, control synthesis and optimization, scheduling, binding, register and bus sharing, interconnect design, module selection, combinational logic optimization, state minimization, state encoding, and retiming.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 244A",
    "course_name": "CSE 244A. VLSI Test",
    "credits": "4",
    "description": "Design for test, testing economics, defects, failures and faults, fault models, fault simulation, automatic test pattern generation, functional testing, memory, PLA, FPGA, microprocessor test, and fault diagnosis.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 245",
    "course_name": "CSE 245. Computer Aided Circuit Simulation and Verification",
    "credits": "4",
    "description": "This course is about the computer algorithms, techniques, and theory used in the simulation and verification of electrical circuits.",
    "prerequisite_segments": [
      [
        "CSE 241A",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 241A or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 248",
    "course_name": "CSE 248. Algorithmic and Optimization Foundations for VLSI CAD",
    "credits": "4",
    "description": "Algorithmic techniques and optimization frameworks for large-scale, difficult optimizations. Primal-dual multicommodity flow approximations, approximations for geometric and graph Steiner formulations, continuous placement optimization, heuristics for Boolean satisfiability, multilevel methods, semidefinite programming, and application to other formulations (e.g., scheduling).",
    "prerequisite_segments": [
      [
        "CSE 241A",
        "0"
      ],
      [
        "CSE 242A",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 241A or CSE 242A, or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 249A",
    "course_name": "CSE 249A. Topics/Seminar in Computer Architecture",
    "credits": "1–4",
    "description": "Topics of special interest in computer architecture to be presented by faculty and students under faculty direction. Topics vary from quarter to quarter. May be repeated for credit.",
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
    "course_code": "CSE 249B",
    "course_name": "CSE 249B. Topics/Seminar in VLSI",
    "credits": "1–4",
    "description": "Topics of special interest in VLSI to be presented by faculty and students under faculty direction. Topics vary from quarter to quarter. May be repeated for credit.",
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
    "course_code": "CSE 250A",
    "course_name": "CSE 250A. Principles of Artificial Intelligence: Probabilistic Reasoning and Learning",
    "credits": "4",
    "description": "Methods based on probability theory for reasoning and learning under uncertainty. Content may include directed and undirected probabilistic graphical models, exact and approximate inference, latent variables, expectation-maximization, hidden Markov models, Markov decision processes, applications to vision, robotics, speech, and/or text. Recommended preparation: CSE 103 or similar course.",
    "prerequisite_segments": [
      [
        "graduate standing in CSE",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing in CSE or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 251A",
    "course_name": "CSE 251A. Machine Learning: Learning Algorithms",
    "credits": "4",
    "description": "(Formerly CSE 250B.) Algorithms for supervised and unsupervised learning from data. Content may include maximum likelihood; log-linear models, including logistic regression and conditional random fields; nearest neighbor methods; kernel methods; decision trees; ensemble methods; optimization algorithms; topic models; neural networks; and backpropagation. Renumbered from CSE 250B. Students may not receive credit for CSE 251A and CSE 250B. Course may be coscheduled with CSE 151A.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing or consent of instructor",
    "notes": "Restricted to students in CS75, CS76, CS78, and CS89. Other graduate students will be allowed as space permits. Recommended preparation: some experience with probability and statistics recommended."
  },
  {
    "course_code": "CSE 251B",
    "course_name": "CSE 251B. Deep Learning",
    "credits": "4",
    "description": "(Formerly CSE 253.) This course covers the fundamentals of deep neural networks at the graduate level. We introduce multi-layer perceptrons, backpropagation, and automatic differentiation. We will also discuss convolutional neural networks, recurrent neural networks, transformers, and advanced topics in deep learning. The course will be a combination of lectures, presentations, and machine learning competitions. Renumbered from CSE 253. Students may not receive credit for CSE 251B and CSE 253. Course may be coscheduled with CSE 151B. Recommended preparation: knowledge of Python.",
    "prerequisite_segments": [
      [
        "CSE 251A",
        "0"
      ]
    ],
    "prerequisites": "CSE 251A",
    "notes": "Restricted to students within the CS75, CS76, CS78, CS88, and CS89 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 251C",
    "course_name": "CSE 251C. Principles of Machine Learning: Machine Learning Theory",
    "credits": "4",
    "description": "(Formerly CSE 250C.) Theoretical foundations of machine learning. Topics include concentration of measure, the PAC model, uniform convergence bounds, and VC dimension. Possible topics include online learning, learning with expert advice, multiarmed bandits, and boosting. Renumbered from CSE 250C. Students may not receive credit for CSE 251C and CSE 250C. Recommended preparation: CSE 103 and CSE 101 or similar course.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 251U",
    "course_name": "CSE 251U. Unsupervised Learning",
    "credits": "4",
    "description": "This course presents a broad view of unsupervised learning. Topics will include descriptive statistics; clustering; projection, singular value decomposition, and spectral embedding; geometry of high-dimensional spaces; common probability distributions; density estimation; graphical models and latent variable modeling; sparse coding and dictionary learning; autoencoders, shallow and deep; and self-supervised learning.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 252A",
    "course_name": "CSE 252A. Computer Vision I",
    "credits": "4",
    "description": "Comprehensive introduction to computer vision providing broad coverage including low-level vision (image formation, photometry, color, image feature detection), inferring 3-D properties from images (shape-from shading, stereo vision, motion interpretation) and object recognition. Companion to CSE 252B covering complementary topics.",
    "prerequisite_segments": [
      [
        "MATH 10D and MATH 20A–F",
        "0"
      ],
      [
        "equivalent",
        "0"
      ]
    ],
    "prerequisites": "MATH 10D and MATH 20A–F or equivalent",
    "notes": "none"
  },
  {
    "course_code": "CSE 252B",
    "course_name": "CSE 252B. Computer Vision II",
    "credits": "4",
    "description": "Comprehensive introduction to computer vision providing focused coverage of multiview geometry, structure from motion, image segmentation, motion segmentation, texture analysis and recognition, object detection, and image-based rendering. Companion to CSE 252A covering complementary topics.",
    "prerequisite_segments": [
      [
        "MATH 10D and MATH 20A–F",
        "0"
      ],
      [
        "equivalent",
        "0"
      ]
    ],
    "prerequisites": "MATH 10D and MATH 20A–F or equivalent",
    "notes": "none"
  },
  {
    "course_code": "CSE 252C",
    "course_name": "CSE 252C. Selected Topics in Vision and Learning",
    "credits": "1–4",
    "description": "Selected topics in computer vision and statistical pattern recognition, with an emphasis on recent developments. Possible topics include grouping and segmentation, object recognition and tracking, multiple view geometry, kernel-based methods, dimensionality reduction, and mixture models.",
    "prerequisite_segments": [
      [
        "CSE 252",
        "0"
      ],
      [
        "equivalent and CSE 250B",
        "0"
      ],
      [
        "equivalent",
        "0"
      ]
    ],
    "prerequisites": "CSE 252 or equivalent and CSE 250B or equivalent",
    "notes": "none"
  },
  {
    "course_code": "CSE 252D",
    "course_name": "CSE 252D. Advanced Computer Vision",
    "credits": "4",
    "description": "This course covers advanced concepts in computer vision. Example topics include 3-D reconstruction, face recognition, object detection, semantic segmentation, action recognition, and domain adaptation. Consistent with recent developments, deep learning forms a significant fraction of the class. Lectures and assignments cover recent works on fundamental problems in computer vision, with the aim to prepare students for pursuing careers in the field. Recommended preparation: Completion of one of CSE 252A, 252B, 250A, or 250B is highly recommended.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "none"
  },
  {
    "course_code": "CSE 254",
    "course_name": "CSE 254. Statistical Learning",
    "credits": "4",
    "description": "Learning algorithms based on statistics. Possible topics include minimum-variance unbiased estimators, maximum likelihood estimation, likelihood ratio tests, resampling methods, linear logistic regression, feature selection, regularization, dimensionality reduction, manifold detection. An upper-division undergraduate course on probability and statistics such as MATH 183 or 186, or any graduate course on statistics, pattern recognition, or machine learning is recommended.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "none"
  },
  {
    "course_code": "CSE 255",
    "course_name": "CSE 255. Data Mining and Predictive Analytics",
    "credits": "4",
    "description": "Learning methods for applications. Content may include data preparation, regression and classification algorithms, support vector machines, random forests, class imbalance, overfitting, decision theory, recommender systems and collaborative filtering, text mining, analyzing social networks and social media, protecting privacy, A/B testing. Recommended preparation: CSE 103 or similar.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 256",
    "course_name": "CSE 256/LING 256. Statistical Natural Language Processing",
    "credits": "4",
    "description": "An introduction to modern statistical approaches to natural language processing: part of speech tagging, word sense disambiguation and parsing, using Markov models, hidden Markov models, and probabilistic context-free grammars. Recommended preparation: LIGN 165, LIGN 245, CSE 151, CSE 250A, or CSE 254.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 257",
    "course_name": "CSE 257. Search and Optimization",
    "credits": "4",
    "description": "The course will cover core algorithms for sequential decision-making problems in autonomous systems. Topics include heuristic search, Monte Carlo search, deep reinforcement learning, nonlinear optimization, mixed-integer optimization, and stochastic optimization.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 258",
    "course_name": "CSE 258. Recommender Systems and Web Mining",
    "credits": "4",
    "description": "Current methods for data mining and predictive analytics. Emphasis is on studying real-world data sets, building working systems, and putting current ideas from machine learning research into practice. Recommended preparation: No previous background in machine learning is required, but students should be comfortable with programming (all example code will be in Python), and with basic optimization and linear algebra.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "none"
  },
  {
    "course_code": "CSE 258A",
    "course_name": "CSE 258A. Cognitive Modeling",
    "credits": "4",
    "description": "Connectionist models and a sampling of other cognitive modeling techniques. Models of language processing, memory, sequential processes, and vision. Areas covered may vary depending on student and faculty interests. Can be repeated for credit. CSE 151 or CSE 250B or CSE 253 or CSE 254, or equivalent experience recommended.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "none"
  },
  {
    "course_code": "CSE 259",
    "course_name": "CSE 259. Seminar in Artificial Intelligence",
    "credits": "1",
    "description": "A weekly meeting featuring local (and occasional external) speakers discussing their current research in artificial intelligence neural networks, and genetic algorithms. (S/U grades only.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 260",
    "course_name": "CSE 260. Parallel Computation",
    "credits": "4",
    "description": "(Formerly CSE 274A.) This course provides an overview of parallel hardware, algorithms, models, and software. Topics include Flynn’s taxonomy, interconnection networks, memory organization, a survey of commercially available multiprocessors, parallel algorithm paradigms and complexity criteria, parallel programming environments and tools for parallel debugging, language specification, mapping, performance, etc.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 262",
    "course_name": "CSE 262. System Support for Applications of Parallel Computation",
    "credits": "4",
    "description": "This course will explore design of software support for applications of parallel computation. Topics include programming languages, run time support, portability, and load balancing. The course will terminate in a project.",
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
    "course_code": "CSE 266",
    "course_name": "CSE 266. Virtualization and Cloud Computing",
    "credits": "4",
    "description": "This course is about virtualization and cloud computing. Topics covered include classical CPU/memory/storage virtualization, modern forms of virtualization such as containers, basic cloud computing concepts, and internals of clouds such as the usages of virtualization techniques in public clouds.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 270",
    "course_name": "CSE 270. Discrete Differential Geometry",
    "credits": "4",
    "description": "This course introduces the mathematics and algorithms for digital geometry processing and simulation problems in computer graphics. Topics include the continuous and discrete theory of curves and surfaces, exterior calculus, Hodge theory, and gauge theory with various applications ranging from texture synthesis, differential equations, and vector field design. Restricted to CS75, CS76, CS78, CS88, and CS89 majors. Other students will be allowed as space permits.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 272",
    "course_name": "CSE 272. Advanced Image Synthesis",
    "credits": "4",
    "description": "Computer graphics techniques for creating realistic images. Topics include ray tracing, global illumination, subsurface scattering, and participating media. CSE 168 or equivalent recommended.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "CSE 273",
    "course_name": "CSE 273. Computational Photography",
    "credits": "4",
    "description": "Computational photography overcomes the limitations of traditional photography using computational techniques from image processing, computer vision, and computer graphics. This course provides a comprehensive introduction to computational photography and the practical techniques used to overcome traditional photography limitations (e.g., image resolution, dynamic range, and defocus and motion blur) and those used to produce images (and more) that are not possible with traditional photography. Linear algebra, calculus, and optimization, MATLAB, Python, or other programming experience recommended.",
    "prerequisite_segments": [
      [
        "course is restricted to students in the following major codes: CS75, CS76, and CS78",
        "0"
      ]
    ],
    "prerequisites": "course is restricted to students in the following major codes: CS75, CS76, and CS78",
    "notes": "Graduate students in other major codes will be allowed if space permits."
  },
  {
    "course_code": "CSE 274",
    "course_name": "CSE 274. Selected Topics in Graphics",
    "credits": "2–4",
    "description": "Selected topics in computer graphics, with an emphasis on recent developments. Possible topics include computer animation, shape modeling and analysis, image synthesis, appearance modeling, and real-time rendering. CSE 168 or CSE 169 recommended.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 275",
    "course_name": "CSE 275. Deep Learning for 3-D Data",
    "credits": "4",
    "description": "This course teaches state-of-the-art concepts and algorithms of geometry that are being used in computer graphics, computer vision, and machine learning. It covers topics such as geometry foundations (differentiable geometry), 3-D reconstruction, structured 3-D learning, geometry processing, and geometry collection analysis. Recommended preparation: previous course work on deep learning and machine learning courses is highly recommended.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "Restricted to students within the CS75, CS76, CS78, CS88, and CS89 majors. All other students will be allowed as space permits."
  },
  {
    "course_code": "CSE 276A",
    "course_name": "CSE 276A. Introduction to Robotics",
    "credits": "4",
    "description": "This course provides an introduction to the fundamentals of robotics across kinematics, sensor systems, estimation, control, and planning. The contents include introduction to robotics in general, kinematics of robot systems, robot arm systems, sensors for robots, basic vision for robots, estimation methods, perception, robot localization and navigation, control of robot systems, robot motion planning, robot task planning, robot architectures, and evaluation of robot systems. It is expected that students have a solid understanding of linear algebra, can program in Python or C++, and have a basic understanding of methods for reasoning under uncertainty.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "none"
  },
  {
    "course_code": "CSE 276B",
    "course_name": "CSE 276B. Human Robot Interaction",
    "credits": "4",
    "description": "Robots are entering human spaces. How do we make them functional, useful, and acceptable? This course explores the core computational, engineering, and experimental challenges in human-robot interaction. Course topics include shared autonomy, perception of people and context, coordination, collaboration, human-guided learning, robot design, and experimental robotics. Students will review seminal and recent papers in the field and engage in team-based projects with physical, mobile robots. This class requires expertise in software development. Prior exposure to robotics, computer vision, or machine learning is recommended. Students should be comfortable reading and analyzing scientific papers at the graduate level. Students may not receive credit for CSE 276B and CSE 291 (A00) taught winter 2017 with the same subtitle.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "none"
  },
  {
    "course_code": "CSE 276C",
    "course_name": "CSE 276C. Mathematics for Robotics",
    "credits": "4",
    "description": "The course will provide a comprehensive introduction to the key mathematical concepts used for modeling, implementing, and evaluation of robot systems. The course will use small home assignments tasks and a larger robot project to exercise the topics covered in class. The students should have a basic knowledge of mathematics and know one or more programming languages such as Python or MATLAB for completion of homework assignments.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "none"
  },
  {
    "course_code": "CSE 276D",
    "course_name": "CSE 276D. Healthcare Robotics",
    "credits": "4",
    "description": "Robotics has the potential to improve well-being for millions of people, support care givers, and aid the clinical workforce. This course brings together engineers, clinicians, and end users to explore this exciting new field. It is project-based, interactive, and hands on, and involves working closely with stakeholders to develop prototypes that solve real-world problems. Students will explore the latest research in healthcare robotics, human-robot teaming, and health design. JSOE students should be comfortable building and experimenting within their area of expertise (e.g., CSE, software development, MAE, rapid prototyping). Students with clinical backgrounds should be familiar with translational research methods. Students may not receive credit for CSE 276D and CSE 291 (H00) taught spring 2017 with the same subtitle. Program or materials fees may apply.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "none"
  },
  {
    "course_code": "CSE 276E",
    "course_name": "CSE 276E. Robot Systems Design and Implementation",
    "credits": "4",
    "description": "End to end system design of embedded electronic systems including PCB design and fabrication, software control system development, and system integration. Program or materials fees may apply. May be coscheduled with CSE 176E.",
    "prerequisite_segments": [
      [
        "instructor approval required to ensure sufficient programming and project experience to be successful in the course",
        "0"
      ]
    ],
    "prerequisites": "instructor approval required to ensure sufficient programming and project experience to be successful in the course",
    "notes": "none"
  },
  {
    "course_code": "CSE 276F",
    "course_name": "CSE 276F. Machine Learning for Robotics",
    "credits": "4",
    "description": "The first half of this course covers basic concepts and algorithms of robotics, and the second half introduces the basic concepts, algorithms, and research trends of reinforcement learning. We assume that the course takers are interested in how to train a robot that can interact with the physical world by machine learning methods. We will instruct the students to build an armed robot in a simulated virtual environment through programming assignments.",
    "prerequisite_segments": [
      [
        "instructor approval required",
        "0"
      ]
    ],
    "prerequisites": "instructor approval required",
    "notes": "none"
  },
  {
    "course_code": "CSE 280A",
    "course_name": "CSE 280A. Algorithms in Computational Biology",
    "credits": "4",
    "description": "(Formerly CSE 206B.) The course focuses on algorithmic aspects of modern bioinformatics and covers the following topics: computational gene hunting, sequencing, DNA arrays, sequence comparison, pattern discovery in DNA, genome rearrangements, molecular evolution, computational proteomics, and others.",
    "prerequisite_segments": [
      [
        "CSE 202 preferred",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "CSE 202 preferred or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 282",
    "course_name": "CSE 282/BENG 202. Bioinformatics II: Sequence and Structure Analysis—Methods and Applications",
    "credits": "4",
    "description": "(Formerly CSE 257A/BENG 202.) Introduction to methods for sequence analysis. Applications to genome and proteome sequences. Protein structure, sequence-structure analysis.",
    "prerequisite_segments": [
      [
        "Pharm 201",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "Pharm 201 or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 283",
    "course_name": "CSE 283/BENG 203. Bioinformatics III: Functional Genomics",
    "credits": "4",
    "description": "Annotating genomes, characterizing functional genes, profiling, reconstructing pathways.",
    "prerequisite_segments": [
      [
        "Pharm 201, BENG 202/CSE 282",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "Pharm 201, BENG 202/CSE 282, or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 284",
    "course_name": "CSE 284. Personal Genomics for Bioinformaticians",
    "credits": "4",
    "description": "This course provides an introduction to bioinformatics techniques for analyzing and interpreting human genomes. Topics covered include an introduction to medical and population genetics, ancestry, finding and interpreting disease-causing variants, genome-wide association studies, genetic risk prediction, analyzing next-generation sequencing data, how to scale current genomics techniques to analyze hundreds of thousands of genomes, and the social impact of the personal genomics revolution. Programming experience, familiarity with the UNIX command line, and a basic course in probability and statistics are strongly recommended. Students may not receive credit for CSE 284 and CSE 291 (E00) taught winter 2017 with the same subtitle.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "none"
  },
  {
    "course_code": "CSE 290",
    "course_name": "CSE 290. Seminar in Computer Science and Engineering",
    "credits": "1–4",
    "description": "(Formerly CSE 280A.) A seminar course in which topics of special interest in computer science and engineering will be presented by staff members and graduate students under faculty direction. Topics vary from quarter to quarter. May be repeated for credit. (S/U grades only.)",
    "prerequisite_segments": [
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor",
    "notes": "(Offered as faculty resources permit.)"
  },
  {
    "course_code": "CSE 291",
    "course_name": "CSE 291. Topics in Computer Science and Engineering",
    "credits": "1–4",
    "description": "Topics of special interest in computer science and engineering. Topics may vary from quarter to quarter. May be coscheduled with CSE 190.",
    "prerequisite_segments": [
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "consent of instructor",
    "notes": "S/U grades permitted. Offered as faculty resources permit."
  },
  {
    "course_code": "CSE 292",
    "course_name": "CSE 292. Faculty Research Seminar",
    "credits": "1",
    "description": "(Formerly CSE 282.) Computer science and engineering faculty will present one-hour seminars of the current research work in their areas of interest.",
    "prerequisite_segments": [
      [
        "CSE graduate status",
        "0"
      ]
    ],
    "prerequisites": "CSE graduate status",
    "notes": "none"
  },
  {
    "course_code": "CSE 293",
    "course_name": "CSE 293. Special Project in Computer Science and Engineering",
    "credits": "1–12",
    "description": "The student will conceive, design, and execute a project in computer science under the direction of a faculty member. The project will typically include a large programming or hardware design task, but other types of projects are possible.",
    "prerequisite_segments": [
      [
        "CSE graduate student status",
        "0"
      ]
    ],
    "prerequisites": "CSE graduate student status",
    "notes": "(CS 75, 76, 77, 78, 79, 80, 81) (S/U grades only.)"
  },
  {
    "course_code": "CSE 294",
    "course_name": "CSE 294. Research Meeting in CSE",
    "credits": "2",
    "description": "Advanced study and analysis of active research in computer science and computer engineering. Discussion of current research and literature in the research specialty of the staff member teaching the course.",
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
    "course_code": "CSE 298",
    "course_name": "CSE 298. Independent Study",
    "credits": "1–16",
    "description": "Open to properly qualified graduate students who wish to pursue a problem through advanced study under the direction of a member of the staff. (S/U grades only.)",
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
    "course_code": "CSE 299",
    "course_name": "CSE 299. Research",
    "credits": "1–16",
    "description": "Research.",
    "prerequisite_segments": [
      [
        "consent of faculty",
        "0"
      ]
    ],
    "prerequisites": "consent of faculty",
    "notes": "none"
  },
  {
    "course_code": "CSE 500",
    "course_name": "CSE 500. Teaching Assistantship",
    "credits": "2–4",
    "description": "A course in which teaching assistants are aided in learning proper teaching methods by means of supervision of their work by the faculty: handling of discussions, preparation and grading of examinations and other written exercises, and student relations. May be used to meet teaching experience requirement for candidates for the PhD degree. Number of units for credit depends on number of hours devoted to class or section assistance.",
    "prerequisite_segments": [
      [
        "graduate standing and consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "CSE 599",
    "course_name": "CSE 599. Teaching Methods in Computer Science",
    "credits": "2",
    "description": "Training in teaching methods in the field of computer science. This course examines theoretical and practical communication and teaching techniques particularly appropriate to computer science.",
    "prerequisite_segments": [
      [
        "consent of faculty",
        "0"
      ]
    ],
    "prerequisites": "consent of faculty",
    "notes": "none"
  }
];

module.exports = CSE;