import React, {Component} from "react";
import ReactDOM from "react-dom";

class Menu extends Component {
    render() {
        return (
            <ul>{this.props.menu.map(element => <li key={element.text}><a href={element.url}>{element.text}</a></li>)}</ul>
        )
    }
}

ReactDOM.render(
    <Menu menu={[
        {
            url: "/",
            text: "Strona główna"
        },
        {
            url: "/blog",
            text: "Blog"
        },
        {
            url: "/cennik",
            text: "Cennik"
        },
        {
            url: "/kontakt",
            text: "Kontakt"
        }
    ]
    }/>,
    document.getElementById("app")
);
