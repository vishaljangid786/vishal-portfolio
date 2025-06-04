import {
  mobile,
  backend,
  creator,
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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  threejs,
  game,
  health,
  iphone,
  tshirt,
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
  {
    title: "Content Creator",
    icon: creator,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Portfolio Website",
    description:
      "A web-based application built using next js threejs interactive design framework for portfolio website",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "canvas",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/vishaljangid786/3d_portfolio",
    live: "https://vishaljangid-portfolio.netlify.app/",
  },
  {
    name: "Brainwave",
    description:
      "An AI-powered platform with a modern design that allows users to perform tasks efficiently and enhances workflow.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vishaljangid786/brainwave",
    live: "https://jsm-brainwave.com/",
  },
  {
    name: "Awwards Site",
    description:
      "A cutting-edge platform designed specifically for gamers, and purchase gaming products, accessories, and more.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/vishaljangid786/awwards_winnning",
    live: "https://awwards.netlify.app/",
  },
  {
    name: "Iphone 15 Pro Max",
    description:
      "A dedicated e-commerce site designed to give users an effortless experience in browsing iPhone 15 Pro Max compare models, and purchase with confidence.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://github.com/vishaljangid786/iphone",
    live: "https://apple-ios-iphone15.netlify.app/",
  },
  {
    name: "Health Care Services",
    description:
      "A dedicated web service that provides health information about your health and provides activities which is beneficiary and helpful ai experience too.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "chatbot",
        color: "pink-text-gradient",
      },
    ],
    image: health,
    source_code_link: "https://github.com/vishaljangid786/health-care",
    live: "https://healthcare-teamproject.netlify.app/",
  },
  {
    name: "Watch Store",
    description:
      "A Service where user can see luxury and premium watches suitable for men and women which are specially customized as per user.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "chatbot",
        color: "pink-text-gradient",
      },
    ],
    image: tshirt,
    source_code_link: "https://github.com/vishaljangid786/watch-store",
    live: "https://t-shirt-sell.netlify.app/",
  },
];

export const certificates = [
  {
    title: "Full Stack React E-commerce Project",
    organization: "Great Stack",
    image:
      "https://res.cloudinary.com/djvxynk2f/image/upload/v1748530480/certificate_cgvqxj.png",
    link: "https://res.cloudinary.com/djvxynk2f/image/upload/v1748530480/certificate_cgvqxj.png",
  },
  {
    title: "1st Position in Inter College Competition",
    organization: "Parishkar College of Global Excellence",
    image:
      "https://res.cloudinary.com/djvxynk2f/image/upload/v1748530504/Parishkar_college_inter_college_1st_position_fj9qoa.jpg",
    link: "https://res.cloudinary.com/djvxynk2f/image/upload/v1748530504/Parishkar_college_inter_college_1st_position_fj9qoa.jpg",
  },
  {
    title: "Spectra Hackathon 2024",
    organization: "Parishkar College of Global Excellence",
    image:
      "https://res.cloudinary.com/djvxynk2f/image/upload/v1748530498/2nd_position_spectra_o3czal.jpg",
    link: "https://res.cloudinary.com/djvxynk2f/image/upload/v1748530498/2nd_position_spectra_o3czal.jpg",
  },
  {
    title: "Techkshitij 2024 Hackathon",
    organization: "Kanoria P.G. Mahila Mahavidyalaya",
    image:
      "https://res.cloudinary.com/djvxynk2f/image/upload/v1748530619/Techshitiz_pxwcvz.jpg",
    link: "https://res.cloudinary.com/djvxynk2f/image/upload/v1748530619/Techshitiz_pxwcvz.jpg",
  },{
    title: "Mern Stack Development",
    organization: "30 dc",
    image:
      "https://res.cloudinary.com/djvxynk2f/image/upload/v1749006842/1724323663449-certificate_jwhwnt.jpg",
    link: "https://res.cloudinary.com/djvxynk2f/image/upload/v1749006842/1724323663449-certificate_jwhwnt.jpg",
  },
];



export { services, technologies, experiences, testimonials, projects };
