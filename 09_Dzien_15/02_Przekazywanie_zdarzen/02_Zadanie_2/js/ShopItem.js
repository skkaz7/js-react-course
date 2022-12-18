import React from "react";

function ShopItem(props) {
    const handleBought = (product) => {
        if (typeof props.onDone === 'function') {
            props.onDone(product)
        }
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <button onClick={() => handleBought(props.name)}>Kup</button>
        </div>
    )
}

export default ShopItem
