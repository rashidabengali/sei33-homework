const showImages = function(results){
  //Nested helper function
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
      '_q.jpg' //change q to something else for different size
    ].join('');
  };

  console.log(results);


  _(results.photos.photo).each(function(photo){
    const thumbnailURL = generateURL(photo);
    // create  an image tag
    const $img = $(`<img>`, {src: thumbnailURL}); // equivalent to  .attr('src', thumbnailURL)
    $img.appendTo('#images');
    //set the source of the image tag
    // shove it in the page
  });
};

let page = 1;

const searchFlickr = function(term) {
  console.log('Serching flicker for these terms', term);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // This ia nota secret api_key
    text: term,
    format: 'json',
    'page': page++
  }).done(showImages);
};

var throttledSearch = _.throttle(searchFlickr, 300);


$(document).ready(function(){
  $('#search').on('submit', function (event){
    event.preventDefault();

    const query =$('#query').val();
    console.log(query);
    searchFlickr(query);
    $('#images').empty();
  });

  $(window).on('scroll', function(){
    // calculate the scroll botton
    const scrollBottom = $(document).height() - $(window).height()- $(window).scrollTop();
    if (scrollBottom < 500){
      const query = $('#query').val();
      throttledSearch(query);
  }
    //if the scroll bottom is less than some value
    //print msg

  });
});
