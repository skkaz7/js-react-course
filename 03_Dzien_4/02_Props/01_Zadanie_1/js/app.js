import React, {Component} from "react";
import ReactDOM from "react-dom";

function HelloFunc(props) {
    return <h1>Hello, {props.name} {props.surname}!</h1>
}

class HelloClassy extends Component {
    render() {
        const {name, surname} = this.props
        return <h1>Hello, {name} {surname}!</h1>
    }
}

ReactDOM.render(
    <>
        <HelloFunc name="Sebastian" surname="Kaźmierczak"/>
        <HelloClassy name="Tomasz" surname="Kowalsky"/>
    </>,
    document.getElementById("app")
);
