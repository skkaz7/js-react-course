import React from "react";
import ReactDOM from "react-dom";

const birthYear = Number(prompt('Podaj swój rok urodzenia: '))
const currentYear = new Date().getFullYear()

ReactDOM.render(
    <h1>{`Twój wiek to: ${currentYear - birthYear}!`}</h1>,
    document.getElementById("app")
);
