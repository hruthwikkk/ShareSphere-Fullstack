// src/components/NotificationsPage.tsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const NotificationsPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [tab, setTab] = useState<'requests' | 'posted'>('requests');

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  const handleWithdrawPosting = (listingId: number) => {
    if (user) {
      user.listings = user.listings.filter((listing: any) => listing.id !== listingId);
      localStorage.setItem('user', JSON.stringify(user));
      setUser({ ...user });
    }
  };

  if (!user) return <div><Navbar /><p>Please login</p></div>;

  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <h2>Notifications</h2>
      <div>
        <button onClick={() => setTab('requests')}>Requests</button>
        <button onClick={() => setTab('posted')}>Posted</button>
      </div>
      {tab === 'requests' && (
        <div>
          <h3>Incoming Requests</h3>
          {user.listings && user.listings.length > 0 ? (
            user.listings.map((listing: any) => (
              <div key={listing.id}>
                <h4>{listing.title}</h4>
                {listing.incomingRequests && listing.incomingRequests.length > 0 ? (
                  <ul>
                    {listing.incomingRequests.map((req: any) => (
                      <li key={req.id}>{req.title} - {req.status}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No incoming requests.</p>
                )}
              </div>
            ))
          ) : (
            <p>No listings.</p>
          )}
        </div>
      )}
      {tab === 'posted' && (
        <div>
          <h3>Your Posted Requests</h3>
          {user.activeRequests && user.activeRequests.length > 0 ? (
            <ul>
              {user.activeRequests.map((req: any) => (
                <li key={req.id}>
                  {req.title} - {req.status}
                  <button onClick={() => {/* withdraw logic */}}>Withdraw</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No posted requests.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
