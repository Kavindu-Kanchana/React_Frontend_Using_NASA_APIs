import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import APOD from './components/APOD';
import MarsRoverPhotos from './components/MarsRoverPhotos';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/apod" element={<APOD />} />
            <Route path="/mars-photos" element={<MarsRoverPhotos />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
