import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Title } from '../components/Title';
import { Template } from '../components/Template';

function Admin() {
  const userName = useSelector((state) => state.user.name);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAdmin) {
      navigate('/');
    }
    if (isAdmin) {

    }
  });

  return (
    <Template home>
      <Title>Admin</Title>
      <div className="contenedor">
        <h3>
          Hola,
          {userName}
        </h3>
        <h3>Colegios: </h3>
      </div>
    </Template>
  );
}

export default Admin;
