import React, { useRef, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

  const useRef(() => {
    let intervalRef;
    if (isRunning) {
      intervalRef = setInterval()
    }
  })
  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>Stopwatch Time</h1>
        <section className='buttons'>
          <button className="start-btn">START</button>
          <button className="stop-btn">STOP</button>
          <button className="lap-btn">LAP</button>
          <button className="reset-btn">RESET</button>
        </section>
      </section>
      <section className='lap-section'>
        <h2>Laps</h2>
        <section className='laps'>
          <p>lap</p>
          <p>lap</p>
          <p>lap</p>
        </section>
      </section>
    </div>
  )
}


export default App;
