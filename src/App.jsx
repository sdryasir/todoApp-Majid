import About from "./pages/About";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
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

