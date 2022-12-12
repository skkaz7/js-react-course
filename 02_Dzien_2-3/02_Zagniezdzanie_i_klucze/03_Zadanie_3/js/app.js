import React from "react";
import ReactDOM from "react-dom";

import people from "./data/people";

const result = people.map(person =>
    <div className={'person'} key={person.id}>
        <img src={person.avatar} alt={'avatar'}/>
        <div className={'info'}>
            <h1>{`${person.title} ${person.name} ${person.surname}`}</h1>
            <p>{person.bio}</p>
        </div>
    </div>
)

ReactDOM.render(
    <>
        {result}
    </>,
    document.getElementById("app")
);
