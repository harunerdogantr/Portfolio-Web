import { useState } from 'react';
import './styles/main.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <section className="container section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
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

      {/* About Section */}
      <section id="about" className="container section" style={{ backgroundColor: 'transparent', padding: '4rem 0' }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          color: 'var(--text-color)',
          textAlign: 'center'
        }}>
          Hakkımda
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '3rem',
            color: '#666',
            textAlign: 'center'
          }}>
            Merhaba! Ben Harun ERDOĞAN, web geliştirme alanında tutkulu bir yazılımcıyım. 
            Modern web teknolojilerini kullanarak kullanıcı dostu ve performanslı 
            uygulamalar geliştirmeye odaklanıyorum. Sürekli kendimi geliştiriyor 
            ve yeni teknolojileri öğrenmeye hevesli bir yazılımcıyım.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div className="service-card" style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Frontend Geliştirme</h3>
              <p style={{ color: '#666' }}>React, JavaScript, HTML/CSS</p>
            </div>
            <div className="service-card" style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Responsive Tasarım</h3>
              <p style={{ color: '#666' }}>Modern ve mobil uyumlu UI/UX</p>
            </div>
            <div className="service-card" style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Backend Entegrasyonu</h3>
              <p style={{ color: '#666' }}>RESTful API, Node.js</p>
            </div>
            <div className="service-card" style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>SEO Optimizasyonu</h3>
              <p style={{ color: '#666' }}>
                Google Analytics, Meta Etiketleri, Performans Optimizasyonu, Anahtar Kelime Araştırması
              </p>
            </div>
          </div>

          {/* SEO Tools Section */}
          <div style={{
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              color: 'var(--text-color)', 
              marginBottom: '1.5rem',
              fontSize: '1.3rem'
            }}>
              Kullandığım SEO Araçları
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              {['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Yoast SEO', 'GTmetrix'].map((tool) => (
                <span 
                  key={tool} 
                  className="seo-tool"
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '20px',
                    color: '#666',
                    fontSize: '0.9rem'
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container section" style={{ backgroundColor: 'transparent', padding: '4rem 0' }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: 'var(--text-color)',
          textAlign: 'center'
        }}>
          Projelerim
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="project-card"
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img
                src={`https://via.placeholder.com/400x250?text=Proje+${project}`}
                alt={`Proje ${project}`}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>
                  Proje {project}
                </h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" className="btn btn-primary" style={{ flex: 1 }}>Demo</a>
                  <a href="#" className="btn" style={{ flex: 1, backgroundColor: '#f3f4f6' }}>GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Slider Section */}
      <section style={{ 
        padding: '4rem 0',
        backgroundColor: 'var(--card-background)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: 'var(--text-color)',
          textAlign: 'center'
        }}>
          Teknolojiler
        </h2>

        <div className="slider-container" style={{
          whiteSpace: 'nowrap',
          display: 'inline-block',
          animation: 'slide 30s linear infinite',
        }}>
          <div className="slider-content" style={{
            display: 'flex',
            gap: '4rem',
            padding: '2rem'
          }}>
            {/* Teknoloji logoları - Her biri 2 kez tekrarlanıyor sürekli akış için */}
            {[...Array(2)].map((_, index) => (
              <div key={index} style={{ display: 'flex', gap: '4rem' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                     alt="React" 
                     style={{ width: '80px', height: '80px' }} />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                     alt="JavaScript" 
                     style={{ width: '80px', height: '80px' }} />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                     alt="HTML5" 
                     style={{ width: '80px', height: '80px' }} />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                     alt="CSS3" 
                     style={{ width: '80px', height: '80px' }} />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                     alt="Node.js" 
                     style={{ width: '80px', height: '80px' }} />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                     alt="MongoDB" 
                     style={{ width: '80px', height: '80px' }} />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
                     alt="Git" 
                     style={{ width: '80px', height: '80px' }} />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                     alt="TypeScript" 
                     style={{ width: '80px', height: '80px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container section" style={{ backgroundColor: 'transparent', padding: '4rem 0' }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: 'var(--text-color)',
          textAlign: 'center'
        }}>
          İletişime Geç
        </h2>
        
        <p style={{
          textAlign: 'center',
          color: '#666',
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          Projeleriniz için benimle iletişime geçebilir veya sorularınızı sorabilirsiniz.
          En kısa sürede size dönüş yapacağım.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Contact Form */}
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--card-background)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            border: '1px solid var(--border-color)'
          }}>
            <form onSubmit={(e) => e.preventDefault()}>
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
                  placeholder="Adınız Soyadınız"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    fontSize: '1rem',
                    backgroundColor: 'var(--card-background)',
                    color: 'var(--text-color)'
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
                  placeholder="ornek@email.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    fontSize: '1rem',
                    backgroundColor: 'var(--card-background)',
                    color: 'var(--text-color)'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-color)',
                    fontWeight: 500
                  }}
                >
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Mesajınızın konusu"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    fontSize: '1rem',
                    backgroundColor: 'var(--card-background)',
                    color: 'var(--text-color)'
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
                  placeholder="Mesajınızı buraya yazın..."
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    fontSize: '1rem',
                    resize: 'vertical',
                    backgroundColor: 'var(--card-background)',
                    color: 'var(--text-color)'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>Gönder</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--card-background)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            border: '1px solid var(--border-color)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: 'var(--text-color)'
            }}>
              İletişim Bilgileri
            </h3>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  backgroundColor: 'var(--primary-color)',
                  padding: '0.75rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-color)', marginBottom: '0.25rem' }}>Adres</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>İskenderun/HATAY, Türkiye</p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  backgroundColor: 'var(--primary-color)',
                  padding: '0.75rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-color)', marginBottom: '0.25rem' }}>E-posta</h4>
                  <a href="harunerdogan308@email.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>harunerdogan@gmail.com</a>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  backgroundColor: 'var(--primary-color)',
                  padding: '0.75rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                    <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-color)', marginBottom: '0.25rem' }}>Telefon</h4>
                  <a href="tel:+905369640549" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>+90 536 964 0549

                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{
                color: 'var(--text-color)',
                marginBottom: '1rem'
              }}>
                Sosyal Medya
              </h4>
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <a
                  href={socialLinks.github}
                  className="social-link"
                  style={{
                    backgroundColor: 'var(--card-background)',
                    padding: '0.75rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-color)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href={socialLinks.linkedin}
                  className="social-link"
                  style={{
                    backgroundColor: 'var(--card-background)',
                    padding: '0.75rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-color)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href={socialLinks.twitter}
                  className="social-link"
                  style={{
                    backgroundColor: 'var(--card-background)',
                    padding: '0.75rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-color)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a
                  href={socialLinks.instagram}
                  className="social-link"
                  style={{
                    backgroundColor: 'var(--card-background)',
                    padding: '0.75rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-color)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{
        backgroundColor: 'var(--card-background)',
        color: 'var(--text-color)',
        padding: '4rem 0 2rem 0',
        marginTop: '4rem',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* About Column */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Portfolio</h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
                Modern ve kullanıcı dostu web uygulamaları geliştiren tutkulu bir frontend developer.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Hızlı Bağlantılar</h3>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" className="footer-link">Ana Sayfa</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#about" className="footer-link">Hakkımda</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#services" className="footer-link">Hizmetler</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#projects" className="footer-link">Projeler</a>
                </li>
                <li>
                  <a href="#contact" className="footer-link">İletişim</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>İletişim Bilgileri</h3>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>
                📍 İskenderun/HATAY, Türkiye
              </p>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>
                📧  harunerdogan@email.com
              </p>
              <p style={{ color: '#9ca3af' }}>
                📱 +90 536 964 0549
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Sosyal Medya</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a 
                  href={socialLinks.github} 
                  className="social-link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href={socialLinks.linkedin} 
                  className="social-link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href={socialLinks.twitter} 
                  className="social-link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a 
                  href={socialLinks.instagram} 
                  className="social-link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            borderTop: '1px solid #374151',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#9ca3af'
          }}>
            <p>&copy; {new Date().getFullYear()} @harunerdogan Portfolio. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App; 