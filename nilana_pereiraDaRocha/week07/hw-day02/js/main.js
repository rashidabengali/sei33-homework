const fetchWeatherByCity = function (city) {
  const key = 'f7606477b7dd4fef8cc04b1f77824111';
  $('.weather').text('Loading...');
  // disabling multiple clicks
  $('.button').attr('disabled', true);
  $.ajax(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${key}`)
    .done(function (response) {
      // enabling click in button for next search
      $('.button').attr('disabled', false);
      $('.weather').text(`${response.data[0].city_name}, ${response.data[0].weather.description}`);
    });
};

$('.button').on('click', function () {

  fetchWeatherByCity($('.search').val());
});