// Osobna metoda zapisująca dla każdego pola

// import React, {Component} from "react";
//
// class FormExample extends Component {
//     state = {
//         name: ''
//     }
//     handleNameChange = e => {
//         this.setState({
//             name: e.target.value
//         })
//     }
//     handleSubmit = e => {
//         e.preventDefault()
//         console.log(this.state.name)
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>Imię i nazwisko:</label><br/>
//                 <input type='text' name={this.state.name} onChange={this.handleNameChange}/>
//                 <input type='submit' value='Wyślij'/>
//             </form>
//         )
//     }
// }
//
// export default FormExample


//Wspólna metoda zapisująca dla wszystkich pól

import React, {Component} from "react";

class FormExample extends Component {
    state = {
        name: '',
        password: ''
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(`Nazwa: ${this.state.name}`)
        console.log(`Hasło: ${this.state.password}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Nazwa:</label>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                <label>Hasło:</label>
                <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                <input type='submit' value='Wyślij'/>
            </form>
        )
    }
}

export default FormExample
