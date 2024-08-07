import React from 'react';
import { Link } from 'react-router-dom';
import HomepageAPOD from '../images/HomepageAPOD.jpg';  // Import the images
import HomepageMarsRover from '../images/HomepageMarsRover.jpg';

// Home component
const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-16 text-center hover:text-blue-500 cursor-pointer">Welcome to NASA's API Explorer!</h2>
      <div className="flex justify-center space-x-8">
        <div className="w-3/5">
          <img src={HomepageAPOD} alt="APOD" className="w-auto h-3/5 object-cover mb-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mx-auto rounded-xl" />
          <Link to="/apod" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 block text-center">Astronomy Picture of the Day</Link>
        </div>
        <div className="w-3/5">
          <img src={HomepageMarsRover} alt="Mars Rover" className="w-auto h-3/5 object-cover mb-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mx-auto rounded-xl" />
          <Link to="/mars-photos" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 block text-center">Mars Rover Photos</Link>
        </div>
      </div>
    </div>
  );
};

// Export the Home component
export default Home;