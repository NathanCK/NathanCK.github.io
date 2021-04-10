"use strict";
import React from "react";
import blogs from "./about_contents";
import thanos from "./img/fullstack-dev-joke.jpg";

class RandomColorPicker {
  constructor() {
    this.pickedColors = [];
  }

  static pickRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  pickUniqueRandomColor() {
    let color = RandomColorPicker.pickRandomColor();
    while (this.pickedColors.includes(color)) {
      color = RandomColorPicker.pickRandomColor();
    }

    this.pickedColors.push(color);
    return color;
  }
}

const BlogContainer = (props) => {
  const colorPicker = new RandomColorPicker();

  const pickAnUniqueColor = () => colorPicker.pickUniqueRandomColor();
  return (
    <div>
      <div className="about-section">
        <p className="subtitle">
          {" "}
          <span style={{ color: pickAnUniqueColor() }}>Current</span> Status (
          {<span style={{ color: "red" }}>{props.content.date}</span>}) :
        </p>

        <div>
          <div>
            <img className="paragraphImg" src={props.content.current.img}></img>
          </div>
          <p className="about-text">{props.content.current.text}</p>
        </div>
      </div>

      <div className="about-section">
        <p className="subtitle">
          {" "}
          <span style={{ color: pickAnUniqueColor() }}>Next</span> step for this
          website:
        </p>
        <div>
          <div>
            <img className="paragraphImg" src={props.content.next.img}></img>
          </div>
          <p className="about-text">{props.content.next.text}</p>
        </div>
      </div>
    </div>
  );
};

const TopSection = (props) => {
  return (
    <div id="top-section">
      <p className="subtitle">
        {" "}
        <span style={{ color: props.pickColor() }}>Why</span> I want to explore
        the frontend world?
      </p>
      <div>
        <div>
          <img className="paragraphImg" src={thanos}></img>
        </div>

        <p id="why-frontend-answer" className="about-text">
          As a Software Developer who mainly developed a backend application, I
          have deeper feeling that people are not really sensitive to a pure
          backend application, just like when dealing with a set of pure
          metadata, charts or graphs help the brain to process and understand
          the data. Using the frontend world, we can connect the work we
          implemented and the clients better instead of just showing them some
          JSON or raw response. Fullstack is my ultimate goal now.
        </p>
      </div>
    </div>
  );
};

const About = () => {
  const [blogIndex, setBlogIndex] = React.useState(0);
  const colorPicker = new RandomColorPicker();

  const pickAnUniqueColor = () => colorPicker.pickUniqueRandomColor();

  const hasNextBlog = () => blogIndex + 1 < blogs.length;
  const hasPrevBlog = () => blogIndex - 1 >= 0;

  const loadNextBlog = () => {
    if (hasNextBlog()) {
      setBlogIndex(blogIndex + 1);
    }
  };

  const loadPrevBlog = () => {
    if (hasPrevBlog()) {
      setBlogIndex(blogIndex - 1);
    }
  };

  return (
    <div id="about-content">
      <TopSection pickColor={pickAnUniqueColor} />

      <div id="blog-section-container">
        <button
          className="navigate-button"
          style={{ visibility: hasPrevBlog() ? "visible" : "hidden" }}
          onClick={loadPrevBlog}
        >
          <span className="material-icons">navigate_before</span>
        </button>

        <BlogContainer
          id="blog-content-container"
          content={blogs[blogIndex]}
        ></BlogContainer>

        <button
          className="navigate-button"
          style={{ visibility: hasNextBlog() ? "visible" : "hidden" }}
          onClick={loadNextBlog}
        >
          <span className="material-icons">navigate_next</span>
        </button>
      </div>
    </div>
  );
};

export default About;
