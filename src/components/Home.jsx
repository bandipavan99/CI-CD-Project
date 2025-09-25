import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Freelancer Marketplace</h1>
        <nav>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
          <a href="/profile">Profile</a>
        </nav>
      </header>
      <section>
        <h2>Find Jobs & Hire Freelancers</h2>
        <input type="text" placeholder="Search jobs..." className="search-bar" />
        {/* You can render job cards here */}
      </section>
    </div>
  );
}
