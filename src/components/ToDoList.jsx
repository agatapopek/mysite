import { useState } from "react";

export default function ToDoList (){
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);

    function addTask(){
        if(input.trim() !== ''){
            setTasks([...tasks, input]);
            setInput('')
        }
    }

    function removeTask(index) {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
        }

        return (
            <div>
            <h1>To-Do List</h1>
            <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Enter a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task} <button onClick={() => removeTask(index)}>Remove</button>
                </li>
            ))}
            </ul>
            </div>
    );
}