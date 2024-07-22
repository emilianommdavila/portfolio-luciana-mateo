//import React from 'react'
import "./header.css"
import LOGO from "../../assets/icons/iconoHome.png"

const Header = () => {
  return (
    <header className='header'>
      <a href="#home" className='nav_logo'>
        <img src={LOGO} className="nav_logo_image" alt="" />
        <div className='nav_name'>
          <h1 className='nav_name_name'>Luciana Mateo</h1>
          <h2 className='nav_name_title'>Animadora Digital</h2>
        </div>
      </a>

      <nav className='nav'>
        <div className='nav_menu'>
          <ul className='nav_item'>
            <a href="">Sobre mi</a>
          </ul>
          <ul className='nav_item'>
            <a href="">Habilidades</a>
          </ul>
          <ul className='nav_item'>
            <a href="">Proyectos</a>
          </ul>
          <ul className='nav_item'>
            <a href="">Contacto</a>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header