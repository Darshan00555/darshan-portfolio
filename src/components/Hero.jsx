import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Background Big Text */}
      <div className="bg-text-container">
        <h1 className="bg-text">DARSHAN DEV</h1>
      </div>

      {/* Main Content Grid */}
      <div className="hero-content">
        
        {/* Left Column */}
        <div className="left-col">
          <p className="intro-text">
            Hey there! I'm a <span className="highlight">Brand & UI & UX Designer</span> building consistent digital experiences.
          </p>
          <a href="#contact" className="cta-btn">
            // HIRE ME <span>→</span>
          </a>
        </div>

        <div className="center-col">
          <div className="image-wrapper">
            <img 
              src="https://placehold.co/400x600/e2e2e2/333?text=Darshan" 
              alt="Darshan Dev" 
              className="person-image" 
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="right-col">
          <ul className="services-list">
             <li className="service-item muted">Branding Design</li>
             <li className="service-item"><strong>Web Development</strong></li>
             <li className="service-item muted">UI/UX Design</li>
             <li className="service-item muted">Design System</li>
          </ul>
        </div>
      </div>

      {/* Bottom Brand Bar */}
      <div className="bottom-bar">
        {['React', 'Next.js', 'Node.js', 'Tailwind', 'MongoDB', 'TypeScript'].map((tech, i) => (
             <div key={i} className="tech-item">
                <span className="tech-icon">✦</span> {tech}
             </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

