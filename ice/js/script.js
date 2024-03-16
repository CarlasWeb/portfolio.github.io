
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 36.1471120771385, lng: -5.353798028747053 },
    zoom: 17,
    mapId: '30d52e11e75d127f'
	});

	const image = "assets/img/map-marker1.png";

	new google.maps.Marker({
    position: { lat: 36.1471120771385, lng: -5.353798028747053 },
    map,
    icon: image,
    title: "Iceprivacy Address",
  });
}

 

