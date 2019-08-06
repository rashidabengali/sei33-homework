$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();

    const news = $('#news_headlines').val();
    const url = 'https://newsapi.org/v2/everything?' +
          `q=${news}&` +
          'from=2019-08-06&' +
          'sortBy=popularity&' +
          'apiKey=e4b335411fb54d848accacbbf8073923';

    $.ajax(url).done(function (data) {
      if (data && data.articles && data.articles.length > 0){
        //loop through the array
        const todayNews = data.articles
        todayNews.forEach((article)=>{
          const title = document.createElement('h4');
          title.innerHTML = article.title;

          const description = document.createElement('p');
          description.innerHTML = (article.description)?article.description:"No content";

          $("body").append(title).append(description);
        });

      } else {
        const noNews = document.createElement('h4');
        noNews.innerHTML = `No news for ${news} today!`
        $("body").append(noNews);
      };

    });

    // this ajax lines replaced whatever we wrote for the homework.
    // this is the historic way of writing AJAX with jQuery.

    // $.ajax(url, {
    //   success: function (data) {
    //     const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    //     $('#cover').attr('src', cover);
    //   }
    // });



  });
});
