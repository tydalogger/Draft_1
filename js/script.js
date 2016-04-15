/**
 * Created by lenovo on 14-04-2016.
 */
(function () {

    var map;

    function initMap() {
        //Enabling new cartography and themes
        google.maps.visualRefresh = true;

        //Setting starting options of map
        var mapOptions = {
            center: new google.maps.LatLng(12.9584774, 77.5159744),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        //Getting map DOM element
        var mapElement = document.getElementById('mainGoogleDiv');

        //Creating a map with DOM element which is just obtained
        map = new google.maps.Map(mapElement, mapOptions);
        userPosition();
    }

    function userPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;

                console.log(lat);
                console.log(lng);

                var myCenter2 = new google.maps.LatLng(lat, lng);
                map.setCenter(myCenter2);
                map.setZoom(17);
                var marker = new google.maps.Marker({
                    position: myCenter2,
                    center: myCenter2,
                    map: map,
                });
                var date = new Date();
                var infowindow = new google.maps.InfoWindow();
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent("Your Location");
                    infowindow.open(map, marker);
                });

            });
        }
    }


    google.maps.event.addDomListener(window, 'load', initMap);
})()