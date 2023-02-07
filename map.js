var map = L.map('map').setView([23.6, 121.041976], 8);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //maxZoom: 8,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.scale().addTo(map);



/*
// Load kml file ��������F��
fetch('leaflet-kml-master/assets/Kaohsiung/Kaohsiung.kml')
    .then(res => res.text())
    .then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    const track = new L.KML(kml);
    track.setStyle({color: 'gray'});//���C��
    map.addLayer(track);

    // Adjust map to show the kml
    const bounds = track.getBounds();
    map.fitBounds(bounds);
});
*/
// Load kml file �D�n�ƥ�
fetch('leaflet-kml-master/assets/Kaohsiung/1100731.kml')
    .then(res => res.text())
    .then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    const track = new L.KML(kml);
    map.addLayer(track);

    // Adjust map to show the kml
    const bounds = track.getBounds();
    map.fitBounds(bounds);
});

// Load kml file �ۦ��ƥ�1
fetch('leaflet-kml-master/assets/Kaohsiung/1070823.kml')
    .then(res => res.text())
    .then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    const track = new L.KML(kml);
    track.setStyle({color: 'green'});//���C��
    //track.setStyle({opacity: 0.5});//��z����
    map.addLayer(track);

    // Adjust map to show the kml
    const bounds = track.getBounds();
    map.fitBounds(bounds);
});

// Load kml file �ۦ��ƥ�2
fetch('leaflet-kml-master/assets/Kaohsiung/105meiji.kml')
    .then(res => res.text())
    .then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    const track = new L.KML(kml);
    track.setStyle({color: 'blue'});//���C��
    map.addLayer(track);

    // Adjust map to show the kml
    const bounds = track.getBounds();
    map.fitBounds(bounds);
});

// Load kml file �ۦ��ƥ�3
fetch('leaflet-kml-master/assets/Kaohsiung/99.kml')
    .then(res => res.text())
    .then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    const track = new L.KML(kml);
    track.setStyle({color: 'yellow'});//���C��
    map.addLayer(track);

    // Adjust map to show the kml
    const bounds = track.getBounds();
    map.fitBounds(bounds);
});

$(document).ready(function () {
    $("#inser").click(function () {
        showInsertPage();
    });
    $("#update").click(function () {
        showUpdateList();
    });
    $("#delete").click(function () {
        showDeleteList();
    });
    $("#select").click(function () {
        doSelect();
    });
});