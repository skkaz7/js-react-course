import React from "react";
import ReactDOM from "react-dom";

import person from "./data/person";

const {title, firstName, lastName, age} = person

ReactDOM.render(
    <ul>
        <li>{title}</li>
        <li>{firstName}</li>
        <li>{lastName}</li>
        <li>{age}</li>
    </ul>,
    document.getElementById("app")
);
