function initMap() {
    // Create the map.
     const map = new google.maps.Map(document.getElementById('map'), {
         zoom: 5,
         center: { lat: 37.0902, lng: -95.7129 },
     });

    // Load the stores GeoJSON onto the map.
    map.data.loadGeoJson('chapters.json', {idPropertyName: 'chapterid'});

    const apiKey = 'AIzaSyAwy6PKU4r7ICmQVsW-e0Pu0-tA9b9MpGM';
    const infoWindow = new google.maps.InfoWindow();

    // Show the information for a store when its marker is clicked.
    map.data.addListener('click', (event) => {
        const category = event.feature.getProperty('category');
        const name = event.feature.getProperty('name');
        const description = event.feature.getProperty('description');
        const position = event.feature.getGeometry().get();
        const content = `
        <h2>${name}</h2><p>${description}</p>
        <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
        `;

        infoWindow.setContent(content);
        infoWindow.setPosition(position);
        infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
        infoWindow.open(map);
  });
 
 }