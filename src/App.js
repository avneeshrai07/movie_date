import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDate from './pages/MovieDate';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/movieDate" element={<MovieDate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
