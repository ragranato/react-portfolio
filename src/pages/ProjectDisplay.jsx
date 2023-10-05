import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
import GitHubIcon from "@mui/icons-material/GitHub";
import '../styles/ProjectDisplay.scss'

function ProjectDisplay() {
    const { id } = useParams()
    const project = projectList[id]
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <span>Skills:</span> {project.skills}
      </p>
      <a href="https://ragranato.github.io/task-manager/" target='_blank'><GitHubIcon /></a>
    </div>
  );
}

export default ProjectDisplay