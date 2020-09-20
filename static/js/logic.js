// // // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


// //  Add a marker to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "yellow"
//  }).addTo(map);


//  // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     L.circleMarker(city.location, {
//         radius: city.population/100000,
//         color: "orange"
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });


// // Coordinates for each point to be used in the polyline.
// let line = [
//     [37.6213, -122.3790],
//     [36.0840, -115.1537],
//     [43.6777, -79.6248],
//     [40.6413, -73.7781]
//   ];

//   // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue"
//   }).addTo(map);

// =================================================================
// // Add GeoJSON data.
// let sanFranAirport = {
//   "type":"FeatureCollection",
//   "features":[{
//     "type":"Feature",
//     "properties":{
//       "id":"3469",
//       "name":"San Francisco International Airport",
//       "city":"San Francisco",
//       "country":"United States",
//       "faa":"SFO",
//       "icao":"KSFO",
//       "alt":"13",
//       "tz-offset":"-8",
//       "dst":"A",
//       "tz":"America/Los_Angeles"
//     },
//       "geometry":{
//         "type":"Point",
//         "coordinates":[-122.375,37.61899948120117]
//       }
//   }]
// };

// L.geoJson(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>Airport code: " + sanFranAirport.features[0].properties.faa + " </h2> <hr> <h3> Airport name: " + sanFranAirport.features[0].properties.name + "  </h3> ")
//   }
// }).addTo(map);

  // ================================================================


// // Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Govind-Patwal/Mapping_Earthquakes/master/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});
