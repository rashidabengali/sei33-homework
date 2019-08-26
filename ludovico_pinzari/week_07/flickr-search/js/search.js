
const state = {
  pageNum: 1,
  requestInProgress: false,
  lastPageReached: false
};

const showImages = function (results) {
  // console.log( results );
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
      '_q.jpg' // Change q to something else for different sizes
    ].join('');
  };


  _(results.photos.photo).each(function(photo) {
     const thumbnailURL = generateURL(photo);
     // create an image tag
     const $img = $('<img>', {src: thumbnailURL}); // .attr('src', thumbnailURL)
     // set the source of the image tag
     $img.appendTo('#images');

     //shove it in the page
  });
};


const searchFlickr = function (terms) {
  if (state.requestInProgress || state.lastPageReached) return;

  state.requestInProgress = true;

  console.log('Searching Flickr for these terms', terms, state);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
    text: terms,
    format: 'json',
    page: state.pageNum++
  }).done( showImages ).done(function (data){
    console.log(data);
    state.requestInProgress = false;
    // debugger;
    if (data.photos.page >= data.photos.pages) {
      state.lastPageReached = true;
    }
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Stay on this page.

    const query = $('#query').val();
    state.pageNum = 1;
    state.lastPageReached = false;
    searchFlickr(query);
    $('#images').empty();

    // TODO: send that query to Flickr
    });
    // const debouncedSearchFlickr = _.debounce(searchFlickr, 4000, { trailing: false} );
    $(window).on('scroll',function(){
      // calculate
      const scrollBottom = $(document).height()- $(window).height() - $(window).scrollTop();

      if (scrollBottom < 650) {
        const query = $('#query').val();
        searchFlickr(query);
        // debouncedSearchFlickr(query);
      }
  });
});
