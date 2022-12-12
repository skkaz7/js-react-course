import React, {Component, useState} from "react";
import ReactDOM from "react-dom";

// useState

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        setCounter(prevState => prevState + 1)
    }
    return (
        <>
            <h1>Liczba kliknięć: {counter}</h1>
            <button onClick={handleClick}>Kliknij!</button>
        </>
    )
}

const UserInfo = ({userLoggedIn}) => {
    if (userLoggedIn) {
        return <strong>Witaj użytkowniku!</strong>
    } else {
        return <a href="/login">Zaloguj</a>
    }
}

// Renderowanie warunkowe

class Bulb extends Component {
    state = {
        bulbOn: false
    }

    handleTurnOffClick = () => {
        this.setState({
            bulbOn: false
        })
    }
    handleTurnOnClick = () => {
        this.setState({
            bulbOn: true
        })
    }

    render() {
        let bulb
        if (this.state.bulbOn) {
            bulb = <BulbOn onClick={this.handleTurnOffClick}/>
        } else {
            bulb = <BulbOff onClick={this.handleTurnOnClick}/>
        }
        return (
            <div>
                <h1>Żarówka</h1>
                {bulb}
            </div>
        )
    }

}

class BulbOn extends Component {
    render() {
        return (
            <>
                <strong>Żarówka świeci</strong>
                <button onClick={this.props.onClick}>Wyłącz</button>
            </>
        )
    }
}

class BulbOff extends Component {
    render() {
        return (
            <>
                <span>Żarówka zgaszona</span>
                <button onClick={this.props.onClick}>Włącz</button>
            </>
        )
    }
}

function App() {
    return <Bulb/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
