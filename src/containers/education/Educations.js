import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="chatgpt">
            <iframe src="https://chatgpt.com" style={{width: "100%", height: "100%"}}></iframe>
        </div>
  );
}

export default Educations;
