import React from 'react'
import "../Styles.css"

export const Navbar = () => {
  return (
    <>
    <div className='Navbar'>
  <div className='logo'>
    <img src='./Untitled design.png' alt='Logo' className='Logo-css'></img>
  </div>
     <h1 className='NexusEvents'>Nexus Events</h1>
       <div className='Nav-links-container'>
     <ul className='Nav-links'>
        <li ><a href='#Inicio'>Inicio</a></li>
        <li ><a href='#Servicios'>Servicios</a></li>
        <li ><a href='#Nosotros'>Nosotros</a></li>
        <li ><a href='#Contacto'>Contacto</a></li>
     </ul>
     </div>
    </div>
    </>
  )
}
