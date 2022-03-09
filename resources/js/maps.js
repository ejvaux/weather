import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZWp2YXV4IiwiYSI6ImNsMGJ1aWMyNDA1MWkzaW1sb3h1dDl0am8ifQ.dMmwpREWdseAu2EET3v0AQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [120.97533812288953, 14.580732950639742],
    zoom: 9
});

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: {
        color: 'green'
    },
    mapboxgl: mapboxgl
});

map.addControl(geocoder);

map.on('style.load', function () {
    map.on('click', function (e) {
        console.log('click');
        load(e.lngLat);
    });
});

map.on('load', () => {
    console.log('A load event occurred.');
    Swal.fire({
        icon: 'info',
        title: 'Click on a location to view its current weather forecast',
    });
});

function load(coor) {
    console.log('test: ' + coor);

    var popup = new mapboxgl.Popup()
    .setLngLat(coor)
    .setHTML('<h4>Loading Weather Forecast</h4>')
    .setMaxWidth("none")
    .addTo(map);

    $.ajax({
        url: 'forecast',
        type: 'get',
        data: {
            'lat': coor['lat'],
            'lon': coor['lng'],
            'mode': 'html',
        },
        success: function (data) {
            popup.remove();
            new mapboxgl.Popup()
                .setLngLat(coor)
                .setHTML(data)
                .setMaxWidth("none")
                .addTo(map);
        },
        complete: function(){
            popup.remove();
        }
    });
}