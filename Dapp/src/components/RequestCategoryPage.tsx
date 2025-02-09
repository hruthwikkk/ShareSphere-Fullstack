// src/components/RequestCategoryPage.tsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

const RequestCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [search, setSearch] = useState('');

  // Dummy data simulating available services/items
  const dummyData = [
    { id: 1, name: `${category} service 1` },
    { id: 2, name: `${category} service 2` }
  ];

  const filteredData = dummyData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <h2>Request - {category}</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RequestCategoryPage;
