export interface Project {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  tech: string[];
  role: string;
  ownership: string;
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  implementation: string;
  outcome: string;
  architecture: string;
  systemHighlights: string[];
  caseStudy: {
    context: string;
    challenge: string;
    technicalDecisions: string[];
    deliverables: string[];
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export const portfolioData = {
  personal: {
    name: "H S Karthik",
    title: "Full Stack Developer",
    subtitle: "Software Engineer",
    location: "Based in Udupi · Working in Mangaluru, Karnataka, India",
    email: "karthik02314@gmail.com",
    phone: "+91 98808 65182",
    linkedin: "https://linkedin.com/in/karthik-h-s7",
    github: "https://github.com/Karthik0231",
    portfolioUrl: "https://karthik-portfolio-three-ruby.vercel.app/",
    resumeUrl: "/HS_Karthik_Resume_Full_Stack_Developer.docx",
    summary:
      "Full Stack Developer based in Udupi, working in Mangaluru at DataQueue Systems with 2+ years of hands-on experience designing and delivering front-end and back-end components for production web and mobile applications. Shipped live products end-to-end across React, Next.js, Node.js/Express, React Native, and PostgreSQL/MongoDB. Experienced in integrating LLM APIs (OpenAI, Gemini, Claude), enforcing role-based access control, building financial/operational dashboards, and mentoring engineering talent.",
    tagline: "I TURN COMPLEX IDEAS INTO WORKING SOFTWARE.",
    eyebrow: "INDEPENDENT THINKING. PRODUCTION SOFTWARE.",
    statement:
      "Full Stack Developer based in Udupi, working in Mangaluru. Building web applications, backend services, and mobile products for real-world use.",
    status: "Open to relevant software engineering opportunities",
  },

  philosophy: {
    headline: "GOOD SOFTWARE IS MORE THAN CODE.",
    lead: "A feature is not finished when a mockup is rendered or a test runs in isolation. It is finished when it handles network failure gracefully, secures every API boundary, stores data with strict integrity, and solves an actual operational bottleneck.",
    pillars: [
      {
        number: "01",
        title: "End-to-End Cohesion",
        description:
          "Seamless continuity between user interfaces, RESTful contracts, authentication middleware, and database indexing. No blind handoffs between frontend and backend.",
      },
      {
        number: "02",
        title: "Grounded in Real Constraints",
        description:
          "Engineering for actual users: lower-end Android hardware, variable network latencies, strict RBAC compliance, audit trails, and legal/financial precision like GST billing.",
      },
      {
        number: "03",
        title: "Production Discipline",
        description:
          "Code exists to run reliably. Structured error handling, Swagger documentation, proactive debugging, and continuous telemetry drive real business value.",
      },
    ],
  },

  signatureFlow: [
    {
      id: "01",
      key: "IDEA",
      title: "01. IDEA & REQUIREMENTS",
      shortLabel: "IDEA",
      subtitle: "Deconstructing problem spaces & data architecture",
      focus: "Requirements Analysis, Schema Modeling & User Journey",
      description:
        "Translating stakeholder objectives into deterministic workflows: defining database entities, API contracts, RBAC policies, and edge-case boundaries before writing code.",
      artifacts: ["Domain Entity Modeling", "REST API Contract Spec", "RBAC Access Matrix"],
      technologies: ["System Design", "Swagger/OpenAPI", "Entity Relationship Maps"],
    },
    {
      id: "02",
      key: "INTERFACE",
      title: "02. INTERFACE & CLIENT",
      shortLabel: "INTERFACE",
      subtitle: "Deterministic state & accessible user experiences",
      focus: "Component Systems, Responsive Layouts & Touch-First Design",
      description:
        "Crafting accessible, fast frontends with React.js, Next.js, and React Native CLI. Prioritizing instant feedback, graceful loading states, and device-tuned virtualization.",
      artifacts: ["Modular UI Components", "Virtualized Data Views", "Optimized Mobile Touch Targets"],
      technologies: ["React.js", "Next.js", "React Native (CLI)", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "03",
      key: "API",
      title: "03. API & MIDDLEWARE",
      shortLabel: "API",
      subtitle: "Secure transport, validation & authentication",
      focus: "JWT Auth, Input Sanitization & Structured Handlers",
      description:
        "Building predictable Node.js/Express and Go backend services. Every route is protected with JWT verification, schema validation middleware, rate limits, and audit logs.",
      artifacts: ["JWT Bearer Middleware", "Express Request Validators", "Audit Logging Interceptors"],
      technologies: ["Node.js", "Express.js", "GoLang", "JWT", "RESTful Architecture"],
    },
    {
      id: "04",
      key: "DATA",
      title: "04. DATA & PERSISTENCE",
      shortLabel: "DATA",
      subtitle: "ACID consistency, indexing & document stores",
      focus: "Schema Design, Aggregation Pipelines & Migrations",
      description:
        "Architecting relational (PostgreSQL, MySQL) and document (MongoDB) databases. Designing compound indexes, handling transaction integrity, and managing automated backups.",
      artifacts: ["PostgreSQL Relational Schemas", "MongoDB Aggregation Pipelines", "Indexed Query Tuning"],
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"],
    },
    {
      id: "05",
      key: "PRODUCTION",
      title: "05. PRODUCTION & OPERATIONS",
      shortLabel: "PRODUCTION",
      subtitle: "Deployment, telemetry & continuous refinement",
      focus: "Docker, Cloud Deploys, Live Debugging & Maintenance",
      description:
        "Shipping applications to production on Vercel and AWS environments. Monitoring error rates, diagnosing runtime performance bottlenecks, and rapidly iterating on feedback.",
      artifacts: ["Containerized Builds", "Production Triage Runbooks", "Zero-Downtime Deployments"],
      technologies: ["Docker", "Vercel", "AWS Fundamentals", "Git/GitHub", "Postman"],
    },
  ],

  projects: [
    {
      id: "axionvertex",
      name: "AxionVertex",
      category: "Client Product — UK Logistics",
      subtitle: "UK Man & Van Platform with Dynamic Quoting & Invoice Generation",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Vercel"],
      role: "Full Stack Developer",
      ownership: "Solo Full Stack Development & Client Delivery",
      liveUrl: "https://axionvertex.uk/",
      problem:
        "A UK-based removal and logistics operator relied on manual phone quotes and fragmented paperwork, creating booking delays, billing errors, and lost customer enquiries.",
      implementation:
        "Delivered a full MERN-stack platform featuring a customer-facing interactive booking & quote calculation flow, paired with an administrative management portal for invoice generation, quotation tracking, and job dispatch.",
      outcome:
        "Streamlined day-to-day operations and billing into a centralized digital workflow, drastically reducing quotation turnarounds and eliminating manual invoice calculations.",
      architecture:
        "Multi-tier MERN architecture with client SSR on Vercel, Node/Express REST API services, MongoDB persistent document storage, and automated PDF invoice compilation.",
      systemHighlights: [
        "Multi-step customer enquiry & quotation calculation engine",
        "Administrative dashboard with live job status dispatch",
        "Automated GST/tax invoice and quotation PDF generation",
        "Report management for daily logistics and revenue tracking",
      ],
      caseStudy: {
        context:
          "The client operated in a competitive London & UK logistics sector where customers expect instant price estimates and seamless booking confirmations.",
        challenge:
          "Handling dynamic pricing variables (mileage, inventory size, labor hours, stair flights) while ensuring the back-office staff could convert quotes into binding invoices in seconds.",
        technicalDecisions: [
          "Engineered a modular pricing calculator on both frontend and backend to validate tariff rules consistently.",
          "Implemented MongoDB indexing across job dates and customer records to support rapid querying on the admin portal.",
          "Built server-side invoice generation to produce standardized, downloadable billing receipts.",
        ],
        deliverables: [
          "Customer booking & quote calculator portal (live at axionvertex.uk)",
          "Protected administrative management suite",
          "Automated billing, quotation, and invoice generation pipeline",
        ],
      },
    },
    {
      id: "intern-management",
      name: "Internal Management System",
      category: "Internal Product — Operations & ERP",
      subtitle: "Enterprise Record, Batch, & Financial Operations Platform",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
      role: "Full Stack Developer",
      ownership: "Sole Author & Maintainer (End-to-End Architecture)",
      problem:
        "The organization managed hundreds of intern files, academic batches, class timetables, and fee receipts across detached spreadsheets with zero role segregation, audit logging, or tax compliance.",
      implementation:
        "Architected an end-to-end internal enterprise platform featuring strict role-based access control (RBAC), immutable audit logging for all mutations, automated GST-compliant receipt generation, and high-density paginated data grids.",
      outcome:
        "Adopted as the primary operational engine for the institute, eliminating manual tracking discrepancies and securing student financial records with full traceability.",
      architecture:
        "React SPA communicating with an Express REST API backend, secured via JWT auth middleware, with schema-level validation, structured error handlers, and MongoDB persistence.",
      systemHighlights: [
        "Granular Role-Based Access Control (Admin, Coordinator, Finance)",
        "Immutable audit logging capturing every record update and deletion",
        "Automated GST-compliant receipt generation with downloadable slips",
        "High-density paginated tables with multi-field search and batch filtering",
      ],
      caseStudy: {
        context:
          "Administrative teams required an authoritative system of record to manage ongoing batches, timetable schedules, and financial transactions securely.",
        challenge:
          "Ensuring complete data integrity and compliance with Indian GST receipt standards while maintaining absolute privacy and role separation across staff ranks.",
        technicalDecisions: [
          "Designed custom Express RBAC middleware checking scoped permissions per endpoint before controller execution.",
          "Wrote audit log interceptors that record the requesting user ID, IP, timestamp, action type, and previous/new diff.",
          "Implemented server-side pagination and indexed regex searching to handle growing intern archives without UI stutter.",
        ],
        deliverables: [
          "Batch & intern lifecycle management platform",
          "GST fee receipt generation and financial reconciliation module",
          "Complete audit log and permissions governance subsystem",
        ],
      },
    },
    {
      id: "medlinks",
      name: "Medlinks",
      category: "Client Product — Mobile Healthcare",
      subtitle: "Medical Equipment Catalog, Sales & Service Booking App",
      tech: ["React Native CLI", "Android", "REST APIs", "JWT Auth", "Node.js"],
      role: "Mobile Developer",
      ownership: "Built Full Android Application Solo",
      problem:
        "Healthcare clinics and technicians in regional markets needed a reliable mobile portal to order medical supplies and schedule equipment servicing on entry-level Android devices.",
      implementation:
        "Constructed the complete React Native Android application independently, incorporating virtualized product catalogues, streamlined checkout, technician service booking, and JWT-authenticated session management.",
      outcome:
        "Delivered a fluid native experience that maintained stable 60 FPS scrolling even on budget Android devices with constrained RAM and spotty connectivity.",
      architecture:
        "React Native CLI native Android bundle interfacing with secured REST endpoints, utilizing memory-conscious flatlists, optimistic cache updates, and asynchronous local storage.",
      systemHighlights: [
        "Performance-tuned catalogue virtualization for low-end Android hardware",
        "JWT-authenticated user sessions with automatic token refresh",
        "Equipment purchasing flow and maintenance service appointment scheduling",
        "Resilient network error handling and offline asset caching",
      ],
      caseStudy: {
        context:
          "Medical equipment distributors deal with high-value catalogues and urgent service requests that hospital and clinic administrators must access on mobile.",
        challenge:
          "Target audience frequently uses low-spec Android smartphones (2GB-3GB RAM) where heavy image-heavy lists cause Out-Of-Memory (OOM) crashes and stutter.",
        technicalDecisions: [
          "Engineered aggressive image downsampling and virtualized list windowing using FlatList optimizations.",
          "Structured JWT auth tokens in secure device storage with interceptors catching 401 statuses gracefully.",
          "Built clear visual feedback states for network timeouts and retry logic for service reservations.",
        ],
        deliverables: [
          "Production-ready signed Android APK built with React Native CLI",
          "Medical catalogue, cart, and order pipeline",
          "Equipment technician service booking workflow",
        ],
      },
    },
    {
      id: "nexa-utility",
      name: "Nexa Utility",
      category: "Team Product — Facility Management",
      subtitle: "Building Utility Telemetry, Meter Readings & Automated Invoicing",
      tech: ["React Native CLI", "Android", "REST APIs", "Team Git Workflow"],
      role: "Mobile Developer (Core Modules)",
      ownership: "Co-developer in Engineering Team (Owned 5 Critical Modules)",
      problem:
        "Multi-unit residential and commercial properties faced meter reading transcription errors, unrecorded utility consumption, and delayed tenant utility invoicing.",
      implementation:
        "Collaborated with an agile engineering team to engineer key Android modules: IoT device management, tenant unit tracking, digital meter reading capture, automated utility invoice generation, and monthly account statement views.",
      outcome:
        "Helped ship a live facility management app that replaced clipboard inspections with synchronized digital meter logs and instantaneous tenant billing.",
      architecture:
        "Modular React Native CLI architecture integrated into a distributed backend, featuring offline-first data capture and batch synchronizations.",
      systemHighlights: [
        "Device & meter hardware telemetry tracking per unit",
        "Digital meter reading entry with validation guards against anomalies",
        "Automated utility invoice calculation and statement downloads",
        "Team-oriented Git collaboration with rigorous code reviews",
      ],
      caseStudy: {
        context:
          "Building management staff conduct physical walk-throughs across hundreds of utility meters monthly; delays or errors directly affect property revenue.",
        challenge:
          "Ensuring meter readers could record data reliably inside basement utility rooms with zero cell coverage, and validating inputs to prevent accidental ten-fold billing errors.",
        technicalDecisions: [
          "Built client-side bounds-checking comparing current inputs against historical baseline averages.",
          "Designed isolated module boundaries allowing device management and billing views to evolve without cross-component coupling.",
          "Contributed clean, well-documented pull requests adhering to strict team formatting and linting rules.",
        ],
        deliverables: [
          "Device management & unit tracking screens",
          "Meter reading submission & inspection interface",
          "Tenant billing statement generation module",
        ],
      },
    },
    {
      id: "codelab-systems",
      name: "CodeLab Systems Website",
      category: "Client Website — EdTech & Corporate",
      subtitle: "Fast SEO-First Corporate Portal with Interactive Course Inquiries",
      tech: ["Next.js", "React.js", "Tailwind CSS", "SEO SSR", "Vercel"],
      role: "Frontend Developer & Designer",
      ownership: "Designed and Developed End-to-End",
      liveUrl: "https://codelabsystems.in/",
      problem:
        "An established IT training company required a modern web presence with high search visibility across regional educational keywords to replace an outdated brochure site.",
      implementation:
        "Designed and built the official web portal from scratch using Next.js for server-side rendered SEO performance, structured course catalog pages, and optimized lead-capture enquiry funnels.",
      outcome:
        "Significantly elevated search indexing and discovery for tech programs across Udupi & Mangaluru, generating consistent daily student enquiry leads.",
      architecture:
        "Next.js App Router with server-rendered metadata, dynamic OpenGraph assets, semantic HTML5 structure, and Vercel edge CDN caching.",
      systemHighlights: [
        "Server-rendered course catalog optimized for Core Web Vitals",
        "Integrated prospective student enquiry pipelines with input validation",
        "Strict semantic HTML with OpenGraph and JSON-LD schema markup",
        "Ultra-clean typographic layout adapted for mobile and desktop screens",
      ],
      caseStudy: {
        context:
          "CodeLab Systems conducts software development training and needed a website that reflects modern engineering standards to prospective engineering students.",
        challenge:
          "Achieving perfect Lighthouse scores while providing rich curriculum breakdowns and dynamic inquiry forms.",
        technicalDecisions: [
          "Leveraged Next.js Static Site Generation (SSG) with incremental revalidation for course pages.",
          "Crafted semantic schemas so search engines index course dates, topics, and certification details directly.",
          "Implemented lightweight client-side form validation with accessible error cues.",
        ],
        deliverables: [
          "Official production website live at codelabsystems.in",
          "Modular course curriculum page system",
          "Automated student enquiry intake pipeline",
        ],
      },
    },
    {
      id: "femitrack",
      name: "FemiTrack",
      category: "Mobile Application — Health Tech",
      subtitle: "Privacy-Focused Menstrual Cycle & Symptom Tracking Application",
      tech: ["React Native CLI", "Node.js", "Express.js", "MongoDB", "Android"],
      role: "Full Stack Developer",
      ownership: "Independent Full-Stack Project",
      problem:
        "Many health-tracking applications are bloated with intrusive ad networks and monetize sensitive health data, leaving users concerned about privacy and UI complexity.",
      implementation:
        "Designed and built a calm, intuitive Android application paired with an Express/Node backend. Implemented period logging, cycle calculation, calendar visualizations, and secure symptom recording.",
      outcome:
        "Proved full-stack mobile architecture capability: clean user-centered UI, predictable cycle mathematical forecasting, and secure end-to-end data encryption.",
      architecture:
        "React Native CLI frontend with custom SVG cycle calendars, connected to an Express.js backend with encrypted user data storage in MongoDB.",
      systemHighlights: [
        "Intuitive cycle tracking and mathematical forecast calendar",
        "Daily symptom, mood, and health observation logger",
        "Encrypted backend synchronization with strict user isolation",
        "Minimal, distraction-free aesthetic with zero third-party trackers",
      ],
      caseStudy: {
        context:
          "Personal engineering exploration in creating health utilities that respect data sovereignty and offer soothing, thoughtful interfaces.",
        challenge:
          "Developing an accurate mathematical cycle projection algorithm that adapts to varying monthly intervals without confusing the user.",
        technicalDecisions: [
          "Implemented moving-average cycle forecasting based on rolling historical logs.",
          "Structured the mobile UI with soothing typography and immediate feedback for daily entries.",
          "Built a secure backend API ensuring sensitive health logs are encrypted at rest.",
        ],
        deliverables: [
          "Complete React Native Android APK",
          "Node.js/Express health data synchronization service",
          "Cycle projection and logging engine",
        ],
      },
    },
  ],

  experience: [
    {
      role: "Software Developer",
      company: "DataQueue Systems",
      location: "Mangaluru, Karnataka, India",
      period: "Jan 2025 – Present",
      badge: "Current Role",
      description:
        "Own full-stack features end-to-end across multiple live web and Android products. Work directly with stakeholders to convert business requirements into production-shipped code.",
      responsibilities: [
        "Design and build responsive React.js frontends and Node.js/Express backends for commercial client products.",
        "Architect RESTful APIs with JWT authentication, strict request validation, structured error handling, and Swagger documentation used daily by live users.",
        "Implement robust application security measures: role-based access control (RBAC), immutable audit logging, and payload sanitization.",
        "Integrate LLM APIs (OpenAI, Gemini, Claude) and third-party web services into backend workflows; leverage AI development tooling daily to accelerate coding and QA.",
        "Troubleshoot, debug, and tune production software: rapid bug triage, database query optimization, and UI performance refinements based on client feedback.",
        "Conduct MERN Stack and React.js training workshops at degree colleges across Udupi and Mangaluru; mentor junior developers on clean code and production practices.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "React Native",
        "REST APIs",
        "JWT",
        "MongoDB",
        "PostgreSQL",
        "Swagger",
        "LLM APIs",
      ],
      achievements: [
        "Shipped features for live UK and Indian client products with high availability.",
        "Mentored junior interns and led tech workshops across degree colleges.",
      ],
    },
    {
      role: "MERN Stack Intern",
      company: "CodeLab Systems",
      location: "Mangaluru, Karnataka, India",
      period: "Aug 2024 – Dec 2024",
      badge: "5-Month Intensive Internship",
      description:
        "Built REST APIs and React.js frontends across internal projects during an intensive 5-month hands-on development internship.",
      responsibilities: [
        "Engineered RESTful API endpoints and React.js component trees from technical specifications.",
        "Wrote custom validation middleware, centralized error handlers, and MongoDB CRUD aggregation operations from scratch.",
        "Integrated asynchronous state management and optimized component rendering for internal operational tools.",
        "Collaborated with senior engineers using Git version control, pull requests, and agile task tracking.",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript (ES6+)", "Git"],
      achievements: [
        "Authored reusable validation and error-handling utilities incorporated across projects.",
        "Promoted to full-time Software Developer at DataQueue Systems upon completion.",
      ],
    },
  ],

  technicalPractice: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      focus: "Component Systems & Modern Web",
      description:
        "Building accessible, high-performance interfaces with React.js, Next.js, and TypeScript. Deep focus on Core Web Vitals, server vs client rendering, semantic hierarchy, and smooth micro-interactions.",
      skills: ["React.js", "Next.js (App Router)", "TypeScript", "Astro.js", "Tailwind CSS", "Semantic HTML5", "CSS3 / Animation"],
    },
    {
      id: "backend",
      title: "Backend & API Architecture",
      focus: "Services, Routing & Contracts",
      description:
        "Writing maintainable RESTful services in Node.js/Express and GoLang. Designing modular route structures, strict request validation, structured error responses, and comprehensive Swagger documentation.",
      skills: ["Node.js", "Express.js", "GoLang", "PHP", "REST APIs", "Swagger / OpenAPI", "Middleware Design"],
    },
    {
      id: "security",
      title: "Authentication & Security",
      focus: "Access Governance & Audit",
      description:
        "Implementing enterprise security practices: JWT authentication flows, password hashing, fine-grained Role-Based Access Control (RBAC), input sanitization, and immutable audit logging for sensitive actions.",
      skills: ["JWT Authentication", "Role-Based Access Control (RBAC)", "Audit Logging", "Input Sanitization", "CORS & Rate Limiting"],
    },
    {
      id: "data",
      title: "Databases & Data Modeling",
      focus: "Persistence, Integrity & Queries",
      description:
        "Architecting relational and document databases. Designing normalized schemas, writing complex SQL queries and MongoDB aggregations, managing migrations, and maintaining transaction integrity.",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Supabase", "Firebase", "Query Indexing"],
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      focus: "Native Android & Virtualization",
      description:
        "Building native Android apps with React Native CLI. Tuning performance for lower-end devices, managing local offline caching, virtualizing high-density lists, and integrating hardware/system APIs.",
      skills: ["React Native (CLI)", "Android Studio", "Offline Caching", "FlatList Optimization", "Mobile Auth Flows"],
    },
    {
      id: "ai-tooling",
      title: "LLM & Third-Party APIs",
      focus: "Intelligent Workflows & Integrations",
      description:
        "Integrating LLM APIs (OpenAI, Gemini, Claude) into backend workflows for automated processing, intelligent assistants, and data enrichment. Using modern AI tooling daily to accelerate code delivery.",
      skills: ["OpenAI API", "Gemini API", "Claude API", "Prompt Engineering", "JSON Schema Output", "Third-Party REST SDKs"],
    },
  ],

  toolkit: {
    languages: [
      { name: "JavaScript (ES6+)", note: "Primary language for full-stack web and mobile apps" },
      { name: "TypeScript", note: "Strictly typed interfaces, props, and API response contracts" },
      { name: "SQL", note: "Relational modeling, complex joins, and indexed queries" },
      { name: "PHP", note: "Backend services, CMS integrations, and corporate client web" },
      { name: "Go (GoLang)", note: "Fast, concurrent microservices and backend utilities" },
    ],
    frontend: [
      { name: "React.js", note: "Custom hooks, component architecture, and state management" },
      { name: "Next.js", note: "App Router, SSR, SSG, and SEO optimization" },
      { name: "React Native (CLI)", note: "Native Android apps, list virtualization, and offline sync" },
      { name: "Astro.js", note: "Content-driven sites with minimal client-side JavaScript" },
      { name: "Tailwind CSS", note: "Utility-first design tokens and responsive layouts" },
    ],
    backend: [
      { name: "Node.js", note: "Asynchronous runtime for high-throughput APIs" },
      { name: "Express.js", note: "Modular routers, validation middleware, and JWT auth" },
      { name: "RESTful APIs", note: "Resource-oriented endpoints with HTTP status semantics" },
      { name: "JWT Auth", note: "Stateless token-based authentication and role enforcement" },
    ],
    databases: [
      { name: "PostgreSQL", note: "Relational persistence, constraints, and ACID transactions" },
      { name: "MongoDB", note: "Document models, dynamic aggregation, and fast reads" },
      { name: "MySQL", note: "Structured tabular schemas and legacy integrations" },
      { name: "Supabase & Firebase", note: "Realtime data subscriptions and managed storage" },
      { name: "SQL Server", note: "Enterprise databases and structured queries" },
    ],
    toolsAndDevOps: [
      { name: "Git & GitHub", note: "Version control, branching, PR reviews, and CI workflows" },
      { name: "Docker", note: "Containerized application environments and local parity" },
      { name: "AWS Fundamentals", note: "S3 asset storage, EC2 basics, and cloud deployment" },
      { name: "Vercel", note: "Edge hosting, continuous deployment, and preview branches" },
      { name: "Postman & Swagger", note: "API testing, contract verification, and OpenAPI documentation" },
      { name: "Power BI", note: "Operational dashboards and data visualization" },
    ],
  },

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mangalore University Affiliated College",
    location: "Udupi, Karnataka, India",
    grade: "8.6 CGPA",
    period: "Nov 2021 – Jun 2024",
    highlights: [
      "Graduated with 8.6 CGPA with distinction in core software subjects",
      "Coursework: Data Structures, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, Software Engineering, Web Technologies",
      "Active participant in technical symposiums, hackathons, and developer coding forums",
    ],
  },

  contact: {
    headline: "HAVE A REAL PRODUCT TO BUILD?",
    subheadline:
      "I am interested in full-time software engineering opportunities, product development roles, and ambitious technical teams where craftsmanship, reliable systems, and strong collaboration matter.",
    email: "karthik02314@gmail.com",
    phone: "+91 98808 65182",
    location: "Mangaluru, Karnataka, India",
    availability: "Immediate / Standard Notice Available",
    profiles: [
      { name: "GitHub", url: "https://github.com/Karthik0231", handle: "@Karthik0231" },
      { name: "LinkedIn", url: "https://linkedin.com/in/karthik-h-s7", handle: "karthik-h-s7" },
      { name: "Email", url: "mailto:karthik02314@gmail.com", handle: "karthik02314@gmail.com" },
    ],
  },
};
