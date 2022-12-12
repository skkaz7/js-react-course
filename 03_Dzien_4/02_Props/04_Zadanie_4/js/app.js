import React, {Component} from "react";
import ReactDOM from "react-dom";

function LikeBox(props) {
    const {likes} = props
    return (
        <>
            <div>{likes} likes</div>
            <button>Lubię to!</button>
        </>
    )
}

ReactDOM.render(
    <LikeBox likes={7}/>,
    document.getElementById("app")
);
