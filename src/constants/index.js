//@ts-check
import {
    deloitte,
    spf,
    Articpy,
    shopee,
    agoda,
    HelloTT,
    SHARP,
    sutd,
    tradeguard,
    flexhaven,
    kolicalling,
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


    const experiences = [
    {
        title: "Infra & Solution Engineer Intern",
        company_name: "Shopee",
        icon: shopee, // Replace with Shopee logo asset if available
        iconBg: "#FFFFFF",
        date: "Jun 2025 – Aug 2025",
        points: [
        "Delivered ~$3M in annual savings by co-developing an MCP-based AI chatbot, automating ~20% of support workflows.",
        "Analyzed IAM permissions across thousands of users to reinforce Zero-Trust cybersecurity posture and reduce critical access risk.",
        ],
    },
    {
        title: "Full Stack Software Engineer Intern",
        company_name: "Agoda",
        icon: agoda, // Replace with Agoda logo if added
        iconBg: "#FFFFFF",
        date: "Sep 2024 – Jan 2025",
        points: [
        "Generated ~$900K in value by deploying Generative AI (Copilot) and UX redesigns across Agoda’s CRM platform.",
        "Built a Google Lens-style multilingual image translator, reducing global wait times by ~5% across 100K+ daily users.",
        "Improved internal AI dev velocity by ~40% by leading evaluation and rollout of DSPy and LangChain firmwide.",
        ],
    },
    {
        title: "Risk Advisory Intern",
        company_name: "Deloitte",
        icon: deloitte,
        iconBg: "#000000",
        date: "Aug 2023 – Jan 2024",
        points: [
        "Redesigned a financial audit tool (95% functional parity via UAT), accelerating compliance transformation for a public sector client.",
        "Co-developed Power BI workshops and tutorials that scaled to 7+ SEA offices, raising analyst self-sufficiency by ~20%.",
        ],
    },
    {
        title: "Data Analyst (National Service)",
        company_name: "Singapore Police Force",
        icon: spf,
        iconBg: "#FFFFFF",
        date: "Jun 2020 – Mar 2022",
        points: [
        "Improved NSmen engagement by 15% via SAP-based analytics across 30K+ records, launching the ‘Buddy FIT’ initiative.",
        "Led national coordination of 100+ IPPT sessions; oversaw budgets, vendor ops, and cross-division communications.",
        ],
    },
    ];

    
    const projects = [
    {
        name: "AI Code Detection Research (Koli 2024)",
        description:
            "Co-authored a published ML paper at the 24th Koli Calling Conference, achieving >90% accuracy in distinguishing AI vs human-written Python code using BLEU & Fahrenberg distance metrics with hierarchical clustering. Research informs curriculum design and academic integrity frameworks amid GenAI rise.",
        tags: [
            { name: "Machine Learning", color: "blue-text-gradient" },
            { name: "Clustering", color: "green-text-gradient" },
            { name: "BLEU / NLP", color: "pink-text-gradient" },
            { name: "Python", color: "orange-text-gradient" },
            { name: "Research", color: "purple-text-gradient" }
        ],
        image: kolicalling, // e.g., aiPaperImage
        source_code_link: "https://doi.org/10.1145/3699538.3699569" // ACM DOI
    },
    {
    name: "TradeGuard - Integrated Trading System",
    description:
        "Designed and built a real-time trading operations platform with full-stack microservices architecture, enabling fast instrument search and live counterparty limit tracking. Reduced financial risk from over-trading by integrating SSE streaming, auth, and approval workflows.",
    tags: [
        { name: "Spring Boot", color: "green-text-gradient" },
        { name: "React", color: "blue-text-gradient" },
        { name: "MySQL", color: "orange-text-gradient" },
        { name: "SSE", color: "pink-text-gradient" },
        { name: "Microservices", color: "purple-text-gradient" },
    ],
    image: tradeguard, // e.g., tradingSystemImage
    source_code_link: "https://github.com/Jungstershark/TradeGuard"
    },
    {
        name: "Flexhaven – Student Rental Platform",
        description:
            "Developed a mobile MVP for a peer-to-peer rental platform targeting students and young professionals. Built with Firebase and Android (Java), the app enables item listings, rentals, and search — promoting sustainability and access for underbanked users.",
        tags: [
            { name: "Android", color: "green-text-gradient" },
            { name: "Firebase", color: "blue-text-gradient" },
            { name: "Java", color: "pink-text-gradient" },
            { name: "UX Design", color: "orange-text-gradient" },
        ],
        image: flexhaven, // e.g., flexhavenImage
        source_code_link: "https://github.com/Jungstershark/FlexHaven"
    },

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
    ];
    
    const testimonials = [
        {
            testimonial:
            "Jung Yi consistently exceeded expectations at Agoda — from scaling systems to pioneering GenAI applications. He's technically sharp, quick to improve with feedback, and brings energy to every team.",
            name: "Ankit Tibrewal",
            designation: "Engineering Manager",
            company: "Agoda",
            image: agoda,
        },
        {
            testimonial:
            "Jung Yi shines as a leader. He balances elite sport and academic excellence with humility, focus, and a sincere drive to grow. He’s also an open-minded, collaborative team player with immense potential.",
            name: "Faith Lim",
            designation: "Career Coach",
            company: "SUTD",
            image: sutd,
        },
        {
            testimonial:
            "Not only is Jung Yi proficient in his work, he carries a positive mindset that motivates him to overcome challenges. A reliable team member who strives for the most efficient, high-quality solutions.",
            name: "Tay Su Qing",
            designation: "Senior Consultant",
            company: "Deloitte",
            image: deloitte,
        },
        {
            testimonial:
            "Jung Yi is proactive, consistent, and thorough — he handles complex system transitions and high-volume tasks with professionalism. A disciplined, reliable team player who delivers every time.",
            name: "SAC K Puvenesveran",
            designation: "Commander, Police National Service Department",
            company: "Singapore Police Force (SPF)",
            image: spf,
        },
    ];

    export { experiences, testimonials, projects };