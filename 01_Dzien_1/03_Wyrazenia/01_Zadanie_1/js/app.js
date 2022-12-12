import React from "react";
import ReactDOM from "react-dom";

const a = Number(prompt('Podaj liczbę A'))
const b = Number(prompt('Podaj liczbę B'))

ReactDOM.render(
    <div>{a + b}</div>,
    document.getElementById("app")
);
