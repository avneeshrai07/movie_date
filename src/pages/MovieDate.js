import React, { useState } from 'react';
import './CSS/movieDate.css';

function MovieDate() {
  const [userClickedYes, setUserClickedYes] = useState(false);
  const [userClickedNo, setUserClickedNo] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const handleYesClick = () => {
    setUserClickedYes(true);
    setUserClickedNo(false);
    setDisplayText("Yesss, I knew it!");
  };

  const handleNoClick = () => {
    setUserClickedYes(false);
    setUserClickedNo(true);
    setDisplayText("Sorry,Wrong Button.");
    const noButton = document.querySelector('.no');
    if (noButton) {
      noButton.style.position = 'absolute';
      noButton.style.left = `${Math.random() * window.innerWidth}px`;
      noButton.style.top = `${Math.random() * window.innerHeight}px`;
    }
  };

  return (
    <div className={`MovieDate ${userClickedYes ? 'yes-animation' : userClickedNo ? 'no-animation' : 'wait-animation'}`}>
      <div className='MovieDate_animation'></div>
      <div className='content'>
        <h1 className='date'>Would you like to join me for a movie sometime?</h1>
        <div className='button-container'>
          <button className='yes' onClick={handleYesClick}>
            Yes
          </button>
          <button className='no' onClick={handleNoClick}>
            No
          </button>
        </div>
        <h3>{displayText}</h3>
      </div>
    </div>
  );
}

export default MovieDate;
