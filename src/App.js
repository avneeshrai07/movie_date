import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDate from './pages/MovieDate';
import song from "./pages/MP3/birthdaySong.mp3";
import Birthday from './pages/BirthDay';
import Wishes from './pages/Wishes';
function App() {

  const [userData, setUserData] = useState({
    name:'Namita',
    dob: '6th of July',
    gender: 'Girl',

    // copy paste any Route path name here without ("/")
    page:'Birthday',
    
  });


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/date" element={<Home userData={userData}/>}/>
          <Route path="/MovieDate" element={<MovieDate userData={userData}/>} />
          <Route path="/Birthday" element={<Birthday userData={userData}/>} />
          <Route path="/Wishes" element={<Wishes userData={userData}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
