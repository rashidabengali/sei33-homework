const getFact = function () {
  $.ajax('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata').done(function (data) {
    console.log(data);
    if (data.totalItems === 0) return;
    const instructions = data.meals[0].idMeal;
    console.log(instructions);
    $('h1').after(`<p>${ instructions}<p>`);
    });
  };


$('#display').on('click', getFact);
