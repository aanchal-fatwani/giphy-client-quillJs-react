import React from "react";
import ReactDOM from "react-dom";

import Search from "./components/Search";

class App extends React.Component {
  render() {
    return <Search />;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
