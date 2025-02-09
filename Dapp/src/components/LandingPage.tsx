// src/components/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Our dApp</h1>
      <p>
        This application lets you post items or services, request help in categories
        like study buddy, hobbies, or housing info, and track how many people you’ve helped!
      </p>
      <div>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Signup</button></Link>
      </div>
    </div>
  );
};

export default LandingPage;
