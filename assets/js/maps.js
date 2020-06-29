
      function initMap() {
        let map = new google.maps.Map(document.getElementById("map"), {
          zoom: 5,
          center: {
            lat: 52.8166887,
            lng: -2.1248383
          }
        });

        let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let locations = [
          { lat: 52.8159772, lng: -2.0894877 },
          { lat: 52.9943096, lng: -2.1536525 },
          { lat: 52.7659617, lng: -2.1120544 }
        ];

        let markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers, {
          imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
        });
      }
