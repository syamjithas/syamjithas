import "./codeframe.scss";
import { useState, useEffect } from "react";
import Codeline from "./Codeline";
const Codeframe = (props) => {
  const [lines, setLines] = useState([]);
  let codeBlock = props.data;

  useEffect(() => {
    linesWriter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const linesWriter = () => {
    if (codeBlock.length > 0) {
      setLines(lines.concat([codeBlock.shift()]));
    } else {
      if (props.callback) props.callback();
    }
  };

  const nextLine = () => {
    linesWriter();
  };

  const codeLines = lines.map((line, index) => (
    <Codeline key={index} index={index} value={line} nextLine={nextLine} />
  ));

  return <div className="codeframe">{codeLines}</div>;
};

export default Codeframe;
