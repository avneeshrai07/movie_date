import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDate from './pages/MovieDate';
import BirthDay from './pages/BirthDay';
import song from "./pages/birthdaySong.mp3";
function App() {

  const [userData, setUserData] = useState({
    name:'Shreya',
    dob: '06/07/2024',
    gender: 'Female',

    // copy paste any Route path name here without ("/")
    page:'Birthday',
    
  });


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/date" element={<Home userData={userData}/>}/>
          <Route path="/MovieDate" element={<MovieDate userData={userData}/>} />
          <Route path="/Birthday" element={<BirthDay userData={userData}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
