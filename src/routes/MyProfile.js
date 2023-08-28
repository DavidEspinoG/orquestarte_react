import { Template } from "../components/Template";
import React from "react";
import { Title } from "../components/Title";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchStudentsFromCurrentUser } from "../redux/studentsSlice";
import { useDispatch } from "react-redux";
import StudentsFromUser from "../components/StudentsFromUser";
import { getCartFromLocalStorage } from "../redux/cartSlice";
import { PayPalButtons } from "@paypal/react-paypal-js";

const MyProfile = () => {
  const userName = useSelector(state => state.user.name);
  const total = useSelector(state => state.cart.total);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if(!userName) {
      navigate('/login');
    } else {
      dispatch(fetchStudentsFromCurrentUser());
      dispatch(getCartFromLocalStorage());
    }
  }, [userName])
  return(
  <>
    <Template myProfile={true}>
        <Title>Mi perfil</Title>
        <h3 className="text-center">Bienvenido, {userName}</h3>
        <StudentsFromUser/>
        <h3 className="contenedor">{`Total: $${total}`}</h3>
        {total > 0 && 
        <div className="contenedor">
          <PayPalButtons />
        </div>}
        
    </Template>
  </>)
}

export default MyProfile;