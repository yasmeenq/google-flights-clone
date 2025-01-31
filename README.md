API src: https://rapidapi.com/apiheya/api/sky-scrapper


API Endpoints You'll Need
Search for Airports (api/v1/flights/searchAirport)

Use this to get airport details based on a city name or address.
Required: query (city, address, or airport name).
Response includes skyId and entityId, which are needed for the flight search.
Search for Flights (api/v1/flights/searchFlights)

This fetches flight prices between two airports.
Required:
originSkyId, destinationSkyId (from the airport search).
originEntityId, destinationEntityId (also from airport search).
date (YYYY-MM-DD format).


Steps: 
Created API URL links in utils>AppConfig

installation:
npm create vite@latest google-flights-clone --template react-ts
cd google-flights-clone
npm install
npm install axios
>npm run dev
>npm i -g react-cli-snippets
>npm i react-router-dom @types/react-router-dom  
npm install @mui/material @emotion/react @emotion/styled 


ds installation:
npm install react-datepicker --save
npm install react-icons --save