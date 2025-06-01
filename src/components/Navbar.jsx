import React from 'react'
import { Link } from 'react-router'
import { CountContext } from '../App';
import { useContext } from 'react';

function Navbar({menu_options}) {

  const {todoCount} = useContext(CountContext);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <Link class="navbar-brand" to={'/'}>Navbar</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        menu_options && menu_options.map((option)=>(
                        <li class="nav-item">
                            <Link class="nav-link" to={option.link}>{option.title}</Link>
                        </li>
                        ))
                    }
                    
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link" to={'#'}>{todoCount}</Link>
                    </li>               
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar