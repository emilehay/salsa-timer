import React from 'react'
import './Options-popup.scss';

const OptionsPopup = ({ clickOffPopup, optionsPopupOpen , setTimerTimes, timerTimes }) => {

  const onTimerChange = e => setTimerTimes({
    ...timerTimes,
    [e.target.name]: Number.parseInt(e.target.value)  
  });

  return (
    <div className={["options-popup", optionsPopupOpen ? "open" : undefined].join(" ")}>
      <div className="popup-body">
        <h3>Salsa Timer</h3>
        <form className="options-fields">
          <div className="row">
            <div className="col">
              <label htmlFor='0'>Pomodoro</label>
              <input type='number' name='0' onChange={onTimerChange} value={timerTimes[0]}></input>
            </div>
            <div className="col">
              <label htmlFor='1'>Short rest</label>
              <input type='number' name='1' onChange={onTimerChange} value={timerTimes[1]}></input>
            </div>
            <div className="col">
              <label htmlFor='2'>Long rest</label>
              <input type='number' name='2' onChange={onTimerChange} value={timerTimes[2]}></input>
            </div>
          </div>
        </form>
      </div>
      <div className="popup-background" onClick={clickOffPopup}></div>
    </div>
  )
}

export default OptionsPopup
