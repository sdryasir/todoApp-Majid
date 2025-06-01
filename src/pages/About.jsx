import React from 'react'
import { CountContext } from '../App'
import { useContext } from 'react'

function About() {
  const {num, setNum} = useContext(CountContext)
  return (
    <div className='container'>
        About - {num}
    </div>
  )
}

export default About