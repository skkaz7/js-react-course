import React, {Component} from "react";
import ReactDOM from "react-dom";

function AddNumbersFunc(props) {
    const {numberA, numberB} = props
    return <h1>Suma {numberA} i {numberB} to: {numberA + numberB}</h1>
}

class AddNumbersClassy extends Component {
    render() {
        const {numberA, numberB} = this.props
        return <h1>Suma {numberA} + {numberB} to: {numberA + numberB}</h1>
    }
}

ReactDOM.render(
    <>
        <AddNumbersFunc numberA={3} numberB={4}/>
        <AddNumbersClassy numberA={4} numberB={6}/>
    </>,
    document.getElementById("app")
);
