import { useState, useEffect } from 'react';
import './styles/main.css';
import './styles/animations.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in-up').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const socialLinks = {
    github: "https://github.com/harunerdogantr",
    linkedin: "https://www.linkedin.com/in/harunerdogantr",
    twitter: "https://x.com/harunerdogantr",
    instagram: "https://www.instagram.com/h.harunerdogan"
  };

  return (
    <div>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'var(--card-background)',
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 0'
        }}>
          <a href="#" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--primary-color)',
            textDecoration: 'none'
          }}>
            Portfolio
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              '@media (max-width: 768px)': {
                display: 'block'
              }
            }}
          >
            <div style={{ width: '25px', height: '2px', backgroundColor: 'var(--text-color)', marginBottom: '5px' }}></div>
            <div style={{ width: '25px', height: '2px', backgroundColor: 'var(--text-color)', marginBottom: '5px' }}></div>
            <div style={{ width: '25px', height: '2px', backgroundColor: 'var(--text-color)' }}></div>
          </button>

          <div style={{
            display: isMenuOpen ? 'flex' : 'none',
            '@media (min-width: 769px)': {
              display: 'flex'
            },
            gap: '2rem'
          }}>
            <a href="#" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Ana Sayfa</a>
            <a href="#about" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Hakkımda</a>
            <a href="#projects" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Projeler</a>
            <a href="#contact" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>İletişim</a>
          </div>
        </div>
      </nav>

      {/* Add margin-top to prevent content from being hidden under fixed navbar */}
      <div style={{ marginTop: '70px' }}>
        {/* Hero Section */}
        <section className="container section fade-in-up" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            width: '100%'
          }}>
            <div style={{ flex: 1 }}>
              <h1 style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                color: 'var(--text-color)'
              }}>
                Merhaba, Ben <span style={{ color: 'var(--primary-color)' }}>Harun ERDOĞAN</span>
              </h1>
              <p style={{
                fontSize: '1.25rem',
                marginBottom: '2rem',
                lineHeight: '1.8',
                color: '#666'
              }}>
                Frontend Developer olarak modern ve kullanıcı dostu web uygulamaları geliştiriyorum.
                React, JavaScript ve modern web teknolojileri konusunda uzmanım.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#projects" className="btn btn-primary">
                  Projelerimi Gör
                </a>
                <a href="#contact" className="btn" style={{
                  backgroundColor: '#f3f4f6',
                  color: 'var(--text-color)'
                }}>
                  İletişime Geç
                </a>
              </div>
            </div>
            <div style={{ 
              flex: 1,
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '400px',
                height: '400px',
                backgroundColor: 'var(--primary-color)',
                borderRadius: '50%',
                opacity: '0.1'
              }}>
                {/* Buraya profilinizin resmini ekleyebilirsiniz */}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--card-background)',
        padding: '2rem 0',
        marginTop: '4rem'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            gap: '1.5rem'
          }}>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
              GitHub
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
              LinkedIn
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
              Twitter
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
              Instagram
            </a>
          </div>
          <p style={{ color: '#666', margin: 0 }}>
            © 2024 Harun ERDOĞAN. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;