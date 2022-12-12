import React, {Component} from "react";
import ReactDOM from "react-dom";

class RandomNumbers extends Component {
    state = {
        numbers: []
    }

    buttonHandler = () => {
        const random = (Math.random() * (999 - 100) + 100).toFixed(0)
        this.setState(prevState => ({
            numbers: [...prevState.numbers, random]
        }))
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.numbers.map(item => <li>{item}</li>)}
                </ul>
                <button onClick={() => this.buttonHandler()}>Wylosuj liczbę</button>
            </>
        )
    }
}

class App extends Component {
    render() {
        return <RandomNumbers/>
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
