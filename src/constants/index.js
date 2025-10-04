import { kwick, xircar, portfolio, verse } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  sass,
  tailwindcss,
  typescript,
  docker,
  laravel,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
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
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
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
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Frontend",
  },
  {
    imageUrl: laravel,
    name: "TypeScript",
    type: "Laravel",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Kwickswap",
    icon: react,
    iconBg: "#accbe1",
    date: "June 2025 - September 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: portfolio,
    theme: "btn-back-blue",
    name: "Portfolio website (Three JS)",
    description:
      "Developed an interactive 3D portfolio website using React, Tailwind, some Css, Three js and some other technologies.",
    link: "https://portfolio-v2-silk-delta.vercel.app",
    git: "https://github.com/Favourshaw/portfolio-v2",
  },
  {
    iconUrl: xircar,
    theme: "btn-back-green",
    name: "Website for Xircar",
    description:
      "A modern, high-performance website built with Next.js, Tailwind CSS, and Framer Motion, designed to deliver a seamless, responsive, and visually engaging user experience. It combines elegant UI design with smooth animations and optimized loading for a truly dynamic web presence.",
    link: "https://company-tatl.vercel.app/",
    git: "https://github.com/Favourshaw/portfolio-v2",
  },
  {
    iconUrl: kwick,
    theme: "btn-back-black",
    name: "Website for kwickswap",
    description:
      "A beautifully animated web experience built with React.js, Tailwind CSS, and Framer Motion. Every section comes to life with fluid motion and subtle visual effects, creating a balance between performance and creativity in a fully responsive design.",
    link: "https://crypto-proj.vercel.app/",
    git: "https://github.com/Favourshaw/portfolio-v2",
  },
  {
    iconUrl: verse,
    theme: "btn-back-grey",
    name: "Verse Consulting",
    description:
      "A simple one page website for Verse Consulting. The website is built with React, Tailwind CSS, and Framer Motion, and it features a clean and modern design with smooth animations.",
    link: "https://verseconsulting.xyz/",
    git: "https://github.com/Favourshaw/versegallery",
  },
];
