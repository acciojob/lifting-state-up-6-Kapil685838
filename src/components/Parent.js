import React, { useState } from 'react'
import Child from './Child';

function Parent() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Learn React', completed: false},
        {id: 2, text: 'Build a React app', completed: false},
        {id: 3, text: 'Deploy the React app', completed: false}
    ]);

    const handleCompletion = (id) => {
        setTodos(() => {
            return todos.map((todo) => {
                if(todo.id === id){
                    return {...todo, completed: true}
                }
                return todo;
            })
        })
    }

    return (
        <div>
            <h1>Parent Component</h1>
            <Child todos={todos} onComplete={handleCompletion}/>
        </div>
    )
}

export default Parent
