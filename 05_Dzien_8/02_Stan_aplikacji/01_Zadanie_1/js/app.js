import React, {Component} from "react";
import ReactDOM from "react-dom";

import TextTyper from "./TextTyper";

class App extends Component {
    render() {
        return <TextTyper text="Witaj!"/>
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
