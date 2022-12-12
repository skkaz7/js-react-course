import React, {useState} from "react"

function Numbers() {
    let num_array = [54, 77, 24, 63, 4, 53, 82, 36, 13, 81, 10, 69, 4, 23, 40]
    const [numbers, setNumbers] = useState(num_array)

    const handleEven = () => {
        setNumbers(prevState => prevState.filter(num => {
            return num % 2 === 0
        }))
    }
    const handleAll = () => {
        setNumbers(num_array)
    }
    const handleOdd = () => {
        setNumbers(prevState => prevState.filter(num => {
            return num % 2 !== 0
        }))
    }

    return (
        <>
            <ul>
                {numbers.map((number, index) => <li key={index}>{number}</li>)}
            </ul>
            <button onClick={handleEven}>Pokaż tylko parzyste</button>
            <button onClick={handleAll}>Pokaż wszystkie</button>
            <button onClick={handleOdd}>Pokaż nieparzyste</button>
        </>
    )
}

export default Numbers
