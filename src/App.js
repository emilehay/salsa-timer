import React, { useState, useEffect } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import OptionsPopup from './components/Options-popup/Options-popup'
import Timer from './components/Timer/Timer'

function App() {

  const [activeTimer, setActiveTimer] = useState(0)
  const [timerTimes, setTimerTimes] = useState([1, 1, 1])

  const [pomodoroIndex, setPomodoroIndex] = useState(0)
  const [pomodoroOrder, setPomodoroOrder] = useState([0, 1, 0, 1, 0, 1, 0, 2])

  const [optionsPopupOpen, setOptionsPopupOpen] = useState(false)

  useEffect(() => {
    setActiveTimer(pomodoroOrder[pomodoroIndex]);
  }, [pomodoroOrder, pomodoroIndex])

  const goToNextTimer = () => {
    if(pomodoroIndex < pomodoroOrder.length - 1){
      setPomodoroIndex(pomodoroIndex + 1)
    } else {
      setPomodoroIndex(0);
    }
  }

  const manuallySetActiveTimer = (selectedTimer) => {
    
    let found = false;

    for(var i = pomodoroIndex; i < pomodoroOrder.length; i++){
      if(pomodoroOrder[i] === selectedTimer){
        found = true;
        setPomodoroIndex(i);
        break;
      }
    }

    if(found === false){
      for(var j = 0; j < pomodoroIndex; j++){
        if(pomodoroOrder[j] === selectedTimer){
          setPomodoroIndex(j);
          break;
        }
      }
    }
  }

  return (
    <div className="App">
      <Navbar
        activeTimer={activeTimer}
        clickOptionsButton={() => { setOptionsPopupOpen(true) }}
        manuallySetActiveTimer={manuallySetActiveTimer}
      />
      <OptionsPopup
        clickOffPopup={() => { setOptionsPopupOpen(false) }}
        optionsPopupOpen={optionsPopupOpen}
        setTimerTimes={setTimerTimes}
        timerTimes={timerTimes}
      />
      <Timer
        activeTimer={activeTimer}
        goToNextTimer={goToNextTimer}
        timerMinutes={timerTimes[activeTimer]}
      />
    </div>
  );
}

export default App;
