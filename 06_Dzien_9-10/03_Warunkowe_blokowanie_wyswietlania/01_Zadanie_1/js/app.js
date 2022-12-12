import React, {Component} from "react";
import ReactDOM from "react-dom";

import SecretStuff from "./SecretStuff";

function App() {
    return <SecretStuff password='dupa' correctPassword='dupa' secret='Nie lubię Coders Labu!'/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
