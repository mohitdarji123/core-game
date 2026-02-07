import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Results from './pages/Results'
import Registration from './pages/Registration'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import './styles/App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [userRole, setUserRole] = useState("admin") // 'admin', 'school', 'individual'

  const handleLogin = (role) => {
    setIsAuthenticated(true)
    setUserRole(role)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserRole(null)
  }

  return (
    <Router>
      <div className="app">
        <Navbar 
          isAuthenticated={isAuthenticated} 
          userRole={userRole} 
          onLogout={handleLogout} 
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route 
            path="/admin" 
            element={
              isAuthenticated && userRole === 'admin' ? 
              <AdminDashboard /> : 
              <Navigate to="/login" replace />
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
