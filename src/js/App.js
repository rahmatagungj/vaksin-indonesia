import React from "react";
import { render } from "react-dom";
import "../scss/App.scss";
import { Home } from "./pages/Home";

const App = () => {
  return <Home />;
};

render(<App />, document.getElementById("root"));
