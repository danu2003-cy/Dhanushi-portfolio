import { Project, Experience, Skill } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Job Interview Simulation Platform",
    description: "InterviewSuite is an advanced AI-driven platform designed to simulate real-world job interviews, helping candidates enhance their interview skills through interactive, data-driven feedback. The platform provides a professional interview environment, integrating cutting-edge technologies. As a key contributor to both backend and frontend development, I implemented core functionalities to ensure seamless user interaction, real-time AI processing, and intuitive UI/UX design.",
    technologies: ["Python", "Flask", "React.js", "PostgreSQL", "WebSocket","Bootstap",""],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/danu2003-cy",
    demo: "https://danu2003-cy.github.io/Interview-Suite-SDGP-CS75-Marketing-Site/"
  },
  {
    id: 2,
    title: "Estate Agent Client-side Web Application",
    description: "A responsive React-powered web app for property search and management, featuring dynamic filtering, interactive UI components, detailed property pages with images and maps, and a favorites management system using local storage. Built with CSS Grid, Flexbox, and media queries for seamless usability across devices.",
    technologies: ["React.js", "JavaScript (ES6+)", "JSON", "HTML5 & CSS3", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/danu2003-cy/Real-Estate-Web",
    
  },
  {
    id: 3,
    title: "Real-Time Event Ticketing System",
    description: "A dynamic ticket management system combining multi-threading concepts and real-time updates. The system uses a Command-Line Interface (CLI) for configuration, Spring Boot for backend management of tickets, and a React frontend for real-time visualization. It features a Producer-Consumer pattern for concurrent ticket handling, ensuring thread safety and synchronization.",
    technologies: ["React.js", "Spring Boot", "Java Multi-threading", "RESTful APIs", "Bootstrap", "Concurrency and Synchronization"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/danu2003-cy/RealTimeTicketSystem",
    
  },
  {
    id: 4,
    title: "Plane Management System",
    description: "Developed a comprehensive plane management system as an individual coursework for the Software Development Module II. The system handles flight scheduling, maintenance tracking, and crew assignments.",
    technologies: ["Java", "JavaFX", "SQL"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/danu2003-cy/Plane-Seat-management-system",
    
  },
  {
    id: 5,
    title: "Student Module Evaluation System",
    description: "Developed a student module evaluation system using Python as the individual coursework for Software Development Module I. The system allows students to provide feedback on course modules and instructors.",
    technologies: ["Python", "SQLite", "Tkinter"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/danu2003-cy/Student-Progression-System",
    
  },
  {
    id: 6,
    title: "World Hunger Awareness Website",
    description: "Developed a responsive web page on World Hunger as the group coursework for the HTML web development module. The site raises awareness about global hunger issues and provides resources for getting involved.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/danu2003-cy/Zero-Hunger-Awareness-Web-Page",
    
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "SAL Enterprises",
    role: "Business Development Partner",
    period: "2022 - Present",
    description: [
      "Responsible for identifying new business opportunities and developing strategic partnerships",
      "Contributing to the company's growth strategy and business development initiatives",
      "Collaborating with cross-functional teams to implement business development initiatives"
    ]
  },
  {
    id: 2,
    company: "Leo Club of Southern Metro",
    role: "Treasurer",
    period: "2024 - 2025",
    description: [
      "Managing club finances, preparing budgets, and maintaining financial records",
      "Overseeing fundraising activities for community service projects",
      "Ensuring proper allocation of funds for various club initiatives"
    ]
  },
  {
    id: 3,
    company: "Leo Club of Southern Metro",
    role: "Assistant Secretary",
    period: "2023 - 2024",
    description: [
      "Managed administrative tasks and coordinated club activities",
      "Assisted in organizing community service events",
      "Collaborated with other Leo Clubs in the region"
    ]
  },
  {
    id: 4,
    company: "AASHA Institution",
    role: "Assistant Graphic Designer",
    period: "09/2023 - 12/2023",
    description: [
      "Assisted in creating visual content for NGO campaigns",
      "Designed promotional materials for various projects",
      "Collaborated with the marketing team to develop cohesive visual identities"
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React.js", "HTML/CSS", "JavaScript", "Angular", "Bootstrap", "Responsive Design", "UI/UX Design","Typescript","Tailwind"]
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Java", "Python", "Flask", "RESTful APIs", "Multi-threading","C"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Queries", "SQLite"]
  },
  {
    category: "Tools & Others",
    items: ["Git/GitHub", "Postman", "IntelliJ", "PyCharm", "VS Code", "Netbeans", "Notepad++","Swagger"]
  }
];

export const aboutMe = {
  name: "Dhanushi Arachchi",
  title: "Full Stack Engineer",
  bio: "Enthusiastic Computer Science undergraduate with a focus on full-stack development and hands-on experience in building responsive web applications. Skilled in React, Spring Boot, and SQL, with a passion for creating seamless user experiences and efficient back-end solutions. I bring strong problem-solving skills, a collaborative mindset, and a dedication to continuous learning, seeking to contribute as a Full Stack Developer.",
  education: [
    {
      institution: "University of Westminster",
      degree: "BSc (Hons) Computer Science",
      year: "2023 - 2027"
    },
    {
      institution: "University of Colombo",
      degree: "BSc (Hons) Physical Science",
      year: "2024 - 2028"
    },
    {
      institution: "Sangamiththa Girls' College, Galle",
      degree: "G.C.E. A/L (Physical Science Stream)",
      year: "2022"
    }
  ],
  volenteering: [
    "Represented Denmark as a delegate at the THIMUN conference held in Netherlands",
    "Black belt holder in Karate with a passion for the discipline",
    "Member of IEEE at IIT, participating in various tech-driven initiatives"
  ],
  interests: [
    "Exploring the potential of AI to optimize workflows and enhance efficiency",
    "Integrating IoT and machine learning for innovative software solutions",
    "Traveling extensively through Western Europe and India",
    "Karate - Black belt holder with a passion for the discipline"
  ],
  certifications: [
    "Beginner for Web Design - University of Moratuwa (Open Learning)",
    "Object Oriented Design - LinkedIn Learning",
    "SQL Basic Queries - Online Certification"
  ],
  languages: [
    { language: "English", proficiency: "Professional Fluency" },
    { language: "Sinhala", proficiency: "Native" },
    { language: "Tamil", proficiency: "Basic Proficiency" }
  ],
  softSkills: [
    "Strong communication and teamwork abilities",
    "Effective problem-solving as a school prefect",
    "Organizational skills and event coordination",
    "Proactive task prioritization to meet tight deadlines"
  ],
  volunteering: [
    "Served as the Assistant Secretary (2023/2024) and Treasurer (2024/2025) of Leo Club of Southern Metro",
    "Member of IEEE at IIT, participating in tech-driven initiatives and events",
    "Represented Denmark as a delegate at the THIMUN conference in Netherlands"
  ],
  contactInfo: {
    email: "dewmindidhanushi2003@gmail.com",
    github: "https://github.com/danu2003-cy",
    linkedin: "https://www.linkedin.com/in/danushi-dewmindi-55bb9a27b"
  },
  references: [
    {
      name: "Mr. Torin Wirasingha",
      position: "Senior Lecturer at Faculty of Computing",
      email: "torin.w@iit.ac.lk",
      phone: "+94-112-360-212 | 076 8209747"
    },
    {
      name: "Mr. Sunil Lokunarangoda",
      position: "CEO of SAL Enterprises",
      email: "sunil.l@live.com",
      phone: "077 730 8196"
    }
  ]
};