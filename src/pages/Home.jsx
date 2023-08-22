import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import '../styles/Home.scss'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi My Name is Roberto</h2>
        <div className="prompt">
          <p>
            Welcome to my page! I am the software developer that puts your ideas
            and products on the web!
          </p>
          <EmailIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, JavaScript, HTML, CSS, SASS, BootStrap, NPM
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, HTML, CSS</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home