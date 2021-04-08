"use strict";
import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <NavLink className={"nav-item"} to={props.link} replace>
      {props.subTitle}
    </NavLink>
  );
};

const MyHeader = (props) => {
  return (
    <header>
      <div id="NameAndIcon">Kin (Nathan) Chan</div>
      <div id="nav">
        <NavItem subTitle={"Home"} link={"/"} />
        <NavItem subTitle={"Experience"} link={"/experience"} />
        <NavItem subTitle={"Projects"} link={"/projects"} />
        <NavItem subTitle={"About"} link={"/about"} />
      </div>
    </header>
  );
};

export default MyHeader;
