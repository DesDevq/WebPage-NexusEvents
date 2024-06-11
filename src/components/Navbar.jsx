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
        <li ><a href='#Nosotros'>NOSOTROS</a></li>
        <li ><a href='#Servicios'>SERVICIOS</a></li>
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
        <div className='Sobre'>
          <h1>NOSOTROS</h1>
          <div className='Decoracion-nosotros'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className='Card-container'>
            <div className='Card'>
              <div className='Card-content'>
                <h3>MISION</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <div className='Card'>
              <div className='Card-content'>
                <h3>VISION</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>
            <div className='Card'>
              <div className='Card-content'>
                <h3>OBJETIVOS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
         <div className='Cuadro-container'>
          <div className='Cuadro-datosempresa'>
            <div className='Cuadro-contenido'>
              <div className='Cuadro-item'>
                <h2>2024</h2>
                <h3>Año de establecimiento</h3>
              </div>
              <div className='Cuadro-item'>
                <h2>22</h2>
                <h3>Empleados en la empresa</h3>
              </div>
              <div className='Cuadro-item'>
                <h2>S.A.S</h2>
                <h3>Tipo de empresa</h3>
              </div>
              <div className='Cuadro-item'>
                <h2>No se</h2>
                <h3>Clase de empresa</h3>
              </div>
              <div className='Cuadro-item'>
                <h2>Empresa</h2>
                <h3></h3>
              </div>
            </div>
          </div>
        </div>
        <div className='Servicios-container'>
        <h1>SERVICIOS</h1>
        <div className='Decoracion-servicios'></div>
          <div className='Servicios'>
          <div className='Servicios-col'>
            <img src='./Decoration.jpeg'></img>
            <div className='Servicios-text'>
            <h3>Decoracion</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>            
            </div>
          </div>
          <div className='Servicios-col'>
            <img src='./organizacion-empresa.jpeg'></img>
            <div className='Servicios-text'>
            <h3>Logistica</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className='Servicios-col'>
            <img src='./capacitacion.jpg'></img>
            <div className='Servicios-text'>
            <h3>Capacitacion</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}
