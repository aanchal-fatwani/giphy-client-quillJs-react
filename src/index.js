import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Editor from "./components/Editor";

class App extends React.Component {
  render() {
    return <Editor />;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
