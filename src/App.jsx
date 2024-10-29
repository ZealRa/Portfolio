// src/App.js
import React, { Suspense } from "react";
import "./i18n"; // Importe la configuration i18n ici
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
