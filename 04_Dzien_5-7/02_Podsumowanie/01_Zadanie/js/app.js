// import React, {Component} from "react";
// import ReactDOM from "react-dom";
//
// import products from "./data/products";
//
// function Receipt(props) {
//     return (
//         <table className="table">
//             <thead>
//             <tr>
//                 <th>Nazwa</th>
//                 <th>Cena</th>
//                 <th>Ilość</th>
//                 <th>Łączna cena</th>
//             </tr>
//             </thead>
//             <tbody>
//
//             {props.items.map(item => {
//                 return (
//                     <tr>
//                         <td>{item.name}</td>
//                         <td>{item.single_price}</td>
//                         <td>{item.qty}</td>
//                         <td>{(item.qty * item.single_price).toFixed(2)}</td>
//                     </tr>
//                 )
//             })}
//
//             <tr>
//                 <td>RAZEM</td>
//                 <td>---</td>
//                 <td>---</td>
//                 <td>{(props.items.reduce(function (total, item) {
//                     return total + (item.qty * item.single_price)
//                 }, 0)).toFixed(2)}</td>
//             </tr>
//
//             </tbody>
//         </table>
//     )
// }
//
// function App() {
//     return <Receipt items={products}/>
// }
//
// ReactDOM.render(<App/>, document.getElementById("app"));


import React, {Component} from "react";
import ReactDOM from "react-dom";

import products from "./data/products";

function Receipt(props) {
    return (
        <table className="table">
            <ReceiptHeader>
                <th>Nazwa</th>
                <th>Cena</th>
                <th>Ilość</th>
                <th>Łączna cena</th>
            </ReceiptHeader>
            <ReceiptItems>
                {props.items.map(item => {
                    return (
                        <ReceiptItem>
                            <td>{item.name}</td>
                            <td>{item.single_price}</td>
                            <td>{item.qty}</td>
                            <td>{(item.qty * item.single_price).toFixed(2)}</td>
                        </ReceiptItem>
                    )
                })}
            </ReceiptItems>
            <ReceiptFooter>
                <td>RAZEM</td>
                <td>---</td>
                <td>---</td>
                <td>{(props.items.reduce(function (total, item) {
                    return total + (item.qty * item.single_price)
                }, 0)).toFixed(2)}</td>
            </ReceiptFooter>
        </table>
    )
}

function ReceiptHeader(props) {
    return (
        <thead>
        <tr>
            {props.children}
        </tr>
        </thead>
    )
}

function ReceiptFooter(props) {
    return (
        <tr>
            {props.children}
        </tr>)
}

function ReceiptItems(props) {
    return (
        <tbody>
        {props.children}
        </tbody>
    )
}

function ReceiptItem(props) {
    return (
        <tr>
            {props.children}
        </tr>
    )
}

function App() {
    return <Receipt items={products}/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
