import React from "react";
import ReactDOM from "react-dom";
import animals from "./data/animals";

ReactDOM.render(
    <section>
        {animals.length} <br/>
        {animals.join(', ')}
    </section>,
    document.getElementById("app")
);
