import React from "react";
import "./Header.scss";
import headerImage from "../../img/av-head-web.png";
import RoleList from "../RoleList/RoleList";
import github from "../../img/github.png";
import linkedin from "../../img/LinkedInNew.png";

export const Header = ({ info }) => {
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
          <RoleList role={info.user.role} />
        </div>

        <button className="button">{info.text.knowMoreText}</button>
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
