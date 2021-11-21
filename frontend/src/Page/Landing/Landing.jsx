import "./Landing.scss";
import CodeProvideWarpper from "../../Componets/Codeframe/CodeProvideWarpper";
import HelloWorld from "../../Componets/HelloWorld/HelloWorld";
import { helloWorldSnippet } from "../../Data/Helloworld";
import { Link } from "react-router-dom";
import { useState } from "react";
const Landing = () => {
  const [landingClass, setlandingClass] = useState({});
  const initHelloWorld = () => {
    setlandingClass({ logo: "fade-in", text: "zoom-in" });
  };
  return (
    <div className="landing-container">
      <div className="landing-flexbox">
        <CodeProvideWarpper callback={initHelloWorld} snippet={helloWorldSnippet} />
      </div>
      <div className="landing-flexbox text-center">
        <HelloWorld landingClass={landingClass} />
      </div>
      <Link className="know-more" to="/batman">
        {/* <div className="gradient-glow"></div> */}
      </Link>
    </div>
  );
};

export default Landing;
