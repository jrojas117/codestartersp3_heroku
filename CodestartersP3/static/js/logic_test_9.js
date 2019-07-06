function updatemap(newdata,geojson_selection,coordenadas_estado,data_sector){
    var markers = null;
    var myMap = null;


// Store our API endpoint inside queryUrl for business markers

var businessUrl = newdata;

// Grab the data with d3
d3.json(businessUrl, function(response) {
// Create a new marker cluster group
 markers = L.markerClusterGroup();
// Loop through data
for (var i = 0; i < response.length; i++) {
// Set the data location property to a variable
    var latitud = response[i].latitud;
    var longitud = response[i].longitud;
   // Add a new marker to the cluster group and bind a pop-up
   markers.addLayer(L.marker([latitud, longitud])
   .bindPopup(response[i].nom_estab + ", " + response[i].nombre_act));
    }
    // Add our marker cluster layer to the map
    createMap(markers);
});
 
//Map control
function createMap(markers) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Light Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Business_pin : markers
  };

  // Create our map, giving it the streetmap and businees layers to display on load
   myMap = L.map("map", {
    center: coordenadas_estado,
    zoom: 7,
    layers: [streetmap, markers]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: true
  }).addTo(myMap);
    var geojson = null;

    // Plot business analytic background
    d3.json(geojson_selection, function(data) {
    // Create a new choropleth layer
    geojson = L.choropleth(data, {
      // Define what  property in the features to use
      valueProperty: "Sector",
      // Set color scale
      scale: ["#ffffb2", "#02b07f"],
      // Number of breaks in step range
      steps: 10,
      // q for quartile, e for equidistant, k for k-means
      mode: "q",
      style: {
        // Border color
        color: "#fff",
        weight: 1,
        fillOpacity: 0.8
      },
      // Binding a pop-up to each layer
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.estado + ", " + "<br>Total de empresas relacionadas a sector <br>" + data_sector + ": " +
        feature.properties.Sector);
      }
    }).addTo(myMap);;
    // Set up the legend
        var legend = L.control({ position: "bottomright" });
        legend.onAdd = function() {
            var div = L.DomUtil.create("div", "info legend");
            var limits = geojson.options.limits;
            var colors = geojson.options.colors;
            var labels = [];
    // Add min & max
        var legendInfo = "<h1 id=\"legendbox\">Cantidad de empresas</h1>" +
            "<div class=\"labels\">" +
            "<div class=\"min\">" + limits[0] + "</div>" +
            "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
            "</div>";
        div.innerHTML = legendInfo;
        limits.forEach(function(limit, index) {
        labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
        });
        div.innerHTML += "<ul>" + labels.join("") + "</ul>";
        return div;
        };
    // Adding legend to the map
        legend.addTo(myMap);
  });
};
};