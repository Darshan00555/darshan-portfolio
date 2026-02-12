import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <span style={styles.brandParams}>@</span>DARSHN<span style={styles.brandHighlight}>DEV</span>
      </div>
      
      <ul style={styles.menu}>
        <li><a href="#services" style={styles.link}>Services</a></li>
        <li><a href="#projects" style={styles.link}>Portfolio</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>

      <div style={styles.status}>
        <span style={styles.dot}></span>
        Open to work
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'sticky',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 4%',
    fontFamily: 'var(--font-secondary)',
    fontSize: '0.9rem',
    fontWeight: '500',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: 'rgba(248, 248, 248, 0.9)',
    backdropFilter: 'blur(10px)',
  },
  brand: {
    fontFamily: 'var(--font-primary)',
    fontWeight: '700',
    fontSize: '1.2rem',
    letterSpacing: '1px',
    color: '#000',
  },
  brandParams: {
    opacity: 0.5,
  },
  menu: {
    display: 'flex',
    gap: '2.5rem',
  },
  link: {
    color: '#333',
    transition: 'color 0.3s',
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#333',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#22c55e',
    boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)',
  },
};

export default Navbar;
