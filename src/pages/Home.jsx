import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Navbar from '../components/Navbar'
import { menu_options } from '../menu_options'
// Props: the way that we use to share the data across the components
//Data flow in react is unidirectional = parent to ->child
/*if there deep nested child and we are asked to send the data from root 
component to all the way leaf node, we do props drilling, 
which is not recomended
*/

/*
we can send the data, function and component as a prop to another
*/



function Home() {
 
  return (
    <div className='container'>
        <Navbar menu_options={menu_options}/>
        <TodoForm/>
    </div>
  )
}

export default Home