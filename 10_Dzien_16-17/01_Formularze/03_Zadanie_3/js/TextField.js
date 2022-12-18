import React, {useState} from "react";


function TextField() {
    const [title, setTitle] = useState('Sebastian')

    return (
        <>
            <div>
                <p>{title}</p>
                <select value={title} onChange={event => setTitle(event.target.value)}>
                    <option value='Sebastian'>Sebastian</option>
                    <option value='Jan'>Jan</option>
                    <option value='Dawid'>Dawid</option>
                </select>
                <span>{title.length}</span>
            </div>
        </>
    )
}

export default TextField
