import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { AboutUs } from "./routes/AboutUs";
import { Gallery } from "./routes/Gallery";
import { Contact } from "./routes/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/galeria" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
