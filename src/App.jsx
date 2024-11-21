import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home.jsx';
import Network from './components/network/Network.jsx';
import Location from './components/network/Location.jsx';
import Entity from './components/entity/Entity.jsx';
import FourZeroFour from './components/fourzerofour/FourZeroFour.jsx';
import Services from './components/services/Services.jsx';
import Header from './components/layout/Header.jsx';
import Work from './pages/Work';
import CaseStudy from './pages/Case';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/network' element={<Network />} />
        <Route path='/location' element={<Location />} />
        <Route path='/entity' element={<Entity />} />
        <Route path='/work' element={<Work />} />
        <Route path='/services' element={<Services />} />
        <Route path='/header' element={<Header />} />
        <Route path='*' element={<FourZeroFour />} />
        <Route path="/work/case-study/:slug" element={<CaseStudy />} />

      </Routes>
    </Router>

  );
}

export default App;
