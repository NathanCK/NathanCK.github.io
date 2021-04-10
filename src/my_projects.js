"use strict";
import React from "react";
import { NavLink } from "react-router-dom";
import myWebsiteImg from "./img/home-screen-shot.jpg";

const MyProjects = () => {
  return (
    <div id="projects-container">
      <div className="flip-container">
        <div className="flipper">
          <div className="front">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/73/Apache_Ignite_logo.svg"
              className="project-image"
            />
            <div className="project-title">Apache Ignite (Contribute)</div>
          </div>
          <div className="back">
            <p className="project-description">
              Apache Ignite{" "}
              <a
                href="https://ignite.apache.org/"
                className="material-icons external"
                target="_blank"
              ></a>{" "}
              is a in-memory distributed database. I mainly contribute on the
              .NET part as one of the supported platforms. So far, I have worked
              on some improvement story, but while I am getting familiar about
              the project, I am going to work on implementing new features.
              Also, as part of the team, we use JIRA, Git, and TeamCity for
              asynchronous contribution. See my GitHub repository{" "}
              <a
                href="https://github.com/NathanCK/ignite"
                className="material-icons external"
                target="_blank"
              ></a>
            </p>
          </div>
        </div>
      </div>

      <div className="flip-container">
        <div className="flipper">
          <div className="front">
            <img src={myWebsiteImg} className="project-image" height="150px" />
            <div className="project-title">My Website</div>
          </div>
          <div className="back">
            <p className="project-description">
              This is my first website I have built from scratch and my next
              step to the frontend world. It used simple HTML, CSS, and
              javascript, but more is coming, and I am going to add more stuff I
              am interested, such as React.js, and more information about
              myself. Also, before the implementation, I used Adobe XD to
              breanstorm the design. For more detail, please visit the About
              page{" "}
              <NavLink
                exact
                to="/about"
                className="material-icons external"
                replace
              ></NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
