import React, { useState, useRef, useEffect } from 'react';
import birthdaySong from "./birthdaySong.mp3";
import './birthDay.css';

function BirthDay(props) {
  const name = props.userData.name;
  
  const [clicked, setClicked] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    setClicked(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className={`landing-page ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      {!clicked && <div className="img1" />}
      {clicked && (
        <div className="overlay">
          <h1>Happy Birthday</h1>
          <h1>{name} !!</h1>
          <audio ref={audioRef} src={birthdaySong} autoPlay />
        </div>
      )}
    <div class="snowflake">❅</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  <div class="snowflake">❄</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  <div class="snowflake">❄</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  <div class="snowflake">❄</div>

  <div class="snowflake">❅</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  <div class="snowflake">❄</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  <div class="snowflake">❄</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  <div class="snowflake">❄</div>
    </div>
  );
}

export default BirthDay;
