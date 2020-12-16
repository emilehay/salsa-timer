import React, { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import OptionsPopup from './components/Options-popup/Options-popup'
import Timer from './components/Timer/Timer'

function App() {

  const [activeTimer, setActiveTimer] = useState(0)
  const [timerTimes, setTimerTimes] = useState([25, 5, 15])

  const [pomodoroIndex, setPomodoroIndex] = useState(1)
  const [pomodoroOrder, setPomodoroOrder] = useState([0, 1, 0, 1, 0, 1, 0, 2])

  const [optionsPopupOpen, setOptionsPopupOpen] = useState(false)

  const goToNextTimer = () => {
    if(pomodoroIndex < pomodoroOrder.length){
      setPomodoroIndex(pomodoroIndex + 1)
      setActiveTimer(pomodoroOrder[pomodoroIndex])
    } else {
      setPomodoroIndex(1);
      setActiveTimer(0);
    }
  }

  return (
    <div className="App">
      <Navbar
        activeTimer={activeTimer}
        clickOptionsButton={() => { setOptionsPopupOpen(true) }}
        setActiveTimer={setActiveTimer}
      />
      <OptionsPopup
        clickOffPopup={() => { setOptionsPopupOpen(false) }}
        optionsPopupOpen={optionsPopupOpen}
        setTimerTimes={setTimerTimes}
        timerTimes={timerTimes}
      />
      <Timer
        goToNextTimer={goToNextTimer}
        timerMinutes={timerTimes[activeTimer]}
      />
    </div>
  );
}

export default App;
