import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import WOW from 'wow.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faProjectDiagram, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import '../styles/CounterSection.css';

const CounterSection = () => {
  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();
  }, []);

  const counterData = [
    {
      icon: faCopyright,
      count: 170,
      title: "Çalışılan Marka",
      color: "color-1",
      animation: "fadeInLeft"
    },
    {
      icon: faSmile,
      count: 338,
      title: "Mutlu Müşteri",
      color: "color-3",
      animation: "fadeInUp"
    },
    {
      icon: faProjectDiagram,
      count: 127,
      title: "Bitirilen Proje",
      color: "color-4",
      animation: "fadeInRight"
    },
    {
      icon: faMobileAlt,
      count: 43,
      title: "Mobil Proje",
      color: "color-2",
      animation: "fadeInRight"
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
            className={`wow ${item.animation}`}
            data-wow-delay="0.3s"
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
