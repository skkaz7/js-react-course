import React, {Component} from "react";
import ReactDOM from "react-dom";

class CurrentDate extends Component {

    state = {
        date: new Date().toLocaleString()
    }

    buttonHandler = () => {
        this.setState({
            date: new Date().toLocaleString()
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.date}</h1>
                <button onClick={this.buttonHandler}>Zaktualizuj datę i godzinę</button>
            </>
        )
    }
}

class App extends Component {
    render() {
        return <CurrentDate/>
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
