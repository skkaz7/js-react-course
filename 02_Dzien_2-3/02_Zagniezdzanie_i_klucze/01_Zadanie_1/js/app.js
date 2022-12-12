import React from "react";
import ReactDOM from "react-dom";

import people from "./data/people";

const divs = people.map(person => <div key={person.id}>{`${person.name} ${person.surname}`}</div>)

ReactDOM.render(
    <>
        {divs}
    </>,
    document.getElementById("app")
);
