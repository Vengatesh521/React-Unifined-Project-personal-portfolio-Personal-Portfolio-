import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-section fade-in">
      <h2 className="about-section-heading">About Me</h2>
      <div>
        <p className="about-p">
          I'm <strong>Vengatesh Ramar</strong>, a passionate Full-Stack
          Developer from Theni, Tamil Nadu. I hold a Master of Computer
          Applications (MCA) degree from Madurai Kamaraj University
        </p>

        <p className="about-p">
          I specialize in building scalable, responsive web applications using
          technologies such as
          <strong>
            {" "}
            React.js, Node.js, JavaScript, HTML, CSS, Bootstrap, and Express
          </strong>
          . I'm also experienced with backend development and database handling
          using <strong>Python and SQLite</strong>.
        </p>

        <p className="about-p">
          I enjoy solving real-world problems, exploring AI integrations, and
          contributing to open-source communities. I’ve conducted technical
          workshops to help others learn the foundations of web development.
        </p>

        <h2 className="about-section-heading">Education</h2>
        <div className="education">
          <h3 className="education-degree">
            MCA - Master of Computer Applications
          </h3>
          <p className="education-institution">Madurai Kamaraj University</p>
          <p className="education-year">2021 - 2024</p>
        </div>

        <div className="education">
          <h3 className="education-degree">B.Sc - Computer Science</h3>
          <p className="education-institution">Theni Kammavar College</p>
          <p className="education-year">2016 - 2020</p>
        </div>

        <div className="education">
          <h3 className="education-degree">Full Stack Internship</h3>
          <p className="education-institution">Unified Mentor Pvt. Ltd.</p>
          <p className="education-year">Apr 2025 - Oct 2025</p>
        </div>

        <div className="education">
          <h3 className="education-degree">Full Stack Training</h3>
          <p className="education-institution">
            NxtWave Disruptive Technologies
          </p>
          <p className="education-year">2023 - 2024</p>
        </div>

        <div className="education">
          <h3 className="education-degree">HSC - Bio-Science</h3>
          <p className="education-institution">
            Theni Nadar Saraswathi Boys HSS
          </p>
          <p className="education-year">2015 - 2016</p>
        </div>

        <div className="education">
          <h3 className="education-degree">SSLC</h3>
          <p className="education-institution">
            Theni Nadar Saraswathi Boys HSS
          </p>
          <p className="education-year">2014 - 2015</p>
        </div>
        <div className="contact-email">
          <p>
            📧 Email:{" "}
            <a href="mailto:vinex521@gmail.com" className="email-link">
              vinex521@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
