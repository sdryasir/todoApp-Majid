import { useState } from "react"


function App() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTitle = (e)=>{
    setTitle(e.target.value);
  }
  const handleDesc = (e)=>{
    setDescription(e.target.value);
  }


  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!title){
      setTitleError('Please provide the title')
      return;
    }
    if(!description){
      setDescriptionError('Please provide the description')
      return;
    }

    const todo = {
      id:Date.now(),
      title:title,
      description:description
    }
    setTodos([...todos, todo]);
  }


  function convertTimestampToReadableDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString(); // You can use .toDateString(), .toTimeString(), etc. if needed
  }


  return (
    <div className="container">
      <div className="form-wrapper w-50 m-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Enter Title" onChange={handleTitle}/>
            <p className="text-danger">{titleError && titleError}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" placeholder="Enter description" onChange={handleDesc}/>
            <p className="text-danger">{descriptionError && descriptionError}</p>
          </div>
          {/* <div className="mb-3">
            <div v className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" htmlFor="gridCheck">
                  Mark as completed
                </label>
            </div>
          </div> */}
          <button className="btn btn-primary w-100" type="submit">Save Todo</button>
        </form>

        {
          todos.length == 0 ? <div className="card card border-primary mb-3 mt-3">
            <div className="card-body">
              <p className="card-text">No Todos Found!</p>
            </div>
        </div>:
          todos.map((todo)=>(
            <div key={todo.id} className="card card border-primary mb-3 mt-3">
                <div className="card-body">
                  <h5 className="card-title">{todo.title}</h5>
                  <p className="card-text">{todo.description}</p>
                </div>
                <div className="card-header text-sm fst-italic text-muted d-flex justify-content-between align-items-center">
                <span>Created At: {convertTimestampToReadableDate(todo.id)}</span>
                <div>
                  <span><i class="bi bi-trash btn btn-danger me-2"></i></span>
                  <span><i class="bi bi-pencil-square btn btn-info"></i></span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App





// JSX rules
//1 every tag must have closing tag
//2 every component must be capitalized
//3 every component must return a single element
//4 every component must be self closing.
//5 XML can have custom tags
//6 we cannot use any code block in jsx 







// const a = function(){

// }

// test(function(){});


// function test(a){
//   a();
// }

