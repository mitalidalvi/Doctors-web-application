function initMap(){

    // Map option

    var options = {
        center: {lat: 20.5937, lng: -78.9629 },   // India
        zoom: 9
    }

    // New Map

    map = new google.maps.Map(document.getElementById("map"),options)

    // Marker

    const marker = new google.maps.Marker({
    position:{lat: 19.0760, lng: -72.8777},  // Mumbai
    map:map,
    icon:"https://img.icons8.com/nolan/2x/marker.png"
    });

    // InfoWindow

    const detailWindow = new google.maps.InfoWindow({
        content: '<h2> Mumbai City </h2>'
    });

    marker.addListener("mouseover", () =>{
        detailWindow.open(map, marker);
    })

    //  Add Marker

    function addMarker(location){

        const marker = new google.maps.Marker({
            position:location,
            map:map,
            icon:"https://img.icons8.com/nolan/2x/marker.png"
            });
    }


}
