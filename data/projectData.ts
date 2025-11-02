export const categories = ["ALL", "FULLSTACK", "MERN", "ASP-DOTNET-CORE",];

export const projectItems = [
    {
    id: 1,
    title: "LinkDeen: A Spiritual Social Network",
    categories: ["FULLSTACK", "MERN"],
    stackSummary: "React, TypeScript, Node.js, Express, MongoDB, TailwindCSS, Zod, JWT, React Query",
    liveLink: "https://link-deen.vercel.app/",
    githubLink: "https://github.com/sumiya-yasmin/link-deen",
    image: "/linkdeencover.png",
    imagecover: "/linkdeencover.png",

    descriptionOverview:
      "LinkDeen is a full-stack **MERN application** focused on community engagement and dynamic content sharing within the spirituality niche. It delivers a modern social media experience complete with personalized feeds, user connections, and full CRUD functionality for text and image-based posts. The application's core strength lies in its **secure, scalable architecture** designed for high user interaction and a unified user experience using **TypeScript** across the stack.",

    coreFeatures: [
      "Secure user signup and login with email/password and **persistent sessions**.",
      "**Full CRUD Operations** for text and image-based posts.",
      "**Follow/Unfollow system** to build a personalized social graph.",
      "Profile management with image upload integrated via **Cloudinary**.",
      "Liking and commenting functionalities with **instant UI feedback**.",
      "Responsive design built with **Tailwind CSS v4** and **shadcn/ui**.",
    ],

    keyImplementations: [
      "Engineered secure, persistent session management using **JWT tokens** stored in **HttpOnly cookies** to mitigate XSS risks.",
      "Implemented **React Query** for server state management, enabling efficient **cache invalidation** after mutations (like/comment) to update the feed instantly and simulate real-time effects.",
      "Utilized **Zod validation** across the Node.js/Express backend to ensure strict data integrity and type-safe API interactions.",
      "Optimized data fetching and rendering through **React Query** and managed media storage efficiently via **Cloudinary**.",
    ],
  },
  
  {
    id: 2,
    title: "Inventory Management System",
    categories: ["FULLSTACK", "ASP-DOTNET-CORE"],
    stackSummary: "ASP.NET Core MVC, C#, SQL Server, Entity Framework, Bootstrap",
    liveLink: "https://github.com/sumiya-yasmin/inventory-app", 
    githubLink: "https://github.com/sumiya-yasmin/inventory-app",
    image: "/inventoryapp.png", 

    descriptionOverview:
      "InventoryApp is a robust management system built on the **ASP.NET Core MVC** framework and **C#**. The application is designed to streamline business operations by managing product records, tracking stock levels, and automating sales record keeping. It utilizes a **relational database (SQL Server)** with **Entity Framework** for object-relational mapping.",

    coreFeatures: [
      "**Full CRUD Operations** for core business entities (products, suppliers, categories).",
      "Integrated system for tracking and managing **automatic stock levels** based on sales and restocking records.",
      "Secure user login and **view-level access control**.",
      "Dynamic and user-friendly interface powered by **Razor Views** and **Bootstrap**.",
    ],

    keyImplementations: [
      "Engineered the application to strictly follow the **ASP.NET Core MVC pattern**, isolating business logic in the Controllers and using **Razor Views** for dynamic presentation.",
      "Utilized **Entity Framework** for ORM with **SQL Server**, simplifying complex queries and implementing the **repository pattern** for decoupled data access.",
      "Developed robust **CRUD endpoints** with server-side validation to ensure data integrity across all inventory records.",
      "Established proper **routing conventions** and static file serving via the `wwwroot` directory to optimize asset delivery.",
    ],
  },
  {
    id: 3,
    title: "Open-Source Contribution: Appointment Booking System",
    categories: ["FULLSTACK", "MERN"],
    stackSummary: "Node.js, Express, MongoDB, React Query, API Integration",
    liveLink: "#", 
    githubLink: "https://github.com/bongodev/appointment-booking",
    image: "/appointmentbooking.png", 

    descriptionOverview:
      "This project involved a targeted open-source contribution to an established community **Appointment Booking System**. My primary focus was on solidifying the application's **backend security and user infrastructure**, specifically strengthening the **authentication workflow**, profile management, and ensuring proper **access control** using an integrated API.",
    
    coreFeatures: [
      "Enabled core user profile management (CRUD) within the backend API.",
      "Integrated profile fetching and the **`getCurrentUser` endpoint** for frontend state management.",
      "Implemented **Role-Based Access Control (RBAC)** to secure routes and resources based on user permissions.",
      "Configured the application to manage global user state using **React Query** for caching efficiency.",
    ],

    keyImplementations: [
      "Developed and integrated the foundational **Current User API** endpoint, centralizing user data retrieval for use across the application's frontend.",
      "Contributed to integrating and configuring the **Role-Based Access Control (RBAC)** system, ensuring secure and restricted access to administrative functionalities.",
      "Strengthened the existing authentication service by defining clear middleware and integrating user profile fetching logic.",
      "Focused contributions on API design, ensuring adherence to the project's codebase standards and modular architecture.",
    ],
  },
    // { 
    //     id: 4, 
    //     image: "/item2.png",
    //     title: "Appointment Booking App", 
    //     categories: ["FULLSTACK", "WEB-APP", "MERN"], 
    //     liveLink: "https://github.com/bongodev/appointment-booking",
    //     githubLink: "https://github.com/bongodev/appointment-booking"
    // },
];