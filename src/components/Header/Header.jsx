import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky-header">
      {isMobile ? (
        <div className='header-mobile'>
          <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu color='black' />}
          </button>
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <Link to="about" smooth={true} onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="projects" smooth={true} onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="resume" smooth={true} onClick={() => setMenuOpen(false)}>Resume</Link>
            <Link to="contact" smooth={true} onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      ) : (
        <nav className="desktop-nav">
            <Link to='home'smooth={true}>
                <img src={Logo} alt="Logo" className='logo-img'/>
            </Link>
            <div>
            <Link to="about" smooth={true} className='option'>About</Link>
            <Link to="projects" smooth={true} className='option'>Projects</Link>
            <Link to="resume" smooth={true} className='option'>Resume</Link>
            <Link to="contact" smooth={true} className='option'>Contact</Link>
            </div>
        </nav>
      )}
    </header>
  );
};

export default Header;