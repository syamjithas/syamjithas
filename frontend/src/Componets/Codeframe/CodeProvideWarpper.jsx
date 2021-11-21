import React from "react";
import CodeProvider from "./CodeContext";
import Codeframe from "./Codeframe";

const CodeProvideWarpper = ({ callback, snippet }) => {
  return (
    <CodeProvider callback={callback} snippet={snippet}>
      <Codeframe />;
    </CodeProvider>
  );
};

export default CodeProvideWarpper