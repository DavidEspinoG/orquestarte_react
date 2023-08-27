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

const MyProfile = () => {
  const userName = useSelector(state => state.user.name);
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
    </Template>
  </>)
}

export default MyProfile;