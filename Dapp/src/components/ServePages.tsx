// src/components/ServePage.tsx
import React from 'react';
import Navbar from './Navbar';

const ServePage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <h2>Serve Page</h2>
      <p>List of requests you can serve will be displayed here.</p>
    </div>
  );
};

export default ServePage;
