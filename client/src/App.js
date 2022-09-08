import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import DiegoAbout from './DiegoAbout';
import SihamAbout from './SihamAbout';
import NeelAbout from './NeelAbout';
import Home from './Home';
import HemantAbout from './HemantAbout';
import RobertAbout from './RobertAbout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is our about list</h1>
      </header>

      <div className='nav-div'>
        <Link className="team-names" to="/"><li>Home</li></Link>
        <Link className="team-names" to="/DiegoAbout"><li>Diego Islas</li></Link>
        <Link className="team-names" to="/SihamAbout"><li>Siham Argaw</li></Link>
        <Link className="team-names" to="/HemantAbout"><li>Hemanta Thapa</li></Link>
        <Link className="team-names" to="/NeelAbout"><li>Neel Manthani</li></Link>
        <Link className="team-names" to="/RobertAbout"><li>Robert Sato</li></Link>
      </div>

      <div className='main-container'>
        <Routes>
          <Route path='/SihamAbout' element={<SihamAbout />} />
          <Route path='/DiegoAbout' element={<DiegoAbout />} />
          <Route path='/HemantAbout' element={<HemantAbout />} />
          <Route path='/NeelAbout' element={<NeelAbout />} />
          <Route path='/RobertAbout' element={<RobertAbout />} />
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
