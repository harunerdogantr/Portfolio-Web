import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faProjectDiagram, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import '../styles/CounterSection.css';

const CounterSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const counterData = [
    {
      icon: faCopyright,
      count: 170,
      title: "Çalışılan Marka",
      color: "color-1",
      animation: "fade-right"
    },
    {
      icon: faSmile,
      count: 338,
      title: "Mutlu Müşteri",
      color: "color-3",
      animation: "fade-up"
    },
    {
      icon: faProjectDiagram,
      count: 127,
      title: "Bitirilen Proje",
      color: "color-4",
      animation: "fade-left"
    },
    {
      icon: faMobileAlt,
      count: 43,
      title: "Mobil Proje",
      color: "color-2",
      animation: "fade-left"
    }
  ];

  return (
    <section className="container section" style={{ backgroundColor: 'transparent', padding: '4rem 0' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {counterData.map((item, index) => (
          <div
            key={index}
            data-aos={item.animation}
            data-aos-delay={index * 100}
          >
            <div className={`counter-box ${item.color}`}>
              <div className="icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <CountUp
                end={item.count}
                suffix="+"
                duration={2.5}
                className="counter"
              />
              <h6 className="title">{item.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
