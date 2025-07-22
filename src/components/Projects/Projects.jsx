import React, { useState } from "react";
import "./Projects.css";
import profileImg from "../../assets/profile.jpg";

function Projects() {
  const [projects] = useState([
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce website built with React and Node.js.",
      image: "https://via.placeholder.com/300x150",
    },
    {
      title: "Task Manager App",
      description: "A productivity app to manage tasks with real-time updates.",
      image: "https://via.placeholder.com/300x150",
    },
    {
      title: "Weather Dashboard",
      description: "A weather app displaying real-time weather data.",
      image: "https://via.placeholder.com/300x150",
    },
  ]);

  return (
    <div className="projects-container">
      <header className="projects-header">
        <h1>Portfolio of R Vengatesh</h1>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </header>
      <div>
        <div className="project-info-top">
          <img
            src={profileImg}
            alt="Profile"
            className="project-profile-top-img"
          />
          <div className="project-info-vertical-line"></div>
          <p className="project-info-top-text">
            <strong className="highlight">Name:</strong> R Vengatesh
          </p>
        </div>
      </div>
      <div>
        <div className="project-info project-info-card">
          <p className="project-info-text">
            <strong className="highlight">Deployments:</strong> Vercel
            (Frontend), Render (Backend)
          </p>
          <p className="project-info-text">
            <strong className="highlight">Projects:</strong> 35+ Completed
          </p>
        </div>
      </div>

      <div className="skills-certification-container">
        <div className="skill-card">
          <h3>Core Skills</h3>
          <ul>
            <li>React.js & Node.js</li>
            <li>MongoDB & Express</li>
            <li>HTML, CSS, JavaScript</li>
            <li>REST APIs & Authentication</li>
          </ul>
        </div>
        <div className="certification-card">
          <h3>Certifications</h3>
          <ul>
            <li>MERN Stack Development - NxtWave</li>
            <li>Full Stack Internship - Unified Mentor Pvt. Ltd.</li>
          </ul>
        </div>
      </div>

      <div className="projects-section">
        <h2>Highlighted Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => alert(`View details for ${project.title}`)}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
