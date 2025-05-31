import React from "react";
import { useForm } from 'react-hook-form';
function Modal({handlePopup}) {

    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data)=>{

    const newTodo = {
      ...data,
      id:Date.now()
    }

    setTodos([...todos, newTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <div className="my-modal">
      <div className="my-modal-inner">

        <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" {...register('title')} name="title" className="form-control" id="title" placeholder="Enter Title"/>
                
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" {...register('description')} name="description" className="form-control" id="description" placeholder="Enter description"/>
                
              </div>
              <button className="btn btn-primary w-100" type="submit">Save Todo</button>
        </form>

        <div className="close" onClick={() => handlePopup(false)}>
          <span>x</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
