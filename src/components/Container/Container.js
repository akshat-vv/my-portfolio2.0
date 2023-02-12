import React from "react";
import { Header } from "../Header/Header";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";
import information from "../../constants/global";
import head from "../../img/av-head-bg.png";
import "./Container.scss";

const Container = () => {
  return (
    <div className="main-container">
      {/* <Header info={information} /> */}
      <img src={head} alt="" />
    </div>
  );
};

export default Container;
