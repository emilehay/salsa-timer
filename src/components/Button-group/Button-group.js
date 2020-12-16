import React, { useState } from 'react'
import './Button-group.scss';

const ButtonGroup = ({ activeTimer, setActiveTimer }) => {

  const [timerItems, setTimerItems] = useState(["Pomodoro", "Short rest", "Long rest"]);

  return (
    <div className="button-group">
      {
        timerItems.map((timerItem, index) => (
          <button
            className={index === activeTimer ? 'active' : undefined}
            key={index}
            onClick={() => { setActiveTimer(index) }}
          >{timerItem}</button>
        ))
      }
    </div>
  )
}

export default ButtonGroup
