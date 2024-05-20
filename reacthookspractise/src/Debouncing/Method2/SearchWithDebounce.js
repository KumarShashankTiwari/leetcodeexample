import React,{useState,useEffect} from 'react'


    const SearchWithDebounce = () => {
        const [searchTerm, setSearchTerm] = useState('');
        const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
        const [results, setResults] = useState([]);
      
        useEffect(() => {
          // Set a timer to update debouncedTerm after 500ms
          const timerId = setTimeout(() => {
            setDebouncedTerm(searchTerm);
          }, 500);
      
          // Cleanup function to clear the timer if searchTerm changes
          return () => {
            clearTimeout(timerId);
          };
        }, [searchTerm]);
      
        useEffect(() => {
          if (debouncedTerm) {
            performSearch(debouncedTerm);
          }
        }, [debouncedTerm]);
      
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
      
 

export default SearchWithDebounce;