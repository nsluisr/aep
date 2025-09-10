
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DraxionLoginPage from './pages/DraxionLoginPage';
import DraxionDashboard from './pages/DraxionDashboard';

// Header Component
const Header: React.FC = () => {
  // Function to handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // If we are not on the homepage, navigate there first
    if (window.location.pathname !== '/') {
      window.location.href = '/' + targetId;
    } else {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="Header">
      <Link to="/" className="Header-logo">RetoMental</Link>
      <nav className="Header-nav">
        <a href="#temas" onClick={(e) => handleNavClick(e, '#temas')}>Temas</a>
        <a href="#integrantes" onClick={(e) => handleNavClick(e, '#integrantes')}>Integrantes</a>
        <a href="#descargas" onClick={(e) => handleNavClick(e, '#descargas')} className="Header-login-btn">Descargas</a>
      </nav>
    </header>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/draxion" element={<DraxionLoginPage />} />
            <Route path="/draxion/dashboard" element={<DraxionDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
