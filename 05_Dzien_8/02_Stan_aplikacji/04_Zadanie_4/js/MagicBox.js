import React, {Component} from "react"

class MagicBox extends Component {
    state = {
        color: '#000'
    }

    // style = {
    //     height: 200,
    //     width: 200,
    //     backgroundColor: this.state.color
    // }

    handleDiv = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.setState({
            color: randomColor
        })
    }

    render() {
        return <div onMouseEnter={this.handleDiv} style={{height: 200, width: 200, backgroundColor: this.state.color}}/>
    }
}

export default MagicBox
