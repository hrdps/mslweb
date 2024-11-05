import './App.css';
// import Home_ from './components/home/Hometwo.jsx';
import Home_ from './components/home/Homethree.jsx';
import Spline1 from './components/spline/Spline.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Network from './components/network/Network.jsx';
import Location from './components/network/Location.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home_ />} />
        <Route path='/ho' element={<Spline1 />} />
        <Route path='/network' element={<Network />} />
        <Route path='/location' element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
