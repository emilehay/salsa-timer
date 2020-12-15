import React from 'react'
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Salsa Timer</div>
      <div className="navbar-buttons">
        <button><i className="fas fa-cog"></i></button>
      </div>
    </div>
  )
}

export default Navbar
