const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Certifications", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Education", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const certifications = [
  {
    id: 1,
    title: "Microsoft Certified: Azure Developer Associate",
    image: "/images/associate.svg",
    link: "https://learn.microsoft.com/en-us/users/wagnerbolfe/credentials/certification/azure-developer?tab=credentials-tab",
  },
  {
    id: 2,
    title: "Microsoft Certified: Azure AI Engineer Associate",
    image: "/images/associate.svg",
    link: "https://learn.microsoft.com/en-us/users/wagnerbolfe/credentials/certification/azure-ai-engineer?tab=credentials-tab",
  },
  {
    id: 3,
    title: "Microsoft Certified: DevOps Engineer Expert",
    image: "/images/expert.svg",
    link: "https://learn.microsoft.com/en-us/users/wagnerbolfe/credentials/certification/devops-engineer?tab=credentials-tab",
  },
  {
    id: 4,
    title: "AWS Cloud Practitioner",
    image: "/images/aws.png",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/79808213424f4ff880254e79e9ea4846",
  },
];

const studies = [
  {
    id: 1,
    title: "Multimedia Production / Associate Degree",
    school: "FTEC",
    date: "2012 - 2017"
  },
  {
    id: 2,
    title: "Computer Science/ Bachelor's Degree",
    school: "FSG",
    date: "2019 - 2024"
  },
  {
    id: 3,
    title: "Advanced Development in Go / Postgraduate",
    school: "FullCycle",
    date: "2025 - 2026"
  }
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: [".NET", "Go"],
  },
  {
    category: "Database",
    items: ["SQLServer", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/wagnerbolfe",
  },
  {
    id: 2,
    text: "Website",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://wagnerbolfe.dev/",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/wagnerbolfe",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  certifications,
  studies,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Dev Flowner",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[10vh] right-60", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Dev Flowner Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Dev Flowner is a modern Stack Overflow clone.",
            "A recommendation system for posts (no one teaches this)",
            "Global database data-fetching",
            "AI generated answers to questions & so much more",
          ],
        },
        {
          id: 2,
          name: "Dev Flowner",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://dev-flowner.vercel.app/",
          position: "top-10 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Boardner",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[35vh] right-70",
      children: [
        {
          id: 1,
          name: "Boardner Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Boardner Miro clone - A collaborative, real-time whiteboard. ",
            "Packed with features such as real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing.",
          ],
        },
        {
          id: 2,
          name: "Boardner",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://boardner.vercel.app/",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Codener",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[60vh] right-90",
      children: [
        {
          id: 1,
          name: "Codener Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Codener is a online code editor and compiler supporting multiple programming languages.",
            "Features include syntax highlighting.",
            "At this moment it only Javascript it`s free",
          ],
        },
        {
          id: 2,
          name: "Codener",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://codener.vercel.app/",
          position: "top-10 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/wagner.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/wagner.jpg",
      description: [
        "Hey! I’m Wagner 👋, a software developer who enjoys building sleek, interactive websites that actually work well.",
        "I working with React, .NET and I love making things feel smooth, fast, and just a little bit delightful.",
        "Outside of dev work, you'll find me studying!",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
