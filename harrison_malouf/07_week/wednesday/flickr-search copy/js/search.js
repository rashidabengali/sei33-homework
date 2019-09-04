
// we store these values in a object so we don't create bugs from variables floating around
const state = {

// we have a set page number so can start from somewhere, refer to lines 53,68
  pageNum :1,

// Instead of using a throttle or a Dbounce, we can use the boolean to depict, refer to lines 44,45,59
  requestInProgress :false,
  lastPageReached: false,
}

const showImages = function (results) {
  // nested helper function
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/'
      p.id
      '_'
      p.secret
      '_q.jpg' // change q to something else for different sizes
    ].join('')
  };

console.log( results )

  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    //console.log(thumbnailURL);
    //  create an image tag
    const $img = $('<img>', {src: thumbrailURL}); // equivalent to .attr('src', thumbnailURL)
    // set the source of the image tag

    //shove it in the page
    $img.appendTo('#images');
  })
};

const searchFlickr = function (terms) {
  if (state.requestProgress || state.lastPageReached) return;
  state.requestInProgress = true;

  console.log('Searching Flickr for these terms', terms);

const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'

$.getJSON(flickrURL, {
  method: 'flickur.photos.search', // method = what function do you wanna use
  api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
  text: terms,
  format: 'json',
  page: state.pageNum++
}).done(showImages).done(function (data) {
  console.log(data);
  state.requestInProgress = false;
  if (data.photos.page >= data.photos.pages {
    state.lastPageReached = true
  })
});
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Stay on this page.

    const query = $('#query').val();
    state.pageNum = 1;
    state.lastPageReached = false;
    searchFlickr(query);
    console.log( query );
 $('#images').empty();
});
    // send it to flickr


const debouncedSearchFlickr = _.debounce(searchFlickr, 4000, {trailing: false});
    $(window).on('scroll', function (){
      // calculate the scrollbottem
      const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

      if (scrollBottom < 650) {
        const query = $('#query').val();
        debouncedSearchFlickr(query);
      }
    })
const throttled = _.throttle(updatePosition, 1000);
  });
});
