"use strict";
import React from "react";
import { experiences } from "./data.js";

const Experience = (props) => {
  return (
    <div className="experience">
      <div className="description">
        <div className="hover-me">Hover over!</div>
        <div className="title">{props.information.title}</div>
        <div className="company-info">
          {props.information.company}
          <a
            className="material-icons external"
            target="_blank"
            href={props.information.link}
          ></a>
        </div>
        <div className="job-description">{props.information.discription}</div>
      </div>
      <div className="time">{props.information.period};</div>
    </div>
  );
};

const MyExperience = () => {
  return (
    <div className="experiences">
      {experiences.map((value, index) => {
        return <Experience key={index} information={value} />;
      })}
    </div>
  );
};

export default MyExperience;
