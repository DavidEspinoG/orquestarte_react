import React from "react";
import { Template } from "../components/Template";
import { Title } from "../components/Title";

const Login = () => {
  return (
    <>
      <Template>
        <Title>Iniciar sesión</Title>
        {/* <div className="main-content-container"> */}
          <div className="form-container">
            <form className="form">
              <label htmlFor="e-mail">E-mail</label>
              <input required type='text' id="e-mail"></input>
              <label htmlFor="password">Contraseña</label>
              <input required type='password' id="password"></input>
              <button type="submit">Enviar</button>
            </form>
          </div>
        {/* </div> */}
        
      </Template>
    </>
  )
};

export default Login;