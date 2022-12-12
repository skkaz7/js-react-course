import React from "react";
import ReactDOM from "react-dom";

const redDivStyle = {
    height: 100,
    backgroundColor: "red"
}
const greenDivStyle = {
    height: 100,
    backgroundColor: "green"
}
const blueDivStyle = {
    height: 100,
    backgroundColor: "blue"
}

const redDiv = <div style={redDivStyle}/>;
const greenDiv = <div style={greenDivStyle}/>;
const blueDiv = <div style={blueDivStyle}/>;


ReactDOM.render(
    <>
        {redDiv}{greenDiv}{blueDiv}
    </>,
    document.getElementById("app")
);
