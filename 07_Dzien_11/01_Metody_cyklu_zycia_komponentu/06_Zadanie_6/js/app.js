import React, {Component} from "react";
import ReactDOM from "react-dom";

import Clock from "./Clock";

function App() {
    return <Clock/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
