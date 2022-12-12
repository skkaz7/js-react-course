import React, {Component} from "react";
import ReactDOM from "react-dom";

class ShowUserClass extends Component {
    buttonHandler = () => {
        console.log(`${this.props.name} ${this.props.surname}`)
    }

    render() {
        return <button onClick={this.buttonHandler}>Dane użytkownika classy</button>
    }
}

export default ShowUserClass