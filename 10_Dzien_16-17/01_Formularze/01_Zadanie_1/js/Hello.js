import React, {useState} from "react";


function Hello() {
    const [name, setName] = useState('user')

    return (
        <form>
            <input type='text' value={name} onChange={event => setName(event.target.value)}/>
            <h1>Hello, {name}!</h1>
        </form>
    )
}

export default Hello
