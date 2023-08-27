import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { deleteStudents } from "../redux/studentsSlice";
import { emptyCart } from "../redux/cartSlice";

function Template(props){
  const dispatch = useDispatch();
  const carrito = useSelector(state => state.cart.elements);
  const userId = useSelector(state => state.user.id);
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
                {userId ?
                <Link
                  to="/"
                  className="navegacion__enlaces"
                  onClick={() => {
                    dispatch(emptyCart());
                    dispatch(deleteStudents());
                    dispatch(logout());
                  }}
                >
                  Cerrar sesión
                </Link> :
                <Link to="/login" className="navegacion__enlaces">Iniciar Sesión</Link>}
              </div>
            }
            {props.myProfile && 
              <div className="navegacion">
                <Link to="/miperfil/nuevoalumno" className="navegacion__enlaces">Añadir alumno</Link>
                <Link to="/miperfil/carrito" className="navegacion__enlaces">Carrito({`${carrito.length}`})</Link>
                {userId ?
                <Link
                  to="/"
                  className="navegacion__enlaces"
                  onClick={() => {
                    dispatch(logout());
                    dispatch(emptyCart());
                    dispatch(deleteStudents());
                  }}
                >
                  Cerrar sesión
                </Link> :
                <Link to="/login" className="navegacion__enlaces">Iniciar Sesión</Link>}
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