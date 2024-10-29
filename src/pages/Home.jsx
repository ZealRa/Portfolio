import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const Home = () => {
  const { language } = useLanguage();

  return (
    <div className="container">
      <h2>{translations[language].home.greeting}</h2>{" "}
      <p>{translations[language].home.introduction}</p>{" "}
      <h3>{translations[language].home.projectsTitle}</h3>{" "}
      <p>{translations[language].home.projectsDescription}</p>{" "}
      <div className="button-container">
        <Link to="/projects" className="projects-link">
          {translations[language].home.seeProjects}{" "}
        </Link>
        <Link to="/contact" className="projects-link">
          {translations[language].home.contact}
        </Link>{" "}
      </div>
    </div>
  );
};

export default Home;
