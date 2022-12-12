import React, {Component} from "react"

class HelloWorld extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            text: 'Hello, World!'
        }
    }

    componentDidMount() {
        console.log('did mount')
        this.myTimeout = setTimeout(() => {
            this.setState({
                text: 'Hi, Everyone!'
            })
        }, 5000)
    }
    componentWillUnmount() {
        console.log('will unmount')
        clearTimeout(this.myTimeout)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update')
    }

    render() {
        console.log('render')
        return <h1>{this.state.text}</h1>
    }
}

export default HelloWorld
