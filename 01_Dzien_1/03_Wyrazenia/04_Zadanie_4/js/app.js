import React from "react";
import ReactDOM from "react-dom";

const a = Number(prompt('Podaj pierwszą liczbę: '))
const b = Number(prompt('Podaj drugą liczbę: '))
const operator = prompt('Podaj działanie: ')

let myElement;

if (operator === '+') {
    myElement = <h1>{a + b}</h1>;
} else if (operator === '-') {
    myElement = <h2>{a - b}</h2>;
} else if (operator === '*') {
    myElement = <h3>{a * b}</h3>;
} else {
    myElement = <h4>{a / b}</h4>;
}

ReactDOM.render(
    myElement,
    document.getElementById("app")
)
