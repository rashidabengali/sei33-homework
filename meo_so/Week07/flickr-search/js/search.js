
const state = {
    pageNumber: 1,
    totalPages: 0
}

const showImages = function (results) {
    // Nested helper function
    console.log(results);
    if (totalPages === 0) {
        totalPages = results.photos.pages;
    };
    console.log(totalPages);
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
            '_q.jpg'
        ].join('');
    };

    const generateLargeURL = function (p) {
        return [
            'http://farm',
            p.farm,
            '.static.flickr.com/',
            p.server,
            '/',
            p.id,
            '_',
            p.secret,
            '_b.jpg'
        ].join('');
    };


    _(results.photos.photo).each(function (photo) {
        const thumbnailURL = generateURL(photo);
        const largeURL = generateLargeURL(photo)
        // create image tag
        // set the source of the tag
        const $a = $('<a>', { href: largeURL } )
        const $img = $('<img>', {src: thumbnailURL });
        $a.append($img);
        $a.appendTo('#image');        
        // append to the page
    })
};

const searchFlickr = function (terms) {
    console.log('Searching Flickr for these terms', terms);

    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: terms,
        format: 'json',
        page: state.pageNumber
    }).done( showImages );

};



$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault();
        state.pageNumber = 1;
        totalPages = 0;
        const query = $('#query').val();
        searchFlickr(query);
        $('#image').empty();
        // TODO: send that query to Flickr
    });

    const loadImages = function () {

        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

        if (scrollBottom < 650 && (state.pageNumber < totalPages)) {
            state.pageNumber += 1;
            const query = $('#query').val();
            searchFlickr(query);
        }
    }
    const throttled = _.throttle(loadImages, 1000);
    $(window).on('scroll', throttled);
});






