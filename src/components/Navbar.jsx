import React from 'react'
import "../Styles.css"

export const Navbar = () => {
  return (
    <>
    <div className='Navbar'>
  <div className='logo'>
    <img src='./Untitled design.png' alt='Logo' className='Logo-css'></img>
  </div>
     <h1 className='NexusEvents'>NEXUS EVENTS</h1>
       <div className='Nav-links-container'>
     <ul className='Nav-links'>
        <li ><a href='#Inicio'>INICIO</a></li>
        <li ><a href='#Servicios'>SERVICIOS</a></li>
        <li ><a href='#Nosotros'>NOSOTROS</a></li>
        <li ><a href='#Contacto'>CONTACTO</a></li>
     </ul>
     </div>
    </div>
    <div className='image-container'>
        <img src='./fotofondo7.jpeg' alt='Below Navbar' className='below-navbar-image' />
      </div>
      <div className='image-overlay'></div>
        <div className='Content'>
            <h3><strong>TRANFORMAMOS IDEAS EN <br></br> EXPERIENCIAS
                MEMORABLES</strong>
            </h3>
            <p className='Content-2'><strong>Nexus Events la mejor opcion para la decoracion <br></br>de eventos
              empresariales</strong>
            </p>
            <a href='' className='hero-btn'>Contactanos</a>
        </div>
    </>
  )
}
