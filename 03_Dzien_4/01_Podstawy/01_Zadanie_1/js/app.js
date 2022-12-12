import React, {Component} from "react";
import ReactDOM from "react-dom";

function Search() {
    return (
        <>
            <input/>
            <button>Wyszukaj</button>
        </>
    )
}

class Search2 extends Component {
    render() {
        return (
            <>
                <input/>
                <button>Wyszukaj2</button>
            </>
        )
    }
}

ReactDOM.render(
    <>
        <Search/>
        <Search2/>
    </>,
    document.getElementById("app")
);
