import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import profileImg from "../../assets/profile.JPG";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    setActiveSection(path);
    setIsMenuOpen(false); // close menu on route change
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">
          {activeSection === "about" ? (
            <span className="logo-about">
              <img src={profileImg} alt="Profile" className="nav-profile-img" />
              R Vengatesh
            </span>
          ) : (
            "MyPortfolio"
          )}
        </Link>
        <div className="text-changer">
          <p className="intro-text">I am a</p>
          <div className="roles-container">
            <span className="role">Web Developer</span>
            <span className="role">JS Developer</span>
            <span className="role">React Enthusiast</span>
            <span className="role">Python Developer</span>
            <span className="role">MERN Developer</span>
            <span className="role">Lifelong Learner</span>
          </div>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <svg
            xmlnsВС
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="nav-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <ul className={`navbar-links ${isMenuOpen ? "show-menu" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name} className="navbar-item">
              <Link
                to={item.path}
                className={`navbar-link ${
                  activeSection === item.name.toLowerCase() ? "active-link" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
