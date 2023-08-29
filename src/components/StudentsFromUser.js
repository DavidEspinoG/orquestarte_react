import React from 'react';
import { useSelector } from 'react-redux';
import MonthsTable from './MonthsTable';

function StudentsFromUser() {
  const students = useSelector((state) => state.students.currentUserStudents);
  return (
    <div className="myStudents">
      {students
        ? students.map((student) => (
          <div key={student.id}>
            <h4 className="text-center mt-3 mb-3">
              Alumno:
              {`${student.first_name} ${student.last_name}`}
            </h4>
            <MonthsTable months={student.months} />
          </div>
        ))
        : <p>Aquí se mostrarán los estudiantes inscritos</p>}
    </div>
  );
}

export default StudentsFromUser;
