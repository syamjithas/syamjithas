import { useState, useEffect } from "react";
import Codestring from "./Codestring";
import { useCode } from "./CodeContext";
const Codeline = ({ value, index }) => {
  const [codeLine, setCodeLine] = useState([]);
  const { updateNext, lineIndex } = useCode();
  useEffect(() => {
    if (lineIndex == index) {
      lineWriter();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex]);

  const lineWriter = () => {
    if (value.length > codeLine.length) {
      setCodeLine((codeLine) => codeLine.concat([value[codeLine.length]]));
    } else {
      updateNext();
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
      <div className="linenumber">{index}</div>
      {lineList}
    </div>
  );
};

export default Codeline;
