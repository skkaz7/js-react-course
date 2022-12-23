import React, {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";

function PropsToState(props) {
    const [info, setInfo] = useState(props.text)

    useEffect(() => {
        const myInterval = setInterval(() => {
            setInfo(prevState => prevState + '.')
        }, 1000)

        return () => clearInterval(myInterval)
    }, [])

    return <ShowInfo info={info}/>
}

function ShowInfo(props) {
    return <h1>{props.info}</h1>
}

function App() {
    return <PropsToState text=''/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
