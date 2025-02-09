// src/components/SignupLoginPage.tsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignupLoginPage: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check that email ends with .edu (university domain)
    if (!email.endsWith('.edu')) {
      alert('Email must be a university email (ends with .edu)');
      return;
    }
    // (In a real dApp, call the smart contract’s registerUser method.)
    const user = { name, age, email, phone, helpedCount: 0, points: 0, activeRequests: [], listings: [] };
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/home');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Signup/Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Age: </label>
          <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone: </label>
          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupLoginPage;
