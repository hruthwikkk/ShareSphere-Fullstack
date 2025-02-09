// src/components/RequestPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const RequestPage: React.FC = () => {
  const userStr = localStorage.getItem('user');
  let hasItemsPosted = false;
  if (userStr) {
    const user = JSON.parse(userStr);
    hasItemsPosted = user.listings && user.listings.some((listing: any) => listing.category === 'item');
  }

  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <h2>Request Page</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link to="/request/item">
          <button disabled={!hasItemsPosted}>Item</button>
        </Link>
        <Link to="/request/study-buddy"><button>Study Buddy</button></Link>
        <Link to="/request/hobbies"><button>Hobbies</button></Link>
        <Link to="/request/housing-info"><button>Housing Info</button></Link>
      </div>
    </div>
  );
};

export default RequestPage;
