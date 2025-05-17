import React from 'react'

function TodoListing({todoList}) {

  function convertTimestampToReadableDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString(); // You can use .toDateString(), .toTimeString(), etc. if needed
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
                  <h5 className="card-title">{todo.title}</h5>
                  <p className="card-text">{todo.description}</p>
                </div>
                <div className="card-header text-sm fst-italic text-muted d-flex justify-content-between align-items-center">
                <span>Created At: {convertTimestampToReadableDate(todo.id)}</span>
                <div>
                  <span><i className="bi bi-trash btn btn-danger me-2"></i></span>
                  <span><i className="bi bi-pencil-square btn btn-info"></i></span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
  )
}

export default TodoListing