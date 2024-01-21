import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Aggiunto useNavigate

const apikey = '71e77567f7msh51f9c14c4bd1592p106c39jsn9269e4c33e0e';
const apiHost = 'https://deezerdevs-deezer.p.rapidapi.com/infos';

function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Aggiunto useNavigate

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://striveschool-api.herokuapp.com/api/deezer/search?q=Queen',
        headers: {
          'X-RapidAPI-Key': apikey,
          'X-RapidAPI-Host': apiHost
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setData(response.data.data.slice(0, 4) || []);
      } catch (error) {
        console.error('Errore nella richiesta API', error);
        setError('Si è verificato un errore durante il recupero dei dati.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  const handleImageClick = (albumId) => {
    console.log("Album ID:", albumId);
    navigate(`/Album/${albumId}`);
  };


  return (
    <Container style={{ width: '80%', height: '100vh', marginLeft: '20vh' }}>
      <Row className="justify-content-start">
        <Col xs="12" className="text-left">
          <h1 className="mt-4 mb-4 text-white">Queen</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {data.map((item) => (
          <Col key={item.id} md={3}>
            <div style={{ width: '14rem', margin: '0 10px', cursor: 'pointer' }} onClick={() => handleImageClick(item.album.id)}>
              <div style={{ overflow: 'hidden' }}>
                <img
                  variant="top"
                  src={item.album.cover_medium}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div>
                <p style={{ fontWeight: 'bold', color: 'white' }}>{item.title}</p>
                <p className='text-white'>{item.artist.name}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
