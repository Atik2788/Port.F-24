export const projects = [
  {
    id: 1,
    name: "Parcel Delivery Service",
    images: [
      {
        src: "https://i.ibb.co.com/9kScB9bv/01.png",
        info1: "A Node.js, Express, TypeScript, and MongoDB based backend system for managing parcel delivery operations. It includes role-based access control for Senders, Receivers, Admins, and Super Admins with JWT and Google OAuth2 authentication.",
      },
      {
        src: "https://i.ibb.co.com/DHXr2Ss0/02.png",
        info1: "It includes role-based access control for Senders, Receivers, Admins, and Super Admins with JWT and Google OAuth2 authentication.",
        
      },
      {
        src: "https://i.ibb.co.com/LXZKCh0D/03.png",
        info1: "The system supports parcel creation, tracking, and management with pagination, filtering, and Zod validation for secure and efficient data handling.",
      }
    ],
    git: "https://github.com/Atik2788/parcel-delivery-api",
    liveSite: "https://parcel-delivery-api-a9en.onrender.com/",
    techStack: [ "Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "JWT", "Google OAuth2", "Zod", "Bcrypt.js" ]
  },
  {
    id: 2,
    name: "Library Management System",
    images: [
      {
        src: "https://i.ibb.co.com/Kpqg8zS7/01.png",
        info1: "A full-stack MERN application for managing books and borrow records.",
      },
      {
        src: "https://i.ibb.co.com/DHMPzFx3/02.png",
        info1: "Users can create profiles to add, edit, delete, and borrow books with real-time updates and validation.",
      },
      {
        src: "https://i.ibb.co.com/ksqq10rr/03.png",
        info1: "Includes responsive UI, auto stock updates, and aggregated borrow summaries for efficient management.",
      }
    ],
    git: "https://github.com/Atik2788/assi4-LibraryManagementFrontend",
    liveSite: "https://assi4-library-management-frontend.vercel.app/",
    "techStack": ["React","Redux Toolkit","TypeScript","React Router", "Tailwind CSS","DaisyUI","Sonner","Vite", "ESLint","Node.js","Express.js","MongoDB","Mongoose"]
  },
  {
    id: 3,
    name: "YouChatt",
    images: [
      {
        src: "https://i.ibb.co.com/WvvW9K2g/01.png",
        info1: "A full-stack MERN real-time chat application.",
      },
      {
        src: "https://i.ibb.co.com/gFtqHWf8/02.png",
        info1: "Users can create accounts, send/receive instant messages, share images, and track online/offline status in real time.",
      },
      {
        src: "https://i.ibb.co.com/d4vdZN6Z/03.png",
        info1: "Includes responsive UI, real-time updates via Socket.IO, profile picture uploads, and persistent message history.",
      }
    ],
    git: "https://github.com/Atik2788/CHAT-APP",
    liveSite: "https://chat-app-q681.onrender.com/",
    techStack: ["React","Zustand","React Router","Tailwind CSS","DaisyUI","React Hot Toast","Vite","Node.js","Express.js","MongoDB","Mongoose","Socket.IO","JWT","Cloudinary" ]
  },
];
