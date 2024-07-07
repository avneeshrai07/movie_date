import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/birthday.css';

function BirthDay() {
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const navigate = useNavigate();

  const handleToggle = (index) => {
    const newCandles = [...candles];
    newCandles[index] = !newCandles[index];
    setCandles(newCandles);

    if (newCandles.every(candle => !candle)) {
      navigate('/Wishes')
    }
  };

  return (
    <div className='candlePage'>
      {candles.map((isLit, index) => (
        <div className="holder" key={index} onClick={() => handleToggle(index)}>
          <div className={`candle ${isLit ? '' : 'off'}`}>
            <div className="blinking-glow"></div>
            <div className="thread"></div>
            <div className="glow"></div>
            <div className="flame"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BirthDay;
