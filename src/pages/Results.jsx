import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Results.css';

const Results = () => {
  const [tournaments] = useState([
    {
      id: 1,
      name: 'Churu School Championship 2026',
      game: 'BGMI',
      gameIcon: '🎮',
      date: '15 Jan 2026',
      winners: [
        { position: 1, name: 'Team Phoenix', school: 'Govt. Senior Secondary School' },
        { position: 2, name: 'Team Warriors', school: 'Kendriya Vidyalaya' },
        { position: 3, name: 'Team Legends', school: "St. Xavier's School" }
      ]
    },
    {
      id: 2,
      name: 'Village Talent Hunt',
      game: 'Free Fire',
      gameIcon: '🔥',
      date: '10 Jan 2026',
      winners: [
        { position: 1, name: 'Rajveer Singh', school: 'Rajgarh Village' },
        { position: 2, name: 'Sahil Kumar', school: 'Sujangarh' },
        { position: 3, name: 'Aman Sharma', school: 'Ratangarh' }
      ]
    },
    {
      id: 3,
      name: 'Chess Championship',
      game: 'Chess',
      gameIcon: '♟️',
      date: '5 Jan 2026',
      winners: [
        { position: 1, name: 'Priya Sharma', school: 'Rajkiya Balika Vidyalaya' },
        { position: 2, name: 'Rohit Meena', school: 'DAV Public School' },
        { position: 3, name: 'Ankit Jangid', school: 'Saraswati Vidya Mandir' }
      ]
    },
    {
      id: 4,
      name: 'Winter Gaming Fest 2025',
      game: 'BGMI',
      gameIcon: '🎮',
      date: '28 Dec 2025',
      winners: [
        { position: 1, name: 'Team Alpha', school: 'Central Academy' },
        { position: 2, name: 'Team Bravo', school: 'Modern School' },
        { position: 3, name: 'Team Charlie', school: 'Green Valley School' }
      ]
    },
    {
      id: 5,
      name: 'Ludo Championship',
      game: 'Ludo',
      gameIcon: '🎲',
      date: '20 Dec 2025',
      winners: [
        { position: 1, name: 'Vikas Jat', school: 'Independent Player' },
        { position: 2, name: 'Deepak Saini', school: 'Independent Player' },
        { position: 3, name: 'Mohan Lal', school: 'Sardarshahar Village' }
      ]
    },
    {
      id: 6,
      name: 'Free Fire District League',
      game: 'Free Fire',
      gameIcon: '🔥',
      date: '15 Dec 2025',
      winners: [
        { position: 1, name: 'Team Strikers', school: 'Multiple Schools Alliance' },
        { position: 2, name: 'Team Blazers', school: 'Taranagar School' },
        { position: 3, name: 'Team Thunder', school: 'Bidasar School' }
      ]
    }
  ]);

  const [selectedGame, setSelectedGame] = useState('All');

  const games = ['All', 'BGMI', 'Free Fire', 'Chess', 'Ludo'];

  const filteredTournaments = selectedGame === 'All' 
    ? tournaments 
    : tournaments.filter(t => t.game === selectedGame);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="results-page">
      <section className="results-hero">
        <motion.div 
          className="results-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>TOURNAMENT RESULTS</h1>
          <p>Latest results from our competitive gaming tournaments across Churu district</p>
        </motion.div>
      </section>

      <section className="results-content">
        <div className="container">
          {/* Filter Buttons */}
          <motion.div 
            className="filter-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {games.map((game) => (
              <button
                key={game}
                className={`filter-btn ${selectedGame === game ? 'active' : ''}`}
                onClick={() => setSelectedGame(game)}
              >
                {game}
              </button>
            ))}
          </motion.div>

          {/* Tournament Cards */}
          <motion.div 
            className="results-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredTournaments.map((tournament) => (
              <motion.div 
                key={tournament.id} 
                className="tournament-card"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="tournament-header">
                  <h3 className="tournament-title">{tournament.name}</h3>
                  <span className="tournament-date">{tournament.date}</span>
                </div>
                <div className="tournament-game">
                  {tournament.gameIcon} {tournament.game}
                </div>
                <ul className="winners-list">
                  {tournament.winners.map((winner) => (
                    <li key={winner.position} className="winner-item">
                      <div className={`position-badge position-${winner.position}`}>
                        {winner.position === 1 && '🥇'}
                        {winner.position === 2 && '🥈'}
                        {winner.position === 3 && '🥉'}
                      </div>
                      <div className="winner-info">
                        <h4>{winner.name}</h4>
                        <p>{winner.school}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {filteredTournaments.length === 0 && (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No tournaments found for {selectedGame}</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Results;
