import axios from 'axios';

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY; // Use API key from .env

const BASE_URL = 'https://api.nasa.gov';	//defines a baseURL

// Function to fetch Astronomy Picture of the Day (APOD)
export const fetchAPOD = async (selectedDate) => {
  try {
    // Fetch data from NASA API
    const response = await axios.get(`${BASE_URL}/planetary/apod?api_key=${NASA_API_KEY}&date=${selectedDate}`);
    return response.data;
  } catch (error) {
    // Log and throw error
    console.error('Error fetching Astronomy Picture of the Day:', error);
    throw error;
  }
};

// Function to fetch Mars Rover Photos
export const fetchMarsRoverPhotos = async (rover, sol, camera) => {
  try {
    // Define query parameters
    let params = {
      sol,
      api_key: process.env.REACT_APP_NASA_API_KEY
    };

    // Add camera parameter if selected
    if (camera) {
      params.camera = camera;
    }

    // Fetch data from NASA API
    const response = await axios.get(`${BASE_URL}/mars-photos/api/v1/rovers/${rover}/photos`, {
      params
    });
    
    // Return the response data
    return response.data;
  } catch (error) {
    console.error('Error fetching Mars Rover Photos:', error);
    throw error;
  }
};
