import React from 'react';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-info">
        <img src="/avatar.png" alt="User Avatar" />
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <p>Skills: Web Development, React, Node.js</p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
}
