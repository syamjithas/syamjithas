import React, { useState, useEffect } from "react";

const Codestring = ({ value,  nextString }) => {
  const [codeStr, setCodeStr] = useState("");
  var tempStr = "";
  useEffect(() => {
    domWriter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const delayFn = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const domWriter = async () => {
    if (value ) {
      let text = value.text.split("");
      while (text.length > 0) {
        let char = text.shift();
        char = char === " " ? "\u00A0" : char;
        tempStr += char;
        setCodeStr(tempStr);
        await delayFn(10);
      }
       nextString();
    }

  };
  const element = value ? (
    <span className={value.class}>{codeStr} </span>
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
