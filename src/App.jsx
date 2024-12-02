import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home.jsx';
import Network from './components/network/Network.jsx';
import Location from './components/network/Location.jsx';
import Entity from './components/entity/Entity.jsx';
import Entity2 from './v2/pages/entity';
import FourZeroFour from './components/fourzerofour/FourZeroFour.jsx';
import Services from './components/services/Services.jsx';
import Header from './components/layout/Header.jsx';
import Work from './pages/Work';
import Work2 from './v2/pages/work';
import About from './v2/pages/about';
import Services2 from './v2/pages/services';
// import CaseStudy from './pages/Case/index.jsx';

import CaseStudy from './pages/Case';
import Hometwo from './components/hometwo/Hometwo.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Hometwo />} />
        <Route path='/network' element={<Network />} />
        <Route path='/location' element={<Location />} />
        <Route path='/entity' element={<Entity />} />
        <Route path='/entity2' element={<Entity2 />} />
        <Route path='/work' element={<Work />} />
        <Route path='/work2' element={<Work2 />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services2' element={<Services2 />} />
        <Route path='/header' element={<Header />} />
        <Route path='*' element={<FourZeroFour />} />
        <Route path='/work/case-study/:slug' element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
