import React from "react";
import { Template } from "../components/Template";
import { Title } from "../components/Title";
import { useSelector } from "react-redux";
import { useState } from "react";

const NewStudent = () => {
  const [ name, setName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const loading = useSelector(state => state.students.loading);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, lastName});
  };
  return (
    <Template myProfile={true}>
      <Title>Inscribir nuevo alumno</Title>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre del alumno(a):</label>
          <input 
            required 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="last-name">Apellidos:</label>
          <input 
            required 
            type="text" 
            id="last-name" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">
            {!loading ? 'Enviar' : <div className="spinner-border"></div>}
          </button>
        </form>
      </div>
    </Template>
  )
};

export default NewStudent;