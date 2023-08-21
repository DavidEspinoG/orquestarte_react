import React from "react";
import { Link } from "react-router-dom";

function Template(props){
  return (
    <>
      <header className="header">
        <div className="contenedor">
          <div className="barra"> 
            <div className="logo">
              <Link to="/">
                <h1 className="logo__linea1">ORQUESTARTE</h1>
                <h2 className="logo__linea2">EDUCACIÓN MUSICAL</h2>
              </Link>
            </div>
            {props.home && 
              <div className="navegacion">
                <Link to="/about" className="navegacion__enlaces">¿Quiénes somos?</Link>
                <Link to="/galeria" className="navegacion__enlaces">Galería</Link>
                <Link to="/contact" className="navegacion__enlaces">Contacto</Link>
                <Link to="/login" className="navegacion__enlaces">Iniciar Sesión</Link>
              </div>
            }
            {props.customLinks && 
              <div className="navegacion">
                {props.customLinks.map(link => <Link to={link.to} className="navegacion__enlaces">{link.text}</Link>)}
              </div>
            }
          </div>
        </div>
      </header>
        <div className="main-content-container">
          {props.children}
        </div>
      <footer>
        <div className="footer">
          <div className="contenedor">
            <div className="derechos">
              <a href="mailto:contacto@orquestarte.com.mx" className="mailto">contacto@orquestarte.com.mx</a>
              <a href="https://wa.me/message/JVH4TZ454YCVM1" className="mailto">Whatsapp: 999-364-3695</a>
              <p className="texto-derechos">Reservados todos los derechos ©</p>
            </div>
          </div> 
        </div>
      </footer>
    </>
  )
}
export { Template }