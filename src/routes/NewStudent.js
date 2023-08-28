import React from "react";
import { Template } from "../components/Template";
import { Title } from "../components/Title";

const NewStudent = () => {
  return (
    <Template myProfile={true}>
      <Title>Inscribir nuevo alumno</Title>
    </Template>
  )
};

export default NewStudent;