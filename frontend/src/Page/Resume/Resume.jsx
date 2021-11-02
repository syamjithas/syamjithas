import { useEffect, useRef } from "react";
import "./Resume.scss";
import { Header } from "../../Componets/Header/Header";
import Codeframe from "../../Componets/Codeframe/Codeframe";
import syamjith from "./image/syamjith.jpg";
import VanillaTilt from "vanilla-tilt";
import { intro } from "../../Data/Intro";
function Resume() {
  const imageRef = useRef();
  useEffect(() => {
    VanillaTilt.init(imageRef.current, {
      max: 25,
      speed: 400,
    });
  }, []);
  return (
    <div className="resume-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="body-container">
        <div className="col">
        <Codeframe  data={intro} />
        </div>
        <div className="col">
          {/* <div ref={imageRef} className="syamjith-container">
            <img className="syamjith-image" src={syamjith} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Resume;
