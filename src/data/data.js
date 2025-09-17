import ct1 from "../assets/img/image.png";
import ct2 from "../assets/img/image2.png";
import ct3 from "../assets/img/image3.png";
import ct4 from "../assets/img/image4.png";
import ct5 from "../assets/img/image5.png";
import ct6 from "../assets/img/image6.png";
import itw1 from "../assets/itw1.png";
import arch1 from "../assets/arch1.png";
import jl1 from "../assets/JL1.png";
import conf1 from "../assets/conf1.png";
import mylib1 from "../assets/mylib1.png";

export const socialLinks = [
  {
    id: "github",
    url: "https://github.com/harsshhit",
    iconName: "FaGithub",
    label: "GitHub",
    bgColor: "bg-gray-900",
    textColor: "text-white",
    borderColor: "border-gray-700",
    hoverBgColor: "hover:bg-gray-700",
    hoverBorderColor: "hover:border-white",
  },
  {
    id: "twitter",
    url: "https://twitter.com/theharryom?s=09",
    iconName: "FaTwitter",
    label: "Twitter",
    bgColor: "bg-blue-400",
    textColor: "text-white",
    borderColor: "border-blue-300",
    hoverBgColor: "hover:bg-blue-300",
    hoverBorderColor: "hover:border-white",
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/harshit-shukla-8b706417a",
    iconName: "FaLinkedin",
    label: "LinkedIn",
    bgColor: "bg-blue-700",
    textColor: "text-white",
    borderColor: "border-blue-500",
    hoverBgColor: "hover:bg-blue-500",
    hoverBorderColor: "hover:border-white",
  },
  {
    id: "leetcode",
    url: "https://leetcode.com/harshh8/",
    iconName: "FaCode",
    label: "LeetCode",
    bgColor: "bg-blue-400",
    textColor: "text-black",
    borderColor: "border-blue-300",
    hoverBgColor: "hover:bg-blue-300",
    hoverBorderColor: "hover:border-white",
  },
  {
    id: "devto",
    url: "https://dev.to/your-devto-username",
    iconName: "FaDev",
    label: "Dev.to",
    bgColor: "bg-black",
    textColor: "text-white",
    borderColor: "border-gray-700",
    hoverBgColor: "hover:bg-gray-700",
    hoverBorderColor: "hover:border-white",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Chathere",
    description:
      "A real-time chat app with an intuitive interface, powered by React.js, Firebase, and Node.js.",
    tags: ["React", "Firebase", "Node.js"],
    imageUrl: [ct1, ct2, ct3, ct4, ct5, ct6],
    github: "https://github.com/harsshhit/Chathere",
    liveLink: "https://chathere-khaki.vercel.app/",
  },
  {
    id: 2,
    title: "Into The Wild Stays",
    description:
      "A website for a nature retreat service, offering booking features and beautiful UI.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: [itw1],
    liveLink: "https://intothewildstays.in/",
    github: "https://github.com/harsshhit/IntoTheWildStays",
  },
  // {
  //   id: 3,
  //   title: "Login Signup System",
  //   description:
  //     "A secure authentication system with email/password and OAuth integration.",
  //   tags: ["React", "Firebase", "Tailwind CSS"],
  //   imageUrl: [],
  //   liveLink: "https://login-signup-system-zeta.vercel.app/",
  //   github: "https://github.com/harsshhit/Login-Signup-system",
  // },
  {
    id: 4,
    title: "ArchSpace Interio",
    description:
      "A modern website for an interior design company, featuring an elegant UI and smooth animations.",
    tags: ["Next.js", "Tailwind CSS"],
    imageUrl: [arch1], // Add images if available
    liveLink: "https://archspaceinterio.com/",
    github: "https://github.com/harsshhit/ArchSpaceInterio",
  },
  {
    id: 5,
    title: "Riddler - AI-Powered Interview Preparation",
    description:
      "AI-powered technical interview preparation app built with Next.js and Google Gemini AI. Features adaptive learning, 15+ programming topics, OAuth authentication, and comprehensive analytics.",
    tags: ["Next.js", "TypeScript", "Google Gemini AI", "NextAuth.js", "MongoDB", "Tailwind CSS", "Shadcn/ui", "Recharts"],
    imageUrl: [jl1],
    liveLink: "https://riddlerlive.vercel.app/",
    github: "https://github.com/harsshhit/riddler",
  },
  
  // {
  //   id: 5,
  //   title: "Job Listing",
  //   description:
  //     "A job listing platform with filtering and search functionality.",
  //   tags: ["React", "Redux", "Tailwind CSS"],
  //   imageUrl: [jl1],
  //   liveLink: "https://joblisting-seven.vercel.app/",
  //   github: "https://github.com/harsshhit/joblisting",
  // },
  // {
  //   id: 6,
  //   title: "Conference App",
  //   description:
  //     "A MERN stack application for managing and scheduling conferences.",
  //   tags: ["MERN", "MongoDB", "Express", "React", "Node.js"],
  //   imageUrl: [conf1],
  //   liveLink: "https://conference-mern-frontend.vercel.app/",
  //   github: "https://github.com/harsshhit/conference-mern-frontend",
  // },
  // {
  //   id: 7,
  //   title: "My Library",
  //   description:
  //     "A personal book library management app to track reading progress.",
  //   tags: ["React", "Node.js", "MongoDB"],
  //   imageUrl: [mylib1],
  //   liveLink: "https://aaralibrary.vercel.app/",
  //   github: "https://github.com/harsshhit/MyLibrary",
  // },
];

export const experienceData = [
  {
    id: 1,
    title: "Software Developer",
    company: "PRP Webtech",
    duration: "May 2025 – Present",
    description: [
      "Built and optimized responsive UIs using React.js and Tailwind CSS, reducing page load times by 30%",
      "Refactored legacy codebase, improving maintainability and cutting bug reports by 25%",
    ],
    tags: [
      "React.js",
      "Tailwind CSS",
      "REST APIs",
      "Performance Optimization",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "House of Marktech",
    duration: "Sept 2024 – Jan 2025",
    description: [
      "Developed dynamic, cross-device interfaces with React.js and Tailwind CSS, achieving a consistent user experience across platforms",
      "Partnered with design and product teams to refine UI/UX, increasing user engagement metrics by 15%",
    ],
    tags: [
      "React.js",
      "Tailwind CSS",
      "UI/UX",
      "Cross-platform Development",
      "User Engagement",
    ],
  },
  {
    id: 3,
    title: "Full Stack Web Developer",
    company: "SO Infotech (P) Ltd.",
    duration: "Jan 2024 – June 2024",
    description: [
      "Led the end-to-end development of a social networking platform using the MERN stack, enabling scalable real-time interactions",
      "Integrated secure authentication and cloud-hosted MongoDB, enhancing reliability for 5,000+ test users",
    ],
    tags: [
      "MERN Stack",
      "MongoDB",
      "Authentication",
      "Real-time Applications",
      "Cloud Integration",
    ],
  },
];

export const skillsData = {
  programmingLanguages: ["C++", "JavaScript", "TypeScript"],
  frontendTechnologies: [
    "React.js",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "SASS",
  ],
  backendAndDatabase: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "GraphQL",
    "RESTful APIs",
    "WebSocket",
    "Database Modeling",
  ],
  developmentTools: [
    "Git & GitHub",
    "CI/CD pipelines",
    "Docker",
    "Agile/Scrum methodologies",
  ],
  testingAndQuality: [
    "Unit Testing (Jest, Mocha)",
    "Integration Testing",
    "Quality Assurance",
  ],
  coreStrengths: [
    "MERN Stack Development",
    "Object-Oriented Programming (OOP)",
    "Data Structures and Algorithms",
  ],
};

export const resumeCVData = {
  resumeLink:
    "https://www.canva.com/design/DAGIzEBuFMw/-5cJ772Ooyji5XfJDZVZug/view?utm_content=DAGIzEBuFMw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h054c5c861a",
};
