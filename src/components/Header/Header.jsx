import React from "react";
import "./Header.scss";
import headerImage from "../../img/av-head-web.png";
import RoleList from "../RoleList/RoleList";
import github from "../../img/github.png";
import linkedin from "../../img/LinkedInNew.png";
import ReactTyped from "react-typed";

const openLink = (url) =>{
  window.open(url);
}

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
          <img src={linkedin} alt="" onClick={()=>openLink('https://www.linkedin.com/in/akshat-vijayvergiya-203bbb127/')}/>
          <img src={github} alt="" onClick={()=>openLink('https://github.com/akshat-vv')}/>
        </div>
      </div>
      <div className="h-right-section">
        <img id="av-head" src={headerImage} alt="" />
      </div>
    </div>
  );
};
