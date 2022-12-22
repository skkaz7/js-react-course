import React, {Component} from "react";
import ReactDOM from "react-dom";

import SelectOrType from "./SelectOrType";

function App() {
    return <SelectOrType items={["BMW", "Jaguar", "Porsche"]}/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
