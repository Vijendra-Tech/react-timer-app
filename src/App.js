import React, { useRef, useState, useEffect } from 'react';
import './style.css';
import TextTimer from './Input';

export default function App() {
  const intRef = useRef(null);
  const txtRef = useRef(null);
  const [time, setTime] = useState(0);
  const [hasStarts, setHasStarted] = useState(false);

  const startWatch = () => {
    setHasStarted(true);
    txtRef.current.start();
  };
  useEffect(() => {
    let intId;
    if (hasStarts) {
      intId = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      intRef.current = intId;
    }
    return () => {
      clearInterval(intId);
    };
  });

  const stopWatch = () => {
    const intId = intRef.current;
    clearInterval(intId);
    setHasStarted(false);
    setTime(0);
    txtRef.current.stop();
  };
  return (
    <div>
      <TextTimer ref={txtRef} />
      <h1>Timer ={time}</h1>
      <button onClick={startWatch}>Start</button>
      <button onClick={stopWatch}>Stop</button>
    </div>
  );
}
