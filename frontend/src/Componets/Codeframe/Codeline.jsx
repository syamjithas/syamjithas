import { useState, useEffect } from "react";
import Codestring from "./Codestring";

const Codeline = (props) => {
  const [codeLine, setCodeLine] = useState([]);
  var codeLineP = props.value;

  useEffect(() => {
    lineWriter();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lineWriter = () => {
    if (codeLineP.length > 0) {
      setCodeLine(codeLine.concat([codeLineP.shift()]));
    } else {
      props.nextLine();
    }
  };
  const nextString = () => {
    lineWriter();
  };

  const lineList =
    codeLine.length > 0 ? (
      codeLine.map((line, index) => (
        <Codestring key={index} value={line} nextString={nextString} />
      ))
    ) : (
      <div></div>
    );

  return (
    <div>
      <span className="linenumber">{props.index}</span>
      {lineList}
    </div>
  );
};

export default Codeline;
