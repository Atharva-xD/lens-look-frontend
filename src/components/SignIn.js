import React, { useState } from 'react';
import './Signin.css';
import { Form, Button, Container } from 'react-bootstrap';
import { FaTimes } from "react-icons/fa";

const Signin = ({ close, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      errors.email = 'Invalid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const isAdmin = email === 'admin@gmail.com' && password === 'lanelook';
      const userData = { email, isAdmin };
      
      if (typeof onLogin === 'function') {
        onLogin(userData);
      }

      setEmail('');
      setPassword('');
      setErrors({});

      if (typeof close === 'function') {
        close();
      }
    }
  };

  return (
    <Container className="signin-container">
      <div className="signin-form">
        <div className="signin-header">
          <h2>Sign In</h2>
          <FaTimes
            className="cancel-icon"
            onClick={close}
            style={{ cursor: 'pointer', fontSize: '1.5rem' }}
          />
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className="signin-button">
              Sign In
            </Button>
          </div>

          <div className="forgot-password mt-3">
            <a href="#" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Signin;