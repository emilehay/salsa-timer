import React from 'react'
import ButtonGroup from './../Button-group/Button-group';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <ButtonGroup />
      <div className="navbar-buttons">
        <button><i className="fas fa-cog"></i></button>
      </div>
    </div>
  )
}

export default Navbar
