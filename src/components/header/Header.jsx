import React from 'react'
import LOGO from "../../assets/Sello1a.png";
import './header.css'

const Header = () => {
  return (
    <header>
      <div className='nav-container'>
        <a href="#">
          <img src={LOGO} className='img-logo' />
        </a>
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Multimedia</a>
          <a href="#">Contacto</a>
          <a href="#">Acerca de..</a>
        </nav>
      </div>

      <section className="textos-header">
          <h1>Instrumentos de percusión artesanales</h1>
      </section>
    </header>
  )
}

export default Header