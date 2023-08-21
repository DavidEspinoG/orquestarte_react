import { Template } from "../components/Template";
import React from "react";
import { Title } from "../components/Title";

const Pagos = () => {
  return(
  <>
    <Template customLinks={[{to: '/login', text: 'Iniciar sesión'}]}>
        <Title>Pagos</Title>
    </Template>
  </>)
}

export default Pagos;