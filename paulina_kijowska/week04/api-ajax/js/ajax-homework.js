//ajax url


const fetchFact = function () {
  $.ajax('https://random.dog/woof.json').done(function (data) {

    const cover = data.url;
      const cover1 = data.url;
    $('#cover').attr('src', cover);

  });
};


$('#discover').on('click', fetchFact);
fetchFact();


const fetchFacts = function () {
  $.ajax('https://random.dog/woof.json').done(function (data) {


      const cover1 = data.url;
    $('#cover1').attr('src', cover1);

  });
};


$('#discover').on('click', fetchFacts);
fetchFacts();















// $(document).ready(function   () {
//   $('#search').on('submit', function (event) {
// event.preventDefault();
// const city = $('#weather').val();
// console.log(city);
// const url = `https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22;`;
// // const url = `https://www.api.openweathermap.org/data/2.5/weather?q=${city}`;
// console.log(url);
// $.ajax(url).done(function (data) {
// console.log(data);
// const info = data.weather.main;
// console.log(info);
// $('h1').after(`<p>${ data.info }</p>`);
//   $('h1').text('there was error');
// });
// });
// });
// });
