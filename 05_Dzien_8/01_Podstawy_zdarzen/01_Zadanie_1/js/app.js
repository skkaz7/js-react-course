import React, {Component} from "react";
import ReactDOM from "react-dom";

function Buttons() {
    function firstButtonHandler() {
        console.log("Pierwszy przycisk kliknięty")
    }

    function secondButtonHandler() {
        const a = Number(prompt("Podaj pierwszą liczbę"))
        const b = Number(prompt("Podaj drugą liczbę"))
        console.log(Math.pow(a, b))
    }

    function thirdButtonHandler() {
        console.log('Wysokość', window.innerHeight)
        console.log('Szerokośc', window.innerWidth)
    }

    return (
        <>
            <button onClick={firstButtonHandler}>Klik!</button>
            <button onClick={secondButtonHandler}>Klik!</button>
            <button onClick={thirdButtonHandler}>Klik!</button>
        </>
    )
}

function App() {
    return <Buttons/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
