import React from "react";
import ReactDOM from "react-dom";

const a = Number(prompt('Podaj pierwszą liczbę: '))
const b = Number(prompt('Podaj drugą liczbę: '))

function calculate(a, b, operator) {
    if (operator === '+') {
       return <h1>{a + b}</h1>;
    } else if (operator === '-') {
        return  <h2>{a - b}</h2>;
    } else if (operator === '*') {
        return <h3>{a * b}</h3>;
    } else {
        return <h4>{a / b}</h4>;
    }
}

ReactDOM.render(
    <div>{calculate(a, b, '*')}</div>,
    document.getElementById("app")
)
