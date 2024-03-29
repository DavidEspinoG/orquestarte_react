import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSignUp } from '../redux/userSlice';
import { Title } from '../components/Title';
import { Template } from '../components/Template';

function SignUp() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [schoolCode, setSchoolCode] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.user.signUp.loading);
  const success = useSelector((state) => state.user.signUp.success);
  useEffect(() => {
    if (success) {
      alert('Usuario creado correctamente');
      navigate('/login');
    }
  });
  return (
    <Template home>
      <Title>Regístrate</Title>
      <div className="form-container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(fetchSignUp({
              firstName, lastName, email, password, schoolCode,
            }));
          }}
        >
          <label htmlFor="name">Nombre</label>
          <span>*Nombre de padre, madre o tutor</span>
          <input
            required
            type="text"
            id="name"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => { setFirstName(e.target.value); }}
          />
          <label htmlFor="last-name">Apellidos</label>
          <span>*Apellidos de padre, madre o tutor</span>
          <input
            required
            type="text"
            id="last-name"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => { setLastName(e.target.value); }}
          />
          <label htmlFor="e-mail">E-mail</label>
          <input
            required
            type="email"
            id="e-mail"
            autoComplete="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            required
            type="password"
            id="password"
            autoComplete="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
          />
          <label htmlFor="school-code">
            Código de inscripción

            <span>* El representante de Orquestarte en tu colegio debe proporcionártelo</span>
            <input
              required
              type="text"
              id="school-code"
              name="school-code"
              value={schoolCode}
              onChange={(e) => { setSchoolCode((e.target.value).trim().toUpperCase()); }}
            />
          </label>
          <button type="submit">
            {!loading ? 'Enviar' : <div className="spinner-border" />}
          </button>
        </form>
      </div>
    </Template>
  );
}

export default SignUp;
