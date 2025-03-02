const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 80 },
  ];

  return (
    <div className="container section">
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: 'var(--text-color)',
        textAlign: 'center'
      }}>
        Hakkımda
      </h1>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          marginBottom: '3rem',
          color: '#666'
        }}>
          Merhaba! Ben [İsminiz], 5 yıldır web geliştirme alanında çalışıyorum. 
          Modern web teknolojilerini kullanarak kullanıcı dostu ve performanslı 
          uygulamalar geliştirmeye odaklanıyorum. Sürekli kendimi geliştiriyor 
          ve yeni teknolojileri öğrenmeye hevesli bir yazılımcıyım.
        </p>

        <h2 style={{
          fontSize: '1.8rem',
          marginBottom: '1.5rem',
          color: 'var(--text-color)'
        }}>
          Yeteneklerim
        </h2>

        <div style={{ marginBottom: '3rem' }}>
          {skills.map((skill) => (
            <div key={skill.name} style={{ marginBottom: '1.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem'
              }}>
                <span style={{ fontWeight: 500 }}>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div style={{
                height: '8px',
                backgroundColor: '#f3f4f6',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${skill.level}%`,
                  height: '100%',
                  backgroundColor: 'var(--primary-color)',
                  transition: 'width 1s ease-in-out'
                }} />
              </div>
            </div>
          ))}
        </div>

        <h2 style={{
          fontSize: '1.8rem',
          marginBottom: '1.5rem',
          color: 'var(--text-color)'
        }}>
          Deneyim
        </h2>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ 
            fontSize: '1.3rem',
            color: 'var(--primary-color)',
            marginBottom: '0.5rem'
          }}>
            Senior Frontend Developer
          </h3>
          <p style={{ color: '#666', marginBottom: '0.5rem' }}>
            XYZ Teknoloji | 2020 - Günümüz
          </p>
          <ul style={{ 
            listStyle: 'disc',
            marginLeft: '1.5rem',
            color: '#666',
            lineHeight: '1.6'
          }}>
            <li>React ve TypeScript kullanarak modern web uygulamaları geliştirdim</li>
            <li>Performans optimizasyonları ile sayfa yüklenme sürelerini %40 azalttım</li>
            <li>Junior geliştiricilere mentorluk yaptım</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About; 