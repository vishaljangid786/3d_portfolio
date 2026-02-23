import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  shiv,
  instagram,
  socket,
  expo,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: socket,
    name: "Socket.io",
    type: "Backend",
  },
  {
    imageUrl: expo,
    name: "Expo",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "ShivGuru Software", // yaha apni company ka real naam daal dena
    icon: shiv, // apna logo ya placeholder
    iconBg: "#2b77e7",
    date: "Jan 2025 - Apr 2025",
    points: [
      "Developed and maintained responsive web applications using React.js for frontend and Node.js with Express for backend.",
      "Designed and integrated RESTful APIs and connected applications with MongoDB for efficient data management.",
      "Implemented authentication, form validation, and CRUD functionalities for real-world projects.",
      "Collaborated with senior developers to optimize performance and improve user experience.",
      "Gained hands-on experience in deployment, version control (Git), and debugging production-level issues.",
    ],
  },
];
export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/vishaljangid786",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/vishaljangid786",
  },
  {
    name: "Instagram",
    iconUrl: instagram,
    link: "https://www.instagram.com/__vishaljangid_",
  },
];
export const projects = [
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Vk Marketing",
    description:
      "Developed a full-featured marketing platform that connects customers and sellers, enabling product promotions, lead generation, and revenue growth.",
    skills: ["React.js", "Node.js", "MongoDB", "Stripe"],
    link: "https://vkallinmarketing.com/",
    github: "https://github.com/vishaljangid786/forever",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Vishal Portfolio",
    description:
      "Designed and built a responsive personal portfolio website showcasing projects, technical skills, and professional experience with smooth UI interactions.",
    skills: ["React.js", "Tailwind CSS", "Framer Motion"],
    link: "https://vishal-jangid-portfolio.netlify.app/",
    github: "https://github.com/vishaljangid786/macos-portfolio",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "iPhone 15 Pro Website Clone",
    description:
      "Created a visually rich Apple-inspired landing page using advanced animations, canvas effects, and smooth scrolling experiences.",
    skills: ["HTML", "CSS", "GSAP", "Locomotive Scroll"],
    link: "https://apple-ios-iphone15.netlify.app/",
    github: "https://github.com/vishaljangid786/iphone",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "3D T-Shirt Customizer",
    description:
      "Developed an interactive 3D product customization app allowing users to modify colors, textures, and designs in real-time.",
    skills: ["Three.js", "React Three Fiber", "Tailwind CSS"],
    link: "https://t-shirt-sell.netlify.app/",
    github: "https://github.com/vishaljangid786/t-shirt-sell",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Gaming Landing Page",
    description:
      "Designed a high-quality animated gaming website with modern UI, smooth transitions, and immersive visual effects.",
    skills: ["React.js", "GSAP", "CSS Animations"],
    link: "https://awwards.netlify.app/",
    github: "https://github.com/vishaljangid786/awwards_winnning",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Shopify Ecommerce App",
    description:
      "Built a modern eCommerce web application for browsing and purchasing clothing products with cart functionality and clean UI design.",
    skills: ["React.js", "Redux", "Firebase"],
    link: "https://shopify-purchase.netlify.app/",
  },
];
