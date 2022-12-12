import React, {Component} from "react";
import ReactDOM from "react-dom";

// class HoverEvent extends Component {
//     buttonHandler = () => {
//         console.log("Najechano na przycisk!")
//     }
//     render() {
//         return <button onMouseEnter={this.buttonHandler}>ClassyButton</button>
//     }
// }
//
// class App extends Component {
//     render() {
//         return <HoverEvent/>
//     }
// }

function HoverEvent() {
    const buttonHandler = () => {
        console.log("Najechano na przycisk!")
    }
    return <button onMouseEnter={buttonHandler}>FuncButton</button>
}

function App() {
    return <HoverEvent/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
