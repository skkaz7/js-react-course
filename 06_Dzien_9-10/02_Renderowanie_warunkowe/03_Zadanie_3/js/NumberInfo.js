import React, {useState} from "react"

function NumberInfo(props) {
    return (
        <ul>
            <li>{`Liczba: ${props.number}`}</li>
            <li>{props.number % 2 === 0 ? 'Parzysta' : 'Nieparzysta'}</li>
            {props.number % 2 !== 0 && props.number % 3 !== 0 && props.number % 5 !== 0 && <li>Liczba pierwsza</li>}
            {Math.log2(props.number) % 1 === 0 && <li>Potęga liczby 2</li>}
        </ul>
    )
}

export default NumberInfo
