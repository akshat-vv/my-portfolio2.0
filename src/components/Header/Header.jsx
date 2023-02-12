import React from "react";
import "./Header.scss";
import headerImage from "../../img/av-head-web.png";
import RoleList from "../RoleList/RoleList";
import github from "../../img/github.png";
import linkedin from "../../img/LinkedInNew.png";
import ReactTyped from "react-typed";

export const Header = ({ info }) => {

  const { role } = info.user;
  const roleString = role.join(' | ');

  return (
    <div className="h-container">
      <div className="h-left-section">
        <div className="h-lineOne">
          <span>{info.text.heyText}</span>
        </div>
        <div className="h-lineTwo">
          <span>{info.user.name}</span>
        </div>
        <div className="h-lineThree">
          <ReactTyped
            className="typed-text"
            strings={[roleString]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
        <div className="h-icons">
          <img src={linkedin} alt="" />
          <img src={github} alt="" />
        </div>
      </div>
      <div className="h-right-section">
        <img id="av-head" src={headerImage} alt="" />
      </div>
    </div>
  );
};
