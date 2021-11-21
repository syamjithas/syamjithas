import "./codeframe.scss";
import Codeline from "./Codeline";
import { useCode } from "./CodeContext";
const Codeframe = () => {
  const { snippet } = useCode();
  const codeLines = snippet.map((line, index) => {
    return <Codeline key={index} index={index} value={line} />;
  });

  return <div className="codeframe">{codeLines}</div>;
};

export default Codeframe;
