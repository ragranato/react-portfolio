import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/Projects.scss'
import { projectList } from '../helpers/ProjectList';


function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectlist">
        {projectList.map((project, idx) => {
          return <ProjectItem id={idx} image={project.image} name={project.name} />
        })}
      </div>
    </div>
  );
}

export default Projects