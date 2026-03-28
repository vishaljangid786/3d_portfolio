import {
  car,
  contact,
  estate,
  express,
  git,
  github,
  linkedin,
  mongodb,
  nodejs,
  pricewise,
  react,
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

import {
  chat1,
  chat2,
  chat3,
  fn1,
  fn2,
  fn3,
  ChatApp,
  FitnessApp,
  RealStateApp,
  real1,
  real2,
  real3,
  vjA1,
  vjA2,
  vjA3,
  vjA4,
  vjA5,
  vjA6,
  vjA7,
  vjA8,
  DrApp,
  vjApp,
  drA1,
  drA2,
  drA3,
  drA4,
  drA5,
  drA6,
  drA7,
  drA8,
  drA9,
  drA10,
  drA11,
  drA12,
} from "../assets/nativeprojects/assets";

import {
  brainwave1,
  brainwave2,
  brainwave3,
  brainwave4,
  dr1,
  dr2,
  dr3,
  dr4,
  dr5,
  dr6,
  dr7,
  dr8,
  drAd1,
  drAd2,
  drAd3,
  drAd4,
  drAd5,
  drAd6,
  drAd7,
  drAd8,
  game1,
  game2,
  game3,
  game4,
  iphone1,
  iphone2,
  iphone3,
  iphone4,
  korean1,
  korean2,
  korean3,
  korean4,
  lazarev1,
  lazarev2,
  lazarev3,
  lazarev4,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  seller1,
  seller2,
  seller3,
  significo1,
  significo2,
  significo3,
  significo4,
  vj1,
  vj2,
  vj3,
  vj4,
  ts1,
  ts2,
  ts3,
} from "../assets/webprojects";

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
  // 1. Doctor Appointment System200
  {
    iconUrl: snapgram,
    theme: "btn-back-purple",
    name: "Doctor Appointment System",
    description:
      "Full stack doctor appointment booking platform with admin panel and patient management system.",
    desc2: `
The Doctor Appointment System is a comprehensive web application designed to streamline the process of booking medical appointments while providing a secure and efficient platform for both patients and doctors. Patients can browse available doctors, view schedules, and book appointments in real-time, ensuring convenience and time efficiency. The platform allows users to maintain profiles, track medical history, and receive notifications for upcoming appointments for a seamless patient experience.

On the administrative side, the application features a robust admin dashboard to manage doctor availability, approve or reject appointments, and maintain organized patient records. Role-based access ensures sensitive patient data is only accessible to authorized personnel, adhering to high privacy and security standards.

Built with React.js for a responsive and interactive frontend, Node.js and Express handle server-side logic, and MongoDB efficiently manages data. Authentication is handled securely with encrypted credentials, and CRUD operations are optimized for speed and reliability. Advanced error handling and form validations ensure a smooth user experience.

The interface is fully responsive, working seamlessly across desktops, tablets, and mobile devices. Interactive UI elements, intuitive navigation, and visually appealing design contribute to an engaging experience. Real-time updates and dynamic data rendering enhance functionality, making it highly efficient. This system exemplifies modern full-stack development combining frontend interactivity, backend robustness, security, and performance while maintaining an elegant design.
    `,
    skills: ["React.js", "Node.js", "MongoDB"],
    link: "https://doctor-app-fawn.vercel.app/",
    github: "https://github.com/vishaljangid786/doctor-app",
    type: "web",
    images: [dr1, dr2, dr3, dr4, dr5, dr6, dr7, dr8],
    features: [
      "Doctor appointment booking",
      "Admin dashboard",
      "Patient management",
      "Secure authentication",
    ],
  },

  // 2. Doctor Admin Panel
  {
    iconUrl: snapgram,
    theme: "btn-back-purple",
    name: "Doctor Admin Panel",
    description:
      "Admin panel for managing doctor appointments and patient data.",
    desc2: `
The Doctor Admin Panel is a powerful web interface allowing administrators to efficiently manage appointments, doctor schedules, and patient records in real-time. Administrators can approve or reject bookings, monitor doctor availability, and maintain comprehensive patient history securely. Role-based authentication ensures data privacy and system integrity, restricting sensitive information to authorized users only.

Developed with React.js for a dynamic frontend and Node.js with Express for the backend, the system leverages MongoDB for reliable and scalable data storage. It incorporates secure login systems, robust form validations, and optimized CRUD operations, ensuring both security and performance.

The admin interface is fully responsive, offering smooth interactions across desktop, tablet, and mobile devices. Intuitive navigation, actionable dashboards, and real-time updates allow for effortless workflow management. Visual feedback, alerts, and interactive elements improve usability and help administrators manage complex scheduling and patient data efficiently.

Overall, the Doctor Admin Panel demonstrates a modern full-stack solution integrating security, performance, and usability for healthcare administration. It is designed to provide complete control over appointments and patient management while maintaining an elegant and professional interface.
    `,
    skills: ["React.js", "Node.js", "MongoDB"],
    link: "https://doctor-app-admin-nu.vercel.app/",
    github: "https://github.com/vishaljangid786/doctor-app",
    type: "web",
    images: [drAd1, drAd2, drAd3, drAd4, drAd5, drAd6, drAd7, drAd8],
    features: [
      "Doctor appointment management",
      "Admin dashboard",
      "Patient data tracking",
      "Secure authentication",
    ],
  },

  // 3. Vk Marketing
  {
    iconUrl: vj1,
    theme: "btn-back-pink",
    name: "Vk Marketing",
    description: "Marketing platform connecting customers and sellers.",
    desc2: `
Vk Marketing is a comprehensive marketing platform designed to bridge the gap between customers and sellers by enabling targeted promotions, lead generation, and revenue tracking. Users can create campaigns, manage product listings, track analytics, and interact with potential customers, creating a complete digital marketing ecosystem.

Built with React.js for frontend interactivity, Node.js and Express for server-side logic, and MongoDB for database management, the platform offers a responsive design that adapts to desktop, tablet, and mobile devices. Payment integration is achieved using Stripe, allowing secure and smooth transactions for paid promotions or premium services.

The application emphasizes user experience with an intuitive dashboard, clear navigation, and actionable insights. Admins can monitor campaigns, analyze metrics, and make informed decisions to optimize marketing efforts. Interactive charts and real-time updates provide valuable insights for users.

Security and data integrity are prioritized through encrypted authentication and robust data validation. The platform also implements performance optimizations, ensuring fast loading times even when handling large datasets. Overall, Vk Marketing is a full-featured marketing solution combining technology, user experience, and business utility for both small businesses and large enterprises.
    `,
    skills: ["React.js", "Node.js", "MongoDB", "Stripe"],
    link: "https://forever-mtbe.vercel.app/",
    github: "https://github.com/vishaljangid786/forever",
    type: "web",
    images: [vj1, vj2, vj3, vj4, seller1, seller2, seller3],
    features: [
      "Responsive design",
      "Authentication system",
      "Stripe payments",
      "Admin dashboard",
      "SEO optimized",
    ],
  },

  // 4. iPhone 15 Pro Website Clone
  {
    iconUrl: iphone1,
    theme: "btn-back-green",
    name: "iPhone 15 Pro Website Clone",
    description: "Apple-inspired landing page with advanced animations.",
    desc2: `
This iPhone 15 Pro Website Clone is a visually rich landing page inspired by Apple’s official website. Designed for an immersive user experience, the page incorporates smooth scrolling, animated transitions, and interactive canvas-based elements. Users can explore the product’s features, design details, and specifications through a responsive and dynamic interface.

Technologies used include HTML, CSS, and advanced JavaScript with GSAP animations for smooth effects, and Locomotive Scroll to achieve seamless scrolling experiences. The page layout is fully responsive, ensuring compatibility with desktops, tablets, and mobile devices. Interactive UI components, hover effects, and visual cues enhance engagement.

Performance optimizations, including lazy loading and optimized image handling, guarantee fast loading times without compromising the visual richness. The clone serves as a demonstration of front-end engineering capabilities, combining aesthetic design with technical implementation to closely mimic Apple’s premium landing page experience.
    `,
    skills: ["HTML", "CSS", "GSAP", "Locomotive Scroll"],
    link: "https://apple-ios-iphone15.netlify.app/",
    github: "https://github.com/vishaljangid786/iphone",
    type: "web",
    images: [iphone1, iphone2, iphone3, iphone4],
    features: [
      "Apple style landing page",
      "GSAP animations",
      "Smooth scrolling",
      "Interactive sections",
    ],
  },

  // 5. Vishal Portfolio
  {
    iconUrl: portfolio1,
    theme: "btn-back-red",
    name: "Vishal Portfolio",
    description: "Personal portfolio showcasing projects and skills.",
    desc2: `
Vishal Portfolio is a responsive and interactive personal website that highlights professional projects, skills, and achievements. Built using React.js for dynamic front-end interactivity, Tailwind CSS for modern styling, and Framer Motion for smooth animations, the site is optimized for desktop, tablet, and mobile devices.

The portfolio includes interactive project galleries, skill sections, and detailed experience displays, providing visitors with clear insight into professional expertise. Animations and transitions are carefully implemented to enhance user experience without compromising performance. Optimized images, responsive layouts, and fast-loading pages ensure seamless navigation.

Accessibility and usability are considered throughout, with clear typography, structured content, and intuitive navigation menus. The portfolio effectively demonstrates frontend engineering skills while maintaining aesthetic appeal and functional clarity.
    `,
    skills: ["React.js", "Tailwind CSS", "Framer Motion"],
    link: "https://vishal-jangid-portfolio.netlify.app/",
    github: "https://github.com/vishaljangid786/macos-portfolio",
    type: "web",
    images: [portfolio1, portfolio2, portfolio3, portfolio4],
    features: [
      "Modern UI",
      "Smooth animations",
      "Responsive design",
      "Project showcase",
    ],
  },

  // 6. 3D T-Shirt Customizer
  {
    iconUrl: ts1,
    theme: "btn-back-black",
    name: "3D T-Shirt Customizer",
    description: "Interactive 3D product customization web app.",
    desc2: `
The 3D T-Shirt Customizer is an interactive web application that allows users to modify T-shirt designs in real-time. Using Three.js and React Three Fiber, the application renders 3D models of clothing products where users can change colors, textures, and patterns with instant visual feedback.

The platform integrates responsive UI controls built with Tailwind CSS, providing an intuitive and user-friendly experience. Users can rotate, zoom, and manipulate the 3D models interactively, ensuring precise customization. Performance optimizations such as efficient geometry and texture handling ensure smooth rendering even on lower-end devices.

The application also includes functionality for previewing multiple variations, saving configurations, and exporting designs. Animations are added for transitions and interactions, enhancing engagement. Overall, this project demonstrates the integration of modern 3D graphics in a web application while maintaining responsive design and high performance.
    `,
    skills: ["Three.js", "React Three Fiber", "Tailwind CSS"],
    link: "https://t-shirt-sell.netlify.app/",
    github: "https://github.com/vishaljangid786/t-shirt-sell",
    type: "web",
    images: [ts1, ts2, ts3],
    features: [
      "Real-time 3D customization",
      "Interactive UI controls",
      "Dynamic texture editing",
      "Fast rendering",
      "Responsive design",
    ],
  },

  // 7. Gaming Landing Page
  {
    iconUrl: game1,
    theme: "btn-back-yellow",
    name: "Gaming Landing Page",
    description: "High-quality animated gaming website.",
    desc2: `
The Gaming Landing Page is a modern website designed to showcase interactive and visually engaging content for gaming projects. Built using React.js and GSAP for animation, the platform incorporates smooth transitions, interactive sections, and high-quality visual elements. CSS animations complement the JS effects to enhance engagement.

The website is fully responsive, providing consistent performance across desktops, tablets, and mobile devices. Users can explore game features, screenshots, and interactive demos in an immersive environment. Optimized rendering ensures smooth animation without lag, and lazy loading techniques improve loading speed for assets.

This project demonstrates proficiency in front-end development, animation techniques, and creating interactive user interfaces, blending visual appeal with functional navigation.
    `,
    skills: ["React.js", "GSAP", "CSS Animations"],
    link: "https://awwards.netlify.app/",
    github: "https://github.com/vishaljangid786/awwards_winnning",
    type: "web",
    images: [game1, game2, game3, game4],
    features: [
      "Advanced GSAP animations",
      "Interactive landing sections",
      "High quality visual design",
      "Responsive layout",
      "Smooth transitions",
    ],
  },

  // 8. Significo app
  {
    iconUrl: significo1,
    theme: "btn-back-blue",
    name: "Significo App",
    description: "Modern eCommerce web application for products.",
    desc2: `
Significo is a modern eCommerce platform that allows users to browse and purchase clothing products efficiently. Built with React.js and Redux for state management, along with Firebase for backend support, the platform offers real-time updates, secure authentication, and smooth shopping cart functionality.

The UI is designed for responsiveness and easy navigation across all devices. Users can filter products, add items to the cart, and complete secure checkouts. Admin functionality can manage inventory and track sales performance. Animations and transitions improve user experience while maintaining fast page loads and performance optimizations.

Significo demonstrates an effective combination of frontend and backend technologies, UX-focused design, and real-time interaction for a complete eCommerce experience.
    `,
    skills: ["React.js", "Redux", "Firebase"],
    link: "https://signigico-project.netlify.app/",
    github: "https://github.com/vishaljangid786/significo",
    type: "web",
    images: [significo1, significo2, significo3, significo4],
    features: [
      "Product browsing system",
      "Shopping cart functionality",
      "Redux state management",
      "Firebase backend integration",
      "Responsive ecommerce UI",
    ],
  },

  // 9. Brainwave AI Platform
  {
    iconUrl: brainwave1,
    theme: "btn-back-cyan",
    name: "Brainwave AI Platform",
    description: "AI-powered SaaS landing page with features & pricing.",
    desc2: `
Brainwave AI Platform is a modern SaaS web application designed to showcase AI-powered tools, pricing plans, and advanced product features. Built using React.js, Tailwind CSS, GSAP, and Framer Motion, it offers dynamic animations, responsive layouts, and interactive sections for an engaging user experience.

The platform demonstrates AI integrations, including predictive analytics, content suggestions, and interactive AI modules. Users can explore features, review pricing plans, and experience animations and transitions for various UI elements. Responsive design ensures seamless interaction across desktops, tablets, and mobile devices. Performance optimization, lazy loading, and smooth animations maintain a high-quality experience.

Brainwave demonstrates full-stack design principles, combining advanced frontend interactions with a modern SaaS presentation, making it suitable as a marketing and product showcase platform.
    `,
    skills: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    link: "https://brainwave-ai-gen.netlify.app/",
    github: "https://github.com/vishaljangid786/brainwave",
    type: "web",
    images: [brainwave1, brainwave2, brainwave3, brainwave4],
    features: [
      "AI product showcase sections",
      "Pricing plans and subscription UI",
      "Modern SaaS design layout",
      "Smooth UI animations",
      "Fully responsive landing page",
    ],
  },

  // 10. Korean Canvas Animation Website
  {
    iconUrl: korean1,
    theme: "btn-back-teal",
    name: "Korean Canvas Animation Website",
    description: "Interactive website with 300+ canvas elements on scroll.",
    desc2: `
The Korean Canvas Animation Website is an experimental web project designed to render over 300 canvas elements in real-time while scrolling, creating a cinematic and immersive visual experience. Built using JavaScript, GSAP, and Scroll Animations, the website demonstrates advanced frame rendering techniques optimized for performance.

Users can scroll through dynamic sequences, observing animations that react to scroll position and interactions. The project explores efficient canvas rendering, memory management, and frame optimization for smooth playback across devices.

The interface is responsive, ensuring consistent visual storytelling across desktops, tablets, and mobile screens. Advanced JavaScript techniques handle canvas manipulation, while GSAP provides smooth animations. This project showcases high-level front-end engineering, combining performance optimization, animation frameworks, and real-time graphics processing for a unique interactive experience.
    `,
    skills: ["JavaScript", "Canvas API", "GSAP", "Scroll Animations"],
    link: "https://korean-boy.netlify.app/",
    type: "web",
    images: [korean1, korean2, korean3, korean4],
    features: [
      "300+ real-time canvas animations",
      "Scroll-based frame rendering",
      "High performance animation system",
      "Advanced JS canvas manipulation",
      "Interactive cinematic web experience",
    ],
  },

  // 11. Lazarev Agency Clone
  {
    iconUrl: lazarev1,
    theme: "btn-back-orange",
    name: "Lazarev Agency Clone",
    description: "Animated agency website with GSAP and modern frameworks.",
    desc2: `
The Lazarev Agency Clone is a high-end animated website inspired by Lazarev, designed to showcase agency projects with immersive storytelling. Built using HTML, CSS, JavaScript, GSAP, and Locomotive Scroll, the website features smooth scroll interactions, responsive design, and interactive sections for portfolio presentation.

The project focuses on performance optimization, seamless animations, and user engagement. Interactive visual elements highlight projects and client work, while the UI framework ensures a modern, professional, and polished design. Responsiveness guarantees consistent experiences across desktop, tablet, and mobile devices.

This clone demonstrates advanced front-end engineering, including scroll-based animations, dynamic content transitions, and creative layout techniques, making it a visually compelling platform to showcase agency capabilities and design expertise.
    `,
    skills: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll"],
    link: "https://my-lazarev.netlify.app/",
    type: "web",
    images: [lazarev1, lazarev2, lazarev3, lazarev4],
    features: [
      "Advanced GSAP animations",
      "Smooth scroll interactions",
      "Modern agency style UI",
      "High performance animation rendering",
      "Interactive visual storytelling sections",
    ],
  },
];

export const nativeProjects = [
  // 4. Doctor Appointment App
  {
    image: DrApp,
    theme: "btn-back-purple",
    title: "Doctor Appointment App",
    description:
      "Mobile app for patients, doctors, and admin to manage appointments, profiles, and payments.",
    desc2: `
The Doctor Appointment App is a full-featured mobile platform where patients, doctors, and administrators can all log in with secure accounts. Patients can browse available doctors, book appointments, make online payments, and view appointment history. Doctors can manage their schedules, view appointments, and update availability. Admins have full control to manage users, appointments, and transactions.

Developed with React Native for cross-platform mobile functionality, Node.js for backend logic, and Firebase for authentication and real-time data management, the app provides secure handling of sensitive medical and user data. The interface is optimized for mobile devices, featuring intuitive navigation, profile editing for all user types, and notifications for appointment updates. 

The app also supports online payment integration and dynamic appointment tracking. Users can receive reminders, cancel or reschedule appointments, and doctors/admins can monitor all scheduled sessions efficiently. This system emphasizes security, usability, and seamless interaction for all stakeholders in a healthcare environment.
    `,
    skills: ["React Native", "Node.js", "Firebase", "Stripe"],
    github: "https://github.com/vishaljangid786/doctor-app",
    type: "native",
    images: [
      drA1,
      drA2,
      drA3,
      drA4,
      drA5,
      drA6,
      drA7,
      drA8,
      drA9,
      drA10,
      drA11,
      drA12,
    ],
    features: [
      "Patient, doctor, and admin login",
      "Profile management for all users",
      "Book, track, and manage appointments",
      "Online payments",
      "Notifications and appointment reminders",
    ],
  },

  // 5. Vk Marketing App
  {
    image: vjApp,
    theme: "btn-back-pink",
    title: "Vk Marketing App",
    description:
      "E-commerce mobile app for users to manage orders, profile, and shopping cart.",
    desc2: `
Vk Marketing App is a mobile platform where users can sign up or log in to view products, place orders, and manage their shopping cart. Users can track their order history, edit profiles, and purchase items directly through the app. Admins can manage products and monitor orders.

Built using React Native for mobile compatibility, Firebase for authentication and data storage, and Stripe or other payment integration for secure transactions, the app provides a seamless shopping experience. Users can browse products, add items to their cart, edit or remove them, and complete secure checkouts. Profile management allows users to update personal information and settings. 

The interface is fully responsive and optimized for mobile devices, providing smooth navigation, interactive product listings, and real-time order tracking.
    `,
    skills: ["React Native", "MongoDb", "Expo", "Razorpay"],
    github: "https://github.com/vishaljangid786/forever",
    type: "native",
    images: [vjA1, vjA2, vjA3, vjA4, vjA5, vjA6, vjA7, vjA8],
    features: [
      "User login and signup",
      "Profile management",
      "Product browsing and cart system",
      "Order placement and tracking",
      "Secure payment integration",
    ],
  }, // 1. React Native Chat App
  {
    image: ChatApp,
    theme: "btn-back-purple",
    title: "React Native Chat App",
    description:
      "WhatsApp-like chat application with real-time messaging, groups, and media sharing.",
    desc2: `
The React Native Chat App is a comprehensive mobile messaging platform designed for seamless real-time communication. Users can chat with friends individually or in groups, share media such as photos, videos, and documents, and edit their profiles including profile pictures. Each user has a unique handle, which can be set to private or public for added privacy control. 

Built with React Native for cross-platform mobile support and Socket.io for real-time data synchronization, the app ensures instant message delivery and online presence tracking. Node.js handles backend logic, ensuring efficient handling of messages, groups, and user authentication. Firebase or a similar database manages user data and media storage securely. 

The app provides a responsive and intuitive UI optimized for mobile devices. Features include profile management, private and public account settings, group creation, media sharing, and live online status. The application emphasizes usability, privacy, and performance, offering a polished and fully functional mobile chat experience comparable to popular messaging apps.
    `,
    skills: ["React Native", "Socket.io", "Node.js", "Firebase"],

    github: "https://github.com/vishaljangid786/whats-app-chat-app-frontend",
    type: "native",
    images: [chat1, chat2, chat3],
    features: [
      "Real-time messaging",
      "Group chats",
      "Media sharing",
      "Profile management with images",
      "Private and public account settings",
    ],
  },

  // 2. React Native Fitness App
  {
    image: FitnessApp,
    theme: "btn-back-green",
    title: "React Native Fitness App",
    description:
      "Fitness tracker app with Google/email login, exercise logging, and daily progress tracking.",
    desc2: `
The React Native Fitness App is a full-featured mobile application that allows users to manage their fitness routines efficiently. Users can log in using Google or email/password, create personalized accounts, and track their daily workouts. The app enables the creation of exercises with customizable reps, sets, and weights, allowing users to save and manage their routines. Users can monitor progress over time, track historical records, and receive insights to improve their fitness performance. 

Developed using React Native for smooth cross-platform mobile experiences and Firebase for secure authentication, data storage, and real-time updates, the app ensures that users’ progress and exercise data are consistently synchronized. The interface is highly responsive and intuitive, with features like adding new exercises, logging sets/reps, visual progress charts, and editing routines. 

This app emphasizes usability, personalization, and comprehensive tracking, making it ideal for individuals looking to efficiently manage their fitness journey on mobile devices.
    `,
    skills: ["React Native", "Firebase", "Expo"],
    github: "https://github.com/vishaljangid786/my-fitness",
    type: "native",
    images: [fn1, fn2, fn3],
    features: [
      "Google/email login",
      "Workout logging with reps, sets, and weights",
      "Track and manage daily routines",
      "Create and edit exercises",
      "Progress tracking over time",
    ],
  },

  // 3. Real Estate App
  {
    image: RealStateApp,
    theme: "btn-back-blue",
    title: "Real Estate App",
    description:
      "Property browsing and rental/purchase app with Google login and secure transactions.",
    desc2: `
The Real Estate App is a mobile platform designed for browsing, purchasing, and renting properties. Users can log in with Google for quick authentication, explore property listings, view details including images and descriptions, and save favorites for later reference. The app allows users to initiate purchases or rental agreements directly within the application. 

Built using React Native for a seamless cross-platform mobile experience and Firebase for authentication and database management, the app ensures secure handling of user data and property transactions. Users can filter properties by type, location, price, or availability, making it easy to find suitable options. Notifications alert users to new listings or updates on saved properties. 

The interface is intuitive and responsive, offering smooth navigation and interactive UI components. The application focuses on user convenience, data security, and performance, providing a complete mobile solution for property buyers, renters, and sellers.
    `,
    skills: ["React Native", "Firebase", "Expo"],
    github: "https://github.com/vishaljangid786/real-state",
    type: "native",
    images: [real1, real2, real3],
    features: [
      "Google login authentication",
      "Browse and filter properties",
      "Purchase or rent properties",
      "Save favorites",
      "Responsive and secure mobile UI",
    ],
  },
];
