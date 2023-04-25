import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className='nav'>
        <strong ><Link to='/'>Volver a la página principal </Link></strong>
        </div>
        
    </div>
  )
}

export default Navbar