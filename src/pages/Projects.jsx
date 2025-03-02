const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Platformu',
      description: 'React ve Node.js kullanılarak geliştirilmiş modern bir e-ticaret platformu.',
      image: 'https://via.placeholder.com/400x250',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 2,
      title: 'Task Yönetim Uygulaması',
      description: 'Drag and drop özellikli, gerçek zamanlı task yönetim uygulaması.',
      image: 'https://via.placeholder.com/400x250',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 3,
      title: 'Blog Platformu',
      description: 'Next.js ile geliştirilmiş, SEO dostu modern blog platformu.',
      image: 'https://via.placeholder.com/400x250',
      technologies: ['Next.js', 'TypeScript', 'Prisma'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    }
  ];

  return (
    <div className="container section">
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: 'var(--text-color)',
        textAlign: 'center'
      }}>
        Projelerim
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '1rem'
      }}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease-in-out',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--text-color)'
              }}>
                {project.title}
              </h3>
              <p style={{
                color: '#666',
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.875rem'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  Canlı Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    flex: 1,
                    backgroundColor: '#f3f4f6',
                    color: 'var(--text-color)'
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 