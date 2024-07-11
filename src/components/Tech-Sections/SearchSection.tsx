"use client";

import React, { useState } from 'react';

const SearchFilterSection: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  }

  return (
    <section className="flex justify-between items-center my-6">
      <button onClick={handleSearchClick} className="bg-gray-200 p-2 rounded">
        Search
      </button>
      {isSearchOpen && (
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          placeholder="Search projects"
        />
      )}
      <div className="flex gap-4">
        <select className="p-2 border border-gray-300 rounded">
          <option>All Languages</option>
          <option>JavaScript</option>
          <option>TypeScript</option>
          <option>Python</option>
        </select>
        <select className="p-2 border border-gray-300 rounded">
          <option>All Projects</option>
          <option>Ongoing</option>
          <option>Completed</option>
        </select>
      </div>
    </section>
  );
}

export default SearchFilterSection;
