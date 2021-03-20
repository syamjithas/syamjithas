import React, { useState, useEffect } from "react";

const Codestring = (props) => {
  const [codeStr, setCodeStr] = useState("");
  var tempStr = "";
  useEffect(() => {
    domWriter();
  }, []);

  const delayFn = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const domWriter = async () => {
    if (props.value) {
      let text = props.value.text.split("");
      while (text.length > 0) {
        let char = text.shift();
        char = char === " " ? "\u00A0" : char;
        tempStr += char;
        setCodeStr(tempStr);
        await delayFn(10);
      }
    }
    props.nextString();
  };
  const element = props.value ? (
    <span className={props.value.class}>{codeStr} </span>
  ) : (
    <span></span>
  );

  return <>{element}</>;
};

Codestring.defaultProps = {
  text: "",
  class: "",
};

export default Codestring;
