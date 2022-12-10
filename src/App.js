import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { AboutUs } from "./routes/AboutUs";
import { Gallery } from "./routes/Gallery";
import { Contact } from "./routes/Contact";
import { Recital } from "./routes/Recital";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/galeria" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/recital" element={<Recital/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
