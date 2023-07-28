// Set map
function initialize() {
    var mapOptions = {
        // Zoom of map on start
        zoom: 10,
        // Initial center coordinates on start (Ha Noi)
        center: new google.maps.LatLng(21.027763, 105.834160),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Minimum zoom of map
        minZoom: 2
    };

    // Create a new map instance using provided options
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Create an info window to display location info
    var infoWindow = new google.maps.InfoWindow();

    // Create a marker for example : Ho Chi Minh, Viet Nam
    var marker = new google.maps.Marker({
        // Cordinates for Ho Chi Minh, Viet Nam
        position: new google.maps.LatLng(10.823099, 106.629662),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Ho Chi Minh, Viet Nam'
    });

    // Add click event listener for marker
    marker.addListener('click', function () {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
    });

    // Adjust map center when the window is resized
    google.maps.event.addDomListener(window, "resize", function () {
        map.setCenter(mapOptions.center);
    });


}

// Initialize the map when window loading finished
google.maps.event.addDomListener(window, 'load', initialize);