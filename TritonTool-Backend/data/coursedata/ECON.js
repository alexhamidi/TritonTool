const ECON = [
  {
    "course_code": "ECON 1",
    "course_name": "ECON 1. Principles of Microeconomics",
    "credits": "4",
    "description": "Introduction to the study of the economic system. Course will introduce the standard economic models used to examine how individuals and firms make decisions in perfectly competitive markets, and how these decisions affect supply and demand in output markets.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 2",
    "course_name": "ECON 2. Market Imperfections and Policy",
    "credits": "4",
    "description": "Analysis of monopoly and imperfectly competitive markets, market imperfections and the role of government.",
    "prerequisite_segments": [
      [
        "ECON 1",
        "0"
      ]
    ],
    "prerequisites": "ECON 1",
    "notes": "none"
  },
  {
    "course_code": "ECON 3",
    "course_name": "ECON 3. Principles of Macroeconomics",
    "credits": "4",
    "description": "Introductory macroeconomics: unemployment, inflation, business cycles, monetary and fiscal policy.",
    "prerequisite_segments": [
      [
        "ECON 1",
        "0"
      ]
    ],
    "prerequisites": "ECON 1",
    "notes": "none"
  },
  {
    "course_code": "ECON 4",
    "course_name": "ECON 4. Financial Accounting",
    "credits": "4",
    "description": "(Cross-listed with MGT 4.) Recording, organizing, and communicating financial information relating to business entities. Credit not allowed for both ECON 4 and MGT 4.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 5",
    "course_name": "ECON 5. Data Analytics for the Social Sciences",
    "credits": "4",
    "description": "(Cross-listed with POLI 5D.) Introduction to probability and analysis for understanding data in the social world. Students engage in hands-on learning with applied social science problems. Basics of probability, visual display of data, data collection and management, hypothesis testing, and computation. Students may receive credit for only one of the following courses: ECON 5, POLI 5, or POLI 5D.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 87",
    "course_name": "ECON 87. First-year Student Seminar",
    "credits": "1",
    "description": "The First-year Student Seminar Program is designed to provide new students with the opportunity to explore an intellectual topic with a faculty member in a small seminar setting. First-year student seminars are offered in all campus departments and undergraduate colleges, and topics vary from quarter to quarter. Enrollment is limited to fifteen to twenty students, with preference given to entering first-year students. May be repeated when course topics vary. (P/NP grades only.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 100A",
    "course_name": "ECON 100A. Microeconomics A",
    "credits": "4",
    "description": "Economic analysis of household determination of the demand for goods and services, consumption/saving decisions, and the supply of labor.",
    "prerequisite_segments": [
      [
        "ECON 1 and MATH 10C",
        "0"
      ],
      [
        "20C",
        "0"
      ],
      [
        "31BH",
        "0"
      ]
    ],
    "prerequisites": "ECON 1 and MATH 10C or 20C or 31BH",
    "notes": "none"
  },
  {
    "course_code": "ECON 100B",
    "course_name": "ECON 100B. Microeconomics B",
    "credits": "4",
    "description": "Analysis of firms’ production and costs, the supply of output and demand factors of production. Analysis of perfectly competitive markets.",
    "prerequisite_segments": [
      [
        "ECON 100A",
        "0"
      ]
    ],
    "prerequisites": "ECON 100A",
    "notes": "none"
  },
  {
    "course_code": "ECON 100C",
    "course_name": "ECON 100C. Microeconomics C",
    "credits": "4",
    "description": "Analysis of the effects of imperfect market structure, strategy, and imperfect information.",
    "prerequisite_segments": [
      [
        "ECON 100B",
        "0"
      ]
    ],
    "prerequisites": "ECON 100B",
    "notes": "none"
  },
  {
    "course_code": "ECON 100AH",
    "course_name": "ECON 100AH. Honors Microeconomics A",
    "credits": "1",
    "description": "Honors sequence expanding on the material taught in ECON 100A. Major GPA of 3.5 or better required. May be taken concurrently with ECON 100A or after successful completion of ECON 100A with A– or better or consent of instructor. Priority enrollment given to majors in the department.",
    "prerequisite_segments": [
      [
        "department approval required",
        "0"
      ]
    ],
    "prerequisites": "department approval required",
    "notes": "none"
  },
  {
    "course_code": "ECON 100BH",
    "course_name": "ECON 100BH. Honors Microeconomics B",
    "credits": "1",
    "description": "Honors sequence expanding on the material taught in ECON 100B. Major GPA of 3.5 or better required. May be taken concurrently with ECON 100B or after successful completion of ECON 100B with A– or better or consent of instructor. Priority enrollment given to majors in the department.",
    "prerequisite_segments": [
      [
        "department approval required",
        "0"
      ]
    ],
    "prerequisites": "department approval required",
    "notes": "none"
  },
  {
    "course_code": "ECON 100CH",
    "course_name": "ECON 100CH. Honors Microeconomics C",
    "credits": "1",
    "description": "Honors sequence expanding on the material taught in ECON 100C. Major GPA of 3.5 or better required. May be taken concurrently with ECON 100C or after successful completion of ECON 100C with A– or better or consent of instructor. Priority enrollment given to majors in the department.",
    "prerequisite_segments": [
      [
        "department approval required",
        "0"
      ]
    ],
    "prerequisites": "department approval required",
    "notes": "none"
  },
  {
    "course_code": "ECON 101",
    "course_name": "ECON 101. International Trade",
    "credits": "4",
    "description": "Examines theories of international trade in goods and services and relates the insights to empirical evidence. Explains international trade at the level of industries and firms and analyzes the consequences of trade for resource allocation, welfare, and the income distribution. Discusses sources of comparative advantage, motives for trade policies, and the effects of trade barriers and trading blocs on welfare and incomes.",
    "prerequisite_segments": [
      [
        "ECON 100B",
        "0"
      ],
      [
        "102",
        "0"
      ]
    ],
    "prerequisites": "ECON 100B or 102",
    "notes": "none"
  },
  {
    "course_code": "ECON 102",
    "course_name": "ECON 102. Globalization",
    "credits": "4",
    "description": "Presents theories of global economic integration, grounded in the principle of comparative advantage. Investigates patterns of trade when trade is balanced and capital flows when trade is not balanced. Assesses the consequences of global economic integration and economic policies for industry location, incomes, welfare and economic growth, and studies goods, services and sovereign debt markets.",
    "prerequisite_segments": [
      [
        "ECON 1",
        "0"
      ],
      [
        "100B and 2",
        "0"
      ],
      [
        "3",
        "0"
      ],
      [
        "MATH 20C",
        "0"
      ]
    ],
    "prerequisites": "ECON 1 or 100B and 2 or 3 or MATH 20C",
    "notes": "none"
  },
  {
    "course_code": "ECON 102T",
    "course_name": "ECON 102T. Advanced Topic in Globalization",
    "credits": "2",
    "description": "This course presents a selection of empirical applications and advanced topics that build on the material covered in ECON 102, Globalization. Students have the opportunity to analyze global trade and capital market data and to prepare a presentation and brief paper on a specific topic.",
    "prerequisite_segments": [
      [
        "department approval required",
        "0"
      ]
    ],
    "prerequisites": "department approval required",
    "notes": "May be taken concurrently with ECON 102 or after completion of ECON 102."
  },
  {
    "course_code": "ECON 103",
    "course_name": "ECON 103. International Monetary Relations",
    "credits": "4",
    "description": "Analyzes exchange rates and the current account. Relates their joint determination to financial markets and the real-side macroeconomy using international macroeconomic models and presents empirical regularities. Discusses macroeconomic policies under different exchange rate regimes and implications for financial stability and current account sustainability.",
    "prerequisite_segments": [
      [
        "ECON 102",
        "0"
      ],
      [
        "110B",
        "0"
      ],
      [
        "173A",
        "0"
      ]
    ],
    "prerequisites": "ECON 102 or 110B or 173A",
    "notes": "none"
  },
  {
    "course_code": "ECON 104",
    "course_name": "ECON 104. Nobody’s Fool: Economics with Morals",
    "credits": "2",
    "description": "The prevailing paradigm in economics is self-interest, but what if acting unselfishly is what is in your self-interest? We will explore economic questions from the viewpoint that individuals have moral values that guide how they live. This allows us to address issues like fairness, love, marriage, giving, identity, conformity, discrimination, crime, punishment, and reparations.",
    "prerequisite_segments": [
      [
        "ECON 100C",
        "0"
      ]
    ],
    "prerequisites": "ECON 100C",
    "notes": "none"
  },
  {
    "course_code": "ECON 105",
    "course_name": "ECON 105. Industrial Organization and Firm Strategy",
    "credits": "4",
    "description": "Theory of monopoly and oligopoly pricing, price discrimination, durable goods pricing, cartel behavior, price wars, strategic entry barriers, mergers, pro- and anticompetitive restraints on business.",
    "prerequisite_segments": [
      [
        "ECON 100C",
        "0"
      ]
    ],
    "prerequisites": "ECON 100C",
    "notes": "none"
  },
  {
    "course_code": "ECON 106",
    "course_name": "ECON 106. International Economic Agreements",
    "credits": "4",
    "description": "Examines reasons for international economic agreements, their design, the strategic interactions that determine how the agreements are implemented and sustained, and consequences for global welfare and inequality. Draws on international economics, game theory, law and economics, and political economy to understand international economic agreements. These tools are used to understand multilateral trade and investment agreements, such as NAFTA, and international organizations, such as the WTO.",
    "prerequisite_segments": [
      [
        "ECON 100B and 102",
        "0"
      ]
    ],
    "prerequisites": "ECON 100B and 102",
    "notes": "none"
  },
  {
    "course_code": "ECON 107",
    "course_name": "ECON 107. Economic Regulation and Antitrust Policy",
    "credits": "4",
    "description": "Detailed treatment of antitrust policy: Sherman Act, price fixing, collusive practices, predatory pricing, price discrimination, double marginalization, exclusive territories, resale price maintenance, refusal to deal, and foreclosure. Theory of regulation and regulatory experience in electrical utilities, oil, telecommunications, broadcasting, etc.",
    "prerequisite_segments": [
      [
        "ECON 2",
        "0"
      ],
      [
        "100B",
        "0"
      ]
    ],
    "prerequisites": "ECON 2 or 100B",
    "notes": "and MATH 10C or 20C or 31BH."
  },
  {
    "course_code": "ECON 109",
    "course_name": "ECON 109. Game Theory",
    "credits": "4",
    "description": "Introduction to game theory. Analysis of people’s decisions when the consequences of the decisions depend on what other people do. This course features applications in economics, political science, and law.",
    "prerequisite_segments": [
      [
        "ECON 100C",
        "0"
      ],
      [
        "MATH 31CH",
        "0"
      ],
      [
        "MATH 109",
        "0"
      ],
      [
        "(CSE 20 and MATH 20 C)",
        "0"
      ]
    ],
    "prerequisites": "ECON 100C or MATH 31CH or MATH 109 or (CSE 20 and MATH 20 C)",
    "notes": "none"
  },
  {
    "course_code": "ECON 109T",
    "course_name": "ECON 109T. Advanced Topics in Game Theory",
    "credits": "2",
    "description": "This course presents a selection of applications and advanced topics that build on the material covered in the ECON 109. Game Theory course.",
    "prerequisite_segments": [
      [
        "department approval required",
        "0"
      ]
    ],
    "prerequisites": "department approval required",
    "notes": "May be taken concurrently with ECON 109 or after completion of ECON 109."
  },
  {
    "course_code": "ECON 110A",
    "course_name": "ECON 110A. Long Run Macroeconomics",
    "credits": "4",
    "description": "Analysis of the determination of long run growth and models of the determination of output, interest rates, and the price level. Analysis of inflation, unemployment, and monetary and fiscal policy.",
    "prerequisite_segments": [
      [
        "ECON 1 and ECON 3 and MATH 10C",
        "0"
      ],
      [
        "MATH 20C",
        "0"
      ],
      [
        "MATH 31BH",
        "0"
      ]
    ],
    "prerequisites": "ECON 1 and ECON 3 and MATH 10C or MATH 20C or MATH 31BH",
    "notes": "none"
  },
  {
    "course_code": "ECON 110B",
    "course_name": "ECON 110B. Short Run Macroeconomics",
    "credits": "4",
    "description": "Analysis of the determination of consumption spending at the aggregate level; extension of the basic macro model to include exchange rates and international trade; the aggregate money supply, and the business cycle.",
    "prerequisite_segments": [
      [
        "ECON 1 and ECON 3 and MATH 10C",
        "0"
      ],
      [
        "MATH 20C",
        "0"
      ],
      [
        "MATH 31BH",
        "0"
      ]
    ],
    "prerequisites": "ECON 1 and ECON 3 and MATH 10C or MATH 20C or MATH 31BH",
    "notes": "none"
  },
  {
    "course_code": "ECON 110AH",
    "course_name": "ECON 110AH. Honors Macroeconomics A",
    "credits": "1",
    "description": "Honors sequence expanding on the material taught in ECON 110A. Major GPA of 3.5 or better required. May be taken concurrently with ECON 110A or after successful completion of ECON 110A with A–or better or consent of instructor. Priority enrollment given to majors in the department.",
    "prerequisite_segments": [
      [
        "department approval required",
        "0"
      ]
    ],
    "prerequisites": "department approval required",
    "notes": "none"
  },
  {
    "course_code": "ECON 110BH",
    "course_name": "ECON 110BH. Honors Macroeconomics B",
    "credits": "1",
    "description": "Honors sequence expanding on the material taught in ECON 110B. Major GPA of 3.5 or better required. May be taken concurrently with ECON 110B or after successful completion of ECON 110B with A– or better or consent of instructor. Priority enrollment given to majors in the department.",
    "prerequisite_segments": [
      [
        "department approval required",
        "0"
      ]
    ],
    "prerequisites": "department approval required",
    "notes": "none"
  },
  {
    "course_code": "ECON 111",
    "course_name": "ECON 111. Monetary Economics",
    "credits": "4",
    "description": "Financial structure of the US economy. Bank behavior. Monetary control.",
    "prerequisite_segments": [
      [
        "ECON 110B",
        "0"
      ]
    ],
    "prerequisites": "ECON 110B",
    "notes": "none"
  },
  {
    "course_code": "ECON 112",
    "course_name": "ECON 112. Macroeconomic Data Analysis",
    "credits": "4",
    "description": "Examines time series methods for data analysis with an emphasis on macroeconomic applications. Students are provided with an overview of fundamental time series techniques, hands-on experience in applying them to real-world macroeconomic data, and expertise in performing empirical tests of policy-relevant macroeconomic theories, such as the permanent income hypothesis, the Keynesian fiscal multiplier, and the Phillips curve.",
    "prerequisite_segments": [
      [
        "ECON 110B and ECON 120B",
        "0"
      ],
      [
        "MATH 181B",
        "0"
      ]
    ],
    "prerequisites": "ECON 110B and ECON 120B or MATH 181B",
    "notes": "Enrollment limited to majors in the Department of Economics and MA33 only."
  },
  {
    "course_code": "ECON 113",
    "course_name": "ECON 113. Mathematical Economics",
    "credits": "4",
    "description": "Mathematical concepts and techniques used in advanced economic analysis; applications to selected aspects of economic theory.",
    "prerequisite_segments": [
      [
        "ECON 100C",
        "0"
      ],
      [
        "MATH 140A",
        "0"
      ],
      [
        "MATH 142A and MATH 18",
        "0"
      ],
      [
        "MATH 31AH",
        "0"
      ]
    ],
    "prerequisites": "ECON 100C or MATH 140A or MATH 142A and MATH 18 or MATH 31AH",
    "notes": "none"
  },
  {
    "course_code": "ECON 116",
    "course_name": "ECON 116. Economic Development",
    "credits": "4",
    "description": "Introduction to the economics of less developed countries, covering their international trade, human resources, urbanization, agriculture, income distribution, political economy, and environment.",
    "prerequisite_segments": [
      [
        "ECON 2",
        "0"
      ],
      [
        "100B",
        "0"
      ]
    ],
    "prerequisites": "ECON 2 or 100B",
    "notes": "none"
  },
  {
    "course_code": "ECON 117",
    "course_name": "ECON 117. Economic Growth",
    "credits": "4",
    "description": "Basic economic dynamics, consumption versus growth with fixed or growing populations, the Harrod-Domar growth model, the neoclassical growth model, optimal growth, the Golden Rule, money and economic growth, technological progress and economic growth, human capital and endogenous economic growth, and alternative theories of growth and distribution.",
    "prerequisite_segments": [
      [
        "ECON 100A",
        "0"
      ]
    ],
    "prerequisites": "ECON 100A",
    "notes": "none"
  },
  {
    "course_code": "ECON 118",
    "course_name": "ECON 118. Law and Economics: Torts, Property, and Crime",
    "credits": "4",
    "description": "Uses economic theory to evaluate the economic effects of US law in several legal fields, including tort law (accidents), products liability law, property law, criminal law (law enforcement), and litigation. Also considers risk bearing and why people buy insurance.",
    "prerequisite_segments": [
      [
        "ECON 2",
        "0"
      ],
      [
        "100A",
        "0"
      ]
    ],
    "prerequisites": "ECON 2 or 100A",
    "notes": "and MATH 10A or 20A."
  },
  {
    "course_code": "ECON 119",
    "course_name": "ECON 119. Law and Economics: Contracts and Corporations",
    "credits": "4",
    "description": "This course asks how firms are organized and why the corporate form dominates, how corporations are governed and the distortions that result, when firms borrow and how they deal with financial distress and bankruptcy. The course will present basic legal doctrines in corporate law, contract law, debtor-creditor law, and bankruptcy, and use economic models to analyze whether and when these doctrines promote economically efficient behavior.",
    "prerequisite_segments": [
      [
        "ECON 2",
        "0"
      ],
      [
        "100A and MATH 10A",
        "0"
      ],
      [
        "20A",
        "0"
      ]
    ],
    "prerequisites": "ECON 2 or 100A and MATH 10A or 20A",
    "notes": "none"
  },
  {
    "course_code": "ECON 120A",
    "course_name": "ECON 120A. Econometrics A",
    "credits": "4",
    "description": "Probability and statistics used in economics. Probability and sampling theory, statistical inference, and use of spreadsheets. Credit not allowed for ECON 120A after ECE 109, MAE 108, MATH 180A, MATH 183, or MATH 186.",
    "prerequisite_segments": [
      [
        "ECON 1",
        "0"
      ]
    ],
    "prerequisites": "ECON 1",
    "notes": "and MATH 10C or 20C or 31BH."
  },
  {
    "course_code": "ECON 120B",
    "course_name": "ECON 120B. Econometrics B",
    "credits": "4",
    "description": "Basic econometric methods, including the linear regression, hypothesis testing, quantifying uncertainty using confidence intervals, and distinguishing correlation from causality. Credit not allowed for both ECON 120B after MATH 181B.",
    "prerequisite_segments": [
      [
        "ECON 120A",
        "0"
      ],
      [
        "ECE 109",
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
    "prerequisites": "ECON 120A or ECE 109 or MAE 108 or MATH 180A or MATH 183 or MATH 186",
    "notes": "none"
  },
  {
    "course_code": "ECON 120C",
    "course_name": "ECON 120C. Econometrics C",
    "credits": "4",
    "description": "Advanced econometric methods: estimation of linear regression models with endogeneity, economic methods designed for panel data sets, estimation of discrete choice models, time series analysis, and estimation in the presence of autocorrelated and heteroskedastic errors.",
    "prerequisite_segments": [
      [
        "ECON 120B",
        "0"
      ],
      [
        "MATH 181B",
        "0"
      ]
    ],
    "prerequisites": "ECON 120B or MATH 181B",
    "notes": "none"
  },
  {
    "course_code": "ECON 120AH",
    "course_name": "ECON 120AH. Honors Econometrics A",
    "credits": "1",
    "description": "Honors sequence expanding on the material taught in ECON 120A. Major GPA of 3.5 or better required. May be taken concurrently with ECON 120A or after successful completion of ECON 120A with A– or better or consent of instructor. Priority enrollment given to majors in the department.",
    "prerequisite_segments": [
      [
        "department approval required",
        "0"
      ]
    ],
    "prerequisites": "department approval required",
    "notes": "none"
  },
  {
    "course_code": "ECON 120BH",
    "course_name": "ECON 120BH. Honors Econometrics B",
    "credits": "1",
    "description": "Honors sequence expanding on the material taught in ECON 120B. Major GPA of 3.5 or better required. May be taken concurrently with ECON 120B or after successful completion of ECON 120B with A– or better or consent of instructor. Priority enrollment given to majors in the department.",
    "prerequisite_segments": [
      [
        "department approval required",
        "0"
      ]
    ],
    "prerequisites": "department approval required",
    "notes": "none"
  },
  {
    "course_code": "ECON 120CH",
    "course_name": "ECON 120CH. Honors Econometrics C",
    "credits": "1",
    "description": "Honors sequence expanding on the material taught in ECON 120C. Major GPA of 3.5 or better required. May be taken concurrently with ECON 120C or after successful completion of ECON 120C with A– or better or consent of instructor. Priority enrollment given to majors in the department.",
    "prerequisite_segments": [
      [
        "department approval required",
        "0"
      ]
    ],
    "prerequisites": "department approval required",
    "notes": "none"
  },
  {
    "course_code": "ECON 121",
    "course_name": "ECON 121. Applied Econometrics and Data Analysis",
    "credits": "4",
    "description": "Theoretically develops extensions to the standard econometric toolbox, studies their application in scientific research, and applies them to data. Emphasis is on using techniques, and on understanding and critically assessing others’ use of them. Requires practical work on the computer using a range of data from around the world. Topics include advanced regression analysis, limited dependent variables, nonparametric methods, and new methods for causal inference.",
    "prerequisite_segments": [
      [
        "ECON 120C",
        "0"
      ]
    ],
    "prerequisites": "ECON 120C",
    "notes": "none"
  },
  {
    "course_code": "ECON 122",
    "course_name": "ECON 122. Econometric Theory",
    "credits": "4",
    "description": "Detailed study of the small sample and asymptotic properties of estimators commonly used in applied econometric work: multiple linear regression, instrumental variables, generalized method of moments, and maximum likelihood. Econometric computation using MATLAB. Recommended preparation: ECON 120C.",
    "prerequisite_segments": [
      [
        "ECON 120B",
        "0"
      ],
      [
        "MATH 181B and MATH 18",
        "0"
      ],
      [
        "MATH 31AH",
        "0"
      ]
    ],
    "prerequisites": "ECON 120B or MATH 181B and MATH 18 or MATH 31AH",
    "notes": "none"
  },
  {
    "course_code": "ECON 125",
    "course_name": "ECON 125. Demographic Analysis and Forecasting",
    "credits": "4",
    "description": "Interaction between economic forces and demographic changes are considered, as are demographic composition and analysis; fertility, mortality, and migration processes and trends. Course emphasizes the creation, evaluation, and interpretation of forecasts for states, regions, and subcounty areas. ECON 178 is recommended.",
    "prerequisite_segments": [
      [
        "ECON 120B",
        "0"
      ],
      [
        "MATH 181B",
        "0"
      ]
    ],
    "prerequisites": "ECON 120B or MATH 181B",
    "notes": "none"
  },
  {
    "course_code": "ECON 129",
    "course_name": "ECON 129. Cities, Inequality, Innovation",
    "credits": "4",
    "description": "Explores the dual role of cities as places of innovation and job creation but also places of great economic inequality and segregation over the last century. Studies the experience of American cities, identifying fundamental forces that made them prosper or decline. Connect cities to observed aggregate trends in innovation, job creation, and economic inequality. Practices use of GIS software to organize and analyze spatial data.",
    "prerequisite_segments": [
      [
        "ECON 110A and (ECON 120A",
        "0"
      ],
      [
        "ECE 109",
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
        "MATH 186)",
        "0"
      ]
    ],
    "prerequisites": "ECON 110A and (ECON 120A or ECE 109 or MAE 108 or MATH 180A or MATH 183 or MATH 186)",
    "notes": "none"
  },
  {
    "course_code": "ECON 130",
    "course_name": "ECON 130. Public Policy",
    "credits": "4",
    "description": "Course uses basic microeconomic tools to discuss a wide variety of public issues, including the war on drugs, global warming, natural resources, health care and safety regulation. Appropriate for majors who have not completed ECON 100A-B-C and students from other departments.",
    "prerequisite_segments": [
      [
        "ECON 2",
        "0"
      ],
      [
        "100A",
        "0"
      ]
    ],
    "prerequisites": "ECON 2 or 100A",
    "notes": "none"
  },
  {
    "course_code": "ECON 131",
    "course_name": "ECON 131. Economics of the Environment",
    "credits": "4",
    "description": "Environmental issues from an economic perspective. Relation of the environment to economic growth. Management of natural resources, such as forest and fresh water. Policies on air, water, and toxic waste pollution. International issues such as ozone depletion and sustainable development.",
    "prerequisite_segments": [
      [
        "ECON 2",
        "0"
      ],
      [
        "100A",
        "0"
      ]
    ],
    "prerequisites": "ECON 2 or 100A",
    "notes": "none"
  },
  {
    "course_code": "ECON 132",
    "course_name": "ECON 132. Energy Economics",
    "credits": "4",
    "description": "Energy from an economic perspective. Fuel cycles for coal, hydro, nuclear, oil, and solar energy. Emphasis on efficiency and control of pollution. Comparison of energy use across sectors and across countries. Global warming. Role of energy in the international economy.",
    "prerequisite_segments": [
      [
        "ECON 1 and (ECON 2",
        "0"
      ],
      [
        "3",
        "0"
      ],
      [
        "100A",
        "0"
      ],
      [
        "131",
        "0"
      ],
      [
        "ESYS 103",
        "0"
      ],
      [
        "MAE 124) and MATH 10C",
        "0"
      ],
      [
        "20C",
        "0"
      ],
      [
        "31BH",
        "0"
      ]
    ],
    "prerequisites": "ECON 1 and (ECON 2 or 3 or 100A or 131 or ESYS 103 or MAE 124) and MATH 10C or 20C or 31BH",
    "notes": "none"
  },
  {
    "course_code": "ECON 134",
    "course_name": "ECON 134. US Budget Policy",
    "credits": "4",
    "description": "The course examines major issues relating to US budget policy, including deficits and debt, distributional and efficiency effects of the tax system, Social Security and disability insurance, and transfer programs. We build on empirical and theoretical tools to give students a framework for understanding the practice of US budget policymaking in relation to current economic debates.",
    "prerequisite_segments": [
      [
        "ECON 100A",
        "0"
      ]
    ],
    "prerequisites": "ECON 100A",
    "notes": "Enrollment limited to majors in the Department of Economics."
  },
  {
    "course_code": "ECON 135",
    "course_name": "ECON 135. Urban Economics",
    "credits": "4",
    "description": "(Cross-listed with USP 102.) Economic analysis of why cities develop, patterns of land use in cities, why cities suburbanize, and the pattern of urban commuting. The course also examines problems of urban congestion, air pollution, zoning, poverty, crime, and discusses public policies to deal with them. Credit not allowed for both ECON 135 and USP 102.",
    "prerequisite_segments": [
      [
        "ECON 2",
        "0"
      ],
      [
        "100A",
        "0"
      ]
    ],
    "prerequisites": "ECON 2 or 100A",
    "notes": "and MATH 10A or 20A."
  },
  {
    "course_code": "ECON 136",
    "course_name": "ECON 136. Human Resources",
    "credits": "4",
    "description": "A practical yet theory-based study of the firm’s role in managing workers, including issues related to hiring, education and training, promotions, layoffs and buyouts, and the overarching role that worker compensation plays in all of these.",
    "prerequisite_segments": [
      [
        "ECON 100B",
        "0"
      ]
    ],
    "prerequisites": "ECON 100B",
    "notes": "none"
  },
  {
    "course_code": "ECON 137",
    "course_name": "ECON 137. Corruption",
    "credits": "4",
    "description": "This course examines corruption in developing countries today, with the aims of understanding why it occurs, what the consequences are, and what can or should be done about it. In the process, we will endeavor to build practical problem-solving and communication skills. As such, the course is designed for future leaders in business, nonprofit, and public service settings who seek to develop their ability to map high-quality research into pragmatic enterprise decision making.",
    "prerequisite_segments": [
      [
        "ECON 100C and 120C",
        "0"
      ]
    ],
    "prerequisites": "ECON 100C and 120C",
    "notes": "Enrollment limited to majors in the Department of Economics and MA33 only; department approval required."
  },
  {
    "course_code": "ECON 138",
    "course_name": "ECON 138. Economics of Discrimination",
    "credits": "4",
    "description": "This course will investigate differences in economic outcomes on the basis of race, gender, ethnicity, religion, and sexual orientation. We will study economic theories of discrimination, empirical work testing those theories, and policies aimed at alleviating group-level differences in economic outcomes.",
    "prerequisite_segments": [
      [
        "ECON 1",
        "0"
      ]
    ],
    "prerequisites": "ECON 1",
    "notes": "none"
  },
  {
    "course_code": "ECON 139",
    "course_name": "ECON 139. Labor Economics",
    "credits": "4",
    "description": "Theoretical and empirical analysis of labor markets. Topics include labor supply, labor demand, human capital investment, wage inequality, labor mobility, immigration, labor market discrimination, labor unions and unemployment.",
    "prerequisite_segments": [
      [
        "ECON 2",
        "0"
      ],
      [
        "100B",
        "0"
      ]
    ],
    "prerequisites": "ECON 2 or 100B",
    "notes": "none"
  },
  {
    "course_code": "ECON 140",
    "course_name": "ECON 140. Economics of Health Producers",
    "credits": "4",
    "description": "Provides an overview of the physician, hospital, and pharmaceutical segments of the health sector. Uses models of physician behavior, for-profit and nonprofit institutions to understand the trade-offs facing health-sector regulators and the administrators of public and private insurance arrangements.",
    "prerequisite_segments": [
      [
        "ECON 2",
        "0"
      ],
      [
        "100B",
        "0"
      ]
    ],
    "prerequisites": "ECON 2 or 100B",
    "notes": "none"
  },
  {
    "course_code": "ECON 141",
    "course_name": "ECON 141. Economics of Health Consumers",
    "credits": "4",
    "description": "Demand for health care and health insurance, employer provision of health insurance and impact on wages and job changes. Cross-country comparisons of health systems.",
    "prerequisite_segments": [
      [
        "ECON 100C",
        "0"
      ]
    ],
    "prerequisites": "ECON 100C",
    "notes": "none"
  },
  {
    "course_code": "ECON 142",
    "course_name": "ECON 142. Behavioral Economics",
    "credits": "4",
    "description": "Course will study economic models in which standard economic rationality assumptions are combined with psychologically plausible assumptions on behavior. We consider whether the new models improve ability to predict and understand phenomena including altruism, trust and reciprocity, procrastination, and self-control.",
    "prerequisite_segments": [
      [
        "ECON 109",
        "0"
      ]
    ],
    "prerequisites": "ECON 109",
    "notes": "none"
  },
  {
    "course_code": "ECON 143",
    "course_name": "ECON 143. Experimental Economics",
    "credits": "4",
    "description": "Explore use of experiments to study individual and interactive (strategic) decision making. Topics may include choice over risky alternatives, altruism and reciprocity, allocation and information aggregation in competitive markets, cooperation and collusion, bidding in auctions, strategy in coordination and “outguessing” games.",
    "prerequisite_segments": [
      [
        "ECON 100C",
        "0"
      ]
    ],
    "prerequisites": "ECON 100C",
    "notes": "Enrollment limited to majors in the Department of Economics and MA33 only."
  },
  {
    "course_code": "ECON 144",
    "course_name": "ECON 144. Economics of Conservation",
    "credits": "4",
    "description": "Examines conservation of biodiversity from an economic perspective. Topics include valuing biodiversity, defining successful conservation, and evaluating the cost effectiveness of policies such as conservation payments, ecotourism, and privatization. Emphasis on forests, coral reefs, elephants, tigers, and sea turtles.",
    "prerequisite_segments": [
      [
        "ECON 2",
        "0"
      ],
      [
        "100A",
        "0"
      ]
    ],
    "prerequisites": "ECON 2 or 100A",
    "notes": "none"
  },
  {
    "course_code": "ECON 145",
    "course_name": "ECON 145. Economics of Ocean Resources",
    "credits": "4",
    "description": "Economic issues associated with oceans. Economics of managing renewable resources in the oceans, with an emphasis on fisheries, economics of conservation and biodiversity preservation for living marine resources, with an emphasis on whales, dolphins, sea turtles, and coral reefs.",
    "prerequisite_segments": [
      [
        "ECON 2",
        "0"
      ],
      [
        "100A",
        "0"
      ]
    ],
    "prerequisites": "ECON 2 or 100A",
    "notes": "none"
  },
  {
    "course_code": "ECON 146",
    "course_name": "ECON 146. Economic Stabilization",
    "credits": "4",
    "description": "Theory of business cycles and techniques used by governments to stabilize an economy. Discussion of recent economic experience.",
    "prerequisite_segments": [
      [
        "ECON 110B",
        "0"
      ]
    ],
    "prerequisites": "ECON 110B",
    "notes": "none"
  },
  {
    "course_code": "ECON 147",
    "course_name": "ECON 147. Economics of Education",
    "credits": "4",
    "description": "Examination of issues in education using theoretical and empirical approaches from economics. Analysis of decisions to invest in education. Consideration of various market structures in education, including school choice and school finance programs.",
    "prerequisite_segments": [
      [
        "ECON 2",
        "0"
      ],
      [
        "100A",
        "0"
      ]
    ],
    "prerequisites": "ECON 2 or 100A",
    "notes": "and ECON 120B or MATH 181B."
  },
  {
    "course_code": "ECON 149",
    "course_name": "ECON 149. Introduction to Economic Design",
    "credits": "4",
    "description": "The course will examine the theory and practice of designing markets and institutions for strategic agents. We will discuss applications in auctions, voting and social choice, online platforms, resource allocation, and matching markets.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 150",
    "course_name": "ECON 150. Public Economics: Taxation",
    "credits": "4",
    "description": "Overview of the existing national tax structure in the United States, its effects on individual and firm decisions, and the resulting efficiency costs and distributional consequences. The course concludes with an examination of several commonly-proposed tax reforms.",
    "prerequisite_segments": [
      [
        "ECON 100C",
        "0"
      ]
    ],
    "prerequisites": "ECON 100C",
    "notes": "none"
  },
  {
    "course_code": "ECON 151",
    "course_name": "ECON 151. Public Economics: Expenditures I",
    "credits": "4",
    "description": "Overview of the public sector in the United States and the scope of government intervention in economic life. Theory of public goods and externalities. Discussion of specific expenditure programs such as education and national defense.",
    "prerequisite_segments": [
      [
        "ECON 100C",
        "0"
      ]
    ],
    "prerequisites": "ECON 100C",
    "notes": "none"
  },
  {
    "course_code": "ECON 152",
    "course_name": "ECON 152. Public Economics: Expenditures II",
    "credits": "4",
    "description": "Overview of the public sector in the United States and the justifications for government intervention in economic life. Theory of income redistribution and social insurance. Applications to current policy in such areas as health insurance, welfare, unemployment insurance, and Social Security.",
    "prerequisite_segments": [
      [
        "ECON 100C",
        "0"
      ]
    ],
    "prerequisites": "ECON 100C",
    "notes": "none"
  },
  {
    "course_code": "ECON 152T",
    "course_name": "ECON 152T. Advanced Topics in Family Economics and Social Insurance",
    "credits": "2",
    "description": "Investigate design of social insurance in the context of the family. Learn effects of economic shocks, such as unemployment and adverse health events, on the family as the economic unit. Learning outcomes include informal self-insurance arrangements and spillovers across family members. Use theory to study welfare implications of findings on optimal design of social insurance policies.",
    "prerequisite_segments": [
      [
        "ECON 152",
        "0"
      ]
    ],
    "prerequisites": "ECON 152",
    "notes": "none"
  },
  {
    "course_code": "ECON 158",
    "course_name": "ECON 158. Economic History of the United States I",
    "credits": "4",
    "description": "(Cross-listed with HIUS 140.) The United States as a raw materials producer, as an agrarian society, and as an industrial nation. Emphasis on the logic of the growth process, the social and political tensions accompanying expansion, and nineteenth- and early twentieth-century transformations of American capitalism. Credit not allowed for both ECON 158 and HIUS 140.",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing",
    "notes": "none"
  },
  {
    "course_code": "ECON 159",
    "course_name": "ECON 159. Economic History of the United States II",
    "credits": "4",
    "description": "(Cross-listed with HIUS 141.) The United States as a modern industrial nation. Emphasis on the logic of the growth process, the social and political tensions accompanying expansion, and twentieth-century transformations of American capitalism. Credit not allowed for both ECON 159 and HIUS 141.",
    "prerequisite_segments": [
      [
        "upper-division standing",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing",
    "notes": "none"
  },
  {
    "course_code": "ECON 162",
    "course_name": "ECON 162. Economics of Mexico",
    "credits": "4",
    "description": "Survey of the Mexican economy. Topics such as economic growth, business cycles, saving-investment balance, financial markets, fiscal and monetary policy, labor markets, industrial structure, international trade, and agricultural policy.",
    "prerequisite_segments": [
      [
        "ECON 1 and 3",
        "0"
      ]
    ],
    "prerequisites": "ECON 1 and 3",
    "notes": "none"
  },
  {
    "course_code": "ECON 164",
    "course_name": "ECON 164. The Indian Economy",
    "credits": "4",
    "description": "Survey of the Indian economy. Historical overview and perspective; political economy; democracy and development; economic growth; land, labor, and credit markets; poverty and inequality; health, education, and human development; technology and development; institutions and state capacity; contemporary policy issues and debates.",
    "prerequisite_segments": [
      [
        "ECON 1 and 3",
        "0"
      ]
    ],
    "prerequisites": "ECON 1 and 3",
    "notes": "none"
  },
  {
    "course_code": "ECON 164T",
    "course_name": "ECON 164T. Advanced Topics in the Indian Economy",
    "credits": "2",
    "description": "ECON 164T will cover topics in more depth than in ECON 164 with more extensive readings and discussion. The class will meet in a seminar format where students will be expected to actively participate in discussions based on the readings and write a short paper at the end of the quarter.",
    "prerequisite_segments": [
      [
        "department approval required",
        "0"
      ]
    ],
    "prerequisites": "department approval required",
    "notes": "May be taken concurrently with ECON 164 or after completion of ECON 164."
  },
  {
    "course_code": "ECON 165",
    "course_name": "ECON 165. Middle East Economics",
    "credits": "4",
    "description": "Socioeconomic development in the Arab world, Iran, and Turkey. Historical perspective; international trade and fuel resources; education, health, and gender gaps; unemployment and migration; population and environment; Islam and democracy.",
    "prerequisite_segments": [
      [
        "ECON 1 and 3",
        "0"
      ]
    ],
    "prerequisites": "ECON 1 and 3",
    "notes": "none"
  },
  {
    "course_code": "ECON 165T",
    "course_name": "ECON 165T. Advanced Topics in Middle East Economics",
    "credits": "2",
    "description": "This course will cover certain country experiences and certain topics in more depth than in ECON 165. Students will also have the opportunity to choose countries and topics of particular interest to them for further reading and as subjects for a presentation and brief paper.",
    "prerequisite_segments": [
      [
        "department approval required",
        "0"
      ]
    ],
    "prerequisites": "department approval required",
    "notes": "May be taken concurrently with ECON 165 or after completion of ECON 165."
  },
  {
    "course_code": "ECON 167",
    "course_name": "ECON 167. Economics of China",
    "credits": "4",
    "description": "Survey of the Chinese economy. Topics such as economic growth, China’s transition to a market economy, international trade, financial markets, labor markets, and industrial structure.",
    "prerequisite_segments": [
      [
        "ECON 1 and 3",
        "0"
      ]
    ],
    "prerequisites": "ECON 1 and 3",
    "notes": "none"
  },
  {
    "course_code": "ECON 168",
    "course_name": "ECON 168. Economics of Modern Israel",
    "credits": "4",
    "description": "This course explores economic processes that shape the Israeli economy. Topics include biblical economics, economics of religion, economic growth, income inequality and consumer protests, employment, globalization, inflation, the high-tech sector, terrorism, and education.",
    "prerequisite_segments": [
      [
        "ECON 1 and 3",
        "0"
      ]
    ],
    "prerequisites": "ECON 1 and 3",
    "notes": "none"
  },
  {
    "course_code": "ECON 169",
    "course_name": "ECON 169. Economics of Korea",
    "credits": "4",
    "description": "This course covers long-run economic development and current economic issues of South Korea. Topics include examination of major policy changes (e.g., shifts toward export promotion, heavy and chemical industries promotion); Korea’s industrial structure, including the role of large enterprises (chaebol); role of government; and links between Korea and other countries.",
    "prerequisite_segments": [
      [
        "ECON 3 and 100A",
        "0"
      ]
    ],
    "prerequisites": "ECON 3 and 100A",
    "notes": "none"
  },
  {
    "course_code": "ECON 171",
    "course_name": "ECON 171. Decisions Under Uncertainty",
    "credits": "4",
    "description": "Decision making when the consequences are uncertain. Decision trees, payoff tables, decision criteria, expected utility theory, risk aversion, and applications to investments and asset pricing.",
    "prerequisite_segments": [
      [
        "ECON 100A and ECE 109",
        "0"
      ],
      [
        "MAE 108",
        "0"
      ],
      [
        "MATH 181A",
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
        "MATH 183",
        "0"
      ],
      [
        "MATH 186",
        "0"
      ],
      [
        "MATH 180B",
        "0"
      ]
    ],
    "prerequisites": "ECON 100A and ECE 109 or MAE 108 or MATH 181A or ECON 120A or MATH 180A or MATH 183 or MATH 186 or MATH 180B",
    "notes": "none"
  },
  {
    "course_code": "ECON 172A",
    "course_name": "ECON 172A. Operations Research A",
    "credits": "4",
    "description": "Linear and integer programming, elements of zero-sum, two-person game theory, and specific combinatorial algorithms. Credit not allowed for both ECON 172A and MATH 171A.",
    "prerequisite_segments": [
      [
        "ECON 100A",
        "0"
      ]
    ],
    "prerequisites": "ECON 100A",
    "notes": "and ECON 120A or ECE 109 or MATH 180A or MATH 183 or MATH 186; and MATH 18 or 31AH."
  },
  {
    "course_code": "ECON 172B",
    "course_name": "ECON 172B. Operations Research B",
    "credits": "4",
    "description": "Nonlinear programming, deterministic and stochastic dynamic programming, queuing theory, search models, and inventory models. Credit not allowed for both ECON 172B and MATH 171B.",
    "prerequisite_segments": [
      [
        "ECON 172A",
        "0"
      ],
      [
        "MATH 171A",
        "0"
      ]
    ],
    "prerequisites": "ECON 172A or MATH 171A",
    "notes": "none"
  },
  {
    "course_code": "ECON 173A",
    "course_name": "ECON 173A. Financial Markets",
    "credits": "4",
    "description": "Financial market functions, institutions and instruments: stocks, bonds, cash instruments, derivatives (options), etc. Discussion of no-arbitrage arguments, as well as investors’ portfolio decisions and the basic risk-return trade-off established in market equilibrium.",
    "prerequisite_segments": [
      [
        "ECON 100A and ECON 120B",
        "0"
      ],
      [
        "MATH 181B",
        "0"
      ]
    ],
    "prerequisites": "ECON 100A and ECON 120B or MATH 181B",
    "notes": "and MATH 18 or 31AH."
  },
  {
    "course_code": "ECON 173B",
    "course_name": "ECON 173B. Corporate Finance",
    "credits": "4",
    "description": "Introduces the firm’s capital budgeting decision, including methods for evaluation and ranking of investment projects, the firm’s choice of capital structure, dividend policy decisions, corporate taxes, mergers and acquisitions.",
    "prerequisite_segments": [
      [
        "ECON 4",
        "0"
      ],
      [
        "MGT 4",
        "0"
      ]
    ],
    "prerequisites": "ECON 4 or MGT 4",
    "notes": "and ECON 173A."
  },
  {
    "course_code": "ECON 174",
    "course_name": "ECON 174. Financial Risk Management",
    "credits": "4",
    "description": "Risk measures, hedging techniques, value of risk to firms, estimation of optimal hedge ratio, risk management with options and futures. ECON 171 is recommended.",
    "prerequisite_segments": [
      [
        "ECON 173A",
        "0"
      ]
    ],
    "prerequisites": "ECON 173A",
    "notes": "none"
  },
  {
    "course_code": "ECON 176",
    "course_name": "ECON 176. Marketing",
    "credits": "4",
    "description": "Role of marketing in the economy. Topics such as buyer behavior, marketing mix, promotion, product selection, pricing, and distribution. Concurrent enrollment in ECON 120C is permitted.",
    "prerequisite_segments": [
      [
        "ECON 120C",
        "0"
      ]
    ],
    "prerequisites": "ECON 120C",
    "notes": "none"
  },
  {
    "course_code": "ECON 178",
    "course_name": "ECON 178. Economic and Business Forecasting",
    "credits": "4",
    "description": "Survey of theoretical and practical aspects of statistical and economic forecasting. Such topics as long-run and short-run horizons, leading indicator analysis, econometric models, technological and population forecasts, forecast evaluation, and the use of forecasts for public policy.",
    "prerequisite_segments": [
      [
        "ECON 120C",
        "0"
      ]
    ],
    "prerequisites": "ECON 120C",
    "notes": "Enrollment limited to majors in the Department of Economics and MA33 only."
  },
  {
    "course_code": "ECON 181",
    "course_name": "ECON 181. Topics in Economics",
    "credits": "4",
    "description": "Selected topics in economics. May be taken for credit up to three times.",
    "prerequisite_segments": [
      [
        "ECON 1 and ECON 3",
        "0"
      ]
    ],
    "prerequisites": "ECON 1 and ECON 3",
    "notes": "none"
  },
  {
    "course_code": "ECON 182",
    "course_name": "ECON 182. Topics in Microeconomics",
    "credits": "4",
    "description": "Selected topics in microeconomics.",
    "prerequisite_segments": [
      [
        "ECON 100C",
        "0"
      ]
    ],
    "prerequisites": "ECON 100C",
    "notes": "none"
  },
  {
    "course_code": "ECON 183",
    "course_name": "ECON 183. Topics in Macroeconomics",
    "credits": "4",
    "description": "May be taken for credit up to three times.",
    "prerequisite_segments": [
      [
        "ECON 110B",
        "0"
      ]
    ],
    "prerequisites": "ECON 110B",
    "notes": "none"
  },
  {
    "course_code": "ECON 190",
    "course_name": "ECON 190. An Introduction to Research in Economics",
    "credits": "2",
    "description": "Provides students with tools to carry out their own research in economics. Tools include learning meaningful information sources, including economics datasets and literature databases. Develops the skills to write key sections of an academic article in economics, such as a section including results or a section connecting a research idea to the existing literature.",
    "prerequisite_segments": [
      [
        "ECON 100A and ECE 109",
        "0"
      ],
      [
        "ECON 120A",
        "0"
      ],
      [
        "MATH 181A",
        "0"
      ],
      [
        "MATH 186",
        "0"
      ],
      [
        "MATH 183",
        "0"
      ],
      [
        "MAE 108",
        "0"
      ],
      [
        "MATH 180A",
        "0"
      ]
    ],
    "prerequisites": "ECON 100A and ECE 109 or ECON 120A or MATH 181A or MATH 186 or MATH 183 or MAE 108 or MATH 180A",
    "notes": "none"
  },
  {
    "course_code": "ECON 191A",
    "course_name": "ECON 191A. Senior Essay Seminar A",
    "credits": "4",
    "description": "Senior essay seminar for students with superior records in department majors. Students must complete ECON 191A and ECON 191B in consecutive quarters.",
    "prerequisite_segments": [
      [
        "department stamp required",
        "0"
      ]
    ],
    "prerequisites": "department stamp required",
    "notes": "none"
  },
  {
    "course_code": "ECON 191B",
    "course_name": "ECON 191B. Senior Essay Seminar B",
    "credits": "4",
    "description": "Senior essay seminar for students with superior records in department majors. Students must complete ECON 191A and ECON 191B in consecutive quarters.",
    "prerequisite_segments": [
      [
        "department stamp required",
        "0"
      ]
    ],
    "prerequisites": "department stamp required",
    "notes": "none"
  },
  {
    "course_code": "ECON 195",
    "course_name": "ECON 195. Introduction to Teaching Economics",
    "credits": "4",
    "description": "Introduction to teaching economics. Each student will be responsible for a class section in one of the lower-division economics courses. Limited to advanced economics majors with at least a 3.5 GPA in upper-division economics work. (P/NP grades only.) Students may not earn more than eight units credit in 195 courses.",
    "prerequisite_segments": [
      [
        "consent of the department",
        "0"
      ]
    ],
    "prerequisites": "consent of the department",
    "notes": "none"
  },
  {
    "course_code": "ECON 198",
    "course_name": "ECON 198. Directed Group Study",
    "credits": "2 or 4",
    "description": "Directed study on a topic or in a group field not included in regular department curriculum by special arrangement with a faculty member.",
    "prerequisite_segments": [
      [
        "upper-division standing and consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "upper-division standing and consent of instructor",
    "notes": "May be repeated up to three times when course topics vary. (P/NP grades only.)"
  },
  {
    "course_code": "ECON 199",
    "course_name": "ECON 199. Independent Study",
    "credits": "2 or 4",
    "description": "Independent reading or research under the direction of and by special arrangement with a Department of Economics faculty member. (P/NP grades only.)",
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
    "course_code": "ECON 200A",
    "course_name": "ECON 200A. Microeconomics A",
    "credits": "4",
    "description": "Modern consumer and producer theory. Preferences, utility maximization, demand, choice under uncertainty, intertemporal choice. Production, cost, profit maximization and supply. Comparative statics, duality.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Enrollment limited to Economics PhD students (EN75) or Rady PhD students (RS79); or consent of instructor."
  },
  {
    "course_code": "ECON 200B",
    "course_name": "ECON 200B. Microeconomics B",
    "credits": "4",
    "description": "Arrow-Debreu model of general economic equilibrium and welfare economics. Axiomatic theory of the firm and household. Existence of general economic equilibrium. First and Second Fundamental Theorems of Welfare Economics. Futures and contingent commodity markets. Core and core convergence.",
    "prerequisite_segments": [
      [
        "ECON 200A",
        "0"
      ]
    ],
    "prerequisites": "ECON 200A",
    "notes": "Enrollment limited to Economics PhD students (EN75) or Rady PhD students (RS79); or consent of instructor."
  },
  {
    "course_code": "ECON 200C",
    "course_name": "ECON 200C. Microeconomics C",
    "credits": "4",
    "description": "Information economics: static and dynamic games of incomplete information, signaling, screening, and lemons. Institutional analysis: social choice, mechanism design, cooperative bargaining, contracts, strategic theory of the firm.",
    "prerequisite_segments": [
      [
        "ECON 200B",
        "0"
      ]
    ],
    "prerequisites": "ECON 200B",
    "notes": "Enrollment limited to Economics PhD students (EN75) or Rady PhD students (RS79); or consent of instructor."
  },
  {
    "course_code": "ECON 201",
    "course_name": "ECON 201. Advanced Economic Theory",
    "credits": "4",
    "description": "An intensive examination of selected topics in economic theory. Course topic nonrepetitive in a three-year cycle.",
    "prerequisite_segments": [
      [
        "ECON 207 and 213",
        "0"
      ]
    ],
    "prerequisites": "ECON 207 and 213",
    "notes": "none"
  },
  {
    "course_code": "ECON 202C",
    "course_name": "ECON 202A-B-C. Workshop in Economic Theory",
    "credits": "0–4/0–4/0–4",
    "description": "An examination of recent research in economic theory, including topics in general equilibrium, welfare economics, duality, and social choice; development of related research topics by both graduate students and faculty. Course may be repeated an unlimited number of times. (S/U grades only.)",
    "prerequisite_segments": [
      [
        "ECON 207",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "ECON 207 or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 204",
    "course_name": "ECON 204. Contract Theory",
    "credits": "4",
    "description": "This course reviews the theoretical foundations for the analysis of contractual interaction, and it covers a selection of game-theoretic models and applications. The course is intended to provide a foundation for theoretical research on contracts as well as applied research on topics in behavioral/experimental, development, environmental, international, and labor economics, law and economics, and macroeconomics.",
    "prerequisite_segments": [
      [
        "ECON 200A-B-C",
        "0"
      ]
    ],
    "prerequisites": "ECON 200A-B-C",
    "notes": "none"
  },
  {
    "course_code": "ECON 205",
    "course_name": "ECON 205. Mathematics for Economists",
    "credits": "4",
    "description": "Advanced calculus review for new graduate students.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Enrollment limited to Economics PhD students (EN75) or Rady PhD students (RS79); or consent of instructor."
  },
  {
    "course_code": "ECON 206",
    "course_name": "ECON 206. Decisions",
    "credits": "4",
    "description": "Further topics in consumer and producer theory, intertemporal optimization, and decision making under uncertainty. (Previously numbered ECON 200D.)",
    "prerequisite_segments": [
      [
        "ECON 200A-B-C",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "ECON 200A-B-C or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 208",
    "course_name": "ECON 208. Games and Information",
    "credits": "4",
    "description": "Further topics in game theory and the economics of information.",
    "prerequisite_segments": [
      [
        "ECON 200A-B-C",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "ECON 200A-B-C or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 210A",
    "course_name": "ECON 210A. Macroeconomics A",
    "credits": "4",
    "description": "Dynamic optimization: Lagrangian methods and recursive methods. The neoclassical growth model: social planner, competitive equilibrium, first and second welfare theorems, steady state analysis, dynamic analysis, shocks, heterogeneity and aggregation, applications.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "Enrollment limited to Economics PhD students (EN75); or consent of instructor."
  },
  {
    "course_code": "ECON 210B",
    "course_name": "ECON 210B. Macroeconomics B",
    "credits": "4",
    "description": "Models of the household’s intertemporal consumption/saving decision, and implications for risk aversion, basic portfolio allocation, and asset pricing. Models with heterogeneous agents—overlapping generations, incomplete markets, precautionary saving. Implications of labor market frictions for equilibrium employment.",
    "prerequisite_segments": [
      [
        "ECON 210A",
        "0"
      ]
    ],
    "prerequisites": "ECON 210A",
    "notes": "Enrollment limited to Economics PhD students (EN75); or consent of instructor."
  },
  {
    "course_code": "ECON 210C",
    "course_name": "ECON 210C. Macroeconomics C",
    "credits": "4",
    "description": "Basic facts and time series for macroeconomics. Modern theories of short-run fluctuations: sources of business cycle and the evolution of income, employment, interest rate, and prices. Monetary and fiscal policy theories in the presence of real and nominal rigidities.",
    "prerequisite_segments": [
      [
        "ECON 210B",
        "0"
      ]
    ],
    "prerequisites": "ECON 210B",
    "notes": "Enrollment limited to Economics PhD students (EN75); or consent of instructor."
  },
  {
    "course_code": "ECON 210D",
    "course_name": "ECON 210D. Monetary Economics and Business Cycles",
    "credits": "4",
    "description": "Study of the determinants of economic fluctuations, inflation, and interest rates with particular focus on the effects of monetary policy. Overview of key methods and findings of empirical research in macroeconomics. Recommended preparation: ECON 220D.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 210A-B-C",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 210A-B-C",
    "notes": "none"
  },
  {
    "course_code": "ECON 211",
    "course_name": "ECON 211. Advanced Macroeconomics",
    "credits": "4-4-4",
    "description": "Covers various topics in macroeconomics at the frontiers of research, including theory, computation, and empirical work. Emphasis depends on the instructor. Students will read the latest working papers and publications in the covered areas.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 210A-B-C",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 210A-B-C or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 212C",
    "course_name": "ECON 212A-B-C. Workshop in Macroeconomics",
    "credits": "0–4/0–4/0–4",
    "description": "Examination of recent research in macroeconomics; development of own research by graduate students and faculty. Course may be repeated an unlimited number of times. (S/U grades only.)",
    "prerequisite_segments": [
      [
        "ECON 210C",
        "0"
      ]
    ],
    "prerequisites": "ECON 210C",
    "notes": "none"
  },
  {
    "course_code": "ECON 213",
    "course_name": "ECON 213. Advanced Macroeconomic Theory",
    "credits": "4",
    "description": "This course develops purely theoretical models for problems in macroeconomics. Topics include dynamic general equilibrium, asset market equilibrium, and economic growth and distribution.",
    "prerequisite_segments": [
      [
        "ECON 210A-B-C",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "ECON 210A-B-C or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 214",
    "course_name": "ECON 214. Applied Macroeconomics",
    "credits": "4",
    "description": "This course focuses on applied macroeconomics, including econometric testing of macroeconomic theories and empirical measurement guided by theoretical insights. Topics will vary from year to year depending on the latest developments in research. Students will complete the course with a broader understanding of a number of leading topics in macroeconomics as well as a toolkit of estimation and simulation programs. Recommended preparation: ECON 220D.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 210A-B-C",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 210A-B-C or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 215",
    "course_name": "ECON 215. Macroeconomic Policy",
    "credits": "4",
    "description": "This course focuses on theoretical models and empirical analysis aimed at understanding and directing macroeconomic policy, including monetary, fiscal, and structural policies.",
    "prerequisite_segments": [
      [
        "ECON 210A-B-C",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "ECON 210A-B-C or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 216",
    "course_name": "ECON 216. Computation for Macroeconomics",
    "credits": "4",
    "description": "This course covers advanced computation techniques that are widely used in macroeconomics, finance, and other fields. Students will learn a range of numerical methods for handling systems of equations, integration, optimization, and other problems.",
    "prerequisite_segments": [
      [
        "ECON 210A-B-C",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "ECON 210A-B-C or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 217",
    "course_name": "ECON 217. Real Frictions and Financial Frictions",
    "credits": "4",
    "description": "While understanding how the macro economy behaves in the ideal, frictionless setting is indispensable; most of the interesting issues in macro arise as a consequence of some sort of friction or missing market. In this course, we will study some models based on real frictions and financial frictions. Topics covered include convex and nonconvex adjustment costs, housing markets and investment decisions, and financial crises.",
    "prerequisite_segments": [
      [
        "ECON 210A-B-C",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "ECON 210A-B-C or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 219",
    "course_name": "ECON 219. Readings in Macroeconomics",
    "credits": "4",
    "description": "This course will cover numerical analysis of dynamic macroeconomic models. Topics include numerical techniques, dynamic programming, linear systems, solution algorithms, and applications to dynamic general equilibrium.",
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
    "course_code": "ECON 220A",
    "course_name": "ECON 220A. Econometrics A",
    "credits": "4",
    "description": "An introduction to probability and statistics for graduate students in economics. Topics include random variables, sampling distributions, the law of large numbers, the central limit theorem, maximum likelihood estimation, hypothesis testing. Knowledge of multivariable calculus and linear algebra is assumed.",
    "prerequisite_segments": [
      [
        "graduate standing",
        "0"
      ]
    ],
    "prerequisites": "graduate standing",
    "notes": "enrollment limited to Economics PhD students (EN75) or Rady PhD students (RS79); or consent of instructor."
  },
  {
    "course_code": "ECON 220B",
    "course_name": "ECON 220B. Econometrics B",
    "credits": "4",
    "description": "Introduction to regression analysis and other estimation methods. Topics covered include ordinary and generalized least squares, asymptotic approximations, specification testing, two-stage least squares, generalized method of moments, and maximum likelihood estimation.",
    "prerequisite_segments": [
      [
        "ECON 220A, graduate standing",
        "0"
      ]
    ],
    "prerequisites": "ECON 220A, graduate standing",
    "notes": "Enrollment limited to Economics PhD students (EN75) or Rady PhD students (RS79); or consent of instructor."
  },
  {
    "course_code": "ECON 220C",
    "course_name": "ECON 220C. Econometrics C",
    "credits": "4",
    "description": "This course focuses on econometric analysis of panel data and cross-section data. Topics covered include static/dynamic panel data models, discrete choice models, censored and truncated regression models, sample selection models, and evaluation of treatment effects. Theory of extreme estimators is used to study the specification, estimation, and testing of these models.",
    "prerequisite_segments": [
      [
        "ECON 220B, graduate standing",
        "0"
      ]
    ],
    "prerequisites": "ECON 220B, graduate standing",
    "notes": "enrollment limited to Economics PhD students (EN75) or Rady PhD students (RS79); or consent of instructor."
  },
  {
    "course_code": "ECON 220D",
    "course_name": "ECON 220D. Econometrics D",
    "credits": "4",
    "description": "Examines modern time series econometrics, extending methods from ECON 220A-C to dependent data. Topics covered include spectral density theory, HAC estimation, vector autoregressions, nonstationary econometrics, filtering.",
    "prerequisite_segments": [
      [
        "ECON 220C, graduate standing",
        "0"
      ]
    ],
    "prerequisites": "ECON 220C, graduate standing",
    "notes": "enrollment limited to Economics PhD students (EN75) or Rady PhD students (RS79); or consent of instructor."
  },
  {
    "course_code": "ECON 220E",
    "course_name": "ECON 220E. Econometrics E",
    "credits": "4",
    "description": "Identification of economic models. Topics include rank and order conditions for identification in linear simultaneous equations systems; identification in nonlinear models; likelihood-based identification criteria; nonparametric identification; identification in models with multiple equilibria.",
    "prerequisite_segments": [
      [
        "ECON 220D, graduate standing",
        "0"
      ]
    ],
    "prerequisites": "ECON 220D, graduate standing",
    "notes": "enrollment limited to Economics PhD students (EN75) or Rady PhD students (RS79); or consent of instructor."
  },
  {
    "course_code": "ECON 220F",
    "course_name": "ECON 220F. Econometrics F",
    "credits": "4",
    "description": "This course focuses on the application of econometric techniques to issues in microeconomics and macroeconomics. The major emphasis in the class is on the completion of an empirical project.",
    "prerequisite_segments": [
      [
        "ECON 220E, graduate standing",
        "0"
      ]
    ],
    "prerequisites": "ECON 220E, graduate standing",
    "notes": "enrollment limited to Economics PhD students (EN75) or Rady PhD students (RS79); or consent of instructor."
  },
  {
    "course_code": "ECON 221",
    "course_name": "ECON 221. Advanced Econometrics",
    "credits": "4",
    "description": "Advanced topics in econometrics. Topics may vary from year to year, covering areas such as cross section, time series, panel, limited dependent variables, conditional quantile estimation, bootstrapping, and large- and small-sample distribution theory.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 220A, 220B, 220C, 220D, and 220E",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 220A, 220B, 220C, 220D, and 220E or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 222C",
    "course_name": "ECON 222A-B-C. Workshop in Econometrics",
    "credits": "4-4-4",
    "description": "Examination of recent econometric research; development of own research by students and faculty. Course may be repeated an unlimited number of times. (S/U grades only.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 225",
    "course_name": "ECON 225. Forecasting",
    "credits": "4",
    "description": "Topics include testing for rationality of forecasts, Mincer-Zarnowitz regressions, asymmetric loss functions, tests for equal (superior) predictive ability, multivariate forecasting.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 220A, 220B, 220C, 220D, and 220E",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 220A, 220B, 220C, 220D, and 220E or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 226",
    "course_name": "ECON 226. Bayesian and Numerical Methods",
    "credits": "4",
    "description": "Topics include Bayesian inference and decision theory, loss functions, estimation of dynamic stochastic general equilibrium models, nonlinear time series, state-space models, spatial-temporal models, and high-frequency data.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 220A, 220B, 220C, 220D, and 220E",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 220A, 220B, 220C, 220D, and 220E or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 227",
    "course_name": "ECON 227. Nonparametric and Semiparametric Models",
    "credits": "4",
    "description": "Topics include neural networks, kernels, series, splines, estimation of densities and spectra, smoothing parameter selection, semiparametric models, efficiency and adaptation, forecasting with nonlinear models, over-fit, computation, and interpretation.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 220A, 220B, 220C, 220D, and 220E",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 220A, 220B, 220C, 220D, and 220E or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 228",
    "course_name": "ECON 228. Nonstandard Inference",
    "credits": "4",
    "description": "Topics include weak instruments, unit roots, break tests, switching models, set-based inference, maximum likelihood estimation and meaning of misspecified models, consistency, asymptotic normality, consistent covariance matrix estimation, and tests of model misspecification.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 220A, 220B, 220C, 220D, and 220E",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 220A, 220B, 220C, 220D, and 220E or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 230",
    "course_name": "ECON 230. Public Economics: Taxation",
    "credits": "4",
    "description": "Exploration of existing theoretical literature evaluating the efficiency and distribution effects of income and commodity taxes. Characterization of an “optimal” tax structure, and examination of problems faced in tax administration. Scrutiny of behavioral responses to existing tax structures.",
    "prerequisite_segments": [
      [
        "ECON 200A-B-C and ECON 220A-B-C",
        "0"
      ]
    ],
    "prerequisites": "ECON 200A-B-C and ECON 220A-B-C",
    "notes": "none"
  },
  {
    "course_code": "ECON 231",
    "course_name": "ECON 231. Public Economics: Public Goods and Externalities",
    "credits": "4",
    "description": "Justifications for government intervention in the context of public goods and externalities. Exploration of normative and positive models of government behavior. Lessons from fiscal federalism for federal, state, and local roles. Applications to specific expenditure programs, such as national defense and education.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 200A-B-C and ECON 220A-B-C",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 200A-B-C and ECON 220A-B-C",
    "notes": "none"
  },
  {
    "course_code": "ECON 232",
    "course_name": "ECON 232. Public Economics: Redistribution and Social Insurance",
    "credits": "4",
    "description": "The objective of this course is to provide an understanding of the role of government intervention in the economy in two broad areas of expenditure—redistribution and social insurance—from both a theoretical and an empirical perspective. The emphasis will be on learning techniques that can be applied to produce original research and to critically analyze existing research in the field.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 200A-B-C and ECON 220A-B-C",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 200A-B-C and ECON 220A-B-C",
    "notes": "none"
  },
  {
    "course_code": "ECON 233",
    "course_name": "ECON 233. Public Economics of Health Care",
    "credits": "4",
    "description": "The objective of this course is to provide an understanding of the role of government in the health sector. Key applications include insurance markets, physician and hospital objective functions, payment models, health system design, and medical innovation. All topics are considered from both a theoretical and an empirical perspective. The emphasis will be on learning techniques that can be applied to produce original research and to critically analyze existing research in the field.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 200A-B-C and ECON 220A-B-C",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 200A-B-C and ECON 220A-B-C",
    "notes": "none"
  },
  {
    "course_code": "ECON 235C",
    "course_name": "ECON 235A-B-C. Workshop in Applied Economics",
    "credits": "0–4/0–4/0–4",
    "description": "Examination of recent research in applied economics; development of own research by graduate students and faculty. Course may be repeated an unlimited number of times. (S/U grades only.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 237",
    "course_name": "ECON 237. Political Economy: Microeconomic Perspectives",
    "credits": "4",
    "description": "Governments serve functions key to economic development, including correcting market failures, raising taxes, delivering services, and protecting property rights. Correspondingly, research in development economics is increasingly focused on how institutions affect development. Generally, the aim of the course is to provide PhD students a complete introduction to the growing literature in this area. Students may not receive credit for ECON 237 and POLI 231E.",
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
    "course_code": "ECON 241",
    "course_name": "ECON 241. Microeconomics of Development",
    "credits": "4",
    "description": "Course introduces the household as a decision-making unit, and the contracts and institutions that emerge to compensate for imperfect markets. Emphasis is placed on data and identification strategies that can be used to measure the impact of policy interventions.",
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
    "course_code": "ECON 242",
    "course_name": "ECON 242. Macroeconomics of Development",
    "credits": "4",
    "description": "This course covers development accounting, growth accounting, human capital accumulation, skill-biased technological change, multisector growth models, structural transformation, urban-rural migration, misallocation, informality, technology adoption and diffusion, and other related topics.",
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
    "course_code": "ECON 243",
    "course_name": "ECON 243. Organizational Economics of Development",
    "credits": "4",
    "description": "The study of organizational effectiveness, in both the private and public sectors, bridges the gap between microeconomic analysis of individual and household behavior and macroeconomic analysis of economic aggregates such as capital and output. Topics covered include organizational capacity, leadership and management, staffing, incentives, contracting, finance, learning, market structure, regulations, and politics.",
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
    "course_code": "ECON 245",
    "course_name": "ECON 245. International Trade",
    "credits": "4",
    "description": "This course covers the determinants of the pattern and volume of trade in goods and services, the interaction of international trade with income distribution and economic growth, and commercial policy. The emphasis is on theory, with some empirical illustration and motivation.",
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
    "course_code": "ECON 246",
    "course_name": "ECON 246. International Macroeconomics",
    "credits": "4",
    "description": "This course presents open-economy macroeconomics and international finance. Topics include theories of the exchange rate, foreign-exchange regimes, current account adjustments, and international portfolio investments. The course examines real and monetary explanations, and implications of international capital market integration.",
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
    "course_code": "ECON 247",
    "course_name": "ECON 247. Empirical Topics in International Economics",
    "credits": "4",
    "description": "This course examines the empirical work in international trade or international macroeconomics. International trade topics include empirical tests of theories of international trade and international capital movements. International macroeconomic topics include empirical studies of exchange rate and relative price adjustments.",
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
    "course_code": "ECON 249A",
    "course_name": "ECON 249A. International Development Workshop I",
    "credits": "1–4",
    "description": "Presentation of recent research in international and development economics by faculty and graduate students, covering micro and macroeconomic aspect of both areas. Regular attendance is required.",
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
    "course_code": "ECON 249C",
    "course_name": "ECON 249C. International Development Workshop III",
    "credits": "1–4",
    "description": "Presentation of recent research in international and development economics by faculty and graduate students, covering micro and macroeconomic aspect of both areas. Regular attendance is required.",
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
    "course_code": "ECON 250A",
    "course_name": "ECON 250A. Empirical Methods in Labor Economics",
    "credits": "4",
    "description": "Econometric methods currently used in applied microeconomics explained through examples from labor economics.",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 250B",
    "course_name": "ECON 250B. Topics in Labor Economics",
    "credits": "4",
    "description": "Topics typically include labor demand, labor supply, wage setting, inequality, intergenerational mobility, demographics, economics of family, migration, unemployment, religion, conflict, discrimination, human capital, education and training.",
    "prerequisite_segments": [
      [
        "ECON 250A",
        "0"
      ]
    ],
    "prerequisites": "ECON 250A",
    "notes": "none"
  },
  {
    "course_code": "ECON 250C",
    "course_name": "ECON 250C. Advanced Topics in Labor Economics",
    "credits": "4",
    "description": "Topics typically include labor supply, education and training, human capital, discrimination, intergenerational mobility, inequality, wage setting.",
    "prerequisite_segments": [
      [
        "ECON 250A and ECON 250B",
        "0"
      ]
    ],
    "prerequisites": "ECON 250A and ECON 250B",
    "notes": "none"
  },
  {
    "course_code": "ECON 260",
    "course_name": "ECON 260. Industrial Organization: Firms",
    "credits": "4",
    "description": "This course covers theory and empirical applications in the following areas of industrial organization: dynamic pricing, price discrimination, collusion, market power, discrete choice demand modeling, entry, asymmetric information, and search.",
    "prerequisite_segments": [
      [
        "ECON 220C",
        "0"
      ]
    ],
    "prerequisites": "ECON 220C",
    "notes": "Enrollment by completion of prerequisites or by consent of instructor."
  },
  {
    "course_code": "ECON 261",
    "course_name": "ECON 261. Industrial Organization: Markets",
    "credits": "4",
    "description": "This course covers theory and empirical applications in the following areas of industrial organization: mergers, vertical integration, and innovation. Optional topics include network effects, technology adoption, and regulation.",
    "prerequisite_segments": [
      [
        "ECON 200C and 220C",
        "0"
      ]
    ],
    "prerequisites": "ECON 200C and 220C",
    "notes": "Enrollment by completion of prerequisites or by consent of instructor."
  },
  {
    "course_code": "ECON 262",
    "course_name": "ECON 262. Behavioral Game Theory",
    "credits": "4",
    "description": "This course is intended to give students an introduction to the study of strategic interaction through a behavioral lens. We will review game theory experiments and analyze which theoretical predictions are validated and which are violated in practice. We will characterize the systematic violations of the theory that come from experiments and study how these behavioral regularities can be incorporated into new equilibrium concepts.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 200A-B-C",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 200A-B-C",
    "notes": "none"
  },
  {
    "course_code": "ECON 263",
    "course_name": "ECON 263. Modeling Behavioral Economics",
    "credits": "4",
    "description": "Covers various models in behavioral economics including self-control, bounded memory, belief manipulation, framing effects, and behavioral game theory. The course will also discuss their role in industrial organization, finance, and political economy, and their implications for welfare.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 200A-B-C",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 200A-B-C",
    "notes": "none"
  },
  {
    "course_code": "ECON 264",
    "course_name": "ECON 264. Experimental Economics",
    "credits": "4",
    "description": "Design and interpretation of controlled experiments using human subjects. (Previously numbered ECON 207.)",
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
    "course_code": "ECON 265",
    "course_name": "ECON 265. Alternative Choice Theory",
    "credits": "4",
    "description": "Theoretical and empirical issues in natural resource economics. (Previously numbered ECON 242.)",
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
    "course_code": "ECON 266",
    "course_name": "ECON 266. Economics of Natural Resources",
    "credits": "4",
    "description": "Theoretical and empirical issues in natural resource economics. (Previously numbered ECON 242.)",
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
    "course_code": "ECON 268",
    "course_name": "ECON 268. Energy and Environmental Economics",
    "credits": "4",
    "description": "Designed to prepare graduate students for original research in environmental or energy economics. Topics include theory and empirical study of economic regulation, energy markets, technological change, pollution and other externalities, energy efficiency, and climate change. Emphasis on empirical applications.",
    "prerequisite_segments": [
      [
        "graduate standing and ECON 200A-B-C",
        "0"
      ],
      [
        "consent of instructor",
        "0"
      ]
    ],
    "prerequisites": "graduate standing and ECON 200A-B-C or consent of instructor",
    "notes": "none"
  },
  {
    "course_code": "ECON 270",
    "course_name": "ECON 270. Finance—Core Asset Pricing",
    "credits": "4",
    "description": "Theoretical and empirical issues in finance. (Previously numbered ECON 214A.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 272",
    "course_name": "ECON 272. Finance—Theory and Testing of Intertemporal Asset Pricing Models",
    "credits": "4",
    "description": "Theoretical and empirical issues in finance. (Previously numbered ECON 214C.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 280",
    "course_name": "ECON 280. Computation",
    "credits": "2",
    "description": "Introduction to computing for economists.",
    "prerequisite_segments": [
      [
        "enrollment limited to economics PhD students (EN75)",
        "0"
      ]
    ],
    "prerequisites": "enrollment limited to economics PhD students (EN75)",
    "notes": "none"
  },
  {
    "course_code": "ECON 281",
    "course_name": "ECON 281. Special Topics in Economics",
    "credits": "4",
    "description": "Lecture course at an advanced level on a special topic. May be repeated for credit if topic differs. (Previously numbered ECON 267.)",
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
    "course_code": "ECON 284",
    "course_name": "ECON 284. Becoming an Economist",
    "credits": "2",
    "description": "This course provides students with a framework and a range of practical skills to navigate the transition from being full-time students to being independent researchers. Topics and issues covered will include research design, peer review, portfolio management, co-authorship and collaboration, well-being and life balance, and the meta-system. (S/U grades only.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 285",
    "course_name": "ECON 285. Precandidacy Presentation",
    "credits": "2",
    "description": "This course is a workshop in which students make formal presentations on the literature and on their own projects and receive input from other students and the instructor.",
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
    "course_code": "ECON 291",
    "course_name": "ECON 291. Advanced Field Advising",
    "credits": "4",
    "description": "Controlled reading and discussion with adviser; literature survey. May be repeated for credit. (S/U grades only.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 296",
    "course_name": "ECON 296. Original Research Paper",
    "credits": "1–12",
    "description": "In this course, students are guided toward the formulation of an original research idea and the writing of an original paper. Students receive support and input through group discussion and also through interaction with the instructor.",
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
    "course_code": "ECON 297",
    "course_name": "ECON 297. Independent Study",
    "credits": "1–5",
    "description": "(S/U grades only.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 299",
    "course_name": "ECON 299. Research in Economics for Dissertation",
    "credits": "1–12",
    "description": "(S/U grades only.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  },
  {
    "course_code": "ECON 500C",
    "course_name": "ECON 500A-B-C. Teaching Methods in Economics",
    "credits": "4-4-4",
    "description": "The study and development of effective pedagogical materials and techniques in economics. Students who hold appointments as teaching assistants must enroll in this course, but it is open to other students as well. (S/U grades only.)",
    "prerequisite_segments": [],
    "prerequisites": "none",
    "notes": "none"
  }
];

module.exports = ECON;