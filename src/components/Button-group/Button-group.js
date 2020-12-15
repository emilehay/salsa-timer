import React, { useState } from 'react'
import './Button-group.scss';

const ButtonGroup = ({ setActiveTimer }) => {

  const [timerItems, setTimerItems] = useState(["Pomodoro", "Short rest", "Long rest"]);

  return (
    <div className="button-group">
      {
        timerItems.map((timerItem, index) => (
          <button onClick={() => { setActiveTimer(index) }}>{timerItem}</button>
        ))
      }
    </div>
  )
}

export default ButtonGroup
