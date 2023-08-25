import { Template } from "../components/Template";
import React from "react";
import { Title } from "../components/Title";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchStudentsFromCurrentUser } from "../redux/studentsSlice";
import { useDispatch } from "react-redux";

const MyProfile = () => {
  const userName = useSelector(state => state.user.name);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if(!userName) {
      navigate('/login');
    } else {
      dispatch(fetchStudentsFromCurrentUser());
    }
  }, [userName])
  return(
  <>
    <Template myProfile={true}>
        <Title>Mi perfil</Title>
        <div className="contenedor">
          <h3>Hola, {userName}</h3>
        </div>
    </Template>
  </>)
}

export default MyProfile;