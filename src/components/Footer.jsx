import React from 'react';
import '../style/Footer.css';

const Footer = ({ image1, image2, image3, image4, image5 }) => (
  <div className="container-fluid fixed-bottom bg-black Player" style={{ position: 'fixed', zIndex: 1000, marginLeft: '233px' }}>
    <div className="row justify-content-center align-items-center ms-2 ms-md-5">
      <a href="/" className="col-auto m-2 m-md-3">
        <img src={image1} alt="play3" className="img-fluid" />
      </a>
      <a href="/" className="col-auto m-2 m-md-3">
        <img src={image2} alt="play2" className="img-fluid" />
      </a>
      <a href="/" className="col-auto m-2 m-md-3">
        <img src={image3} alt="play1" className="img-fluid" />
      </a>
      <a href="/" className="col-auto m-2 m-md-3">
        <img src={image4} alt="play4" className="img-fluid" />
      </a>
      <a href="/" className="col-auto m-2 m-md-3">
        <img src={image5} alt="play5" className="img-fluid" />
      </a>
    </div>
    <div className="row justify-content-center playBar py-3">
      <div className="col-12 col-md-6">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>
);



export default Footer;
