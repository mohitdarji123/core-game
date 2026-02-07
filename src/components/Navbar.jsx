import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Navbar.css'

const Navbar = ({ isAuthenticated, userRole, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  }

  return (
    <motion.nav 
      className="navbar"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <motion.span 
            className="logo-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            CORE
          </motion.span>
          <span className="logo-subtext">GAMES</span>
        </Link>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <AnimatePresence>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/results" 
                className={isActive('/results') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Results
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/registration" 
                className={isActive('/registration') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Registration
              </Link>
            </motion.li>
            
            {!isAuthenticated ? (
              <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {/* <Link 
                  to="/login" 
                  className={`btn-nav ${isActive('/login') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Login
                </Link> */}
              </motion.li>
            ) : (
              <>
                {userRole === 'admin' && (
                  <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/admin" 
                      className={isActive('/admin') ? 'active' : ''}
                      onClick={closeMobileMenu}
                    >
                      Dashboard
                    </Link>
                  </motion.li>
                )}
                <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {/* <button 
                    className="btn-nav btn-logout" 
                    onClick={() => {
                      onLogout()
                      closeMobileMenu()
                    }}
                  >
                    Logout
                  </button> */}
                </motion.li>
              </>
            )}
          </ul>
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
