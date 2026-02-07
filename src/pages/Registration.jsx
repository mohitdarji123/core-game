import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Registration.css';

const Registration = () => {
  const [registrationType, setRegistrationType] = useState('school'); // 'school' or 'individual'
  const [formData, setFormData] = useState({
    // School Registration
    schoolName: '',
    schoolAddress: '',
    principalName: '',
    principalPhone: '',
    principalEmail: '',
    coordinatorName: '',
    coordinatorPhone: '',
    coordinatorEmail: '',
    
    // Individual Registration
    playerName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    village: '',
    
    // Common
    game: '',
    teamName: '',
    experience: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { type: registrationType, data: formData });
    alert('Registration successful! We will contact you soon.');
    // Reset form
    setFormData({
      schoolName: '',
      schoolAddress: '',
      principalName: '',
      principalPhone: '',
      principalEmail: '',
      coordinatorName: '',
      coordinatorPhone: '',
      coordinatorEmail: '',
      playerName: '',
      dateOfBirth: '',
      gender: '',
      phone: '',
      email: '',
      address: '',
      village: '',
      game: '',
      teamName: '',
      experience: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="registration-page">
      <section className="registration-hero">
        <motion.div 
          className="registration-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>REGISTRATION</h1>
          <p>Join the Churu Esports movement - Schools & Individuals welcome!</p>
        </motion.div>
      </section>

      <section className="registration-content">
        <div className="container">
          <motion.div 
            className="registration-type-selector"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              className={`type-btn ${registrationType === 'school' ? 'active' : ''}`}
              onClick={() => setRegistrationType('school')}
            >
              <span className="type-icon">🏫</span>
              <span className="type-text">School Registration</span>
            </button>
            <button
              className={`type-btn ${registrationType === 'individual' ? 'active' : ''}`}
              onClick={() => setRegistrationType('individual')}
            >
              <span className="type-icon">👤</span>
              <span className="type-text">Individual Registration</span>
            </button>
          </motion.div>

          <motion.form 
            className="registration-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {registrationType === 'school' ? (
              // School Registration Form
              <>
                <div className="form-section">
                  <h3 className="form-section-title">School Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>School Name *</label>
                      <input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        placeholder="Enter school name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>School Address *</label>
                      <input
                        type="text"
                        name="schoolAddress"
                        value={formData.schoolAddress}
                        onChange={handleChange}
                        placeholder="Enter school address"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Principal Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Principal Name *</label>
                      <input
                        type="text"
                        name="principalName"
                        value={formData.principalName}
                        onChange={handleChange}
                        placeholder="Enter principal name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Principal Phone *</label>
                      <input
                        type="tel"
                        name="principalPhone"
                        value={formData.principalPhone}
                        onChange={handleChange}
                        placeholder="+91 XXXXXXXXXX"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Principal Email *</label>
                    <input
                      type="email"
                      name="principalEmail"
                      value={formData.principalEmail}
                      onChange={handleChange}
                      placeholder="principal@school.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Coordinator Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Coordinator Name *</label>
                      <input
                        type="text"
                        name="coordinatorName"
                        value={formData.coordinatorName}
                        onChange={handleChange}
                        placeholder="Enter coordinator name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Coordinator Phone *</label>
                      <input
                        type="tel"
                        name="coordinatorPhone"
                        value={formData.coordinatorPhone}
                        onChange={handleChange}
                        placeholder="+91 XXXXXXXXXX"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Coordinator Email *</label>
                    <input
                      type="email"
                      name="coordinatorEmail"
                      value={formData.coordinatorEmail}
                      onChange={handleChange}
                      placeholder="coordinator@school.com"
                      required
                    />
                  </div>
                </div>
              </>
            ) : (
              // Individual Registration Form
              <>
                <div className="form-section">
                  <h3 className="form-section-title">Personal Information</h3>
                  <div className="form-group">
                    <label>Player Name *</label>
                    <input
                      type="text"
                      name="playerName"
                      value={formData.playerName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Date of Birth *</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Gender *</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXXXXXXX"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Village/City *</label>
                    <input
                      type="text"
                      name="village"
                      value={formData.village}
                      onChange={handleChange}
                      placeholder="Enter your village or city name"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {/* Common Fields */}
            <div className="form-section">
              <h3 className="form-section-title">Gaming Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Select Game *</label>
                  <select
                    name="game"
                    value={formData.game}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a game</option>
                    <option value="BGMI">BGMI (Battle Royale)</option>
                    <option value="Free Fire">Free Fire (Battle Royale)</option>
                    <option value="Chess">Chess (Mind Game)</option>
                    <option value="Ludo">Ludo (Mind Game)</option>
                    <option value="Snakes & Ladders">Snakes & Ladders (Mind Game)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Team Name (if applicable)</label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="Enter team name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Gaming Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (0-6 months)</option>
                  <option value="intermediate">Intermediate (6 months - 2 years)</option>
                  <option value="advanced">Advanced (2+ years)</option>
                  <option value="professional">Professional/Competitive</option>
                </select>
              </div>
              <div className="form-group">
                <label>Additional Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Any additional information you'd like to share..."
                  rows="4"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              Submit Registration
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Registration;
