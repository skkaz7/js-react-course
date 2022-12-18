// Osobny useState dla każdego pola

// import React, {useState} from "react";
//
// function Form() {
//     const [name, setName] = useState('')
//     const [age, setAge] = useState('')
//
//     const handleSubmit = e => {
//         e.preventDefault()
//         console.log(`Imię: ${name}`)
//         console.log(`Wiek: ${age}`)
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type='text' value={name} onChange={event => setName(event.target.value)}/>
//             <input type='number' value={age} onChange={event => setAge(event.target.value)}/>
//             <input type='submit' value='Wyślij'/>
//         </form>
//     )
// }
//
// export default Form

//Wspólny useState dla wszystkich pól

import React, {useState} from "react";

function Form() {
    const [form, setForm] = useState({name: '', age: ''})

    const handleChange = e => {
        const {name, value} = e.target
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(`Imię: ${form.name}`)
        console.log(`Wiek: ${form.age}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={form.name} onChange={handleChange}/>
            <input type='number' name='age' value={form.age} onChange={handleChange}/>
            <input type='submit' value='Wyślij'/>
        </form>
    )
}

export default Form
