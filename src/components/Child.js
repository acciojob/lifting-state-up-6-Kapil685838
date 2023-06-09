import React from 'react'

function Child({ todos, onComplete }) {

    return (
        <div>
            <h2>Child Component</h2>
            <ul>
                {todos.map((todo) => 
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        {!todo.completed && <button onClick={() => {
                            onComplete(todo.id)
                        }}>Completed</button>}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Child
