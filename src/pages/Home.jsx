import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/Home.css'

const Home = () => {
  const stats = [
    { number: '50+', label: 'Tournaments' },
    { number: '500+', label: 'Players' },
    { number: '25+', label: 'Schools' },
    { number: '10+', label: 'Villages' }
  ]

  const services = [
    {
      number: '01',
      title: 'Classical Mind Games',
      description: 'Through games like Chess, Ludo, and Snake & Ladders, we provide a platform for those who are adept at strategy and brainstorming. These games are for all age groups.',
      icon: '♟️'
    },
    {
      number: '02',
      title: 'Esports Scouting',
      description: 'Professional battle royale players will be selected and prepared for district level competitions to get a pro team. Focus on BGMI & Free Fire.',
      icon: '🎮'
    },
    {
      number: '03',
      title: 'Grassroots Tournaments',
      description: 'We will go to every village and school in Churu and organize free-entry tournaments so that every child gets a chance to showcase their talent.',
      icon: '🏆'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <motion.div 
          className="hero-content"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            CHURU ESPORTS HUB
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Talent of Churu, Now the World Will See It!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            We have brought Churu district&apos;s first platform that will unearth gaming talent from every street, neighborhood and school and turn them into pro-level esports teams.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link to="/registration" className="btn btn-primary">Register Now</Link>
            <Link to="/results" className="btn btn-secondary">View Results</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="stat-card" 
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <motion.div 
          className="mission-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">ABOUT OUR MISSION</h2>
          <p className="section-subtitle">Building Churu&apos;s own official Esports team</p>
          <div className="mission-text">
            <p>
              Our aim is to provide a platform to the hidden talents of Churu who want to pursue a career in gaming. We don&apos;t just play games, we&apos;re building Churu&apos;s own official Esports team, which will bring glory to the district on a grand scale.
            </p>
            <p>
              Our tournament structure is simple: First there will be qualifiers at the school level, then competitions between village winners, and finally the Grand Finale at the Churu district level where we will get our &apos;Churu Esports Team&apos;.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2 className="section-title">OUR SERVICES</h2>
        <p className="section-subtitle">Building champions from grassroots to pro level</p>
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card" 
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Join the Revolution?</h2>
          <p>Hamare saath judiye aur apne andar ke gamer ko ek nayi pehchan dijiye!</p>
          <Link to="/registration" className="btn btn-primary btn-large">
            Register Your Team
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
