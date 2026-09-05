export const profile = {
  name: "Pushpraj Ranjan",
  role: "Full Stack Developer",
  location: "Kolkata, India",
  email: "pushprajranjan31@gmail.com",
  phone: "8579887066",
  phoneHref: "tel:+918579887066",
  phoneDisplay: "+91 85798 87066",
  linkedin: "https://www.linkedin.com/in/pushpraj-ranjan-454931215",
  github: "https://github.com/Pushpraj31",
  resume: "/Pushpraj_Ranjan_Resume.pdf",
  photo: "/profile.png",
  company: "WeMakeover",
};

export const about = [
  "I’m a Full Stack Developer based in Kolkata, currently building production web products at WeMakeover. I designed and built wemakeover.co.in from scratch — a doorstep salon, grooming, and make-up booking platform — working end to end across React, Node.js, Express, and MongoDB.",
  "On that product I implemented JWT, Google OAuth, and role-based access, integrated Razorpay and Redis-backed OTP flows, and shipped AWS (EC2, S3) deployments that held 99.5% uptime in load tests. I also improved application performance by 35% using React lazy loading, memoization, and tighter API design.",
  "I like shipping products that mix engineering with real user flow: InterviewIQ.AI for AI mock interviews with voice input, scoring, and credit-based payments, and a Dockerized Support Ticket System with LLM auto-classification. Parallel to work, I’m pursuing my MCA at Techno India University after completing BCA with a GPA of 8.37.",
  "I care about security, performance, and clean UX — the parts you can feel in a demo, not just a line on a resume.",
];

export const skills = [
  {
    label: "Languages",
    items: [
      { name: "C", icon: "/skills/c.svg" },
      { name: "C++", icon: "/skills/cpp.svg" },
      { name: "Python", icon: "/skills/python.svg" },
      { name: "Java", icon: "/skills/java.svg" },
      { name: "JavaScript", icon: "/skills/javascript.svg" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "HTML5", icon: "/skills/html5.svg" },
      { name: "CSS3", icon: "/skills/css3.svg" },
      { name: "React.js", icon: "/skills/react.svg" },
      { name: "Responsive UI", icon: "/skills/responsive.svg" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "Express.js", icon: "/skills/express.svg", invert: true },
      { name: "REST APIs", icon: "/skills/rest.svg" },
      { name: "JWT / OAuth", icon: "/skills/jwt.svg" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "MySQL", icon: "/skills/mysql.svg" },
      { name: "SQL", icon: "/skills/sqlite.svg" },
      { name: "Redis", icon: "/skills/redis.svg" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "/skills/aws.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "Kubernetes", icon: "/skills/kubernetes.svg" },
      { name: "CI/CD", icon: "/skills/githubactions.svg" },
      { name: "Git", icon: "/skills/git.svg" },
      { name: "GitHub", icon: "/skills/github.svg", invert: true },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Postman", icon: "/skills/postman.svg" },
      { name: "NPM", icon: "/skills/npm.svg" },
      { name: "DevTools", icon: "/skills/chrome.svg" },
      { name: "Excel", icon: "/skills/excel.svg" },
    ],
  },
];

export const experience = [
  {
    role: "Fullstack Developer",
    company: "WeMakeover",
    website: "https://wemakeover.co.in",
    type: "Full-time · Remote",
    period: "Sep 2025 — Present",
    bullets: [
      "Built wemakeover.co.in fully from scratch — a live doorstep salon, grooming, and make-up booking product.",
      "Implemented JWT authentication, Google OAuth, and RBAC to protect customer data and administrative access.",
      "Integrated Redis and Nodemailer for OTP verification, email notifications, and session management.",
      "Improved application performance by 35% with React lazy loading, memoization, and efficient API design.",
      "Built responsive dashboards for customer records, bookings, payments, and operational metrics.",
    ],
  },
  {
    role: "Intern Software Engineer",
    company: "WeMakeover",
    website: "https://wemakeover.co.in",
    type: "Internship · Remote",
    period: "Mar 2025 — Aug 2025",
    bullets: [
      "Architected the full-stack booking platform from scratch with MongoDB, Express.js, React.js, and Node.js.",
      "Embedded Razorpay payment gateway — 100+ test transactions at 100% success, shortening launch by a week.",
      "Cut page load times by 35% using React lazy loading and memoization.",
      "Published the app to AWS (EC2, S3) and maintained 99.5% uptime during load tests.",
    ],
  },
];

export const projects = [
  {
    featured: true,
    name: "WeMakeover",
    blurb:
      "Doorstep salon, grooming, and make-up booking platform — designed and developed fully from scratch.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "Razorpay", "AWS"],
    points: [
      "Owned the product end to end: customer booking, payments, auth, notifications, and admin dashboards.",
      "JWT, Google OAuth, RBAC, Redis OTP, Nodemailer, and Razorpay checkout in production.",
      "Deployed on AWS (EC2, S3) with 99.5% uptime in load tests and 35% faster page loads.",
    ],
    live: "https://wemakeover.co.in",
  },
  {
    name: "Wallet E-commerce",
    tag: "Client work",
    blurb:
      "UI/UX for a client wallet e-commerce website — product browsing, cart, checkout, and digital wallet flows designed in Figma.",
    stack: ["Figma", "UI/UX", "E-commerce", "Mobile + Web"],
    points: [
      "Designed the full wallet e-commerce experience for a client, from discovery to checkout.",
      "Screens cover catalog, cart, payments, and wallet balance flows in a consistent visual system.",
    ],
    figma:
      "https://www.figma.com/design/ftbNMYHFSTrnYXyWqEu2sP/wallet?node-id=0-1&p=f&t=ZFHpnk1eg7ZMNCcC-0",
  },
  {
    name: "InterviewIQ.AI",
    blurb:
      "AI mock interviews with voice input, scoring, analytics, and a credit-based Razorpay checkout.",
    stack: [
      "React 19",
      "Firebase Auth",
      "Express.js",
      "MongoDB",
      "OpenRouter",
      "Razorpay",
    ],
    points: [
      "Full interview pipeline with GPT-4o-mini, PDF text extraction, and live speech-to-text.",
      "Delivers 5 role-aware questions in under 8 seconds.",
      "HMAC-verified payments with atomic credit increments and rollback on failure.",
    ],
    github: "https://github.com/Pushpraj31/InterviewIQ.AI",
    live: null,
  },
  {
    name: "Support Ticket System",
    blurb:
      "Full-stack ticketing with search, filters, analytics, and LLM auto-classification — fully Dockerized.",
    stack: ["React", "Django REST", "PostgreSQL", "OpenAI", "Docker Compose"],
    points: [
      "Ticket CRUD, filtering, search, and database-level aggregation for live stats.",
      "LLM suggests category and priority with human override if the model fails.",
    ],
    github: "https://github.com/Pushpraj31/Support-Ticket-System",
    live: null,
  },
  {
    name: "SOS Emergency Alert",
    blurb:
      "One-tap SOS that sends live location to emergency contacts over WhatsApp, with realtime logs.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "Twilio"],
    points: [
      "JWT auth, up to 3 emergency contacts, and a live SOS broadcast over Socket.io.",
      "Twilio WhatsApp alerts include a Google Maps live-location link.",
    ],
    github: "https://github.com/Pushpraj31/SOS-service",
    live: "https://sos-service-beta.vercel.app",
  },
];

export const education = [
  {
    school: "Techno India University, Kolkata",
    degree: "Master of Computer Applications",
    period: "Oct 2024 — May 2026",
  },
  {
    school: "Techno Main Salt Lake, Kolkata",
    degree: "Bachelor of Computer Applications",
    meta: "GPA 8.37",
    period: "Oct 2021 — May 2024",
  },
];

export const certifications = [
  "Solved 250+ Data Structures & Algorithms problems on LeetCode, GeeksforGeeks, and HackerRank.",
  "Machine Learning certification from IBM SkillsBuild.",
  "HackerRank Problem Solving — Basic and Intermediate.",
];
