import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap-icons/font/bootstrap-icons.css";



function Album() {
  const [album, setAlbum] = useState({});
  const [selectedTrack, setSelectedTrack] = useState(null);
  const { id } = useParams();
  const [likedTracks, setLikedTracks] = useState([]);


  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const headers = new Headers({
          'X-RapidAPI-Key': '71e77567f7msh51f9c14c4bd1592p106c39jsn9269e4c33e0e',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        });

        const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${id}`, {
          method: 'GET',
          headers,
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setAlbum(data);
        } else {
          console.error('Error fetching album data:', response.statusText);
        }
      } catch (error) {
        console.error('Error during album data fetch:', error);
      }
    };
    fetchAlbumData();
  }, [id]);

  useEffect(() => {
    if (selectedTrack) {
      const audio = document.getElementById('audioPlayer');
      audio.src = selectedTrack;
      audio.play();
    }
  }, [selectedTrack]);

  const albumArt = () => {
    if (!album || Object.keys(album).length === 0) {
      return <p>Loading...</p>;
    }

    const playTrack = (trackPreviewUrl) => {
      setSelectedTrack(trackPreviewUrl);
    };

    return (
      <>
        <img src={album.artist.picture} className="card-img img-fluid" alt="Album" />
        <div className="mt-5 text-center text-white">
          <p className="album-title">{album.title}</p>
        </div>
        <div className="text-center text-white">
          <p className="artist-name">{album.artist ? album.artist.name : 'Unknown Artist'}</p>
        </div>
        <div className="mt-4 text-center">
          <p className='text-white'>{album.genres.data[0].name}</p>
          <button
            onClick={() => playTrack(album.tracks.data[0].preview)}
            className="btn btn-success"
            type="button"
          >
            Play
          </button>
        </div>
        <audio id="audioPlayer" controls style={{ display: 'none' }} />
      </>
    );
  };

  const song = (track) => {
    const isLiked = likedTracks.includes(track.id);
  
    return (
      <div className={`py-3 trackHover d-flex align-items-center justify-content-between ${isLiked ? 'liked' : ''}`} key={track.id}>
        <div className="d-flex align-items-center">
          <a href="/" className="card-title trackHover px-3" style={{ color: 'white', marginLeft: '8px' }}>
            {track.title}
          </a>
          <i className="bi bi-heart p-4" /* onClick={() => handleLike(track.id)} */></i>
        </div>
        <small className="duration" style={{ color: 'white' }}>
          {Math.floor(parseInt(track.duration) / 60)}:
          {parseInt(track.duration) % 60 < 10
            ? '0' + (parseInt(track.duration) % 60)
            : parseInt(track.duration) % 60}
        </small>
      </div>
    );
  };
  
  return (
    <Container style={{ width: '80%', height: '100vh', marginLeft: '20vh' }}>
      <Row className="justify-content-start">
        <Col xs="12" className="text-left">
          <h1 className="mb-4 text-white" style={{ marginTop: '8vh' }}>
            Album {album ? album.title : 'Loading...'}
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={3} id="img-container">
          {album && albumArt()}
        </Col>
        <Col md={6} id="trackList">
          {album &&
            album.tracks &&
            album.tracks.data &&
            album.tracks.data.map((track) => song(track))}
        </Col>
      </Row>
    </Container>
  );
}

export default Album;
