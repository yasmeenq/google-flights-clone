API src: https://rapidapi.com/apiheya/api/sky-scrapper
API endpoints we need: 
1.1 Get Near By Airports: api/v1/flights/getNearByAirports
Response { "status": true, "timestamp": 1692098479952, "data": { "current": { "skyId": "BOM", "entityId": "95673320", "presentation": { "title": "Mumbai", "suggestionTitle": "Mumbai (BOM)", "subtitle": "India" }, "navigation": { "entityId": "95673320", "entityType": "AIRPORT", "localizedName": "Mumbai", "relevantFlightParams": { "skyId": "BOM", "entityId": "95673320", "flightPlaceType": "AIRPORT", "localizedName": "Mumbai" }, "relevantHotelParams": { "entityId": "27539520", "entityType": "CITY", "localizedName": "Mumbai" } } }, "nearby": [], "recent": [] } }

1.2 Search Airports: api/v1/flights/searchAirport
Response { "status": true, "timestamp": 1692098786310, "data": [ { "skyId": "NYCA", "entityId": "27537542", "presentation": { "title": "New York", "suggestionTitle": "New York (Any)", "subtitle": "United States" }, "navigation": { "entityId": "27537542", "entityType": "CITY", "localizedName": "New York", "relevantFlightParams": { "skyId": "NYCA", "entityId": "27537542", "flightPlaceType": "CITY", "localizedName": "New York" }, "relevantHotelParams": { "entityId": "27537542", "entityType": "CITY", "localizedName": "New York" } } }, { "skyId": "EWR", "entityId": "95565059", "presentation": { "title": "New York Newark", "suggestionTitle": "New York Newark (EWR)", "subtitle": "United States" }, "navigation": { "entityId": "95565059", "entityType": "AIRPORT", "localizedName": "New York Newark", "relevantFlightParams": { "skyId": "EWR", "entityId": "95565059", "flightPlaceType": "AIRPORT", "localizedName": "New York Newark" }, "relevantHotelParams": { "entityId": "27537542", "entityType": "CITY", "localizedName": "New York" } } }, { "skyId": "JFK", "entityId": "95565058", "presentation": { "title": "New York John F. Kennedy", "suggestionTitle": "New York John F. Kennedy (JFK)", "subtitle": "United States" }, "navigation": { "entityId": "95565058", "entityType": "AIRPORT", "localizedName": "New York John F. Kennedy", "relevantFlightParams": { "skyId": "JFK", "entityId": "95565058", "flightPlaceType": "AIRPORT", "localizedName": "New York John F. Kennedy" }, "relevantHotelParams": { "entityId": "27537542", "entityType": "CITY", "localizedName": "New York" } } }, { "skyId": "LGA", "entityId": "95565057", "presentation": { "title": "New York LaGuardia", "suggestionTitle": "New York LaGuardia (LGA)", "subtitle": "United States" }, "navigation": { "entityId": "95565057", "entityType": "AIRPORT", "localizedName": "New York LaGuardia", "relevantFlightParams": { "skyId": "LGA", "entityId": "95565057", "flightPlaceType": "AIRPORT", "localizedName": "New York LaGuardia" }, "relevantHotelParams": { "entityId": "27537542", "entityType": "CITY", "localizedName": "New York" } } }, { "skyId": "SWF", "entityId": "95566280", "presentation": { "title": "Stewart International", "suggestionTitle": "Stewart International (SWF)", "subtitle": "United States" }, "navigation": { "entityId": "95566280", "entityType": "AIRPORT", "localizedName": "Stewart International", "relevantFlightParams": { "skyId": "SWF", "entityId": "95566280", "flightPlaceType": "AIRPORT", "localizedName": "Stewart International" }, "relevantHotelParams": { "entityId": "27537542", "entityType": "CITY", "localizedName": "New York" } } } ] }



1.3 Get Near By Airports: api/v1/flights/searchFlights


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

installed:
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