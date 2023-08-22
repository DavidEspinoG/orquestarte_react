import React from "react";
import { Template } from "../components/Template";
import { Title } from "../components/Title";
import { useState } from "react";
import { fetchLogin } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const errorMessage = useSelector(state => state.user.errorMessage);
  const userId = useSelector(state => state.user.id);
  const userIsAdmin = useSelector(state => state.user.isAdmin);
  const dispatch = useDispatch();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  useEffect(() => {
    if(userId){
      if(userIsAdmin){
        navigate('/admin');
      } else {
        navigate('/pagos');
      }
    }
  })
  return (
    <>
      <Template home={true}>
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>
      </Template>
    </>
  )
};

export default Login;