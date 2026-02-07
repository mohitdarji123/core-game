import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    userType: 'individual' // 'individual', 'school', 'admin'
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Demo authentication logic
    // In production, this would call an API
    if (loginData.email && loginData.password) {
      if (loginData.email === 'admin@churuesports.com' && loginData.password === 'admin123') {
        onLogin('admin');
        navigate('/admin');
      } else if (loginData.userType === 'school') {
        onLogin('school');
        navigate('/');
      } else {
        onLogin('individual');
        navigate('/');
      }
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="login-page">
      <section className="login-hero">
        <motion.div 
          className="login-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>LOGIN</h1>
          <p>Access your Churu Esports account</p>
        </motion.div>
      </section>

      <section className="login-content">
        <div className="container">
          <motion.div 
            className="login-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="login-header">
              <h2>Welcome Back</h2>
              <p>Login to manage your profile and tournaments</p>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>User Type</label>
                <select
                  name="userType"
                  value={loginData.userType}
                  onChange={handleChange}
                  required
                >
                  <option value="individual">Individual Player</option>
                  <option value="school">School Representative</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="forgot-link">Forgot Password?</a>
              </div>

              <button type="submit" className="btn btn-primary btn-login">
                Login
              </button>
            </form>

            <div className="login-footer">
              <p>Don't have an account? <a href="/registration">Register here</a></p>
            </div>

            <div className="demo-credentials">
              <p className="demo-title">Demo Credentials:</p>
              <p>Admin: admin@churuesports.com / admin123</p>
              <p>Any other email for School/Individual login</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Login;
