// Static CV data extracted from dan_castrillo_cv.typ

export const profile = {
  name: "DAN CASTRILLO",
  title: "Software Engineer",
  tagline: "10 YEARS BUILDING SYSTEMS",
  bio: "Experienced Software Engineer with 10 years building production systems across the full stack. Polyglot engineer comfortable working in JavaScript/TypeScript ecosystems (Node, Bun, React, Vue), Python, and systems languages like C and Odin. Track record of improving performance, mentoring engineers, and shipping features that move business metrics. Equally comfortable optimizing backend data flows, debugging complex frontend state issues, or implementing computer vision pipelines.",
  contact: {
    email: "dan@devoured.io",
    phone: "+584122650770",
    location: "Caracas, Venezuela",
    github: "github.com/dvrd",
  },
  cv_url: "/dan_castrillo_cv.pdf",
}

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript/TypeScript", level: 95, icon: "⚡" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Go", level: 80, icon: "🔵" },
      { name: "Rust", level: 65, icon: "🦀" },
      { name: "C", level: 70, icon: "⚙️" },
      { name: "Odin", level: 60, icon: "🔨" },
      { name: "Ruby", level: 70, icon: "💎" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Vue.js", level: 85, icon: "💚" },
      { name: "Next.js", level: 95, icon: "▲" },
      { name: "Nuxt 3", level: 85, icon: "💚" },
      { name: "Redux", level: 85, icon: "🔄" },
      { name: "Shadcn UI", level: 90, icon: "🎨" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 95, icon: "🟢" },
      { name: "Express", level: 90, icon: "🚂" },
      { name: "GraphQL", level: 85, icon: "◼️" },
      { name: "Django", level: 75, icon: "🎸" },
      { name: "Ruby on Rails", level: 70, icon: "🛤️" },
    ],
  },
  {
    category: "Specialized",
    items: [
      { name: "OpenCV", level: 80, icon: "👁️" },
      { name: "Cypress", level: 85, icon: "🌲" },
      { name: "SQL", level: 90, icon: "🗄️" },
      { name: "Bash", level: 85, icon: "💻" },
      { name: "Lua", level: 70, icon: "🌙" },
    ],
  },
]

export const workHistory = [
  {
    id: 1,
    company: "Upwork",
    position: "Senior Software Engineer",
    location: "Caracas/Venezuela",
    period: "October 2023 - Current",
    current: true,
    highlights: [
      "Architected Featured Jobs ads unit from concept to production",
      "Doubled conversion rates from 2.4% to 4%",
      "Drove test coverage from 40% to 90% with Cypress E2E",
      "Migrated PHP monolith to GraphQL (20% faster responses)",
      "Implemented security hardening (80% reduction in unauthorized access)",
      "Mentored 2 junior engineers",
      "Integrated AI-assisted development workflows",
    ],
    tech: ["Vue.js", "GraphQL", "Cypress", "PHP", "Snowflake"],
  },
  {
    id: 2,
    company: "Tecnologia Urbana",
    position: "Lead Software Engineer",
    location: "Caracas/Venezuela",
    period: "January 2023 - December 2023",
    current: false,
    highlights: [
      "Built traffic monitoring app with CV pipeline",
      "OpenCV object detection at 30fps 1080p",
      "Go backend with goroutines (3x throughput vs Python)",
      "Led team of 3 engineers",
      "Reduced production bugs by 30%",
    ],
    tech: ["Go", "OpenCV", "Python", "Computer Vision"],
  },
  {
    id: 3,
    company: "Lantum",
    position: "Senior Software Engineer",
    location: "London/United Kingdom",
    period: "June 2021 - January 2023",
    current: false,
    highlights: [
      "Rebuilt billing system (50% ticket reduction)",
      "Shipped calendar features (React + React Native)",
      "Fixed critical timezone bugs",
      "20% reduction in production incidents",
    ],
    tech: ["React", "React Native", "Redux", "GraphQL"],
  },
  {
    id: 4,
    company: "Gamesys (Bally's)",
    position: "Software Engineer",
    location: "London/United Kingdom",
    period: "March 2020 - June 2021",
    current: false,
    highlights: [
      "High-traffic gaming platform (millions of concurrent users)",
      "A/B testing framework for features",
      "Compliance for responsible gaming",
    ],
    tech: ["React", "Node.js", "A/B Testing"],
  },
  {
    id: 5,
    company: "Jobsity",
    position: "Full Stack Software Developer",
    location: "Remote",
    period: "August 2019 - March 2020",
    current: false,
    highlights: [
      "Delivered features across multiple client projects",
      "Ruby on Rails + React applications",
      "REST APIs and database schemas",
    ],
    tech: ["Ruby on Rails", "React", "PostgreSQL"],
  },
  {
    id: 6,
    company: "Admios",
    position: "Junior Full Stack Software Developer",
    location: "Remote",
    period: "November 2016 - August 2019",
    current: false,
    highlights: [
      "Full-stack features with Node and React",
      "Authentication flows and payment integrations",
      "Admin dashboards",
    ],
    tech: ["Node.js", "React", "Express"],
  },
]

export const education = {
  degree: "Fullstack Development",
  institution: "Academia Hack",
  period: "2014 - 2015",
}
