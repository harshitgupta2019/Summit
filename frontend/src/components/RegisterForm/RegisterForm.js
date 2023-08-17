import React, { useState } from 'react';
import './RegisterForm.css'; 
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      // Perform basic form validation
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.organization) {
        toast.error('Please fill in all required fields.');
        return;
      }

      if (!isValidEmail(formData.email)) {
        toast.error('Please enter a valid email address.');
        return;
      }
      else{

      
      const response = await axios.post('https://summit-seven.vercel.app/register', formData);

      if (response.status === 201) {
        setIsSubmitted(true);
        toast.success('Registration successful! Thank you for registering.');

        setTimeout(() => {
          navigate('/schedule');
        }, 3000);
      } else {
        console.error('Registration failed');
      }
    }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const isValidEmail = email => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  return (
    <div className="register-form-page">
      <section className="register-form-section">
        <div className="register-form-container">
          
          <h2 className="register-form-title">Register for the Event</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="register-button">
              Register
            </button>
          </form>
          {isSubmitted && <ToastContainer />}
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;
