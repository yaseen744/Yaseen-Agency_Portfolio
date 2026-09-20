/**
 * ============================================
 *  SITE DATA — edit this one file to personalize
 *  the entire portfolio (name, links, projects,
 *  skills, stats, resume, photo, agency, etc.)
 * ============================================
 */

export const personalInfo = {
  name: "Muhammad Yaseen",
  firstName: "Yaseen",
  role: "Full-stack web developer",
  tagline: "I build modern, responsive websites that help businesses grow online.",
  location: "Sukkur, Pakistan",
  email: "yaseenpirzada3@gmail.com",
  whatsapp: "923113404105",
  linkedin: "https://www.linkedin.com/in/yaseen-pirzada-aa6941385/",
  github: "https://github.com/yaseen744",
  youtube: "http://www.youtube.com/@TechWithYaseenPK",
  resumeUrl: "/resume.pdf",
  photo: "/images/me.jpg",
  available: true,
  about: [
    "I'm a web developer who enjoys turning ideas into clean, fast, and responsive interfaces. I work across the stack with React, JavaScript, Node.js and Express on the backend, and Bootstrap for rapid, consistent styling — and I care a lot about the small details: spacing, motion, and load times, that make a website feel premium.",
    "Over the past year I've partnered with small businesses and startups to ship landing pages, dashboards and web apps that actually move the needle, not just look good in a screenshot.",
  ],
};

export const agencyInfo = {
  name: "Nexoria Digital Agency",
  tagline: "Web · AI · Design studio — visit our page",
  facebook: "https://www.facebook.com/yaseenpirzadawebsolutions?mibextid=ZbWKwL",
  instagram: "https://www.instagram.com/nexoria.agency_/?hl=en",
};

export const stats = [
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "LinkedIn Network", value: "1k", suffix: "+" },
  { label: "Years Experience", value: 1, suffix: "+" },
];

export const skillGroups = [
  {
    key: "frontend",
    title: "Frontend",
    icon: "frontend",
    skills: [
      { name: "HTML5", core: false },
      { name: "CSS3", core: false },
      { name: "JavaScript", core: true },
      { name: "Bootstrap", core: false },
      { name: "React", core: true },
    ],
  },
  {
    key: "backend",
    title: "Backend",
    icon: "backend",
    skills: [
      { name: "Node.js", core: true },
      { name: "Express.js", core: true },
      { name: "REST APIs", core: true },
      { name: "MongoDB", core: true },
    ],
  },
  {
    key: "tools",
    title: "Tools",
    icon: "tools",
    skills: [
      { name: "Git / GitHub", core: false },
      { name: "Netlify", core: false },
      { name: "Vercel", core: false },
    ],
  },
];

export const heroStack = ["JavaScript", "React", "Node.js", "Express", "MongoDB", "REST APIs"];

export const projects = [
  {
    id: 1,
    kind: "E-commerce",
    gx: 28,
    gy: 30,
    title: "E-Commerce Web Application",
    description:
      "A full-featured storefront built with React — dynamic product catalog, persistent cart state, category and price filtering, and a checkout flow designed around speed and clarity. Engineered for Lighthouse-friendly performance and a frictionless mobile experience.",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://yaseen-e-commerce.netlify.app/",
    code: "https://github.com/yaseen744/E-commerce.git",
    icon: "cart",
  },
  {
    id: 2,
    kind: "Education",
    gx: 72,
    gy: 26,
    title: "Scholars Edge Academy",
    subtitle: "Tuition Website",
    description:
      "A conversion-focused academy site built with React, structured around course discovery, faculty profiles and a streamlined admissions journey — designed to build trust with parents and students from the first scroll.",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://scholars-edge-academy1.vercel.app/",
    code: "https://github.com/yaseen744/Scholars-edge-academy.git",
    icon: "academic",
  },
  {
    id: 3,
    kind: "Real estate",
    gx: 64,
    gy: 70,
    title: "Real Estate Agency Website",
    description:
      "A polished property-listings platform built with React, featuring searchable listings, rich media galleries and a navigation system tuned for buyers and renters browsing on any device.",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://estate-agency1.vercel.app/",
    code: "https://github.com/yaseen744/Estate-agency.git",
    icon: "estate",
  },
  {
    id: 4,
    kind: "Beauty salon",
    gx: 36,
    gy: 66,
    title: "Parlour Website",
    description:
      "An elegant, fully responsive site for a beauty salon — service menus, transparent pricing and an appointment-first layout, wrapped in a refined visual identity that matches the brand.",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://muskan-salon.vercel.app",
    code: "https://github.com/yaseen744/Salon.git",
    icon: "salon",
  },
  {
    id: 5,
    kind: "Travel",
    gx: 70,
    gy: 30,
    title: "Travel Website",
    description:
      "An immersive travel-booking concept built with React, pairing destination storytelling with clear trip packages and pricing — laid out to inspire browsing and drive enquiries.",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://travelpk-website.netlify.app/",
    code: "https://github.com/yaseen744/Travel-website.git",
    icon: "travel",
  },
  {
    id: 6,
    kind: "Restaurant",
    gx: 50,
    gy: 36,
    title: "Velvet Table",
    subtitle: "Restaurant Landing Page",
    description:
      "A refined restaurant landing page built with a reusable, component-based React architecture — menu highlights, ambience-driven visuals and reservation prompts, tuned for a smooth experience on every device.",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://yaseen-luxtable.netlify.app/",
    code: "https://github.com/yaseen744/Velvet-project.git",
    icon: "restaurant",
  },
  {
    id: 7,
    kind: "Healthcare",
    gx: 50,
    gy: 50,
    title: "Carewell Clinic Website",
    description:
      "A trustworthy healthcare website with clear service breakdowns and an appointment-focused layout, designed to reduce friction between a patient and their first booking.",
    tags: ["React", "Healthcare", "Responsive"],
    demo: "https://carewell-clinic.netlify.app/",
    code: "https://github.com/yaseen744/Carewell-clinic.git",
    icon: "clinic",
  },
  {
    id: 8,
    kind: "Cleaning services",
    gx: 58,
    gy: 60,
    title: "SparkClean Cleaning Website",
    description:
      "A professional service-business website covering offerings, pricing and bookings, built to make a small business feel established and easy to trust online.",
    tags: ["React", "Business", "Responsive"],
    demo: "https://sparkclean-website.netlify.app/",
    code: "https://github.com/yaseen744/Sparkclean.git",
    icon: "clean",
  },
  {
    id: 9,
    kind: "Fitness",
    gx: 66,
    gy: 34,
    title: "Gym Fitness Website",
    description:
      "A high-energy fitness and gym website presenting training programs, coach profiles and membership tiers with bold visuals matched to the brand's intensity.",
    tags: ["React", "Fitness", "Responsive"],
    demo: "https://gym-fitness-pk.netlify.app/",
    code: "https://github.com/yaseen744/Gym-Fitness.git",
    icon: "gym",
  },
];

export const services = [
  { icon: "globe", title: "Business Websites", description: "Clean, professional websites for any type of business — built to load fast, look credible, and work perfectly on every device." },
  { icon: "cart", title: "E-Commerce Website", description: "Full online stores with product listings, shopping cart and category filtering, built for a smooth shopping experience." },
  { icon: "academic", title: "Academic Website", description: "Modern websites for schools, academies and tuition centers to showcase courses, faculty and admissions." },
  { icon: "estate", title: "Estate Agency Website", description: "Professional real estate websites with property listings and a smooth browsing experience for buyers and renters." },
  { icon: "layout", title: "Landing Pages", description: "Focused, conversion-ready landing pages for products, services or campaigns with a clear call-to-action." },
  { icon: "portfolio", title: "Portfolio Websites", description: "Personal portfolio websites that showcase your work and skills in a clean, professional way." },
  { icon: "redesign", title: "Website Redesign", description: "Giving old, outdated websites a fresh, modern look with better speed and usability." },
  { icon: "responsive", title: "Responsive Design", description: "Websites that look and work great on every screen size — mobile, tablet and desktop." },
  { icon: "maintenance", title: "Website Maintenance", description: "Ongoing updates, fixes and improvements to keep your website running smoothly at all times." },
];

export const whyHireMe = [
  { text: "Fast Delivery" },
  { text: "Mobile Responsive" },
  { text: "Clean Modern Design" },
  { text: "SEO Friendly" },
  { text: "Ongoing Support" },
];

export const testimonials = [
  { name: "Muzaffer", role: "Admin, Global Learning Academy", quote: "Yaseen developed our academy website professionally with a clean design, responsive layout, and excellent communication throughout the project." },
  { name: "Muhammad Hamza", role: "Startup Founder", quote: "Excellent React developer. The website was fast, responsive, and looked fantastic." },
  { name: "Abdul Rehman", role: "Client", quote: "Very satisfied with the final result. Smooth process and high-quality work throughout." },
];

export const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Services", to: "services" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];
