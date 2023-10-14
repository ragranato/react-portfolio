import task from "../assets/task-manager.JPG";
import book from "../assets/bookfinder.JPG";
import { SiJavascript, SiSass, SiReact, SiHtml5 } from "react-icons/si";
import {TbApi} from "react-icons/tb"

export const projectList = [
  {
    name: "Task Manager",
    image: task,
    skills: [
      <SiJavascript className="skillIcon" title="JavaScript" />,
      <SiHtml5 className="skillIcon" title="HTML" />,
      <SiSass className="skillIcon" title="Sass CSS" />,
    ],
    deployed: "https://ragranato.github.io/task-manager/",
    gitHub: "https://github.com/ragranato/task-manager",
  },
  {
    name: "BookFinder",
    image: book,
    skills: [
      <SiReact className="skillIcon" title="ReactJS" />,
      <SiSass className="skillIcon" title="Sass CSS" />,
      <TbApi className="skillIcon" title="Google Books API" />,
    ],
    deployed: "https://ragranato.github.io/bookfinder/",
    gitHub: "https://github.com/ragranato/bookfinder",
  },
  
];
