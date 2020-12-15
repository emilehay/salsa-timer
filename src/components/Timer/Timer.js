import React, { useEffect } from 'react'
import { useTimer } from 'react-timer-hook';
import './Timer.scss';

const Timer = ({ goToNextTimer, timerMinutes }) => {

  const toTimestamp = (timerMinutes) => {
    let time = new Date();
    return time.setMinutes(time.getMinutes() + timerMinutes);
  }

  const restartTimer = () => {
    restart(toTimestamp(timerMinutes));
    setTimeout(() => {
      pause();
    }, 100)
  }

  const getMinutes = () => {
    return minutes >= 10 ? minutes : '0' + minutes; 
  }

  const getSeconds = () => {
    return seconds >= 10 ? seconds : '0' + seconds; 
  }

  let expiryTimestamp = toTimestamp(timerMinutes);

  const {
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => { goToNextTimer() }});

  //Stop timer from running automatically when the page loads
  useEffect(() => {
    pause()
  }, []);

  //When the timerMinutes changes, reset the timer
  useEffect(() => {
    restart(toTimestamp(timerMinutes));
    setTimeout(() => {
      pause();
    }, 100)
  }, [timerMinutes])
  
  return (
    <div className="timer">
      <h2>{getMinutes()}:{getSeconds()}</h2>
      <div className="buttons-wrapper">
        {isRunning ? (
          <button onClick={pause}><i className="fas fa-pause"></i></button>
        ) : (
          <button onClick={resume}><i className="fas fa-play"></i></button>
        )}
        <button onClick={() => { restartTimer() }}><i className="fas fa-undo-alt"></i></button>
      </div>
    </div>
  )
}

export default Timer
