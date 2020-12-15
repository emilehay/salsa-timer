import React, { useState } from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Timer from './components/Timer/Timer';

function App() {

  const [activeTimer, setActiveTimer] = useState(0);
  const [timerTimes, setTimerTimes] = useState([25, 5, 15]);

  return (
    <div className="App">
      <Navbar activeTimer={activeTimer} setActiveTimer={setActiveTimer} />
      <Timer timerMinutes={timerTimes[activeTimer]} />
    </div>
  );
}

export default App;
