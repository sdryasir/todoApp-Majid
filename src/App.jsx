import About from "./pages/About";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router";
import TodoDetail from "./pages/TodoDetail";
import { menu_options } from "./menu_options";
import Navbar from "./components/Navbar";


function App() {
  return (
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
  )
}

export default App







// const a = function(){

// }

// test(function(){});


// function test(a){
//   a();
// }

