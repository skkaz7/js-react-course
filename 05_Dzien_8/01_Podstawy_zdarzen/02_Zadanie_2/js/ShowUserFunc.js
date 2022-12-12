import React, {Component} from "react";
import ReactDOM from "react-dom";

function ShowUserFunc(props) {
    function buttonHandler() {
        console.log(`${props.name} ${props.surname}`)
    }

    return <button onClick={buttonHandler}>Dane użytkownika funk</button>
}

export default ShowUserFunc