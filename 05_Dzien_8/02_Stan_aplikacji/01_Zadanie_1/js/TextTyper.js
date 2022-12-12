import React, {Component} from "react";
import ReactDOM from "react-dom";

class TextTyper extends Component {
    state = {
        text: this.props.text[0],
        index: 1
    }

    handlePlus = () => {
        if (this.state.index === this.props.text.length) {
            return
        }

        this.setState(prevState => ({
            index: prevState.index + 1,
            text: this.props.text.slice(0, prevState.index + 1)
        }))
    }

    handleMinus = () => {
        if (this.state.index === 1) {
            return
        }

        this.setState(prevState => ({
            index: prevState.index - 1,
            text: this.props.text.slice(0, prevState.index - 1)
        }))
    }

    render() {
        return (
            <>
                <h1>{this.state.text}</h1>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
            </>
        )
    }
}

export default TextTyper
