"use strict";
import React from "react";

const Home = () => {
  return (
    <div id="content">
      <img id="myselfImg" src="./img/gumwall.jpeg" />
      <div id="myInfo">
        <div id="myPara">
          <p>Welcome to Nathan's website.</p>
          <p>Hello World! My name is Kin Chan, but you can call me Nathan. </p>
          <p>
            I am a Software Engineer, who develops both frontend and backend
            application.
          </p>
        </div>
        <div id="buttons">
          <a
            className="linkButton"
            id="resume"
            target="_blank"
            href="https://drive.google.com/file/d/1coV8It4K3fz5ALuVJU1wNP65I18JFr7Q/view?usp=sharing"
            download="Nathan'sResume"
          >
            <button className="linkButton" id="resume">
              Download Resume
            </button>
          </a>
          <a href="https://www.linkedin.com/in/kinnathanchan/" target="_blank">
            <img
              className="linkButton"
              id="linkedIn"
              src="./img/icons/LI-In-Bug.png"
            />
          </a>
          <a href="https://github.com/NathanCK" target="_blank">
            <img
              className="linkButton"
              id="github"
              src="./img/icons/GitHub-Mark-120px-plus.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
