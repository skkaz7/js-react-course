import React, {useState} from "react"

function UpperLower() {
    const [text, setText] = useState("Hello")

    const handleUpper = () => {
        setText(prevState => prevState.toUpperCase())
    }
    const handleLower = () => {
        setText(prevState => prevState.toLowerCase())
    }

    return (
        <>
            <h2>{text}</h2>
            <button onClick={handleUpper}>Uppercase</button>
            <button onClick={handleLower}>Lowercase</button>
        </>
    )
}

export default UpperLower
