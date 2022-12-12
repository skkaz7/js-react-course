import React, {Component} from "react";
import ReactDOM from "react-dom";

const style = {
    height: 100,
    width: 100,
    backgroundColor: "red"
}

function EventsTest() {
    const clickHandler = () => {
        console.log("Kliknięto element")
    }
    const mouseEnterHandler = () => {
        console.log("Najechano na element")
    }
    const mouseLeaveHandler = () => {
        console.log("Opuszczono kursorem element")
    }

    return <div style={style} onClick={clickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}/>
}

function App() {
    return <EventsTest/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
