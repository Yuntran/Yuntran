 import './App.css';
import * as React from "react";
import Main from "./main/Main";

class App extends React.Component {
  render () {
    return (
        <div className="container">
            <div className="toolbar"></div>
            <Main/>
            <div className="calendar"></div>
        </div>
    )
  }
}

export default App;
