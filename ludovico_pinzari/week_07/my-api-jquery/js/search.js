$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Do not leave the page. Prevent the form submission

    // get the value the user has provided for the city
    const cityName = document.getElementById('city_name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ cityName}&appid=0c2a56d4371875d123d9a01e7cc0c5b3`

    $.ajax(url).done(function (data) {
      drawWeather( data );
    });

  });
});

function drawWeather( data ) {
  var celcius = Math.round(parseFloat(data.main.temp)-273.15);
  var description = data.weather[0].description;
  document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = data.name;

  if( description.indexOf('rain') > 0 ) {
   document.body.className = 'rainy';
 } else if( description.indexOf('cloud') > 0 ) {
   document.body.className = 'cloudy';
 } else if( description.indexOf('sunny') > 0 ) {
   document.body.className = 'sunny';
 } else {
   document.body.className = 'clear';
 }

}
