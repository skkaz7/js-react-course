import React, {useState} from "react"


function SelectOrType(props) {
    const [choice, setChoice] = useState(props.items[0])
    const [extra, setExtra] = useState('Inne')

    const handleClick = e => {
        e.preventDefault()
        const input = document.querySelector('input').value
        setExtra(input)
        setChoice(input)
    }

    return (
        <>
            <form>
                <select value={choice} onChange={event => setChoice(event.target.value)}>
                    {[...props.items, extra].map(option => <option key={option}>{option}</option>)}
                </select><br/>

                {choice === 'Inne' && <input type='text'/>}
                {choice === 'Inne' && <button onClick={handleClick}>Zatwierdź</button>}

            </form>
        </>
    )
}

export default SelectOrType
