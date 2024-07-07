import React, { useState, useRef, useEffect } from 'react';
import birthdaySong from "./MP3/birthdaySong.mp3";
import './CSS/wishes.css';

function Wishes(props) {
  const name = props.userData.name;
  const dob = props.userData.dob;
  const gender = props.userData.gender;
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
    
    {!clicked && (
      <div className='img1'>
          <div className="img1-content">
            <div className="img1-image" />
            <div className='WishText'>
            
            Today is {dob}—YOUR BIRTHDAY! 
            On this special day, I want to take a moment to express how deeply I cherish our friendship. 
            Oh {gender}! Your presence brings such warmth and joy to my life. 
            May your day be filled with the same extraordinary happiness and love that you effortlessly bring to everyone around you. 
            As you celebrate, know that you've touched my heart as no one else could. 
            <br></br>
            Let’s give a high five! 🖐 to my heart above.

            </div>
          </div>
        </div>
    )}
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

export default Wishes;
