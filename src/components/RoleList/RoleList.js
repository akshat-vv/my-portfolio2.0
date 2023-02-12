import React from "react";
import "./RoleList.scss";
import Typed from "react-typed";

const RoleList = ({ role }) => {
  return (
    <span className="role-text">
      {role.map((role, index, roleRef) => {
        let size = roleRef.length;
        return (
          <>
            {role} {index < size - 1 && <span>| </span>}
          </>
        );
      })}
    </span>
  );
};

export default RoleList;
