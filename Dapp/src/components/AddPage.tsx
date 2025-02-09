// src/components/AddPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AddPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <h2>Add Page</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link to="/add/item"><button>Item</button></Link>
        <Link to="/add/study-buddy"><button>Study Buddy</button></Link>
        <Link to="/add/hobbies"><button>Hobbies</button></Link>
        <Link to="/add/housing-info"><button>Housing Info</button></Link>
      </div>
    </div>
  );
};

export default AddPage;
