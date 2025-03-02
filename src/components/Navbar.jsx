import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container flex justify-between items-center" style={{ padding: '1rem 0' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-color)', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Portfolio
      </Link>

      <div className="nav-links" style={{ display: isMenuOpen ? 'flex' : 'none' }}>
        <Link to="/" style={{ marginRight: '2rem', textDecoration: 'none', color: 'var(--text-color)' }}>Ana Sayfa</Link>
        <Link to="/about" style={{ marginRight: '2rem', textDecoration: 'none', color: 'var(--text-color)' }}>Hakkımda</Link>
        <Link to="/projects" style={{ marginRight: '2rem', textDecoration: 'none', color: 'var(--text-color)' }}>Projeler</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'var(--text-color)' }}>İletişim</Link>
      </div>

      <button 
        className="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem'
        }}
      >
        <div style={{ width: '25px', height: '2px', background: 'var(--text-color)', marginBottom: '5px' }}></div>
        <div style={{ width: '25px', height: '2px', background: 'var(--text-color)', marginBottom: '5px' }}></div>
        <div style={{ width: '25px', height: '2px', background: 'var(--text-color)' }}></div>
      </button>

      <style>{`
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--background-color);
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          
          .nav-links a {
            margin: 1rem 0 !important;
          }
          
          .menu-button {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .nav-links {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar; 