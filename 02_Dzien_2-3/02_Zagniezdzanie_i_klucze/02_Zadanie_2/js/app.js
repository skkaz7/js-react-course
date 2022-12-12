import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import person from "./data/person";

const {title, firstName, lastName, age} = person

ReactDOM.render(
    <Fragment>
        <h1>{`${title} ${firstName} ${lastName}`}</h1>
        <span>{age}</span>
    </Fragment>,
    document.getElementById("app")
);
