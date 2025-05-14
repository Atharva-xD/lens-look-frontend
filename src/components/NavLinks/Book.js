// Book.js
import React, { useState } from 'react';
import './Book.css'; // Import custom styles for the Book component

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    timeSlot: ''
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
    if (!formData.date) {
      errors.date = 'Date is required';
    }
    if (!formData.timeSlot) {
      errors.timeSlot = 'Time slot is required';
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
      alert('Slot booked!'); // Placeholder alert
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        date: '',
        timeSlot: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="book-container container">
      <div className="book-header">
        <h1>Book Your Slot</h1>
      </div>
      <div className="book-form">
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
          
          <input
            type="date"
            name="date"
            placeholder="Select Date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          {errors.date && <div className="error">{errors.date}</div>}
          
          <select
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            required
          >
            <option value="">Select a time slot</option>
            <option value="09:00-10:00">09 :00-10:00</option>
            <option value="10:00-11:00">10:00-11:00</option>
            <option value="11:00-12:00">11:00-12:00</option>
            <option value="12:00-13:00">12:00-13:00</option>
            <option value="13:00-14:00">13:00-14:00</option>
            <option value="14:00-15:00">14:00-15:00</option>
            <option value="15:00-16:00">15:00-16:00</option>
            <option value="16:00-17:00">16:00-17:00</option>
          </select>
          {errors.timeSlot && <div className="error">{errors.timeSlot}</div>}
          
          <button type="submit">Book Slot</button>
        </form>
      </div>
    </div>
  );
};

export default Book;