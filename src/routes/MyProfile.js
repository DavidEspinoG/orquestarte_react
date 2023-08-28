import { Template } from "../components/Template";
import React from "react";
import { Title } from "../components/Title";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchStudentsFromCurrentUser } from "../redux/studentsSlice";
import { useDispatch } from "react-redux";
import StudentsFromUser from "../components/StudentsFromUser";
import { emptyCart, getCartFromLocalStorage } from "../redux/cartSlice";
import { PayPalButtons } from "@paypal/react-paypal-js";
import createOrder from "../helpers/createOrder";
import onApprove from "../helpers/onApprove";

const MyProfile = () => {
  const userName = useSelector(state => state.user.name);
  const total = useSelector(state => state.cart.total);
  const cart = useSelector(state => state.cart.elements);
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
        <PayPalButtons 
          createOrder={() => createOrder(cart)}
          onApprove={(data) => {
            onApprove(data)
            dispatch(emptyCart())
          }}
        />
      </div>}
    </Template>
  </>)
}

export default MyProfile;