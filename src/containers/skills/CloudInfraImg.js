import React from "react";
import "./Skills.css";
export default function CloudInfraImg(props) {
  const theme = props.theme;
  return (
    <img
      src={require("../../assests/images/peoplemanager1.png")}
      alt=""
      className="img-responsive management-image"
    />
  );
}
