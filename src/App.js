import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDate from './pages/MovieDate';
function App() {

  const [userData, setUserData] = useState({
    name:'HIBA',
    dob: null,
    gender: 'Female',
    heightFeet: 5,
    heightInches: 4,
    currentWeight: 54,
    weightGoal: 65,
    currentWater:0,
    waterGoal:3000,
    currentwaterStreak:10,
    currentSanpStreak:25,
    longestSanpStreak:50,
    snapStreakGoal:75,
    currentBmi:0,
    currentBmiStage:'',
  });


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/date" element={<Home userData={userData}/>}/>
          <Route path="/movieDate" element={<MovieDate userData={userData}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
