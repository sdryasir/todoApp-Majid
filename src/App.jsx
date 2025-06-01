import './App.css'
import About from "./pages/About";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router";
import TodoDetail from "./pages/TodoDetail";
import { menu_options } from "./menu_options";
import Navbar from "./components/Navbar";
import { createContext, useEffect, useState } from 'react';


export const CountContext = createContext();


function App() {


  const [num, setNum] = useState(100);
  const [todoCount, setTodoCount] = useState(0);
  const [cart, setCart] = useState([]);


  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'));
    setTodoCount(todos.length)
  }, [todoCount, setTodoCount])


  return (
    <CountContext.Provider value={{num, setNum, todoCount, setTodoCount, cart, setCart}}>
      <BrowserRouter>
        <div className="container">
          <Navbar menu_options={menu_options}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/todo/:id" element={<TodoDetail/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CountContext.Provider>
  )
}

export default App







// const a = function(){

// }

// test(function(){});


// function test(a){
//   a();
// }

