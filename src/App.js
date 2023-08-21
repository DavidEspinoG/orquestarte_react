import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs } from "./routes/AboutUs";
import { Contact } from "./routes/Contact";
import { Gallery } from "./routes/Gallery";
import { HomePage } from "./routes/HomePage";
import { Recital } from "./routes/Recital";
import Login from "./routes/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/galeria" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/recital" element={<Recital/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
