import ct1 from "../assets/img/image.png";
import ct2 from "../assets/img/image2.png";
import ct3 from "../assets/img/image3.png";
import ct4 from "../assets/img/image4.png";
import ct5 from "../assets/img/image5.png";
import ct6 from "../assets/img/image6.png";
import itw1 from "../assets/itw1.png";
import arch1 from "../assets/arch1.png";
import jl1 from "../assets/jl1.png";
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
    bgColor: "bg-yellow-400",
    textColor: "text-black",
    borderColor: "border-yellow-300",
    hoverBgColor: "hover:bg-yellow-300",
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
  },
  {
    id: 5,
    title: "Job Listing",
    description:
      "A job listing platform with filtering and search functionality.",
    tags: ["React", "Redux", "Tailwind CSS"],
    imageUrl: [jl1],
    liveLink: "https://joblisting-seven.vercel.app/",
    github: "https://github.com/harsshhit/joblisting",
  },
  {
    id: 6,
    title: "Conference App",
    description:
      "A MERN stack application for managing and scheduling conferences.",
    tags: ["MERN", "MongoDB", "Express", "React", "Node.js"],
    imageUrl: [conf1],
    liveLink: "https://conference-mern-frontend.vercel.app/",
    github: "https://github.com/harsshhit/conference-mern-frontend",
  },
  {
    id: 7,
    title: "My Library",
    description:
      "A personal book library management app to track reading progress.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: [mylib1],
    liveLink: "https://my-library-nine-cyan.vercel.app/",
    github: "https://github.com/harsshhit/MyLibrary",
  },
];

export const experienceData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "House of Marktech",
    duration: "Sept 2024 - Dec 2024",
    description: [
      "Developed and maintained responsive web applications using React.js",
      "Collaborated with the design team to implement pixel-perfect UI components",
      "Optimized application performance and improved user experience",
      "Participated in code reviews and team meetings",
    ],
    tags: [
      "React.js",
      "UI/UX",
      "Performance Optimization",
      "Team Collaboration",
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
