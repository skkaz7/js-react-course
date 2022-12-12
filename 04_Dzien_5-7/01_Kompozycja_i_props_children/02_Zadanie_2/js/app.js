import React, {Component} from "react";
import ReactDOM from "react-dom";

function App() {
    return (
        <ShopItem>
            <ShopItemHeader title="MacBook Pro" image="https://bit.ly/2EEtduD"/>
            <ShopItemDescription description="Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę."/>
            <ShopItemPricing price={9999}/>
        </ShopItem>
    )
}

function ShopItem(props) {
    return (
        <section>
            {props.children}
        </section>

    )
}

function ShopItemHeader(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <img src={props.image} alt="MacBook Pro"/>
        </header>
    )
}

function ShopItemDescription(props) {
    return (
        <article>
            <p>{props.description}</p>
        </article>
    )
}

function ShopItemPricing(props) {
    return (
        <footer>
            <p>Cena: {props.price} zł</p>
            <button>Kup!</button>
        </footer>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
