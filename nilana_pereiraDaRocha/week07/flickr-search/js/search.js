// this is the pagination for the API
let page = 1;

const showImages = function (results) {

  if (results.photos.pages > page) {
    page += 1;
  }

  // enabling click in button for next search
  $('#click').attr('disabled', false);
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
      '_q.jpg' //Change p to something else for different sizes

    ].join('');
  };

  console.log(results);

  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    console.log(thumbnailURL);
    //Create an image tag 
    const $img = $('<img>', { src: thumbnailURL }); //equivalent to .attr('src', thumbnailURL)
    //set the source of the image tag 
    $img.appendTo('#images');
    //shove it in the page 

  });
};

const searchFlickr = function (terms) {
  console.log('Searching Flickr for these terms', terms);

  const flickrURL = 'http://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',// This is not a secret key.
    text: terms,
    format: 'json',
    page: page
  }).done(showImages)

};

$(document).ready(function () {
  const onClick = function (event) {
    event.preventDefault(); //Stay on this page

    // disabling multiple clicks
    $('#click').attr('disabled', true);

    const query = $('#query').val();
    searchFlickr(query);
    $('#images').empty();
  };

  var lazyOnClick = _.debounce(onClick, 500);
  $('#click').on('click', lazyOnClick);
});


//Extremely twitchy
$(window).on('scroll', _.debounce(function () {
  console.log('scroll');
  // calculate the scrollbottom
  const scrollbottom = $(document).height() - $(window).height() - $(window).scrollTop();

  //if the scrollbottom is less than  some value
  if (scrollbottom < 650) {
    const query = $('#query').val();
    searchFlickr(query);
  }
  //print a message 
}, 500));




