import "./Batman.scss";
import React from "react";
import batman from "./image/batman.svg";
import { Link } from "react-router-dom";
const Batman = () => {
  return (
    <div className="final_layers">
      <div className="batman-container">
        <Link to="/ssohostjoin">
          <div className="game"></div>
        </Link>

        <div className="textarea">
          It's not who I am underneath but what I do that defines me.
        </div>
        <div className={"smoke1 img one"}></div>
        <div className={"smoke2 img two"}></div>
        <div className={"smoke3 img three"}></div>
        <div className={"smoke1 img three"}></div>
        <div className={"smoke2 img two"}></div>
        <div className={"smoke3 img one"}></div>
        <div className={"smoke1 img two"}></div>
        <div className={"smoke2 img one"}></div>
        <div className={"smoke3 img three"}></div>
        <img src={batman} alt="batman" className={"tippy top layer"} />
      </div>
    </div>
  );
};

export default Batman;
