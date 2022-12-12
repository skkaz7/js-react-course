import React, {Component} from "react";

class Box extends Component {
    state = {
        divColor: 'green'
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                divColor: this.state.divColor === 'red' ? 'green' : 'red'
            })
        }, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        return <div style={{height: 100, width: 100, backgroundColor: this.state.divColor}}/>
    }
}

export default Box
