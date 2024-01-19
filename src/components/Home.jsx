import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import axios from 'axios';

const apikey = '71e77567f7msh51f9c14c4bd1592p106c39jsn9269e4c33e0e';
const apiHost = 'deezerdevs-deezer.p.rapidapi.com';

function SpotyHome() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen',
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

  return (
    <Container style={{ width: '80%', height: '100vh', marginLeft: '20vh'}}>
    <Row className="justify-content-start">
      <Col xs="12" className="text-left">
        <h1 className="mt-4 mb-4 text-white">Queen</h1>
      </Col>
    </Row>
    <Row className="justify-content-center">
      {data.map((item) => (
        <Col key={item.artist.id} md={3}>
          <Card style={{ width: '14rem', margin: '0 10px', cursor: 'pointer' }} onClick={() => window.open(`/Artist?id=search=Queen`, '_blank')}>
            <Card.Img
              variant="top"
              src={item.album.cover_medium}
              alt={item.title}
              style={{ maxHeight: '150px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.artist.name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);
}

export default SpotyHome;
