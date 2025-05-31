import React from 'react'
import { useState, useEffect } from "react"
import { useForm } from 'react-hook-form';
import TodoListing from './TodoListing'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup' //alias




//performing side effects in React


const schema = Yup.object({
  title:Yup.string().required('Please provide the title').min(4, 'Please enter at least 3 chars').max(15, 'mx 15 chars are allowed').trim(),
  description:Yup.string().required('Please provide the Description').min(10, 'Please enter at least 10 chars').max(600, 'mx 600 chars are allowed').trim()
})

function TodoForm() {
    const {register, handleSubmit, formState:{errors}} = useForm({
    resolver:yupResolver(schema),
    defaultValues: {
      title: '',
      description: ''
    }
  });


  const [todos, setTodos]=useState([]);

  const onSubmit = (data)=>{

    const newTodo = {
      ...data,
      id:Date.now()
    }

    setTodos([...todos, newTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  useEffect(()=>{
    const todosStr = localStorage.getItem('todos');
    setTodos(JSON.parse(todosStr) || []);
  }, [])

  

  return (
      <>
        <div className="form-wrapper w-50 m-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" {...register('title')} name="title" className="form-control" id="title" placeholder="Enter Title"/>
                {errors.title && <p className="text-danger">{errors.title.message}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" {...register('description')} name="description" className="form-control" id="description" placeholder="Enter description"/>
                {errors.description && <p className="text-danger">{errors.description.message}</p>}
              </div>
              <button className="btn btn-primary w-100" type="submit">Save Todo</button>
            </form>
        </div>
        <TodoListing todoList={todos}/>
      </>
  )
}

export default TodoForm