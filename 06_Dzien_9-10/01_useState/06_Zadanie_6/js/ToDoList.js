import React, {useState} from "react"

function ToDoList() {
    const [tasks, setTasks] = useState([])

    const handleButton = () => {
        setTasks(prevState => [...prevState, `Zadanie ${tasks.length + 1}`])
    }

    return (
        <>
            <button onClick={handleButton}>Dodaj zadanie</button>
            <ul>
                {tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ul>
        </>
    )
}

export default ToDoList
