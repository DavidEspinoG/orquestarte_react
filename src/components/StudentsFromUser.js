import React from "react";
import { useSelector } from "react-redux";

const StudentsFromUser = () => {
  const students = useSelector(state => state.students.currentUserStudents);

  return(
    <div className="myStudents">
      <h4>Estudiantes registrados:</h4>
      {students ? 
      students.map(student => (
        <p key={student.id}>{`${student.first_name} ${student.last_name}`}</p>
      ))  
      : <p>Aquí se mostrarán los estudiantes inscritos</p>
      }
    </div>
  )
};

export default StudentsFromUser;