import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { Template } from '../components/Template';
import { Title } from '../components/Title';
import { fetchStudentsFromCurrentUser, newStudentSuccessFalse } from '../redux/studentsSlice';
import StudentsFromUser from '../components/StudentsFromUser';
import { emptyCart, getCartFromLocalStorage } from '../redux/cartSlice';
import createOrder from '../helpers/createOrder';
import onApprove from '../helpers/onApprove';

function MyProfile() {
  const userName = useSelector((state) => state.user.name);
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.elements);
  const students = useSelector((state) => state.students.currentUserStudents);
  const newStudentSuccess = useSelector((state) => state.students.newStudentSuccess);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userName) {
      navigate('/login');
    } else {
      dispatch(fetchStudentsFromCurrentUser());
      dispatch(getCartFromLocalStorage());
    }
    if (newStudentSuccess) {
      dispatch(newStudentSuccessFalse());
    }
  }, [userName]);
  return (
    <Template myProfile>
      <Title>Mi perfil</Title>
      <h3 className="text-center">
        Bienvenido(a),
        {userName}
      </h3>
      {students.length > 0
        ? (
          <>
            <StudentsFromUser />
            <div />
          </>
        )
        : (
          <div className="contenedor">
            <p className="display-6 text-center mt-5">
              Todavía no has registrado ningún estudiante,
              registra un nuevo alumno
              <Link to="/miperfil/nuevo-alumno">aqui</Link>
            </p>
          </div>
        )}
      {total > 0
      && (
      <div className="stretch-container">
        <h3>{`Total: $${total}`}</h3>
        <PayPalButtons
          createOrder={() => createOrder(cart)}
          onApprove={(data) => {
            onApprove(data)
              .then(() => {
                dispatch(fetchStudentsFromCurrentUser());
              });
            dispatch(emptyCart());
          }}
        />
      </div>
      )}
    </Template>
  );
}

export default MyProfile;
