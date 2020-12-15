import React from 'react'
import './Navbar.scss';

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="logo">Salsa Timer</div>
      <div class="navbar-buttons">
        <button><i class="fas fa-cog"></i></button>
      </div>
    </div>
  )
}

export default Navbar
