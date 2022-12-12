import React from "react";
import ReactDOM from "react-dom";

function genNumber() {
    return Math.round(Math.random() * 9 + 1);
}

const a = genNumber()
const b = genNumber()

const result = Number(prompt(`Jaki jest wynik działania ${a} + ${b}?`))

let myDiv
if (result === a + b) {
    myDiv = <div style={{backgroundColor: "green"}}>Odpowiedź poprawna</div>
} else {
    myDiv = <div style={{backgroundColor: "red"}}>Odpowiedź błędna</div>
}
ReactDOM.render(
    myDiv,
    document.getElementById("app")
);
