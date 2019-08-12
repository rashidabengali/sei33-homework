console.log('something');

$(document).ready(function () {
  $('#refresh').on('click', function (event) {
    event.preventDefault();

    const url = 'http://api.open-notify.org/iss-now.json';

    console.log(url);

    $.ajax(url).done(function (data) {
      console.log(data);

      // if (data.timestamp === 0) return;

      const longitude = data.iss_position.longitude;
      const latitude = data.iss_position.latitude;

      $("#longitude_data").text(longitude);
      $("#latitude_data").text(latitude);

      let mymap = L.map('mapid').setView([longitude, latitude], 2);

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

      maxZoom: 18,

  }).addTo(mymap);

  var marker = L.marker([longitude, latitude]).addTo(mymap);


    })
  });
});
