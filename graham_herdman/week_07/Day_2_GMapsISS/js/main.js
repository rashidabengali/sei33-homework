// Setting up Google Maps
// Initial lat and lngs
window.lat = 32.832;
window.lng = 168.7256;
window.zoom = 2;
window.lineCoords = [];
window.updateTime = 300;

// #1 Function Intialize map
const initialize = function() {
  map = new google.maps.Map(document.getElementById("map-canvas"), {
    center: { lat: lat, lng: lng },
    zoom: zoom
  });
  mark = new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: map,
    icon: {
      url:
        "https://elderscrollsonline-fr.wiki.fextralife.com/file/Elder-Scrolls-Online/butterfly_wing.png"
    }
  });
};

// #2 Function Redraw Map function
const redraw = function(payload) {
  lat = payload.message.lat;
  lng = payload.message.lng;
  // map.setCenter({lat:lat, lng:lng, alt:0});
  mark.setPosition({ lat: lat, lng: lng, alt: 0 });

  lineCoords.push(new google.maps.LatLng(lat, lng));

  const lineCoordinatesPath = new google.maps.Polyline({
    path: lineCoords,
    geodesic: true,
    strokeColor: "#2E10FF"
  });

  lineCoordinatesPath.setMap(map);
};

// Set-Up Google Maps //////////////////////////////////////////////////////////
// initialize Google Map
window.initialize = initialize;

const pnChannel = "map-channel";

const pubnub = new PubNub({
  publishKey: "YOUR KEY",
  subscribeKey: "YOUR KEY"
});

pubnub.subscribe({ channels: [pnChannel] });
pubnub.addListener({ message: redraw });
let count = 0;
// setInterval(function() {
//   pubnub.publish({channel:pnChannel, message:{lat:window.lat + 0.1, lng:window.lng + 0.1}});
// }, 1000);
////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
  // TODO: ADD A BUTTON THAT STOPS THE TRACKING AND TURNS IT BACK ON

  // debugging
  let count = 0;

  // define variables
  const url = "http://api.open-notify.org/iss-now.json";
  let current_latitude = 32.832;
  let current_longitude = 168.7256;

  // get current lattitude and longitude
  stop = setInterval(function() {
    $.ajax(url).done(function(data) {
      current_longitude = parseFloat(data.iss_position.longitude);
      current_latitude = parseFloat(data.iss_position.latitude);

      console.log(current_longitude, current_latitude);

      pubnub.publish({
        channel: pnChannel,
        message: { lat: current_latitude, lng: current_longitude }
      });
    });

    // // debugging
    // if (count > 10) {
    //   clearInterval(stop)
    // }
    // count++
  }, updateTime);
});
