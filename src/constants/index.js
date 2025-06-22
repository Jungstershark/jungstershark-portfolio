import {
    mobile,
    backend,
    creator,
    web,
    reactjs,
    tailwind,
    git,
    figma,
    threejs,
    python,
    powerbi,
    r,
    java,
    postgresql,
    pandas,
    chatgpt,
    deloitte,
    sutd,
    spf,
    hungrysia,
    Articpy,
    HelloTT,
    SHARP
    } from "../assets";

    export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    ];

    const services = [
    {
        title: "Software Engineer",
        icon: web,
    },
    {
        title: "Data Analyst",
        icon: mobile,
    },
    {
        title: "Research Assistant",
        icon: backend,
    },
    {
        title: "National Athlete",
        icon: creator,
    },
    ];

    const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "Pandas",
        icon: pandas,
    },
    {
        name: "R",
        icon: r,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "chatGPT",
        icon: chatgpt,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },  
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "powerBI",
        icon: powerbi,
    },
    ];
    
    const experiences = [
    {
        title: "Research Assistant",
        company_name: "Singapore University of Technology and Design (SUTD)",
        icon: sutd,
        iconBg: "#FFFFFF",
        date: "Jan 2024 - Present",
        points: [
        "Undergraduate Research project within the SHARP program, supervised by: Dr. Cyrille Pierre Joseph Jegourel",
        "Currently contributing to the research and development of a machine learning algorithm for analysing Python code similarity and detecting AI-generated content, with benchmarking against established plagiarism detection tools.",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Deloitte",
        icon: deloitte,
        iconBg: "#000000",
        date: "Aug 2023 - Jan 2024",
        points: [
        "Significantly contributed to developing a Power BI tutorial, enhancing data analytics proficiency within Deloitte’s SEA region",
        "Key contributor in developing a Python-based Computer Aided Auditing Tool for an external client in Deloitte's public sector auditing project, streamlining workflow and significantly improving efficiency and accuracy.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "HungrySia (SUTD-Startup)",
        icon: hungrysia,
        iconBg: "#F75F61",
        date: "Jun 2022 - Dec 2022",
        points: [
        "Developed a Python Telegram Bot from scratch to collect, group and process food orders, reducing student’s delivery costs.",
        "The Telegram Bot was deployed on Heroku’s servers with Google Sheets integration to collect and process orders.",
        ],
    },
    {
        title: "Data Analyst",
        company_name: "Singapore Police Force (SPF) - National Service",
        icon: spf,
        iconBg: "#FFFFFF",
        date: "Apr 2020 - Apr 2022",
        points: [
        "Conducted data analysis on IPPT and Marksmanship test statistics to track the KPI of operational readiness in the SPF.",
        "Organised 100+ IPPT Sessions for NSmen. Oversaw funding approval, vendors coordination, in-person facilitation, and effectively communicated instructions to other divisions across SPF",
        "As the top 5% (~3 officers) NSmen within the unit, awarded ‘Outstanding’ for Overall Performance and Conduct",
        ],
    },
    ];
    
    const testimonials = [
    {
        testimonial:
        "Jung Yi shines as a leader ... with his ability to inspire and motivate others, manage challenges, and thrive in pressure situations",
        name: "Faith Lim",
        designation: "Career Coach",
        company: "SUTD",
        image: "https://media.licdn.com/dms/image/D5603AQGdgwbaIGjeLg/profile-displayphoto-shrink_400_400/0/1709806021165?e=1715817600&v=beta&t=0ZtlYC1SWTw6lQFDDJ51Rj0mIEkvNGBN8fgaXRRmH8U",
    },
    {
        testimonial:
        "Not only is he proficient in his work but he has a positive mindset that motivates him to overcome the challenges that he has faced along the way",
        name: "Tay Su Qing",
        designation: "Senior Consultant",
        company: "Deloitte",
        image: "https://media.licdn.com/dms/image/C5603AQGrru_Q6SBakA/profile-displayphoto-shrink_400_400/0/1661997434445?e=1715817600&v=beta&t=9BKPccw82rzAjk0F02m41P7XSXaVaUnDrAMUDf8og94",
    },
    {
        testimonial:
        "Jung Yi communicates effectively with his superiors, colleagues and is sincerely committed towards his responsibilities.",
        name: "Commander of Police National Service Department",
        designation: "SAC",
        company: "Singapore Police Force(SPF)",
        image: "https://media.licdn.com/dms/image/C560BAQHi071FSi7txg/company-logo_200_200/0/1670988890447/singapore_police_force_logo?e=1718236800&v=beta&t=FBpSS7MgTa894EmwGalo7G5Hibg4H6A2Hrp2C-UDWOQ",
    },
    ];
    
    const projects = [
    {
        name: "SPF Coding Challenge 2021 ",
        description:
        "Created Python web app for SPF, conducting sentiment analysis, topic modeling, and NLP on news articles. Found inverse correlation between crime rate and sentiment. Identified emerging concerns for SPF.",
        tags: [
        {
            name: "python",
            color: "blue-text-gradient",
        },
        {
            name: "streamlit",
            color: "green-text-gradient",
        },
        {
            name: "NLP",
            color: "pink-text-gradient",
        },
        ],
        image: Articpy,
        source_code_link: "https://github.com/Jungstershark/ArticPy",
    }, 
    {
        name: "Modelling SCLC in Semi-Conductors",
        description:
        "Utilized Fowler-Nordheim and Newton's law to analyze the transition from field emission to space-charge limited current (SCLC) in unconventional materials and vacuum environments. Leveraged Python's scikit-learn, NumPy, and Matplotlib to visualize intricate relationships among variables through multidimensional graphs.",
        tags: [
        {
            name: "Python",
            color: "blue-text-gradient",
        },
        {
            name: "Semi-Conductors",
            color: "green-text-gradient",
        },
        {
            name: "Modelling",
            color: "pink-text-gradient",
        },
        ],
        image: SHARP,
        source_code_link: "https://github.com/Jungstershark/SCLC-Modelling",
    },
    {
        name: "Hello TT Chatbot",
        description:
        "Developed an advanced chatbot for the TemasekxSUTD hackathon to enhance client support. Leveraged Language Models (LLMs) to analyze user screenshots, generating step-by-step troubleshooting guides with contextual images. The solution streamlined workflows, empowering users and showcasing technology's real-world potential.",
        tags: [
        {
            name: "LLMs",
            color: "blue-text-gradient",
        },
        {
            name: "Python",
            color: "green-text-gradient",
        },
        {
            name: "RAG Chatbot",
            color: "pink-text-gradient",
        },
        ],
        image: HelloTT,
        source_code_link: "https://github.com/Jungstershark/HelloTT",
    },
    ];
    
    export { services, technologies, experiences, testimonials, projects };
