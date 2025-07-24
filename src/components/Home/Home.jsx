import profileImg from "../../assets/profile..JPG";
import sunderImg from "../../assets/sunder.jpg";
import elonImg from "../../assets/elon.jpg";
import markImg from "../../assets/mark.jpg";
import reshiImg from "../../assets/reshi.jpg";
import steveImg from "../../assets/steve.jpg";
import abjImg from "../../assets/abj.jpg";
import sathiyaImg from "../../assets/sathiya.jpg";
import lisaImg from "../../assets/lisa.jpg";
import jensenImg from "../../assets/jensen.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import ImageSlider from "../ImageSlider/ImageSlider";
import LikeButton from "../LikeButton/LikeButton";

import { useEffect, useState } from "react";

function Home() {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const rscrollers = document.querySelectorAll(".rscroller");
      rscrollers.forEach((rscroller) => {
        rscroller.setAttribute("data-animated", "true");

        const rscrollerInner = rscroller.querySelector(".rscroller__inner");
        const rscrollerContent = Array.from(rscrollerInner.children);

        rscrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          rscrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <section className="home">
      <img src={profileImg} alt="Profile" className="profile-img" />
      <div className="htext-changer">
        <p className="hintro-text">I am a</p>
        <div className="hroles-container">
          <span className="hrole">Web Developer</span>
          <span className="hrole">JS Developer</span>
          <span className="hrole">React Enthusiast</span>
          <span className="hrole">Python Developer</span>
          <span className="hrole">MERN Developer</span>
          <span className="hrole">Lifelong Learner</span>
        </div>
      </div>
      <h1 className="myname fade-in">Vengatesh Ramar</h1>
      <p className="tagline fade-in">
        MERN Stack Developer | Passionate about Clean Code & Scalable Systems
      </p>

      <div className="about fade-in">
        <p>
          I'm a Full Stack Developer skilled in JavaScript, React, Node.js,
          MongoDB, and Python. I completed my Master of Computer Applications
          (MCA) in 2023 and have hands-on experience building dynamic and
          responsive web applications. I enjoy solving real-world problems and
          continuously improving my skills.
        </p>
      </div>
      <div className="sliders fade-in">
        <div className="slider-section fade-in">
          <ImageSlider />
        </div>
      </div>

      <div className="info-cards fade-in">
        <div className="card">
          <h3>🎯 Hobbies</h3>
          <ul>
            <li>Exploring AI and Tech Innovations</li>
            <li>Reading Space Science Articles</li>
            <li>Teaching and Sharing Knowledge</li>

            <li>Creative Writing & Public Speaking</li>
          </ul>
        </div>

        <div className="card">
          <h3>🌟 Interests</h3>
          <ul>
            <li>Building scalable web apps with clean architecture</li>
            <li>Exploring AI integrations in full-stack development</li>
            <li>Contributing to open-source and tech communities</li>
          </ul>
        </div>
      </div>
      <div className="skills-container fade-in">
        <div className="scroller" data-animated="true">
          <ul className="tag-list scroller__inner">
            <li>
              <a
                href="https://certificates.ccbp.in/intensive/javascript-essentials?id=UZJMZAUUVO"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript
              </a>
            </li>
            <li>
              <a
                href="https://certificates.ccbp.in/intensive/react-js?id=AJSJFBKXQZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="https://certificates.ccbp.in/intensive/node-js?id=DQNMXDXQXL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Node.js
              </a>
            </li>
            <li>
              <a
                href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=HEZWLVXQYU"
                target="_blank"
                rel="noopener noreferrer"
              >
                MongoDB
              </a>
            </li>
            <li>
              <a
                href="https://certificates.ccbp.in/intensive/programming-foundations?id=TUORKEYWJI"
                target="_blank"
                rel="noopener noreferrer"
              >
                python
              </a>
            </li>
            <li>
              <a
                href="https://certificates.ccbp.in/intensive/node-js?id=DQNMXDXQXL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Express.js
              </a>
            </li>
            <li>
              <a
                href="https://certificates.ccbp.in/intensive/dynamic-web-application?id=XSDWVHIBUC"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML5
              </a>
            </li>
            <li>
              <a
                href="https://certificates.ccbp.in/intensive/static-website?id=GFGXYQKAEL"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS3
              </a>
            </li>
            <li>
              <a
                href="https://certificates.ccbp.in/intensive/developer-foundations?id=CNQYULTYBK"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git & GitHub
              </a>
            </li>
            <li>
              <a
                href="https://certificates.ccbp.in/intensive/node-js?id=DQNMXDXQXL"
                target="_blank"
                rel="noopener noreferrer"
              >
                REST APIs
              </a>
            </li>
            <li>
              <a
                href="https://certificates.ccbp.in/intensive/responsive-website?id=XETGUPGHFV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Responsive Design
              </a>
            </li>
            <li>
              <a
                href="https://certificates.ccbp.in/intensive/responsive-website?id=XETGUPGHFV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bootstrap
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="intro-container">
        <h2>Meet Vengatesh</h2>
        <p>
          <span>
            I'm Vengatesh — a kind, responsive, and dedicated developer. I value
            clear communication, always listen carefully, and enjoy helping
            others. Whether it’s coding or collaboration, I bring a calm,
            supportive energy to every project I work on. I believe in
            continuous learning and always strive to grow, both personally and
            professionally. I’m passionate about writing clean code, building
            user-friendly applications, and making a positive impact through
            technology. I take pride in staying disciplined, working with
            integrity, and staying committed to my goals.
          </span>
        </p>
      </div>
      <h2 className="role-models-title fade-in">My Role Models</h2>

      <div className="rskills-container fade-in">
        <div className="rscroller" data-animated="true">
          <ul className="rtag-list rscroller__inner">
            <li className="rcard">
              <img src={sunderImg} alt="Sundar Pichai" />
              <h4>Sundar Pichai</h4>
              <p>CEO, Google</p>
            </li>
            <li className="rcard">
              <img src={elonImg} alt="Elon Musk" />
              <h4>Elon Musk</h4>
              <p>CEO, Tesla & SpaceX</p>
            </li>
            <li className="rcard">
              <img src={markImg} alt="Mark Zuckerberg" />
              <h4>Mark Zuckerberg</h4>
              <p>CEO, Meta</p>
            </li>
            <li className="rcard">
              <img src={reshiImg} alt="Rishi Sunak" />
              <h4>Rishi Sunak</h4>
              <p>Prime Minister, UK</p>
            </li>
            <li className="rcard">
              <img src={steveImg} alt="Steve Jobs" />
              <h4>Steve Jobs</h4>
              <p>Co-Founder, Apple</p>
            </li>
            <li className="rcard">
              <img src={abjImg} alt="APJ Abdul Kalam" />
              <h4>Dr. Kalam</h4>
              <p>Scientist & President</p>
            </li>
            <li className="rcard">
              <img src={sathiyaImg} alt="Satya Nadella" />
              <h4>Satya Nadella</h4>
              <p>CEO, Microsoft</p>
            </li>
            <li className="rcard">
              <img src={lisaImg} alt="Lisa Su" />
              <h4>Lisa Su</h4>
              <p>CEO, AMD</p>
            </li>
            <li className="rcard">
              <img src={jensenImg} alt="Jensen Huang" />
              <h4>Jensen Huang</h4>
              <p>CEO, NVIDIA</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="home-buttons fade-in">
        <a
          href="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Vengatesh_2025-06-16-184136.pdf"
          target="_blank"
          className="resume-btn"
        >
          Resume
        </a>
        <Link to="/contact" className="contact-btn">
          Contact Me
        </Link>
      </div>

      <div className="like-container">
        <p>If you like this page, click the button below ❤️</p>
        <LikeButton />
      </div>
    </section>
  );
}

export default Home;
