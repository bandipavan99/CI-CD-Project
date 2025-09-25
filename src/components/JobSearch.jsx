import React, { useState } from 'react';
import './JobSearch.css';

export default function JobSearch() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Handle job search logic here
  };

  return (
    <div className="jobsearch-container">
      <input
        type="text"
        value={query}
        placeholder="Search jobs..."
        onChange={e => setQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
