import React from 'react'
import ButtonGroup from './../Button-group/Button-group';
import './Navbar.scss';

const Navbar = ({ activeTimer, setActiveTimer, clickOptionsButton }) => {

  return (
    <div className="navbar">
      <ButtonGroup activeTimer={activeTimer} setActiveTimer={setActiveTimer} />
      <div className="navbar-buttons">
        <button onClick={clickOptionsButton}><i className="fas fa-cog"></i></button>
      </div>
    </div>
  )
}

export default Navbar
