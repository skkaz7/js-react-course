import React, {Component} from "react"

class Modal extends Component {
    state = {
        modalOpen: false
    }

    componentDidMount() {
        this.myTimeout = setTimeout(() => {
            this.setState({
                modalOpen: true
            })
        }, 10000)
    }
    componentWillUnmount() {
        clearTimeout(this.myTimeout)
    }

    render() {
        return this.state.modalOpen === true ? <h2>{this.props.heading}</h2> : null
    }
}

export default Modal
