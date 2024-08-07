# React Frontend Application Using NASA APIs 

In this project, the objective is to create a creative frontend application using React functional components. The application will utilize data effectively from NASA's public APIs available at the NASA API portal.

## Objectives

- Develop a React Application with a strong emphasis on functional components.
- To integrate and utilize data effectively from NASA's APIs.
- Enhance usability through a sophisticated CSS framework.
- Manage user sessions effectively.
- Maintain a robust version controlling system.
- Deploy the application on a suitable hosting platform.

## Features

1. **View data from NASA's Astronomy Picture of the Day API**
    * Ability to view the Daily APOD (Astronomy Picture of the Day).
    * Ability to view the desired date's APOD (Astronomy Picture of the Day).
    * You can view images, days, and their explanations.

2. **View data from NASA's Mars Rover Photos API**
    * View Desired Rover's images captured on Mars. (Curiosity,Opportunity,Spirit)
    * Quering by Matrial Sol (Martian rotation or day).
    * You can select the desired camera and view its images.

## Technology Stack

- Frontend : React
- Language : JavaScript
- CSS Framework : TailwindCSS
- Used API's : Astronomy Picture of the Day & Mars Rover Photos from NASA's APIs.
- Version Control : Github

## Installation and Running the project

- Clone this repository or downloads it
- Go inside the frontend folder (important !) and open the console in there.
- Use "npm install" to install the dependencies included in the package.json.
- Setup environment variables by creating a ".env" file inside frontend folder.
- Define "REACT_APP_NASA_API_KEY" inside the .env
- Start the server by "npm start"

## Instructions for Running the project

- When you start the server, it automatically opens up in your default browser.
- If not, go to http://localhost:3000. You can view the project there
- Select Astronomy Picture of the Day or Mars Rover Photos
- It will redirect you to your desired API.
- Provide or select the required information there.
- After that, you can get the output.

## Testing

- This was tested manually using the Application itself.
- User sessions managed using localStorage. Data is preserved when refreshing.

## Contribution

- This project was created by Kavindu Kanchana