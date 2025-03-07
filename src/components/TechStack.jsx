import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const logos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  ];

  // Logoları iki kez kullanarak sonsuz döngü efekti oluşturuyoruz
  const allLogos = [...logos, ...logos];

  return (
    <div className="tech-stack-container">
      <h3>Kullandığımız Teknolojiler</h3>
      <div className="logo-slider">
        <div className="logo-slide-track">
          {allLogos.map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo} alt={`Technology ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack; 