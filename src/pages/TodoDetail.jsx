import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'


function TodoDetail() {
    const {id} = useParams()

    const [todo, setTodo] = useState({})

    useEffect(()=>{
        let todos = JSON.parse(localStorage.getItem('todos'));
        const foundTodo = todos.find((t)=>t.id == id);
        setTodo(foundTodo);
    }, [])

  return (
    <div className='container'>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
    </div>
  )
}

export default TodoDetail