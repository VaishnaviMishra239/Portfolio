import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  jpm,
  fars,
  threejs,
  gms,
  GutarGu,
  MA,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Goldman Sachs",
    company_name:"Software Engineering Job Simulation ",
    icon: gms,
    iconBg: "#383E56",
    points: [
      "Executed realistic software development tasks during a comprehensive project, achieving an average of 10 code improvements per session while optimizing version control processes for smoother team integration and workflow efficiency.",
      "Applied best practices in software development, including version control, automated testing, and code review processes.",
    ],
  },
  {
    title: "JPMorgan Chase and Co.",
    company_name: "Software Engineering Job Simulation",
    icon: jpm,
    iconBg: "#E6DEDD",
    
    points: [
      "Completed a comprehensive virtual job simulation focused on real-world software engineering tasks.",
      "Collaborated in a simulated team environment to debug, troubleshoot, and improve software solutions.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Face Recoginition Attendance System",
    description:
      "Developed a Smart Attendance System using facial recognition technology, automating attendance for 200+ students, reducing manual entry time by 75%, improving accuracy, and saving over three hours weekly through automation.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openCV",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: fars,
    source_code_link: "https://github.com/VaishnaviMishra239/Facial-Recognition-Attendance-System",
  },
  {
    name: "GutarGu",
    description:
      "Developed a full-stack real-time chat application using MERN stack and Socket.IO, ensuring 99.9% uptime, reducing message latency by 50%, and optimizing secure authentication and database queries to enhance speed and encryption. Designed a scalable architecture supporting 1,000+ concurrent users, improving system performance by 60% for seamless communication.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: GutarGu,
    source_code_link: "https://github.com/VaishnaviMishra239/Fullstack-chat-App",
  },
  {
    name: "Mern_Authentication",
    description:
      "Developed a secure authentication system using the MERN stack, integrating OTP-based email verification to enhance user security. Implemented a password reset feature, allowing users to securely recover access. Optimized database queries and server response times for a seamless authentication experience.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: MA,
    source_code_link: "https://github.com/VaishnaviMishra239/Mern_Authentication",
  },
];

export { services, technologies, experiences, testimonials, projects };
