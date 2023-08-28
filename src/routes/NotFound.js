import React from "react";
import { Template } from "../components/Template";
import { Title } from "../components/Title";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000)
  })
  return (
    <Template home={true}>
      <Title>Esta página no existe, redireccionando...</Title>
    </Template>
  )
};

export default NotFound;