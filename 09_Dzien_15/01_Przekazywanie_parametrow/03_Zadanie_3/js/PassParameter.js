import React from "react"

function PassParameter() {
    const handleClickButton = (event, text) => {
        event.preventDefault()
        console.log(text)
    }

    return <button onClick={(event) => handleClickButton(event, 'Hello, World!')}><a href='#'>Click</a></button>
}

export default PassParameter
