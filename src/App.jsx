import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FloatingPhone from "./components/FloatingPhone";
import Home from "./pages/Home";
import ChooseUs from "./pages/ChooseUs";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <FloatingPhone />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-us" element={<ChooseUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
