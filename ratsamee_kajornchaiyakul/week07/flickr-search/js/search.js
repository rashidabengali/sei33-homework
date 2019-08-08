const state = {
    pageNum: 1,
    isLoad: false,
    isLastPage: false,
    finishDocument: 0
}

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

const searchFlickr = function(terms) {
    if (state.isLoad || state.isLastPage) return;
    state.isLoad = true;
    const url = 'https://api.flickr.com/services/rest?jsoncallback=?';
    $.getJSON(url, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: terms,
        page: state.pageNum,
        format: 'json'
    }).done(showImages).done((data)=>{
        if (data){
            state.pageNum += 1;
            if (state.finishDocument < $(document).height()){
                state.finishDocument = $(document).height();
                state.isLoad = false;
            }
            state.isLastPage = state.pageNum >= data.photos.pages;
        }
    });
}

const resetPage = function(){
    state.pageNum = 1,
    state.isLoad = false,
    state.isLastPage = false,
    state.finishDocument = 0
}

$(document).ready(() => {
    $("#search").on('submit', function(event) {
        event.preventDefault();
        resetPage();
        const query = $('#query').val();
        searchFlickr(query);
        $("#images").html("");
    });

    const debouncedSearchFlickr = _.debounce(searchFlickr, 2000, { trailing: false });
    $(window).on('scroll', () => {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 650) {
            const query = $('#query').val();
            debouncedSearchFlickr(query);
        }
    });
});