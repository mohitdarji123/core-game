import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('add-result');
  const [tournamentData, setTournamentData] = useState({
    tournamentName: '',
    game: '',
    date: '',
    winner1Name: '',
    winner1School: '',
    winner2Name: '',
    winner2School: '',
    winner3Name: '',
    winner3School: ''
  });

  const [registrations] = useState([
    {
      id: 1,
      type: 'School',
      name: 'Kendriya Vidyalaya',
      contact: 'principal@kv.edu.in',
      phone: '+91 9876543210',
      game: 'BGMI',
      status: 'Pending'
    },
    {
      id: 2,
      type: 'Individual',
      name: 'Rajveer Singh',
      contact: 'rajveer@gmail.com',
      phone: '+91 9876543211',
      game: 'Free Fire',
      status: 'Approved'
    },
    {
      id: 3,
      type: 'School',
      name: 'DAV Public School',
      contact: 'admin@dav.edu.in',
      phone: '+91 9876543212',
      game: 'Chess',
      status: 'Pending'
    },
    {
      id: 4,
      type: 'Individual',
      name: 'Priya Sharma',
      contact: 'priya@gmail.com',
      phone: '+91 9876543213',
      game: 'Ludo',
      status: 'Approved'
    }
  ]);

  const [stats] = useState({
    totalTournaments: 12,
    totalPlayers: 487,
    pendingRegistrations: 23,
    activeSchools: 18
  });

  const handleInputChange = (e) => {
    setTournamentData({
      ...tournamentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tournament Result:', tournamentData);
    alert('Tournament result added successfully! ✅');
    setTournamentData({
      tournamentName: '',
      game: '',
      date: '',
      winner1Name: '',
      winner1School: '',
      winner2Name: '',
      winner2School: '',
      winner3Name: '',
      winner3School: ''
    });
  };

  return (
    <div className="admin-dashboard">
      <section className="dashboard-hero">
        <motion.div 
          className="dashboard-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>ADMIN DASHBOARD</h1>
          <p>Manage tournaments, registrations, and results</p>
        </motion.div>
      </section>

      <div className="dashboard-container">
        {/* Stats Cards */}
        <motion.div 
          className="stats-overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-info">
              <h3>{stats.totalTournaments}</h3>
              <p>Total Tournaments</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <h3>{stats.totalPlayers}</h3>
              <p>Total Players</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-info">
              <h3>{stats.pendingRegistrations}</h3>
              <p>Pending Registrations</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏫</div>
            <div className="stat-info">
              <h3>{stats.activeSchools}</h3>
              <p>Active Schools</p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="dashboard-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            className={`tab-btn ${activeTab === 'add-result' ? 'active' : ''}`}
            onClick={() => setActiveTab('add-result')}
          >
            Add Tournament Result
          </button>
          <button
            className={`tab-btn ${activeTab === 'registrations' ? 'active' : ''}`}
            onClick={() => setActiveTab('registrations')}
          >
            View Registrations
          </button>
        </motion.div>

        {/* Tab Content */}
        <motion.div 
          className="dashboard-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {activeTab === 'add-result' ? (
            <div className="add-result-section">
              <h2 className="section-title">Add New Tournament Result</h2>
              <form className="tournament-form" onSubmit={handleSubmit}>
                <div className="form-section">
                  <h3>Tournament Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Tournament Name *</label>
                      <input
                        type="text"
                        name="tournamentName"
                        value={tournamentData.tournamentName}
                        onChange={handleInputChange}
                        placeholder="e.g., Churu School Championship 2026"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Game *</label>
                      <select
                        name="game"
                        value={tournamentData.game}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Game</option>
                        <option value="BGMI">BGMI</option>
                        <option value="Free Fire">Free Fire</option>
                        <option value="Chess">Chess</option>
                        <option value="Ludo">Ludo</option>
                        <option value="Snakes & Ladders">Snakes & Ladders</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={tournamentData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3>Winners</h3>
                  <div className="winner-section">
                    <h4>🥇 First Place</h4>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Player/Team Name *</label>
                        <input
                          type="text"
                          name="winner1Name"
                          value={tournamentData.winner1Name}
                          onChange={handleInputChange}
                          placeholder="Winner name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>School/Village</label>
                        <input
                          type="text"
                          name="winner1School"
                          value={tournamentData.winner1School}
                          onChange={handleInputChange}
                          placeholder="School or village name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="winner-section">
                    <h4>🥈 Second Place</h4>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Player/Team Name *</label>
                        <input
                          type="text"
                          name="winner2Name"
                          value={tournamentData.winner2Name}
                          onChange={handleInputChange}
                          placeholder="Winner name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>School/Village</label>
                        <input
                          type="text"
                          name="winner2School"
                          value={tournamentData.winner2School}
                          onChange={handleInputChange}
                          placeholder="School or village name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="winner-section">
                    <h4>🥉 Third Place</h4>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Player/Team Name *</label>
                        <input
                          type="text"
                          name="winner3Name"
                          value={tournamentData.winner3Name}
                          onChange={handleInputChange}
                          placeholder="Winner name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>School/Village</label>
                        <input
                          type="text"
                          name="winner3School"
                          value={tournamentData.winner3School}
                          onChange={handleInputChange}
                          placeholder="School or village name"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Publish Result
                </button>
              </form>
            </div>
          ) : (
            <div className="registrations-section">
              <h2 className="section-title">Recent Registrations</h2>
              <div className="registrations-table">
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Phone</th>
                      <th>Game</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg) => (
                      <tr key={reg.id}>
                        <td>
                          <span className={`type-badge ${reg.type.toLowerCase()}`}>
                            {reg.type}
                          </span>
                        </td>
                        <td className="name-cell">{reg.name}</td>
                        <td>{reg.contact}</td>
                        <td>{reg.phone}</td>
                        <td>{reg.game}</td>
                        <td>
                          <span className={`status-badge ${reg.status.toLowerCase()}`}>
                            {reg.status}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-action btn-approve">Approve</button>
                            <button className="btn-action btn-reject">Reject</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
