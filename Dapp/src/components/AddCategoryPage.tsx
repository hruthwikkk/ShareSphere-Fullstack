// src/components/AddCategoryPage.tsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import { useParams, useHistory } from 'react-router-dom';

const AddCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real dApp, you would call postListing on the contract.
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      const newListing = {
        id: Date.now(),
        category,
        title,
        description,
        status: 'active',
        incomingRequests: []
      };
      user.listings = user.listings ? [...user.listings, newListing] : [newListing];
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/profile');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <h2>Add - {category}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description: </label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default AddCategoryPage;
