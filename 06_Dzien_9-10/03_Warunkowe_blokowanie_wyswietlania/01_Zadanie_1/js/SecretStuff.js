import React from "react"

// function SecretStuff(props) {
//     const {password, correctPassword, secret} = props
//     if (password !== correctPassword) {
//         return null
//     } else {
//         return <div>{secret}</div>
//     }
// }

function SecretStuff(props) {
    const {password, correctPassword, secret} = props

    return (
        <>
            {password === correctPassword ? <div>{secret}</div> : null}
        </>
    )
}

export default SecretStuff
