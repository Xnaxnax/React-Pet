import React, { useState } from "react";
import {v4 as uuidv4} from "uuid"

function AddToDo({todo, setTodo}) {

    const [value,setValue] = useState('')


    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    return (
        <div>
            <input
            placeholder="Введите задачу"
            type="text" 
            value={value}
            onChange={ (e) => setValue(e.target.value) }
            />
            <button onClick={saveTodo}>Сохранить</button>
        </div>
    )
}

export default AddToDo;