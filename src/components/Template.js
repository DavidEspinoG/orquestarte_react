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
                        <div className="navegacion">
                            <a href="virtuales.html" className="navegacion__enlaces">¿Quiénes somos?</a>
                            <a href="virtuales.html" className="navegacion__enlaces">Orquestarte en tu colegio</a>
                            <a href="recitales.html" className="navegacion__enlaces">Contacto</a>
                        </div>
                    </div>

                </div>
            </header>
            {props.children}
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