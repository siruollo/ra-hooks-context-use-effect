import React from "react";
import "./App.css";

import List from "./components/List";
import Details from "./components/Details";

function App() {
  const [output, setOutput] = React.useState({});
  return (
    <div className="container">
      <div className="background-element"> </div>{" "}
      <div className="highlight-window">
        <div className="highlight-overlay"> </div>{" "}
      </div>{" "}
      <div className="window">
        <List setOutput={setOutput} />
        <Details output={output} />
      </div>{" "}
    </div>
  );
}

export default App;
