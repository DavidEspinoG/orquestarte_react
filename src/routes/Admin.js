import { Template } from "../components/Template";
import React from "react";
import { Title } from "../components/Title";

const Admin = () => {
  return(
  <>
    <Template pagos={true}>
        <Title>Admin</Title>
    </Template>
  </>)
}

export default Admin;