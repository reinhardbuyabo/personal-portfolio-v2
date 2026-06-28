const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.jpg",
    },
    {
        imgPath: "/images/logos/company-logo-3.jpg",
    },
    {
        imgPath: "/images/flyrank-wordmark-onDark.svg",
    },
    {
        imgPath: "/images/avane-white-logo.webp",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Golang Developer",
        imgPath: "/images/logos/golang.svg",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Golang Developer",
        modelPath: "/models/golang-transformed.glb",
        scale: 1.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Reinhard is demonstrating strong AI engineering capabilities at FlyRank, designing robust backend workflows and delivering production-ready AI pipelines with clear, thorough documentation.",
        imgPath: "/images/flyrank-wordmark-onDark.svg",
        logoPath: "/images/flyrank-wordmark-onDark.svg",
        title: "Backend AI Engineer",
        date: "June 2026 - Present",
        responsibilities: [
            "Designing AI backend workflows with inputs, outputs, constraints, and failure cases.",
            "Building retrieval-backed answer flows, structured-output pipelines, and agent loops.",
            "Writing verification notes on quality, limitations, and recommended improvements.",
        ],
    },
    {
        review:
            "Reinhard made valuable contributions at Avané Clinic, developing and maintaining web applications that enhanced user experience and measurably improved conversion rates.",
        imgPath: "/images/avane-white-logo.webp",
        logoPath: "/images/avane-white-logo.webp",
        title: "Digital Systems Specialist",
        date: "January 2026 - April 2026",
        responsibilities: [
            "Designed, developed, tested and maintained web applications, enhancing user experience and contributing to improved conversion rates",
            "Managed domain registration, configuration, and maintenance, ensuring reliable website availability and performance",
        ],
    },
    {
        review:
            "Reinhard demonstrated resilience and adaptability while working at Calwide. He consistently delivered high-quality code and collaborated effectively with the team.",
        imgPath: "/images/logos/company-logo-2.jpg",
        logoPath: "/images/logos/company-logo-1.jpg",
        title: "Software Engineer Intern",
        date: "January 2025 - April 2025",
        responsibilities: [
            "Designed and developed backend APIs that increased scalability by 10% by implementing consistent hashing and load balancing techniques.",
            "Improved task success rate by 20% by developing custom Microsoft Dynamics 365 extensions that streamlined report processing workflows through designing of consistent RDLC layouts",
            "Enhanced user experience across departments by integrating custom business logic into Microsoft Dynamics workflows, leading to a measurable increase in completion rate of tasks such as data entry",
        ],
    },
    {
        review:
            "Reinhard demonstrated exceptional skills and high professionalism during his tenure at Apprentice Cloud. His contributions significantly enhanced our web applications and overall user experience.",
        imgPath: "/images/logos/company-logo-4.jpg",
        logoPath: "/images/logos/company-logo-3.jpg",
        title: "Junior Full Stack Developer",
        date: "June 2022 - August 2022",
        responsibilities: [
            "Built and maintained Single Page Applications (SPAs) using React.js, improving user engagement by 15%.",
            "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
        link: "https://www.instagram.com/br.reinhard/",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
        link: "https://x.com/breinhard_",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        link: "https://www.linkedin.com/in/reinhard-buyabo-435b72243/"
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
