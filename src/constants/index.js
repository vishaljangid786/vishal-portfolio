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
  expo
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skill",
    title: "Key Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "certi",
    title: "Certificates",
  },
  {
    id: "feed",
    title: "Feedback",
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
    name: "Expo",
    icon: expo,
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

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 45, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Vishal. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Vishal was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Vishal was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vishal's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vishal is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Vishal was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Vishal’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Vishal was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
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

const certificates = [
  {
    title: "Full Stack E-commerce Project",
    organization: "Great Stack",
    image:
      "https://res.cloudinary.com/djvxynk2f/image/upload/v1748530480/certificate_cgvqxj.png",
    link: "https://res.cloudinary.com/djvxynk2f/image/upload/v1748530480/certificate_cgvqxj.png",
  },
  {
    title: "Inter College Competition",
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
  },
  {
    title: "Mern Stack Development",
    organization: "30 dc",
    image:
      "https://res.cloudinary.com/djvxynk2f/image/upload/v1749006842/1724323663449-certificate_jwhwnt.jpg",
    link: "https://res.cloudinary.com/djvxynk2f/image/upload/v1749006842/1724323663449-certificate_jwhwnt.jpg",
  },
];

export {
  certificates,
  logoIconsList,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  counterItems,
  navLinks,
};
