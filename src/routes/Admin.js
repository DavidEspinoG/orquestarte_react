import { Template } from "../components/Template";
import React from "react";
import { Title } from "../components/Title";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const userName = useSelector(state => state.user.name);
  const isAdmin = useSelector(state => state.user.isAdmin);
  const navigate = useNavigate();
  useEffect(() => {
    if(!isAdmin){
      navigate('/');
    }
  })

  return(
  <>
    <Template home={true}>
      <Title>Admin</Title>
      <div className="contenedor">
        <h3>Hola, {userName}</h3>
      </div>
    </Template>
  </>)
}

export default Admin;