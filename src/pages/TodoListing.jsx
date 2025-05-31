import React, {useState} from 'react'
import { Link } from 'react-router';
import Modal from '../components/Modal';

function TodoListing({todoList}) {

  const [shoModal, setShowModal] = useState(false)

  function convertTimestampToReadableDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString(); // You can use .toDateString(), .toTimeString(), etc. if needed
  }

  const handleDelete = (id)=>{
    const todos = JSON.parse(localStorage.getItem('todos'));
    const foundTodo = todos.find((todo)=>todo.id == id);
    
    const newArr = todos.filter((todo)=> todo.id != id);

    localStorage.setItem('todos', JSON.stringify(newArr));   

    window.location.reload()
  }


  const handlePopup=(val)=>{
    setShowModal(val)
  }

  return (
      <div className="form-wrapper w-50 m-5">
        {
        todoList.length == 0 ? <div className="card card border-primary mb-3 mt-3">
            <div className="card-body">
              <p className="card-text">No Todos Found!</p>
            </div>
        </div>:
          todoList.map((todo)=>(
            <div key={todo.id} className="card card border-primary mb-3 mt-3">
                <div className="card-body">
                  <Link to={`/todo/${todo.id}`}>
                    <h5 className="card-title">{todo.title}</h5>
                  </Link>
                </div>
                <div className="card-header text-sm fst-italic text-muted d-flex justify-content-between align-items-center">
                <span>Created At: {convertTimestampToReadableDate(todo.id)}</span>
                <div>
                  <span onClick={()=>handleDelete(todo.id)}><i className="bi bi-trash btn btn-danger me-2"></i></span>
                  <span onClick={()=>handlePopup(true)}><i className="bi bi-pencil-square btn btn-info"></i></span>
                </div>
              </div>
            </div>
          ))
        }
        {
          shoModal ? <Modal handlePopup={handlePopup}/>:null
        }
      </div>
  )
}

export default TodoListing