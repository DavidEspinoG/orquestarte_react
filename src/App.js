import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AboutUs } from './routes/AboutUs';
import { Contact } from './routes/Contact';
import { HomePage } from './routes/HomePage';
import { Recital } from './routes/Recital';
import Login from './routes/Login';
import Admin from './routes/Admin';
import MyProfile from './routes/MyProfile';
import { setUser } from './redux/userSlice';
import SignUp from './routes/SignUp';
import NewStudent from './routes/NewStudent';
import NotFound from './routes/NotFound';

function App() {
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userId) {
      const user = sessionStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        dispatch(setUser(parsedUser));
      }
    }
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/inscripciones" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/galeria" element={<Gallery />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/recital" element={<Recital />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/miperfil" element={<MyProfile />} />
        <Route path="/miperfil/nuevo-alumno" element={<NewStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
