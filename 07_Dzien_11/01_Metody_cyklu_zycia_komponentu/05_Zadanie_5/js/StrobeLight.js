import React, {Component} from "react"

class StrobeLight extends Component {
    state = {
        divColor: 'white'
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                divColor: this.state.divColor === 'white' ? this.props.color : 'white'
            })
        }, this.props.frequency)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        return <div style={{height: 50, width: 500, backgroundColor: this.state.divColor}}/>
    }
}

export default StrobeLight
