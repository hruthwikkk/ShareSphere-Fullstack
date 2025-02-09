// src/components/HomePage.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const HomePage: React.FC = () => {
  const [helpedCount, setHelpedCount] = useState(0);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      setHelpedCount(user.helpedCount || 0);
    }
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <h2>Homepage</h2>
      <p>You have helped {helpedCount} people.</p>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <Link to="/notifications"><button>Notifications</button></Link>
        <Link to="/request"><button>Request</button></Link>
        <Link to="/serve"><button>Serve</button></Link>
      </div>
    </div>
  );
};

export default HomePage;
