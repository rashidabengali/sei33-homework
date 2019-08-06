const getFact = function () {
  $.ajax('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata').done(function (data) {
    if (data.totalItems === 0) return;
    const instructions = data.meals[0].idMeal;
    $('h1').after(`<p>${ instructions.text }<p>`);
    });
  };


$('#display').on('click', getFact);
