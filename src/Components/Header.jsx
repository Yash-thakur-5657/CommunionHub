import { Link, NavLink } from 'react-router-dom';
import { FaConnectdevelop, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [text, setText] = useState('');
  const fullText = 'Communion';
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Speed of typing
    
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <FaConnectdevelop className="logo-icon" />
          <div className="typewriter">
            <span className="typewriter-text">{text}</span>
          </div>
        </Link>
      </div>
      
      <div className="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active' : ''}
              end
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/events" 
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/communities" 
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Communities
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/leaders" 
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Leaders
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Support
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="user-icon">
        <div className="circle">Y</div>
      </div>
    </header>
  );
};

export default Header; 