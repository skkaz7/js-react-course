import React, {Component} from "react";
import ReactDOM from "react-dom";

function CurrencyConverter(props) {
    const {from, to, value, rate} = props
    return (
        <div>
            <strong>{value}</strong> {from} {'=>'} <strong>{(value * rate).toFixed(2)}</strong> {to}
        </div>
    )
}

function App() {
    return (
        <>
            <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275}/>
            <CurrencyConverter from="PLN" to="USD" value={100} rate={4.85}/>
            <CurrencyConverter from="PLN" to="EUR" value={200} rate={5.11}/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
