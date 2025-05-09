import { useState } from "react"



function App() {

  const [todo, setTodo] = useState({
    title:'',
    description:''
  });

  const [errors, setErrors] = useState({
    title:'',
    description:''
  });

  const [todos, setTodos] = useState([]);

  const handleInput = (e)=>{
    const {name, value} = e.target;
    setTodo({...todo, [name]:value})
  }


  const handleSubmit=(e)=>{
    e.preventDefault();

    if(todo.title == ''){
      setErrors({...errors, title:`Please provide the title`});
      return;
    }
    if(todo.description == ''){
      setErrors({...errors, description:`Please provide the description`});
      return;
    }

    const newTodo = {
      ...todo,
      id:Date.now()
    }
    setTodos([...todos, newTodo]);
   
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
            <input type="text" name="title" className="form-control" id="title" placeholder="Enter Title" onChange={handleInput}/>
            <p className="text-danger">{errors.title && errors.title}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" name="description" className="form-control" id="description" placeholder="Enter description" onChange={handleInput}/>
            <p className="text-danger">{errors.description && errors.description}</p>
          </div>
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
                  <span><i className="bi bi-trash btn btn-danger me-2"></i></span>
                  <span><i className="bi bi-pencil-square btn btn-info"></i></span>
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

