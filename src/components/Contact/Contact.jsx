import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      emailjs
        .send(
          "service_7ya95bq", // ✅ Put inside quotes
          "template_kyeyn7g", // ✅ Put inside quotes
          formData,
          "zM6Klpf95Qp_B58ac" // ✅ Put inside quotes
        )

        .then(
          () => {
            setSuccess("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
          },
          (error) => {
            setSuccess("Failed to send message. Try again later.");
            console.error("EmailJS Error:", error);
          }
        );
    } else {
      setErrors(formErrors);
      setSuccess("");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <div className="contact">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
          />
          {errors.message && <span className="error">{errors.message}</span>}
          <button type="submit">Send Message</button>
          {success && <p className="success-msg">{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
