"use strict";
import React from "react";

const About = () => {
  return (
    <div id="about-content">
      <p className="about-text">
        This website used HTML, CSS, and Javascript as the main stacks. Although
        it heavily used CSS for the effect, including the hover over effect and
        the flipping effect, I used Javascript as a “simple database” to store
        my experience information and to create the HTML elements, so that it is
        easier to manipulate and work with. The project is definitely not ended
        yet, and it still has a long way to go.
      </p>
      <p className="subtitle">
        {" "}
        <span id="first-word-Why">Why</span> I want to explore the frontend
        world?
      </p>
      <div id="why-frontend" className="about-section">
        <div>
          <img id="thanos" src="/img/fullstack-dev-joke.jpg"></img>
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

      <p className="subtitle">
        {" "}
        <span id="first-word-Next">Next</span> step for this website:
      </p>

      <div id="next-step" className="about-section">
        <p className="about-text">
          This is yet a completely responsive website, which means under some
          specific resolution, especially for mobile, the website is not going
          to build well. Also, graphs are not optimized for mobile environments
          yet. Currently, I started to learn React.js as one of the most popular
          frontend framework, and I will try to apply what I learn on my website
          for a more responsive and better solution. Also, I am going to add
          more information about myself, so anyone can know better about me on
          this website.
        </p>
        <div>
          <img id="many-devices" src="/img/many-for-web-dev.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
