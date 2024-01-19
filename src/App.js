import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mynavbar from './components/Mynavbar.jsx';
import Home from './components/Home.jsx';
import img from "./assets/Spotify_Logo.png";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Artist from "./components/Artist.jsx";import image1 from "./assets/Shuffle.png";
import image2 from './assets/Previous.png';
import image3 from './assets/Play.png';
import image4 from './assets/Next.png';
import image5 from './assets/Repeat.png';
/* import SpotySearch from './components/Artist.jsx';
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Mynavbar img={img} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Artist' element={<Artist />} />
        </Routes>
        <Footer
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          image5={image5}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

