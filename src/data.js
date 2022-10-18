import pinImage from "./assets/pinterestI.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import redux from "./assets/redux.png";
import styledComponents from "./assets/styledcomponents.png";
import firebase from "./assets/firebase.png";
import { FaCodepen } from "react-icons/fa";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
export const navLinkList = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "about",
  },

  // {
  //   id: 3,
  //   title: "projects",
  //   url: "projects",
  // },

  // {
  //   id: 4,
  //   title: "contact",
  //   url: "contact",
  // },

  // {
  //   id: 4,
  //   title: "resume",
  //   url: "/",
  // },
];
export const techs = [
  {
    id: 1,
    title: "html",
  },

  {
    id: 2,
    title: "css",
  },

  {
    id: 3,
    title: "js",
  },

  {
    id: 4,
    title: "React",
  },

  {
    id: 5,
    title: "Redux",
  },

  {
    id: 6,
    title: "Styled components",
  },
];

export const projectInfo = [
  {
    id: 1,
    title: "Pinterest Clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae blanditiis eligendi architecto nesciunt et quos saepe.",
    imgUrl: pinImage,
    path: "project",
  },

  {
    id: 2,
    title: "Kings",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae blanditiis eligendi architecto nesciunt et quos saepe.",
    imgUrl:
      "https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/into-codin.jpg",
    path: "project",
  },

  {
    id: 3,
    title: "CodeWings",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae blanditiis eligendi architecto nesciunt et quos saepe.",
    imgUrl:
      "https://www.condecosoftware.com/blog/wp-content/uploads/sites/11/2020/03/The-history-of-coding-and-how-it-affects-the-workplace-878x500.jpg",
    path: "project",
  },
];

export const icons = {
  html,
  css,
  js,
  react,
  redux,
  styledComponents,
  firebase,
};

export const socialMediaDetails = [
  {
    id: 0,
    url: "mailto:anuj89806@gmail.com",
    icon: <SiGmail />,
  },
  {
    id: 1,
    url: "https://twitter.com/anuj89806",
    icon: <FiTwitter />,
  },
  {
    id: 2,
    url: "https://github.com/anuj-My",
    icon: <FiGithub />,
  },
  {
    id: 3,
    url: "https://linkedin.com/in/anuj-my",
    icon: <FiLinkedin />,
  },
  {
    id: 4,
    url: "https://codepen.io/anujmaurya-7",
    icon: <FaCodepen />,
  },
];
