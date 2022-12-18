import React, {useState} from "react";

import ShopItem from "./ShopItem";

const products = [
    {
        name: 'MacBook Pro',
        isBought: false,
    },
    {
        name: 'Dell X5500',
        isBought: false,
    },
    {
        name: 'Asus NT6000',
        isBought: false,
    }
];

function Shop() {
    const [buyList, setBuyList] = useState(products)

    const handleBought = (product) => {
        setBuyList([
            ...buyList.map(item => {
                if (item.name === product) {
                    item.isBought = true
                }

                return item
            })
        ])
    }

    return (
        <div>
            <ul>
                {buyList.map(product => {
                    return <ShopItem key={product.name} name={product.name} isBought={product.isBought} onDone={handleBought}/>
                })}
            </ul>
            <ul>
                {}
            </ul>
        </div>

    )
}

export default Shop
