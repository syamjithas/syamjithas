import { useContext, createContext, useState } from "react";
import produce from "immer";
const CodeContext = createContext();

export const useCode = () => {
  return useContext(CodeContext);
};

const CodeProvider = ({ snippet, children, callback }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const updateNext = () => {
    setLineIndex((prevIndex) => prevIndex + 1);
    if (lineIndex == snippet.length - 1) {
      callback();
    }
  };

  return (
    <CodeContext.Provider value={{ snippet, lineIndex, updateNext }}>
      {children}
    </CodeContext.Provider>
  );
};

export default CodeProvider;
