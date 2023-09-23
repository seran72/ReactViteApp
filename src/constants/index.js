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
  Blogger,
  Kali,
  threejs,
  hackai,
  webdev,
  game,
  ubreak
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "blog",
    title: "Blog",
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "DevOps/Automation",
    icon: mobile,
  },
  {
    title: "Tier 3 Tech Support",
    icon: backend,
  },
  {
    title: "Content/Blog Writer",
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
    title: "Application Engineer",
    company_name: "Embedded Works",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Santa Clara, CA",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "IoT & telematics downstream data integration for real-time tracking and other use cases.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      // "Data packet analysis for various communication protocols, such as Wi-Fi, Bluetooth Low Energy (BLE), CAN, and other relevant standards.",
    ],
  },
  {
    title: "Technical Support Engineer[DevOps]",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Fremont, CA",
    points: [
      // "Tier 3 onsite and remote IT support",
      // "Python Automation",
      // "Conducted site visits and IT rack refreshments.",
      // "Created help sheets, and technical articles for systems at Tesla.",
    ],
  },
  {
    title: "Resident Advisor",
    company_name: "CSUS",
    icon: meta,
    iconBg: "#383E56",
    date: "Sacramento, CA",
    points: [
      // "Enforced College Living policies, promoting academic excellence, and safe space for students.",
      // "Created, marketed, and led student centered hall programs for social, education, and diversity goals.",
    
    ],
  },
  {
    title: "Apple Repair Technician",
    company_name: "Experimax",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "San Jose, CA",
    points: [
      // "Customer support",
      // "Diagnosed and resolved hardware software issues across range of devices including smartphones, tablets, wearables, computers and more.",
    ],
  },
  {
    title: "Electronic Repair Technician",
    company_name: "UbreakiFix",
    icon: ubreak,
    iconBg: "#E6DEDD",
    date: "San Jose, CA",
    points: [
      // "Customer support",
      // "Repair, install, and inspect electronic systems: TV, Phones, Laptops, Printers, and more."
    ],
  },
];

const testimonials = [
 
  
];

const projects = [
  {
    name: "Website Development",
    description:
      "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Springboot",
        color: "pink-text-gradient",
      },
    ],
    image: webdev,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI-based Network IDS",
    description:
    "",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "CNN & DNN",
        color: "pink-text-gradient",
      },
    ],
    image: hackai,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ethical Hacking: WiFi & Web App",
    description:
    "",
    tags: [
      {
        name: "Kali Linux",
        color: "blue-text-gradient",
      },
      {
        name: "nmap",
        color: "green-text-gradient",
      },
      {
        name: "Wifite",
        color: "green-text-gradient",
      },
      {
        name: "Burpsuit",
        color: "pink-text-gradient",
      },
    ],
    image: Kali,
    source_code_link: "https://github.com/",
  },
  
  {
    name: "Vendor Management Web App",
    description:
      "",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "PSQL",
        color: "green-text-gradient",
      },
      {
        name: "APIs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Java Game",
    description:
      "",
    tags: [
      {
        name: "OOP",
        color: "blue-text-gradient",
      },
      {
        name: "Data Structures",
        color: "green-text-gradient",
      },
      {
        name: "Algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/",
  },
  {
    name: "BLOG",
    description:
      "",
    tags: [
      {
        name: "Networking",
        color: "blue-text-gradient",
      },
      {
        name: "Software Engineering",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: Blogger,
    source_code_link: "https://cyberwbo.blogspot.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };
