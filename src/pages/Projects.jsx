import React, { useEffect, useState } from "react";
import axios from "axios";
import showdown from "showdown";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Projects.css";

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const converter = new showdown.Converter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/projects");
        setProjects(response.data.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>{t("projects.loading")}</p>;

  return (
    <div style={{ position: "relative" }}>
      <Link to="/" className="back-button">
        &#8592;
      </Link>
      <h2>{t("projects.title")}</h2>
      <p>{t("projects.intro")}</p>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={`Logo ${project.logo}`}
              alt={`Logo ${project.title}`}
              className="project-logo"
            />
            <h3>{project.title}</h3>
            <p>t{project.description}</p>
            <Link to={`/${project.slug}`} className="project-link">
              {t("projects.viewProject")}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
