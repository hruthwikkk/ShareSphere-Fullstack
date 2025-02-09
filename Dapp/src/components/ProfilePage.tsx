// src/components/ProfilePage.tsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  const handleAcceptRequest = (listingId: number, requestId: number) => {
    if (user) {
      user.listings = user.listings.map((listing: any) => {
        if (listing.id === listingId) {
          listing.incomingRequests = listing.incomingRequests.map((req: any) =>
            req.id === requestId ? { ...req, status: 'accepted' } : req
          );
        }
        return listing;
      });
      localStorage.setItem('user', JSON.stringify(user));
      setUser({ ...user });
    }
  };

  const handleRejectRequest = (listingId: number, requestId: number) => {
    if (user) {
      user.listings = user.listings.map((listing: any) => {
        if (listing.id === listingId) {
          listing.incomingRequests = listing.incomingRequests.filter((req: any) => req.id !== requestId);
        }
        return listing;
      });
      localStorage.setItem('user', JSON.stringify(user));
      setUser({ ...user });
    }
  };

  const handleMarkCompleted = (listingId: number) => {
    if (user) {
      user.listings = user.listings.map((listing: any) => {
        if (listing.id === listingId) {
          listing.status = 'completed';
        }
        return listing;
      });
      localStorage.setItem('user', JSON.stringify(user));
      setUser({ ...user });
    }
  };

  if (!user) return <div><Navbar /><p>Please login</p></div>;

  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <h2>Profile</h2>
      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Points:</strong> {user.points}</p>
      </div>
      <div>
        <h3>Active Requests</h3>
        {user.activeRequests && user.activeRequests.length > 0 ? (
          <ul>
            {user.activeRequests.map((req: any) => (
              <li key={req.id}>{req.title} - {req.status}</li>
            ))}
          </ul>
        ) : (
          <p>No active requests.</p>
        )}
      </div>
      <div>
        <h3>Your Listings</h3>
        {user.listings && user.listings.length > 0 ? (
          <ul>
            {user.listings.map((listing: any) => (
              <li key={listing.id}>
                <p>{listing.title} - {listing.status}</p>
                {listing.incomingRequests && listing.incomingRequests.length > 0 && (
                  <ul>
                    {listing.incomingRequests.map((req: any) => (
                      <li key={req.id}>
                        {req.title} - {req.status}
                        {req.status === 'pending' && (
                          <>
                            <button onClick={() => handleAcceptRequest(listing.id, req.id)}>Accept</button>
                            <button onClick={() => handleRejectRequest(listing.id, req.id)}>Reject</button>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {listing.status === 'accepted' && (
                  <button onClick={() => handleMarkCompleted(listing.id)}>Mark as Completed</button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No listings.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
