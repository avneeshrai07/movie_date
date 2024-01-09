import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Hiba
 from './pages/Hiba';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/movie_date" element={<Home/>}/>
          <Route path="/hiba" element={<Hiba />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
