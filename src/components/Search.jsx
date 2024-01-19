import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchTerm}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '71e77567f7msh51f9c14c4bd1592p106c39jsn9269e4c33e0e',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      navigate('/Artist', { state: { searchResults: data.data } });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;

