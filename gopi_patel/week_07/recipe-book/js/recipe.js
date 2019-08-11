console.log("test");



const loadSelect = function() {


  const url = `https://www.themealdb.com/api/json/v1/1/list.php?c=list`

  $.ajax(url).done(function(data) {
    const recipelist = data.meals;
    recipelist.forEach(function(val) {

      $('#recipelist').append($('<option>', {
        value: val.strCategory,
        text: val.strCategory
      }));
    });
  });
}

const cuisineSelected = function(recipelist) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipelist}`

  $.ajax(url).done(function(data) {
    const cuisinelist = data.meals;

    cuisinelist.forEach(function(val) {
      $("ul").append(`<li>
        <img src="${val.strMealThumb}" width=100 height=100>
        ${val.strMeal}
        </li>`);
    });
  });
};

$(document).ready(function() {

  loadSelect()

  $('#recipelist').on('change', function(event) {
    const list = $('#recipelist').val();
    console.log(list);
    $('ul').html('')
    cuisineSelected(list)

  });
});
