
import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft, faSpotify, faAmazon } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {

  return (
    <div>
      <Navbar/>
      <div className="text-center mt-10 mx-auto max-w-md">
        <div className="mb-4 text-left">
          <h1 className="text-3xl font-bold">Learn to code - for free</h1>
        </div>
        <div className="mb-4 text-left">
          <h1 className="text-3xl font-bold">Build projects.</h1>
        </div>
        <div className="mb-4 text-left">
          <h1 className="text-3xl font-bold">Earn certificates.</h1>
        </div>
        <div className="mb-10 text-left">
          <p className="text-lg">
            Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including 
            
          </p>

        </div>

        <div className="mb-10 text-left">
          <FontAwesomeIcon icon={faGoogle} className="ml-3 mr-4" /> Google
            <FontAwesomeIcon icon={faMicrosoft} className="ml-3 mr-4" /> Microsoft
            <FontAwesomeIcon icon={faSpotify} className="ml-3 mr-4"/> Spotify
            <FontAwesomeIcon icon={faAmazon} className="ml-3 mr-4" /> Amazon
        </div>
        <div className="text-center">
          <button  className="bg-yellow-500 hover:bg-yellow-700 text-black  font-semibold  p-4 py-2 px-4 text-lg">
            Get started (it's free)
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
