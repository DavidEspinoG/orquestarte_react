import React, { useEffect } from "react";
import { Template } from "../components/Template";
import { Title } from "../components/Title";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNewUser } from "../redux/studentsSlice";
import { useNavigate } from "react-router-dom";

const NewStudent = () => {
  const [ name, setName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const loading = useSelector(state => state.students.loading);
  const errorMessage = useSelector(state => state.students.message);
  const newStudentSuccess = useSelector(state => state.students.newStudentSuccess);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchNewUser({name, lastName}));
  };
  useEffect(() => {
    if(newStudentSuccess){
      navigate('/miperfil');
    }
  })

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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </Template>
  )
};

export default NewStudent;