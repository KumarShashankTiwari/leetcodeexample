import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

const SearchDebounceWithLodash = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
  
    // Function to handle the actual search logic
    const performSearch = (query) => {
      // Replace with your actual search logic or API call
      console.log('Searching for:', query);
      // Mock search results
      setResults([`Result for "${query}" 1`, `Result for "${query}" 2`]);
    };
  
    // Create a debounced version of the performSearch function
    const debouncedSearch = useCallback(
      debounce((query) => {
        performSearch(query);
      }, 500),
      []
    );
  
    // Handle input change
    const handleChange = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
      debouncedSearch(value);
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
  
  export default SearchDebounceWithLodash;