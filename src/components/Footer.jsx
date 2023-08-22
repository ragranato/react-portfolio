import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import '../styles/Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <EmailIcon />
        <LinkedInIcon />
        <GitHubIcon />
        <PictureAsPdfIcon />
      </div>
      <p> &copy;2023 Roberto Granato </p>
    </div>
  );
}

export default Footer;
