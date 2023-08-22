import { Template } from "../components/Template";
import React from "react";
import { Title } from "../components/Title";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  return(
  <>
    <Template pagos={true}>
      <Title>Admin</Title>
    </Template>
  </>)
}

export default Admin;