import React, { useEffect, useState } from 'react';
import { fetchAPOD } from '../services/nasaApi';  // Import the fetchAPOD function from the nasaApi.js

// APOD component
const APOD = () => {
  // State to store the selected date
  const [selectedDate, setSelectedDate] = useState(localStorage.getItem('selectedDate') || new Date().toISOString().slice(0, 10));
  const [apodData, setApodData] = useState(JSON.parse(localStorage.getItem('apodData')) || null);

  // Function to fetch APOD data
  const fetchApodData = async (date) => {
    try {
      const data = await fetchAPOD(date);
      setApodData(data);
      localStorage.setItem('apodData', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching APOD:', error);
    }
  };

  // Fetch APOD data on initial render
  useEffect(() => {
    if (!apodData) {
      fetchApodData(selectedDate);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to handle date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    localStorage.setItem('selectedDate', event.target.value);
  };

  // Function to handle search
  const handleSearch = async () => {
    fetchApodData(selectedDate);
  };

  // set the max date to today
  const maxDate = new Date().toISOString().slice(0, 10);

  // Render the APOD component according to the apodData
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold mb-0 hover:text-blue-500 cursor-pointer">Astronomy Picture of the Day</h2>
        <div className="flex items-center">
          <label htmlFor="datePicker" className="mr-2 text-gray-900">
            Select Date:
          </label>
          <input
            type="date"
            id="datePicker"
            value={selectedDate}
            onChange={handleDateChange}
            max={maxDate}
            className="border border-gray-300 rounded px-2 py-1 mr-2"
          />
          <button
            onClick={handleSearch}
            className={
              selectedDate === new Date().toISOString().slice(0, 10)
                ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
            }
          >
            Search
          </button>
        </div>
      </div>
      {apodData ? (
        <div className="apod-content rounded-lg shadow-md p-8 bg-blue-100 bg-opacity-80 hover:scale-105 transition duration-300 ease-in-out">
          {apodData.media_type === 'image' ? (
            <div className="image-container flex justify-center">
              <img
                src={apodData.url}
                alt={apodData.title}
                className="w-full h-auto object-cover md:max-w-md rounded-lg hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
          ) : apodData.media_type === 'video' ? (
            <div className="video-container">
              <iframe
                src={apodData.url}
                title={apodData.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-auto border-none rounded-lg"
              />
            </div>
          ) : (
            <p className="text-gray-700">Unsupported media type: {apodData.media_type}</p>
          )}
          <h3 className="text-2xl font-bold mt-4 hover:text-green-600 cursor-pointer">{apodData.title}</h3>
          <p className="text-gray-900 mb-4">{apodData.date}</p>
          <p className="text-gray-700 hover:text-blue-500 cursor-pointer">{apodData.explanation}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// Export the APOD component
export default APOD;