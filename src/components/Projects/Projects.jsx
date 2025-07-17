import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
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
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
