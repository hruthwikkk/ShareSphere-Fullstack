// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/request">Request</Link></li>
        <li><Link to="/add">Add</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
