import React, {Component} from "react"

import ClockDate from "./ClockDate"
import ClockTime from "./ClockTime"

class Clock extends Component {
    state = {
        date: new Date()
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        return (
            <>
                <ClockTime date={this.state.date}/>
                <ClockDate date={this.state.date}/>
            </>
        )
    }
}

export default Clock
