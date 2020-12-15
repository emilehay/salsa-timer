import React from 'react'
import './Timer.scss';

const Timer = () => {
  return (
    <div class="timer">
      <h2>25:00</h2>
      <div class="buttons-wrapper">
        <button><i class="fas fa-play"></i></button>
        <button><i class="fas fa-undo-alt"></i></button>
      </div>
    </div>
  )
}

export default Timer
