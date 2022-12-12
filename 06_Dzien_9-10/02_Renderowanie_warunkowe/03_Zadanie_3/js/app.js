import React, {Component} from "react";
import ReactDOM from "react-dom";

import NumberInfo from "./NumberInfo";

function App() {
    return <NumberInfo number={7}/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
