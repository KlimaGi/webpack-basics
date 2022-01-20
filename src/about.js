import React from "react";
import { render } from "react-dom";

const About = () => {
  return (
    <div>
      <h2>About webpack</h2>
    </div>
  );
};

render(<About />, document.getElementById("target"));
