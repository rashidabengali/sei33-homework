const showImages = function (results) {
    console.log('results:', results);
    const generateURL = function(p) {
        return ['http://farm',
            p.farm,
            ".static.flickr.com/",
            p.server,
            "/",
            p.id,
            '_',
            p.secret,
            '_q.jpg',
        ].join('');
    };
    _(results.photos.photo).each((photo)=>{
        const thumbnailURL = generateURL(photo);
        //const $img = $('<img>').attr('src', thumbnailURL);
        const $img = $('<img>', {src:thumbnailURL});
        $img.appendTo("#images");
    });
}

const searchFlickr = function(terms, pages=1) {
    const url = 'https://api.flickr.com/services/rest?jsoncallback=?';
    $.getJSON(url, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: terms,
        page: pages,
        format: 'json'
    }).done(showImages);
}

$(document).ready(() => {
    let page;
    let finish;
    let isLoad;

    const resetPage = function(){
        page = 2;
        finish = 0;
        isLoad = false;
    }

    resetPage();
    $("#search").on('submit', function(event) {
        event.preventDefault();

        const query = $('#query').val();
        searchFlickr(query);
        page = 2;
        resetPage();
        $("#images").html("");
    });

    $(window).on('scroll', () => {
        // console.log('$(window).scrollTop()', $(window).scrollTop());
        // console.log('$(document).height()', $(document).height());
        // console.log('$(window).height()', $(window).height());
        // if ($(window).scrollTop() === $(document).height() - $(window).height()){
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if ((!isLoad) && scrollBottom < 650) {
            finish = $(document).height();
            console.log('set new end point', finish);

            const query = $('#query').val();
            searchFlickr(query, page);
            console.log('load data', page);
            page += 1;
            isLoad = true;
        }
        if (isLoad && finish < $(document).height()){
            isLoad = false;
        }
    });
});