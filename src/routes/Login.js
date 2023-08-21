import React from "react";
import { Template } from "../components/Template";
import { Title } from "../components/Title";
import { useState } from "react";
import { fetchLogin } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  return (
    <>
      <Template>
        <Title>Iniciar sesión</Title>
          <div className="form-container">
            <form className="form" onSubmit={(e) => {
              e.preventDefault();
              dispatch(fetchLogin({email, password}))
            }}>
              <label htmlFor="e-mail">E-mail</label>
              <input required type='email' id="e-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}  
              >
              </input>
              <label htmlFor="password">Contraseña</label>
              <input required type='password' id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button type="submit">Enviar</button>
            </form>
          </div>
      </Template>
    </>
  )
};

export default Login;