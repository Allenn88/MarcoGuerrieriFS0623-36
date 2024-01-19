import React from 'react';

const spotyHeader = () => {
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage d-flex" style={{ position: 'fixed', zIndex: 1000, marginLeft: '500px'}}>
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex justify-content-center">
          <a href="/" className='text-black m-2 text-center'>TRENDING</a>
          <a href="/" className='text-black m-2 text-center'>PODCAST</a>
          <a href="/" className='text-black m-2 text-center'>MOODS AND GENRES</a>
          <a href="/" className='text-black m-2 text-center'>NEW RELEASES</a>
          <a href="/" className='text-black m-2 text-center'>DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="searchResults" style={{ display: 'none' }}>
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default spotyHeader;
