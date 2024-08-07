import React, { useEffect, useState } from 'react';
import { fetchMarsRoverPhotos } from '../services/nasaApi'; // Import the fetchMarsRoverPhotos function from nasaApi.js

// MarsRoverPhotos component
const MarsRoverPhotos = () => {
  // State variables - used localstorage to ensure the state is persisted on page refresh
  const [rover, setRover] = useState(localStorage.getItem('rover') || 'curiosity');
  const [sol, setSol] = useState(localStorage.getItem('sol') || 1);
  const [camera, setCamera] = useState(localStorage.getItem('camera') || '');
  const [roverPhotos, setRoverPhotos] = useState(null);

  // Fetch Mars Rover Photos
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await fetchMarsRoverPhotos(rover, sol, camera);
        console.log('API Response:', data);
        setRoverPhotos(data.photos);
      } catch (error) {
        console.error('Error fetching Mars Rover Photos:', error);
      }
    };
    // Call the fetchPhotos function and update the state variables
    fetchPhotos();
  }, [rover, sol, camera]);

  // Handle Rover Change
  const handleRoverChange = (e) => {
    localStorage.setItem('rover', e.target.value);
    setRover(e.target.value);
  };

  // Handle Sol Change
  const handleSolChange = (e) => {
    localStorage.setItem('sol', e.target.value);
    setSol(e.target.value);
  };

  // Handle Camera Change
  const handleCameraChange = (e) => {
    const selectedCamera = e.target.value;
    localStorage.setItem('camera', selectedCamera === 'all' ? null : selectedCamera);
    setCamera(selectedCamera === 'all' ? null : selectedCamera);
  };

  // Render the Mars Rover Photos component
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 hover:text-green-600 cursor-pointer text-center mt-8">Mars Rover Photos</h2>
      <div className="container mx-auto px-8 py-8 bg-blue-200 rounded-lg shadow-xl overflow-hidden mb-8">
        <div className="flex items-center mb-4">
          <label htmlFor="roverSelect" className="mr-2 font-bold">Select Rover :</label>
          <select id="roverSelect" className="border-gray-300 rounded-md px-2 py-1" value={rover} onChange={handleRoverChange}>
            <option value="curiosity">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
          </select>
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="solInput" className="mr-2 font-bold">Enter Sol (Days in Mars) :</label>
          <input 
            type="number" 
            id="solInput" 
            className="border-gray-300 rounded-md px-2 py-1" 
            value={sol} 
            onChange={handleSolChange} 
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="cameraSelect" className="mr-2 font-bold">Select Camera :</label>
          <select id="cameraSelect" className="border-gray-300 rounded-md px-2 py-1" value={camera} onChange={handleCameraChange}>
            <option value="">All Cameras</option>
            {rover === 'curiosity' && (
              <>
                <option value="FHAZ">Front Hazard Avoidance Camera (FHAZ)</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera (RHAZ)</option>
                <option value="MAST">Mast Camera (MAST)</option>
                <option value="CHEMCAM">Chemistry and Camera Complex (CHEMCAM)</option>
                <option value="MAHLI">Mars Hand Lens Imager (MAHLI)</option>
                <option value="MARDI">Mars Descent Imager (MARDI)</option>
                <option value="NAVCAM">Navigation Camera (NAVCAM)</option>
              </>
            )}
            {rover === 'opportunity' && (
              <>
                <option value="FHAZ">Front Hazard Avoidance Camera (FHAZ)</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera (RHAZ)</option>
                <option value="NAVCAM">Navigation Camera (NAVCAM)</option>
                <option value="PANCAM">Panoramic Camera (PANCAM)</option>
                <option value="MINITES">Miniature Thermal Emission Spectrometer (MINITES)</option>
              </>
            )}
            {rover === 'spirit' && (
              <>
                <option value="FHAZ">Front Hazard Avoidance Camera (FHAZ)</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera (RHAZ)</option>
                <option value="NAVCAM">Navigation Camera (NAVCAM)</option>
                <option value="PANCAM">Panoramic Camera (PANCAM)</option>
                <option value="MINITES">Miniature Thermal Emission Spectrometer (MINITES)</option>
              </>
            )}
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {roverPhotos && roverPhotos.length > 0 ? (
            roverPhotos.map((photo) => (
              <img 
              key={photo.id} 
              src={photo.img_src} 
              alt={`View Mars Rover Img - ${photo.id}`} 
              className="w-full h-auto rounded-md max-w-xs max-h-xs object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" 
              />
            ))
          ) : (
            <p className="text-red-600 text-2xl">No photos available !!</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Export the MarsRoverPhotos component
export default MarsRoverPhotos;
