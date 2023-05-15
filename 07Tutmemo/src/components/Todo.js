import React from 'react'
import {memo} from 'react';

const Todo = ({todo,addTodo}) => {
    console.log("Child render")
  return (
    <div>
      <h2>My Todos</h2>
      {
        todo.map((todo,index)=>{
            return <p key={index}>{todo}</p>;
        })
      }
      <button onClick={()=>addTodo(1)}>Add Todo</button>
    </div>
  )
}

export default memo(Todo);

