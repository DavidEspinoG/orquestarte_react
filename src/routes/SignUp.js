import { Template } from "../components/Template";
import { Title } from "../components/Title";
import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState(''); 
  const [ schoolCode, setSchoolCode ] = useState('');
  return (
    <Template home={true}>
      <Title>Regístrate</Title>
      <div className="form-container">
        <form className="form" 
          onSubmit={(e)=> {
            e.preventDefault();
            console.log({email, password, schoolCode})
          }}
        >
          <label htmlFor="e-mail">E-mail</label>
          <input required type="email" id="e-mail"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <label htmlFor="password">Contraseña</label>
          <input required type="password" id="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <label htmlFor="school-code">Código de inscripción</label>
          <span>* El representante de Orquestarte en tu colegio debe proporcionártelo</span>
          <input required type="text" id="school-code"
            value={schoolCode}
            onChange={(e) => {setSchoolCode((e.target.value).trim().toUpperCase())}}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Template>
  )
};

export default SignUp;