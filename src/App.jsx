import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Blog from './components/Blog';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import Login from './components/Login';
import Admin from './Admin/Admin';
import PortfolioEdit from "./Admin/Portofolioedit";




function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };
  return (

   
    <Router>
      <nav className="navbar">
      <div className="kiri">IlhamAditya();</div>
      <div className="tengah">
        <ul>
          <li><Link to="/" className="nav-hover">Home</Link></li>
          <li><Link to="/About" className="nav-hover">About</Link></li>
          <li><Link to="/Portofolio" className="nav-hover">Portofolio</Link></li>
          <li><Link to="/Blog" className="nav-hover">Blog</Link></li>
        </ul>
        </div>

        <div className="kanan">
            <a href="https://github.com/IlhamAditya2" target="_blank" rel="noopener noreferrer">
                <img src="/logoGithub.png" alt="GitHub" className="logo" />
            </a>
        </div>
      </nav>

        <div className="rawr">
            <div className="kiri1">IlhamAditya();</div>
            <div className="toggle-btn" onClick={toggleMenu}>
                <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>
        </div>

        {/* {isOpen && ( */}
        <div className={`dropdown dropdown-enter ${isOpen ? 'dropdown-show' : ''}`}>
          <li><Link to="/" className="nav-hover" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/About" className="nav-hover" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/Portofolio" className="nav-hover" onClick={() => setIsOpen(false)}>Portofolio</Link></li>
          <li><Link to="/Blog" className="nav-hover" onClick={() => setIsOpen(false)}>Blog</Link></li>
        </div>
      {/* )}; */}
     

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portofolio" element={<Portofolio/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Admin/" element={<Admin/>} />
        <Route path="/portfolioedit" element={<PortfolioEdit/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
