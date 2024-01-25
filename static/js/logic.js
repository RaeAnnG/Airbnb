 // Pull data from Airbnb JSON
const AirbnbJSON = "static/data/listings_KP.json";

// Add a Leaflet tile layer
let streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Create a Leaflet map object
let myMap = L.map("map", {
    center: [21.887, -159.461], // Kauai
    zoom: 13,
    layers: [streets]
});

// Add the tile layer to the map
streets.addTo(myMap);

// Fetch Airbnb data
// fetch(AirbnbJSON)
//     .then(response => response.json())
//     .then(data => {
//         // Loop through Airbnb data and add markers to the map
//         data.forEach(listing => {
//             const marker = L.marker([listing.latitude, listing.longitude])
//                 .bindPopup(`<strong>${listing.name}</strong><br>${listing.room_type}`);
//             marker.addTo(myMap);
//         });
//     })
//     .catch(error => console.error('Error fetching Airbnb data:', error));

// // Perform a GET request to query the CSV (assuming Airbnb is a CSV file, not JSON)
// If it's a JSON file, you should use d3.json(Airbnb) instead
d3.json(AirbnbJSON).then(({latitude, longitude, price, review_scores_rating, beds}) => {
// d3.json(AirbnbJSON).then(data => {

    let beds_ = Object.values(beds);
    let price_ = Object.values(price);
    let lat = Object.values(latitude);
    let lon = Object.values(longitude);
    let scores = Object.values(review_scores_rating);


    scores.forEach((score,i) => {

        console.log(parseFloat(price_[i].slice(1)));
        
        L.circleMarker([lat[i],lon[i]], {
            radius: scores[i]*2,
            fillOpacity: 1,
            color: 'black',
            fillColor: 
                parseFloat(price_[i].slice(1)) > 5000 ? "green" :
                parseFloat(price_[i].slice(1)) > 2000 ? "brown" :
                parseFloat(price_[i].slice(1)) > 1000 ? "blue" :
                parseFloat(price_[i].slice(1)) > 500 ? "red" :
                parseFloat(price_[i].slice(1)) > 100 ? "yellow" : 'orange'
        }).addTo(myMap)
    });

    // Once we get a response, send the data.features object to the createFeatures function.
    // createFeatures(data);
});

// Create a function for the marker size
function markerSize(rating) {
    return rating * 1000;
} 
  

//     //Set the color scale for the markers
//     function choosecolor(price) {
//         switch(true) {
//           case price > 5000: return "green";
//           case price > 2000: return "bluegreen";
//           case price > 1000: return "blue"; 
//           case price > 500: return "yellowblue"; 
//           case price > 100: return "yellow"; 
//           default: return "whiteyellow";                    
//         }
//       }

    //Set up the Create Features function
    function createFeatures(AirbnbData) { 

    }

        
//     // Define a function that we want to run once for each feature in the features array.
//     // Give each feature a popup with the location, price, # of beds, rating.  

    
    // Create a GeoJSON layer that contains the features array on the AirbnbData object.
    // Run the onEachFeature function once for each piece of data in the array.
    // var Airbnb = L.geoJSON(AirbnbData, {
    //     onEachFeature: onEachFeature,
    

    //Point to layer used to alter markers
//     pointToLayer: function(feature, latlng) {

    
//     //Set the style of the markers based on the properties
//     var markers = {
//         radius: markerSize(feature.properties.coordinates),
//           fillColor: choosecolor(feature.geometry.coordinates[2]),
//           fillOpacity: 0.1,
//           color: "black",
//           stroke: true,
//           weight: .5
//       }
//       return L.circle(latlng,markers);
//     }
//   });

    // // Send our earthquakes layer to the createMap function/
    // createMap(Airbnb);
    

  //Set up createMap function to add the layers to the map
  function createMap(Airbnb) {

    // Create the base layers.
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
  
    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });
  
    // Create a baseMaps object.
    let baseMaps = {
      "Street Map": street,
      "Topographic Map": topo
    };
  
    // Create an overlay object to hold our overlay.
    let overlayMaps = {
      Airbnb: Airbnb
    };
  
    // Create map, giving it the streetmap and earthquakes layers to display on load.
    let myMap = L.map("map", {
      center: [
        22.1, -159.53
      ],
      zoom: 5,
      layers: [street, Airbnb]
    });

    streetMap.addTo(myMap);


//Add Legend



// Loop through the intervals to generate labels for legend


  //Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

}

