import React, { useState } from "react";
import "./Projects.css";
import profileImg from "../../assets/profile.jpg";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";
import image10 from "../../assets/image10.png";
import image11 from "../../assets/image11.png";
import image12 from "../../assets/image12.png";
import image13 from "../../assets/image13.png";
import image14 from "../../assets/image14.png";
import image15 from "../../assets/image15.png";
import image16 from "../../assets/image16.png";

import { Link } from "react-router-dom";

function Projects() {
  const [projects] = useState([
    {
      title: "Full-Stack-Student-Teacher-Booking-Appointment",
      description: "A full-stack website built with React and Node.js.",
      image: image1,
      href: "https://github.com/Vengatesh521/Full-Stack-Student-Teacher-Booking-Appointment",
    },

    {
      title: "Personal Portfolio",
      description: "React Unified personal portfolio project.",
      image: image2,

      href: "https://github.com/Vengatesh521/React-Unifined-Project-personal-portfolio-Personal-Portfolio-",
    },
    {
      title: "Catering Reservation and Ordering System",
      description: "MERN Stack Catering System [Unified].",
      href: "https://github.com/Vengatesh521/Catering-Reservation-and-Ordering-System",
      image: image3,
    },

    {
      title: "Swift Dashboard Company Project",
      description: "React swift-dashboard company project.",
      href: "https://github.com/Vengatesh521/React-swift-dashboard-Company-project",
      image: image4,
    },
    {
      title: "Travel Trip App",
      description: "React Travel Trip App.",
      href: "https://github.com/Vengatesh521/React-Travel-Trip",
      image: image5,
    },
    {
      title: "Jobby App (Old)",
      description: "React Jobby App.",
      href: "https://github.com/Vengatesh521/React-Jobby-app",
      image: image6,
    },
    {
      title: "Simple Todos",
      description: "React Simple Todos (NEXTWAVE Coding Practice).",
      href: "https://github.com/Vengatesh521/React-Simple-Todos",
      image: image7,
    },
    {
      title: "Nxt Trendz Cart Features",
      description: "Nxt Trendz enhancement with cart and payment.",
      href: "https://github.com/Vengatesh521/React-Nxt-Trendz---Cart-Features",
      image: image8,
    },

    {
      title: "Vite Movie Database App",
      description: "Movie database app using Vite + React.",
      href: "https://github.com/Vengatesh521/Vite-React-Movie-Database-App",
      image: image9,
    },

    {
      title: "Company Assignment Template",
      description: "NEXTWAVE Company Assignment Template.",
      href: "https://github.com/Vengatesh521/React-Company-Assignment-Template",
      image: image10,
    },
    {
      title: "Notes App (Hooks)",
      description: "React Notes App with Hooks.",
      href: "https://github.com/Vengatesh521/React-Notes-App-Hooks",
      image: image11,
    },
    {
      title: "Read More / Less App",
      description: "NEXTWAVE Coding Practice 4.",
      href: "https://github.com/Vengatesh521/React-Read-More-Less",
      image: image12,
    },
    {
      title: "Credit Card UI",
      description: "NEXTWAVE Coding Practice 3 - Credit Card UI.",
      href: "https://github.com/Vengatesh521/React-Credit-Card",
      image: image13,
    },
    {
      title: "Password Validator",
      description: "NEXTWAVE Coding Practice 2 - Password Validator.",
      href: "https://github.com/Vengatesh521/React-Password-Validator",
      image: image14,
    },
    {
      title: "Unlock Lock App",
      description: "React app using hooks - Unlock / Lock UI.",
      href: "https://github.com/Vengatesh521/React-Unlock-Lock-App",
      image: image15,
    },
    {
      title: "Text Editor App",
      description: "NEXTWAVE Interview Mock Test - Text Editor.",
      href: "https://github.com/Vengatesh521/React-Text-Editor",
      image: image16,
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
      <div className="project-info ">
        <h2 className="project-info-title">Developer Summary</h2>
        <div className="projects-names">
          <p className="project-info-text">
            <strong className="highlight">Project Name:</strong>{" "}
          </p>
          <div className="phroles-container">
            <span className="phrole">personal portfolio</span>
            <span className="phrole"> Reservation/Ordering</span>
            <span className="phrole">Student Teacher Booking</span>
            <span className="phrole">swift dashboard</span>
            <span className="phrole">Upload file with multer</span>
            <span className="phrole">URL shortener</span>
            <span className="phrole">Node swift</span>
            <span className="phrole">Travel Trip</span>
            <span className="phrole">Jobby</span>
            <span className="phrole">Simple Todos</span>
            <span className="phrole">Nxt Trendz Cart Features</span>
            <span className="phrole">Jobby</span>
            <span className="phrole">Movie Database</span>
            <span className="phrole">NxtWatch</span>
            <span className="phrole">Movie Database</span>
            <span className="phrole">IPL Dashboard</span>
            <span className="phrole">Restaurant</span>
            <span className="phrole">Meetup</span>
            <span className="phrole">Assignment Template</span>
            <span className="phrole">Notes Hooks</span>
            <span className="phrole">Read More Less</span>
            <span className="phrole">Credit Card</span>
            <span className="phrole">Password Validator</span>
            <span className="phrole">Vegetable Data Entry</span>
            <span className="phrole">Unlock Lock</span>
            <span className="phrole">Text Editor</span>
            <span className="phrole">Gradient Generator</span>
          </div>
        </div>
        <p className="project-info-text">
          <strong className="highlight">Deployments:</strong> Vercel (Frontend),
          Render (Backend)
        </p>
        <p className="project-info-text">
          <strong className="highlight">Projects:</strong> 35+ Completed
        </p>
      </div>

      <h1 className="highlight-head">Certifications</h1>

      <div className="skills-certification-container">
        <div className="certification-card">
          <a
            href="https://certificates.ccbp.in/intensive/javascript-essentials?id=UZJMZAUUVO"
            className="skill-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="project-certification-p">JavaScript</p>
          </a>
        </div>
        <div className="certification-card">
          <a
            href="https://certificates.ccbp.in/intensive/programming-foundations?id=TUORKEYWJI"
            className="skill-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="project-certification-p">Python</p>
          </a>
        </div>{" "}
        <div className="certification-card">
          <a
            href="https://certificates.ccbp.in/intensive/developer-foundations?id=CNQYULTYBK"
            className="skill-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="project-certification-p">Git</p>
          </a>
        </div>{" "}
        <div className="certification-card">
          <a
            href="https://certificates.ccbp.in/intensive/static-website?id=GFGXYQKAEL"
            className="skill-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="project-certification-p">StaticWeb</p>
          </a>
        </div>{" "}
        <div className="certification-card">
          <a
            href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=HEZWLVXQYU"
            className="skill-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="project-certification-p">SQL</p>
          </a>
        </div>{" "}
        <div className="certification-card">
          <a
            href="https://certificates.ccbp.in/intensive/dynamic-web-application?id=XSDWVHIBUC"
            className="skill-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="project-certification-p">DynamicWeb</p>
          </a>
        </div>
        <div className="certification-card">
          <a
            href="https://certificates.ccbp.in/intensive/flexbox?id=VDUKFOWFJT"
            className="skill-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="project-certification-p">Flexbox</p>
          </a>
        </div>
        <div className="certification-card">
          <a
            href="https://certificates.ccbp.in/intensive/node-js?id=DQNMXDXQXL"
            className="skill-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="project-certification-p">NodeJS</p>
          </a>
        </div>
        <div className="certification-card">
          <a
            href="https://certificates.ccbp.in/intensive/react-js?id=AJSJFBKXQZ"
            className="skill-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="project-certification-p">ReactJS</p>
          </a>
        </div>
      </div>

      <h1 className="highlight-head">Typing Skills</h1>

      <div className="skills-certification-container">
        <div className="certification-card">
          <a
            href="https://drive.google.com/file/d/1gVPPOeR2qXv1719uxIJAi_kVEPt94ddX/view?usp=sharing"
            className="skill-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="project-certification-p">Tamil</p>
          </a>
        </div>
        <div className="certification-card">
          <a
            href="https://drive.google.com/file/d/1fofCGBMpmUvTzKTHsls02OssjuTedc60/view?usp=sharing"
            className="skill-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="project-certification-p">English</p>
          </a>
        </div>{" "}
      </div>

      <div className="projects-section">
        <h2 className="highlight-head">Highlighted Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              className="project-card"
              href={project.href} // ✅ Use the actual project link
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.image && <img src={project.image} alt={project.title} />}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
