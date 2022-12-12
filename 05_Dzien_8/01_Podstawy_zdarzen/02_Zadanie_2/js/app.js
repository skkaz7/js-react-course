import React, {Component} from "react";
import ReactDOM from "react-dom";

import ShowUserFunc from "./ShowUserFunc";
import ShowUserClass from "./ShowUserClass";

function App() {
    return (
        <>
            <ShowUserFunc name='Sebastian' surname='Kaźmierczak'/>
            <ShowUserClass name='Tomasz' surname='Kowalsky'/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
