import React from 'react';
import './App.css';
import Mynavbar from './components/Mynavbar.jsx';
import Home from './components/Home.jsx';
import img from "./assets/Spotify_Logo.png";
import Footer from "./components/Footer.jsx"
import image1 from './assets/Shuffle.png';
import image2 from './assets/Previous.png';
import image3 from './assets/Play.png';
import image4 from './assets/Next.png';
import image5 from './assets/Repeat.png';



function App() {
  return (
    <div className="App d-flex">
      <Mynavbar img={img} />

      <Home />
      <Footer
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          image5={image5}
        />
    </div>
  );
}

export default App;
