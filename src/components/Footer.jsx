import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const socialLinks = [
    { icon: '📘', url: 'https://facebook.com', label: 'Facebook' },
    { icon: '📷', url: 'https://instagram.com', label: 'Instagram' },
    { icon: '▶️', url: 'https://youtube.com', label: 'YouTube' },
    { icon: '🐦', url: 'https://twitter.com', label: 'Twitter' }
  ]

  return (
    <motion.footer 
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="footer-glow"></div>
      
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <span className="logo-main">CHURU</span>
              <span className="logo-sub">ESPORTS HUB</span>
            </div>
            <p className="footer-tagline">
              Talent of Churu, Now the World Will See It!
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/results">Tournament Results</Link></li>
              <li><Link to="/registration">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Esports Scouting</a></li>
              <li><a href="#services">Mind Games</a></li>
              <li><a href="#services">Grassroots Tournaments</a></li>
              <li><a href="#services">School Programs</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📱</span>
                <a href="tel:+919351940232">+91 9351940232</a>
              </li>
              <li>
                <span className="contact-icon">📧</span>
                <a href="mailto:mohitdarji213@gmail.com">mohitdarji213@gmail.com</a>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>Churu, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Churu Esports Hub. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="separator">•</span>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>

      <div className="footer-pattern"></div>
    </motion.footer>
  )
}

export default Footer
