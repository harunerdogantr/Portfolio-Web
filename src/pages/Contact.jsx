import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verilerini işleyebilirsiniz
    console.log('Form verileri:', formData);
    // Form gönderildikten sonra alanları temizle
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container section">
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: 'var(--text-color)',
        textAlign: 'center'
      }}>
        İletişime Geç
      </h1>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="name"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--text-color)',
                fontWeight: 500
              }}
            >
              İsim
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid #e5e7eb',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--text-color)',
                fontWeight: 500
              }}
            >
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid #e5e7eb',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="message"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--text-color)',
                fontWeight: 500
              }}
            >
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid #e5e7eb',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: '100%'
            }}
          >
            Gönder
          </button>
        </form>

        <div style={{
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: 'var(--text-color)'
          }}>
            Diğer İletişim Kanalları
          </h2>
          <p style={{
            color: '#666',
            marginBottom: '0.5rem'
          }}>
            Email: ornek@email.com
          </p>
          <p style={{
            color: '#666',
            marginBottom: '0.5rem'
          }}>
            LinkedIn: linkedin.com/in/kullanici-adi
          </p>
          <p style={{
            color: '#666'
          }}>
            GitHub: github.com/kullanici-adi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact; 