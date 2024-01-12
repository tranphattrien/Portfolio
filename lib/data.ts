import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import agristoreImg from "@/assets/images/agri_store.jpg";
import recipeAppImg from "@/assets/images/recipe-app.png";
import todoAppImg from "@/assets/images/todoApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "About",
    hash: "#about"
  },
  {
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Skills",
    hash: "#skills"
  },
  {
    name: "Experience",
    hash: "#experience"
  },
  {
    name: "Contact",
    hash: "#contact"
  }
] as const;

export const projectsData = [
  {
    title: "Agri Store",
    description:
      "Agricultural e-commerce website, providing an effective platform for farmers and consumers to trade agricultural products and related services.",
    tags: ["React", "Redux", "Tailwind CSS", "Socket.IO"],
    imageUrl: agristoreImg,
    source: "https://github.com/tranphattrien/AgriStore",
    live: ""
  },
  {
    title: "Todo App",
    description:
      "The Todo App project was built with Reactjs and local storage for data storage. The app allows users to create and manage their to-do lists, which are saved on their web browser using local storage. The main features of the app include creating, modifying, and deleting tasks.",
    tags: ["React"],
    imageUrl: todoAppImg,
    source: "https://github.com/tranphattrien/Todo_App",
    live: "https://todo-app-tranphattrien.netlify.app"
  },
  {
    title: "Recipe App",
    description:
      "Recipe App is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. The user can search for a specific recipe and save it to a favorites list via local storage. The user can easily increase or decrease servings as needed and can view detailed directions.",
    tags: ["HTML", "CSS", "SCSS", "Javascript"],
    imageUrl: recipeAppImg,
    source: "https://github.com/tranphattrien/Recipe_App",
    live: "https://recipe-app-tranphattrien.netlify.app"
  }
] as const;
