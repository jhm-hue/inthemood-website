import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/news', label: 'NEWS' },
    { path: '/contact', label: 'CONTACT' }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#1a1a1a',
      color: 'white',
      fontFamily: '"Noto Sans", sans-serif',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navigation */}
      <nav style={{ 
        padding: '2rem 0',
        textAlign: 'center'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '3rem'
        }}>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '400',
                letterSpacing: '1px',
                borderBottom: isActivePath(path) ? '1px solid white' : 'none',
                paddingBottom: '2px'
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content - Centered */}
      <main style={{ 
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 2rem'
      }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;