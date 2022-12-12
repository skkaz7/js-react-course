import React, {Component} from "react";
import ReactDOM from "react-dom";

function LikeBox() {
    return (
        <>
            <div>100 likes</div>
            <button>Lubię to!</button>
        </>
    )
}

ReactDOM.render(
    <LikeBox/>,
    document.getElementById("app")
);
