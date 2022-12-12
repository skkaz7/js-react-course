import React, {Component} from "react";
import ReactDOM from "react-dom";

import StrobeLight from "./StrobeLight";

function App() {
    return <StrobeLight color='pink' frequency={100}/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
