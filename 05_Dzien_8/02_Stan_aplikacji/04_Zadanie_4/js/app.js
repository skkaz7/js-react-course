import React, {Component} from "react";
import ReactDOM from "react-dom";

import MagicBox from "./MagicBox";

class App extends Component {
    render() {
        return <MagicBox/>
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
