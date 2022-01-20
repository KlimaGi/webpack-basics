import React from "react";
import { render } from "react-dom";

const Greeting = () => <h2>Hello from React</h2>;

render(<Greeting />, document.getElementById("target"));
