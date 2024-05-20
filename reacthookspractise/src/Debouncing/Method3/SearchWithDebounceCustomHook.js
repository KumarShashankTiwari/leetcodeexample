import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

const SearchWithDebounceCustomHook = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const performSearch = (query) => {
    // Replace with your actual search logic or API call
    console.log('Searching for:', query);
    // Mock search results
    setResults([`Result for "${query}" 1`, `Result for "${query}" 2`]);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchWithDebounceCustomHook;
