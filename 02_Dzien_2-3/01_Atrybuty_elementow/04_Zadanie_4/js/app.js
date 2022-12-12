import React from "react";
import ReactDOM from "react-dom";

const color = prompt('Zgadnij kolor ramki: ')
const colors = ['red', 'green', 'blue']

const style = {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderStyle: 'solid',
    backgroundColor: `${color}`
}

let myDiv

if (colors.indexOf(color) !== -1) {
    myDiv = <div style={style}></div>
} else {
    myDiv = <div>Nieprawidłowy kolor</div>
}

ReactDOM.render(
    myDiv,
    document.getElementById("app")
);
