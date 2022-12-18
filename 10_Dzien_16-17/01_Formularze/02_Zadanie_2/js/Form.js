import React, {useState} from "react";

import FakeAPI from "./data/fakeAPI";


function Form() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [userData, setUserData] = useState(null)

    const handleError = e => {
        e.preventDefault()

        if (username.length <= 2) {
            setError('Nazwa użytkownika musi mieć więcej niż 2 znaki')
            return
        }

        if (password.length <= 4) {
            setError('Hasło musi mieć więcej niż 4 znaki')
            return
        }

        FakeAPI.login({
            username: username,
            password: password
        }).then(user => {
            setUserData(user)
            setError(null)
        }).catch(err => {
            setError(err)
        })

    }

    return (
        <>
            {!userData && <form>
                <input type='text' value={username} onChange={event => setUsername(event.target.value)}/>
                <input type='password' value={password} onChange={event => setPassword(event.target.value)}/>
                <button onClick={handleError}>Zaloguj</button>
            </form>}
            {userData && <h2>Witaj {userData.name} {userData.surname}!</h2>}
            {error && <h1>{error}</h1>}
        </>
    )
}

export default Form
