export const portfolioData = {
  personal: {
    name: "H S KARTHIK",
    title: "Full Stack Developer",
    email: "karthik02314@gmail.com",
    phone: "+91 98808 65182",
    linkedin: "linkedin.com/in/karthik-h-s7",
    github: "github.com/Karthik0231",
    summary: "Full-stack developer with 1+ year owning features end-to-end — from stakeholder conversations to production deployment — with strong experience across Node.js/Express, React, Next.js, React Native, and PostgreSQL/SQL. Has shipped live client products end-to-end solo, and with the Team as well. Uses AI tools daily to accelerate research, coding, and QA. Also trains and mentors junior developers, translating technical depth into clear communication.",
  },
  experience: [
    {
      role: "Software Developer",
      company: "DataQueue Systems",
      location: "Mangaluru",
      period: "Jan 2025 – Present",
      highlights: [
        "Own full-stack features end-to-end on multiple live web and Android products — Node.js/Express backends, React.js frontends, and React Native mobile — working directly with stakeholders to translate customer needs into shipped solutions.",
        "Designed and built REST APIs with JWT auth, request validation, structured error handling, and Swagger documentation, used daily by live clients.",
        "Took production ownership: triaged bug fixes, tuned performance, and iterated on UX based on client and usage feedback.",
        "Deployed and maintained applications on Vercel; integrated cloud storage and third-party APIs into backend services.",
        "Ran MERN Stack / React.js training workshops at degree colleges across Udupi and Mangaluru and mentored interns on real-world development practices — strong communication and knowledge-transfer track record."
      ],
      capabilities: ["END-TO-END OWNERSHIP", "API ENGINEERING", "FRONTEND", "MOBILE", "PRODUCTION", "STAKEHOLDER COLLABORATION"],
      capabilityDetails: {
        "END-TO-END OWNERSHIP": ["Feature Implementation", "Database Schema", "Deployment"],
        "API ENGINEERING": ["REST APIs", "JWT Auth", "Validation", "Swagger"],
        "FRONTEND": ["React.js", "Next.js", "Performance Tuning"],
        "MOBILE": ["React Native", "API Integration", "Offline Sync"],
        "PRODUCTION": ["Vercel Deployment", "Bug Triage", "UX Iteration"],
        "STAKEHOLDER COLLABORATION": ["Requirements Gathering", "Feedback Integration"]
      }
    },
    {
      role: "MERN Stack Intern",
      company: "CodeLab Systems",
      location: "Mangaluru",
      period: "Aug 2024 – Dec 2024",
      highlights: [
        "Built REST APIs and React.js frontends across internal projects during a 5-month internship.",
        "Wrote validation middleware, error handling, and MongoDB CRUD operations from scratch, without boilerplate."
      ],
      capabilities: ["REST APIS", "REACT.JS", "VALIDATION MIDDLEWARE", "MONGODB CRUD"],
      capabilityDetails: {
        "REST APIS": ["Express Routing", "Controllers", "Testing"],
        "REACT.JS": ["Component Design", "State Hooks", "API Fetching"],
        "VALIDATION MIDDLEWARE": ["Input Sanitization", "Error Formatting"],
        "MONGODB CRUD": ["Mongoose Schemas", "Aggregation", "Indexing"]
      }
    }
  ],
  projects: [
    {
      id: "axionvertex",
      name: "AxionVertex",
      category: "Van & Man Service Platform (UK)",
      tech: ["MERN Stack", "Client Product"],
      role: "Full Stack Developer",
      description: "Built a full MERN-stack website (axionvertex.uk) for a UK-based man-and-van moving service, covering customer-facing booking/enquiry flows and an admin dashboard.",
      highlights: [
        "booking/enquiry workflows",
        "invoice generation",
        "quotations",
        "job management",
        "reports",
        "production operations"
      ],
      context: "A UK-based man-and-van moving service needed a digital platform to manage bookings and backend operations.",
      problem: "Manual booking and quotation processes were inefficient and prone to errors.",
      architecture: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
      implementation: "Developed customer-facing booking/enquiry flows and an admin dashboard for invoice generation, quotations, and job management.",
      challenges: "Handling complex quotation logic and integrating it seamlessly with job management.",
      outcome: "Streamlined day-to-day billing and booking operations for the business.",
      image: "/projects/axionvertex.png"
    },
    {
      id: "codelab-systems",
      name: "CodeLab Systems",
      category: "Company Website",
      tech: ["Next.js", "Client Product"],
      role: "Frontend Developer",
      description: "Designed and built the official website (codelabsystems.in) for CodeLab Systems, an IT training company, using Next.js for fast, SEO-friendly page rendering.",
      highlights: [
        "official company website",
        "SEO-friendly rendering",
        "course/program listings",
        "enquiry flows"
      ],
      context: "An IT training company needed an official website to list courses and capture student enquiries.",
      problem: "The existing process lacked a centralized, SEO-friendly digital presence to attract students.",
      architecture: "Next.js for server-side rendering and SEO optimization.",
      implementation: "Built course/program listing pages and implemented enquiry flows to support student intake.",
      challenges: "Ensuring optimal SEO performance while delivering a fast, responsive user interface.",
      outcome: "Successfully launched the official website, improving online visibility and enquiry generation.",
      image: "/projects/codelab.png"
    },
    {
      id: "medlinks",
      name: "Medlinks",
      category: "Medical Equipment App",
      tech: ["React Native CLI", "Android", "Health Tech"],
      role: "Mobile Developer",
      description: "Built the full Android app solo — product listings, purchase flows, and service bookings for medical equipment.",
      highlights: [
        "product catalogue",
        "purchase flows",
        "service bookings",
        "REST API integration",
        "JWT authentication",
        "lower-end Android optimization"
      ],
      context: "A health tech client required a mobile application for medical equipment sales and service bookings.",
      problem: "Needed a performant app capable of running smoothly on lower-end Android devices commonly used in the target market.",
      architecture: "React Native CLI targeting Android, interacting with third-party REST APIs.",
      implementation: "Developed product catalogue, purchase flows, and service bookings. Integrated JWT authentication.",
      challenges: "Optimizing the catalogue loading and overall app performance for lower-end Android devices.",
      outcome: "Delivered a fully functional Android app that met the client's performance requirements.",
      image: "/projects/medlinks.png",
      layers: {
        UI: ["Mobile Catalogue", "Service Flow"],
        API: ["REST Integration", "JWT Auth"],
        DATA: ["Local Storage", "State Management"]
      }
    },
    {
      id: "femitrack",
      name: "FemiTrack",
      category: "Women's Health App",
      tech: ["React Native", "Node.js", "Express.js", "Personal Project"],
      role: "Full Stack Developer",
      description: "Built the full app solo — React Native Android frontend with an Express.js backend covering period tracking, health cycle logging, and related features.",
      highlights: [
        "Android frontend",
        "Express backend",
        "period tracking",
        "cycle logging"
      ],
      context: "A personal project aimed at creating a comprehensive women's health tracking application.",
      problem: "Many existing apps lacked a clean, intuitive interface combined with reliable backend data syncing.",
      architecture: "React Native frontend with a Node.js/Express backend.",
      implementation: "Developed features for period tracking and health cycle logging with end-to-end data flow.",
      challenges: "Designing an intuitive UI for sensitive health data and ensuring reliable syncing.",
      outcome: "Successfully built and deployed a functional health tracking app.",
      image: "/projects/femitrack.png"
    },
    {
      id: "intern-management",
      name: "Intern Management System",
      category: "Internal Business Platform",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      role: "Full Stack Developer",
      description: "Built solo, end-to-end: internal platform to manage intern records, batches, timetables, and receipt generation.",
      highlights: [
        "intern records",
        "batches",
        "timetables",
        "receipt generation",
        "RBAC",
        "audit logging",
        "GST handling",
        "pagination",
        "actively used internally"
      ],
      context: "The organization needed a centralized system to manage its internship programs and associated administrative tasks.",
      problem: "Manual tracking of interns, batches, and receipts was becoming unscalable and error-prone.",
      architecture: "MERN stack tailored for internal administrative workflows.",
      implementation: "Implemented role-based access control, audit logging, GST handling, and paginated dashboards.",
      challenges: "Handling complex RBAC and ensuring accurate GST calculations for receipt generation.",
      outcome: "The system is actively used by the organization, significantly streamlining administrative operations.",
      image: "/projects/intern-management.png",
      layers: {
        UI: ["Records Table", "Dashboards", "Receipt PDF Workflow"],
        API: ["RBAC Middleware", "Audit Logging"],
        DATA: ["MongoDB Schemas", "GST Handling"]
      }
    },
    {
      id: "nexa-utility",
      name: "Nexa Utility",
      category: "Building Management Application",
      tech: ["React Native CLI", "Android"],
      role: "Mobile Developer (Team)",
      description: "Team developer on the Android app — built modules for core of the application like device management, unit tracking, meter readings, invoicing, and statements for a live product.",
      highlights: [
        "device management",
        "unit tracking",
        "meter readings",
        "invoicing",
        "statements"
      ],
      context: "A building management company required a mobile app to streamline utility tracking and billing.",
      problem: "Existing methods for tracking meter readings and generating invoices were manual and disconnected.",
      architecture: "React Native CLI for Android.",
      implementation: "Collaborated with a team to build modules for device management, unit tracking, meter readings, and invoicing.",
      challenges: "Integrating various complex modules into a cohesive mobile experience.",
      outcome: "Contributed to a live product that improved utility management efficiency.",
      image: "/projects/nexa-utility.png",
      layers: {
        UI: ["Device Module", "Invoicing Views"],
        API: ["Backend Sync", "Offline Fallback"],
        DATA: ["Meter Tracking", "Statements"]
      }
    }
  ],
  additionalWork: [
    {
      name: "Kukkeshree Engineers & QuickDice",
      category: "Business Websites",
      tech: ["PHP", "HTML", "CSS", "JavaScript"],
      description: "Independently designed and delivered client websites for an engineering firm and an ERP brand, focused on fast load times and clean, responsive UI."
    }
  ],
  stack: {
    languages: ["TypeScript", "JavaScript (ES6+)"],
    frontend: ["React.js", "Next.js", "React Native", "HTML5", "CSS3", "Astro.js"],
    backend: ["Node.js", "Express.js", "GoLang", "PHP"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase", "SQL Server"],
    ai: ["OpenAI API", "Gemini API", "Claude API"],
    cloudAndTools: ["Vercel", "AWS", "Git", "Postman", "Swagger", "Power BI", "Docker"]
  },
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      grade: "8.6 CGPA",
      location: "Udupi, Karnataka",
      period: "Nov 2021 – June 2024"
    }
  ],
  workflow: [
    {
      id: "01",
      title: "UNDERSTAND",
      description: "Requirements, stakeholders, users."
    },
    {
      id: "02",
      title: "ARCHITECT",
      description: "Data flow, APIs, frontend, backend."
    },
    {
      id: "03",
      title: "BUILD",
      description: "Production-quality implementation."
    },
    {
      id: "04",
      title: "VALIDATE",
      description: "Testing, QA, edge cases."
    },
    {
      id: "05",
      title: "SHIP",
      description: "Deployment and production monitoring."
    },
    {
      id: "06",
      title: "ITERATE",
      description: "Feedback, bugs, performance and UX."
    }
  ],
  philosophy: [
    {
      title: "OWN THE OUTCOME",
      description: "Understand the requirement, not just the ticket."
    },
    {
      title: "BUILD FOR REAL USERS",
      description: "Performance, UX, reliability and maintainability matter."
    },
    {
      title: "SHIP AND ITERATE",
      description: "Production is where software actually gets tested."
    }
  ]
};
