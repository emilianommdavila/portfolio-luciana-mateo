import { useState } from 'react';
import "./header.css";
import LOGO from "../../assets/icons/iconoHome.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <a href="#home" className='nav_logo'>
        <img src={LOGO} className="nav_logo_image" alt="" />
        <div className='nav_name'>
          <h1 className='nav_name_name'>Luciana Mateo</h1>
          <h2 className='nav_name_title'>Animadora Digital</h2>
        </div>
      </a>

      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`nav ${isMenuOpen ? "show-menu" : ""}`}>
        <div className='nav_menu'>
          <ul className='nav_item'>
            <a href="#about">Sobre mi</a>
          </ul>
          <ul className='nav_item'>
            <a href="#skills">Habilidades</a>
          </ul>
          <ul className='nav_item'>
            <a href="#projects">Proyectos</a>
          </ul>
          <ul className='nav_item'>
            <a href="#contact">Contacto</a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;