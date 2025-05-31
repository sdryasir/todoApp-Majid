import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
function Modal({handlePopup, todo}) {

  const [todos, setTodos] = useState([]);

  const {register, handleSubmit, formState:{errors}, reset, setValue} = useForm();

  const handlePrefill = ()=>{
    setValue('title', todo.title);
    setValue('description', todo.description);
  }

    const onSubmit = (data)=>{

      data.id = todo.id;
      const index = todos.findIndex((t)=>t.id == todo.id);
      const updatedTodos = [...todos];
      updatedTodos[index] = data;      
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      handlePopup(false);
      window.location.reload()
  }

  useEffect(()=>{    
    handlePrefill()
  },[todo])


  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'));
    setTodos(todos);
  },[handlePopup])

  return (
    <div className="my-modal">
      <div className="my-modal-inner p-5">

        <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" {...register('title')} name="title" className="form-control" id="title" placeholder="Enter Title"/>
                
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" {...register('description')} name="description" className="form-control" id="description" placeholder="Enter description"/>
                
              </div>
              <button className="btn btn-primary w-100" type="submit">Update Todo</button>
        </form>

        <div className="close" onClick={() => handlePopup(false)}>
          <span>x</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;




//   const {register, handleSubmit, formState:{errors}, reset} = useForm({
  //     defaultValues:{

  //     }
  //   });

  //   const onSubmit = (data)=>{

  //   const newTodo = {
  //     ...data,
  //     id:Date.now()
  //   }

  //   setTodos([...todos, newTodo]);

  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }
