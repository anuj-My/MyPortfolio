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
    title: "Gmail",
  },
  {
    id: 1,
    url: "https://twitter.com/anuj89806",
    icon: <FiTwitter />,
    title: "Twitter",
  },
  {
    id: 2,
    url: "https://github.com/anuj-My",
    icon: <FiGithub />,
    title: "Github",
  },
  {
    id: 3,
    url: "https://linkedin.com/in/anuj-my",
    icon: <FiLinkedin />,
    title: "Linkedin",
  },
  {
    id: 4,
    url: "https://codepen.io/anujmaurya-7",
    icon: <FaCodepen />,
    title: "Codepen",
  },
];

export const skillsData = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
    title: "HTML",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
    title: "CSS",
  },
  {
    image:
      "https://camo.githubusercontent.com/2512b49c89512f2ff3718f7257f48ed5c46a4e331abbd890b6c5e8c0e458434f/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67",
    title: "Bootstrap",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968358.png",
    title: "Sass",
  },
  {
    image:
      "https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png",
    title: "Javascript",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    title: "React",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:318/1*7jRD5QhgARucFKvRHFxpOg.png",
    title: "Styled Components",
  },
  {
    image:
      "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
    title: "Firebase",
  },
];
