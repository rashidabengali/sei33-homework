const showImages = function (results) {
  // Nested helper function
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' //change q to something else for different sizes.
    ].join('');
  };

// const pageRequest = function (page) {
//   if (pages = page) {
//     return page);
//   } else {
//     return page += 1;
//   };
// };

  console.log ( results );

  _(results.photos.photo).each(function (photo) {
    //create an image tag
    const thumbnailURL = generateURL(photo); //entire photo object turned into an URL.
    //set the srouce of the image tag
    const $img = $('<img>', {src: thumbnailURL}); //equivalent to .attr('src', thumbnailURL)
    // shove it in the page
    $img.appendTo('#images');
  });
};

const searchFlickr = function (terms) {
  console.log('Searching Flickr for these terms', terms);

  const flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?";

  $.getJSON(flickrURL, { //the below keys are specific to the Flickr API
    page: // page value = 1. get pages value. if pages value is less than page value. add +1 to page. else return end. ?
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key. aka not secure.
    text: terms,
    format: 'json'
  }).done( showImages );
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Stay on this page.

    const query = $('#query').val();
    searchFlickr(query);
    $('#images').empty();
  });

  // This function is Extremely twitchy.
  $(window).on('scroll', function () {
    // calculate the scrollbottom
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    // if the scrollbottom is less than some value
    if (scrollBottom < 650) {
      // when it nears the bottom of the page, do the search again
      const query = $('#query').val();
      searchFlickr(query);
    }
  });
});


//term and query refer to the same thing but from different aspects. one is global (terms) and one in internal (?)

// Homework
// AJAX Flickr Lab
// Support infinite scroll to show all results from Flickr (eventually, after a lot of scrolling).
// Prevent your code from making too many requests: only one at a time, please
// Don't request more images when you reach the last "page" of Flickr results
// Make sure you go back to the first page when searching for a new term!
// Make it beautiful
// Add other features as you see fit
// Bonus: display larger images in an attractive slideshow
// Bonus: add links back to each image's own page on Flickr.com
