import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/output.css";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Team } from "./components/Team";
import { OurLessons } from "./components/OurLessons";
import { Lessons } from "./components/Lessons";
import { Footer } from "./components/Footer";
// import { NotFound } from "./pages/not found/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <OurLessons />
      <Lessons />
      <Footer />

      {/* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Nosotras" element={<About />} />
        <Route path="/Team" element={<Team />} />
        {/* <Route path="/Raque" element={<Raque />} />
        <Route path="/OurLessons" element={<OurLessons />} />
        <Route path="/Lessons" element={<Lessons />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      
    </BrowserRouter>
  );
}

export default App;