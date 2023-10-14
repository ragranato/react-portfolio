import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
import GitHubIcon from "@mui/icons-material/GitHub";
import {CgWebsite} from 'react-icons/cg'
import '../styles/ProjectDisplay.scss'

function ProjectDisplay() {    
    const { id } = useParams()
    const project = projectList[id]
    
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <div className="projectSkills">
        <h2>Skills:</h2> {project.skills}
      </div>
      <div className="projectLinks">
        <a href={project.deployed} target="_blank" title='Visit Site'>
          <CgWebsite />
        </a>
        <a href={project.gitHub} target="_blank" title='GitHub Repository'>
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay