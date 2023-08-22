import { Template } from "../components/Template";
import React from "react";
import { Title } from "../components/Title";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const userName = useSelector(state => state.user.name);
  const navigate = useNavigate();
  useEffect(() => {
    if(!userName) {
      navigate('/login');
    }
  })
  return(
  <>
    <Template home={true}>
        <Title>Mi perfil</Title>
        <div className="contenedor">
          <h3>Hola, {userName}</h3>
        </div>
    </Template>
  </>)
}

export default MyProfile;