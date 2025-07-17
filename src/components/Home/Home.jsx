import profileImg from "../../assets/profile.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import ImageSlider from "../ImageSlider/ImageSlider";

function Home() {
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
      <h1 className="fade-in">Vengatesh Ramar</h1>
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
        <div className="slider-section fade-in">
          <ImageSlider />
        </div>
        <div className="slider-section fade-in">
          <ImageSlider />
        </div>
        <div className="slider-section fade-in">
          <ImageSlider />
        </div>
        <div className="slider-section fade-in">
          <ImageSlider />
        </div>
      </div>

      <div className="info-cards fade-in">
        <div className="card">
          <h3>🎓 Education</h3>
          <ul>
            <li>MCA - Madurai Kamaraj University, 2023</li>
            <li>BSc Computer Science - 2021</li>
            <li>HSC - State Board, 2018</li>
          </ul>
        </div>

        <div className="card">
          <h3>🛠️ Skills</h3>
          <ul>
            <li>JavaScript, React.js, Node.js</li>
            <li>MongoDB, Express.js, Python</li>
            <li>HTML5, CSS3, Bootstrap, Git</li>
          </ul>
        </div>
      </div>

      <div className="home-buttons fade-in">
        <a href="/resume.pdf" target="_blank" className="resume-btn">
          Download Resume
        </a>
        <Link to="/contact" className="contact-btn">
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default Home;
