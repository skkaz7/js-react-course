import React, {Component} from "react"


class AddTwoNumbers extends Component {
    state = {
        result1: 0,
        result2: 0
    }

    handleResult1 = e => {
        this.setState({
            result1: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    render() {
        const {result1, result2} = this.state
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={result1} onChange={this.handleResult1}/>
                    <input type='text' value={result2} onChange={event => this.setState({result2: event.target.value})}/>
                    <h1>{isNaN(result1) || isNaN(result2) ? 'Podaj dwie liczby' : Number(result1) + Number(result2)}</h1>
                </form>
            </>
        )
    }
}

export default AddTwoNumbers
