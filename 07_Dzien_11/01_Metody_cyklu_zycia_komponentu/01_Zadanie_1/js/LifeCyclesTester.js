import React, {Component} from "react";

class LifeCyclesTester extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }

    componentDidMount() {
        console.log('component did mount')
    }

    render() {
        console.log('render')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component did update')
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }
}

export default LifeCyclesTester
