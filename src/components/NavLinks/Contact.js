import React, { useState } from 'react';
import './Contact.css'; // Import custom styles for the Contact component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({}); // State to track form validation errors

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email || !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      // Handle form submission logic here
      alert('Message sent!'); // Placeholder alert
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      
      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Reach out to us with any questions, comments, or feedback.</p>
          
          <ul>
            <li>Email: support@lanelook.com</li>
            <li>Phone: +91 1234567899</li>
            <li>Address: Highland Thane </li>
          </ul>
          
          <div className="social-media">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <div className="error">{errors.name}</div>}
            
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
            
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <div className="error">{errors.message}</div>}
            
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
