import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Template } from '../components/Template';
import { Title } from '../components/Title';

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  });
  return (
    <Template home>
      <Title>Esta página no existe, redireccionando...</Title>
    </Template>
  );
}

export default NotFound;
