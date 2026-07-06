import home from "../assets/images/cookcraft/home.png";
import login from "../assets/images/cookcraft/login.png";
import chat from "../assets/images/cookcraft/chat.png";
import recipe from "../assets/images/cookcraft/recipe.png";


import ecommerce from "../assets/images/ecommerce/ecom.png";

const projects = [
  {
    id: 1,

    title: "CookCraft AI",

    image: home,

    images: [
      {
        title: "Home",
        image: home,
      },
      {
        title: "Login",
        image: login,
      },
      {
        title: "AI Chat",
        image: chat,
      },
      {
        title: "Recipe Generator",
        image: recipe,
      },
    ],

    overview:
      "AI-powered recipe generation platform using Spring AI and React.",

    description:
      "CookCraft AI enables users to generate recipes through AI chat while providing secure authentication and a responsive user interface.",

    architecture: [
      "React + Vite Frontend",
      "Spring Boot REST API",
      "Spring AI Integration",
      "Spring Security",
      "JWT Authentication",
      "MySQL Database",
    ],

    features: [
      "Recipe Generation",
      "AI Chat",
      "JWT Login",
      "OAuth2 Login",
      "Markdown Rendering",
      "REST APIs",
      "Responsive UI",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Spring AI",
      "React",
      "Tailwind CSS",
      "JWT",
      "MySQL",
    ],

    githubFrontend:
      "https://github.com/Anuj214B4/CookCraft-AI-Frontend",

    githubBackend:
      "https://github.com/Anuj214B4/CookCraft-AI-Backend",

    live: "",
  },

  {
    id: 2,

    title: "E-Commerce Backend",

    image: ecommerce,

    images: [
      {
        title: "Backend API",
        image: ecommerce,
      },
    ],

    description:
      "Scalable e-commerce backend supporting authentication, product, cart, and order management using Spring Boot.",

    architecture: [
      "Spring Boot",
      "Spring Security",
      "JWT Authentication",
      "Hibernate/JPA",
      "MySQL",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "JPA",
      "MySQL",
    ],

    features: [
      "Authentication",
      "Role Based Authorization",
      "REST APIs",
      "Product Management",
      "Cart",
      "Orders",
    ],

    githubFrontend: "",

    githubBackend: "",

    live: "",
  },
];

export default projects;