import React, { useState } from 'react'
import TdoForm from './TodoForm'
import TodoList from './TodoList';

function Todo() {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  return todos.map((todo, index) => (
    <div 
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
      key={index} 
    >
      <div key={todo.id} onClick={() => completeTodo(tod.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLineleLine />
        <TiEdit />
      </div>
    </div>
  ))
}

export default Todo