console.log("this works");

const showImages = function (results){
  console.log(results);
  const generateURL = function(p){
      return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg'
      ].join('');
  };
  _(results.photos.photo).each(function (photo) {
    // const thumbnailURL = generateURL(photo);
    // // create an image tag
    // const $img = $(`<img>`, {src: thumbnailURL}); // equivalent to .attr('src', thumbnailURL)
    // // set the source of the image tag
    // // shove it in the page
    // console.log(thumbnailURL);
    var thumbnailURL = generateURL(photo);
    var $img = $('<img>', { src: thumbnailURL }); // equivalent to .attr('src', thumbnailURL)
    $img.appendTo('#images'); // $('#images').append($img);
  });
};
const searchFlickr = function (terms) {
    console.log('Searching Flickr for these terms', terms);

    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

    $.getJSON(flickrURL, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
      text: terms,
      format: 'json'
    }).done( showImages);
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Stay on this page

    const query = $('#query').val();
    searchFlickr(query);
    $('#images').empty();
  });
//   Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked.
//
// At the end of the wait interval, the function will be called with the arguments that were passed most recently to the debounced function.
//
// Pass true for the immediate argument to cause debounce to trigger the function on the leading instead of the trailing edge of the wait interval. Useful in circumstances like preventing accidental double-clicks on a "submit" button from firing a second time

  var debouncedSearchFlickr = _.debounce(searchFlickr, 4000, { trailing: false });

  // Extremely twitchy
  $(window).on('scroll', function (){
    // calculate the scrollbottom
    const scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());

    // if the scrollbottom is less than some value
    if (scrollBottom <= 500){
        const query = $('#query').val();
        debouncedSearchFlickr(query);
        console.log('near the end');
    }
  });
});
