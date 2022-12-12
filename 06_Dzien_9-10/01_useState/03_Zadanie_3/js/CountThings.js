import React, {useState} from "react";

function CountThings() {
    const [cash, setCash] = useState(10000)
    const [age, setAge] = useState(24)

    const handleCash = () => {
        setCash(prevState => prevState + 1000)
    }
    const handleAge = () => {
        setAge(prevState => prevState + 1)
    }

    return (
        <>
            <div>
                <p>{`💰 so much money: ${cash}`}</p>
                <p>{`Age: ${age}`}</p>
            </div>
            <button onClick={handleCash}>Get rich!</button>
            <button onClick={handleAge}>Get older :(</button>
        </>
    )
}

export default CountThings
