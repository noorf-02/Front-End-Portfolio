import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Footer from "./components/Shared/Footer";
import Nav from "./components/Shared/Nav";
import Projects from "./components/UI/Projects";
import SectionServices from "./components/UI/SectionServices";
import SectionContact from "./components/UI/SectionContact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="projects" element={<Projects/>} />
            <Route path="services" element={<SectionServices/>} />
            <Route path="contact" element={<SectionContact/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
