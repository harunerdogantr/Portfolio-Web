import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container section">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        minHeight: '80vh'
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '1.5rem',
            color: 'var(--text-color)'
          }}>
            Merhaba, Ben <span style={{ color: 'var(--primary-color)' }}>İsminiz</span>
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
            <Link to="/projects" className="btn btn-primary">
              Projelerimi Gör
            </Link>
            <Link to="/contact" className="btn" style={{
              backgroundColor: '#f3f4f6',
              color: 'var(--text-color)'
            }}>
              İletişime Geç
            </Link>
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
    </div>
  );
};

export default Home; 