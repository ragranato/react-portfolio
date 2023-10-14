import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import '../styles/Footer.scss'
import Pdf from '../assets/Resume_Roberto_Granato.pdf' 

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="mailto:robert.granato@gmail.com" title="Send an Email">
          <EmailIcon />
        </a>
        <a
          href="http://www.linkedin.com/in/roberto-granato"
          target="_blank"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a href="http://github.com/ragranato" target="_blank" title="GitHub">
          <GitHubIcon />
        </a>
        <a
          href={Pdf}
          target="_blank"
          title="Resume"
        >
          <PictureAsPdfIcon />
        </a>
      </div>
      <p> &copy;2023 Roberto Granato </p>
    </div>
  );
}

export default Footer;
