import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const fontStyles = {
  color: "2c3546",
  margin: "30px",
  marginBottom: "-80px",
  fontSize: "50px",
  position: "20px",
  marginTop: "5px",
};



export default function Footer() {
  return (
    <body>
      <footer>
          <div class="top">
              <i class="fab fa-slack"></i>
            </div>
            <div class="media-icons" >
              <a href="https://www.facebook.com/" >
                <FaFacebook style={fontStyles} className="media"/>
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram style={fontStyles}  className="media"/>
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube style={fontStyles} className="media" />
              </a>
              <a href="https://github.com/sjalolov/Makon">
                <FaGithub style={fontStyles} className="media"/>
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedin style={fontStyles} className="media" />
              </a>
          </div>
      </footer>
    </body>
  );
}