import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SpotySearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.searchResults) {
      setSearchResults(location.state.searchResults);
    }
  }, [location.state]);

  const handleImageClick = (albumId) => {
    console.log("Album ID:", albumId);
    navigate(`/Album/${albumId}`);
  };

  return (
    <Container style={{ width: '80%', height: '100vh', marginLeft: '20vh' }}>
      <Row className="justify-content-start">
        <Col xs="12" className="text-left">
          <h1 className="mt-4 mb-4 text-white">Risultati della ricerca</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {searchResults.map((result) => (
          <Col key={result.id} md={3}>
            <div style={{ width: '14rem', margin: '0 10px', cursor: 'pointer' }} onClick={() => handleImageClick(result.album.id)}>
              <div style={{ overflow: 'hidden' }}>
                <img
                  variant="top"
                  src={result.album.cover_medium}
                  alt={result.album.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <p style={{ fontWeight: 'bold', color: 'white' }}>{result.album.title}</p>
                <p className='text-white'>{result.artist.name}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SpotySearch;
