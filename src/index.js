"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Route, NavLink, HashRouter } from "react-router-dom";
import MyHeader from "./my_header";
import Home from "./home";
import MyExperience from "./my_experience";
import MyProjects from "./my_projects";
import About from "./about";

const Main = () => {
  return (
    <HashRouter id="page">
      <MyHeader></MyHeader>
      <div className="content">
        <Route exact path="/home" component={Home} />
        <Route path="/experience" component={MyExperience} />
        <Route path="/projects" component={MyProjects} />
        <Route path="/about" component={About} />
      </div>
    </HashRouter>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
