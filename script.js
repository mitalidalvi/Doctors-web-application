// const users = document.querySelector('.doctors-list');
// const userName = document.querySelector("#user")

// const getUserData = async() => {
//     try{

//         const res = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters');
//         const data = await res.json();
//         console.log(data);

//     }catch (error) {
//         console.log(error);
//     }
// }



// let map;

// async function initMap() {
//   const { Map } = await google.maps.importLibrary("maps");
//   map = new Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// initMap();



// const mc = require('@google/maps').createClient({
//     key: 'AIzaSyAK6a_aJjNfbyouR5CBC-Bywxag1UNCKbs'
//   });
  
//   const location = [-33.878101, 151.220386]; // Darlinghurst, AU
//   const r = 1000;
//   const request = {
//       location: location,
//       radius: r,
//       type: 'doctors'
//   };
  
//   mc.placesNearby(request, function (err, res) {
//       if (err) {
//           console.log(err);
//           return;
//       }
//       console.log(JSON.stringify(res.json.results.length));
//       console.log(JSON.stringify(res.json.results.map(function (v) {
//           return v.name;
//       })));
//   });



// $("#form").submit(function (e) {
//     e.preventDefault()

//     var query = $("#search").val()

//     let result = ''

//     var API_KEY = '82d484581a4bb36635761e4f50eb3cd0'

//     var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
//     console.log(url)


//     $.get(url, function (data) {
//         console.log(data)

//         data.organic_results.forEach(res => {

//             result = 

//             <html>
//                 <head>

//                 </head>
//                 <body>
//                     <h1>${res.title}</h1><br/><a target = "_blank" href="${res.url}">${res.url}</a>
//                     <p>${res.snippet}</p>
//                 </body>    
//             </html>
            


//             $("#result").append(result)
    
//         }); 
     
//     })

// })




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
