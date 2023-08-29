import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Template } from '../components/Template';
import { Title } from '../components/Title';
import { fetchLogin } from '../redux/userSlice';

function Login() {
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const userId = useSelector((state) => state.user.id);
  const userIsAdmin = useSelector((state) => state.user.isAdmin);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (userId) {
      if (userIsAdmin) {
        navigate('/admin');
      } else {
        navigate('/miperfil');
      }
    }
  });
  return (
    <Template home>
      <Title>Iniciar sesión</Title>
      <div className="form-container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(fetchLogin({ email, password }));
          }}
        >
          <label htmlFor="e-mail">E-mail</label>
          <input
            required
            type="email"
            id="e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            required
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Enviar</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <Link to="/signup" className="form-link">Registrarse</Link>
        </form>
      </div>
    </Template>
  );
}

export default Login;
