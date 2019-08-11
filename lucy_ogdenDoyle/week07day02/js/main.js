$(document).ready(function () {
  // create a button, and refresh the call with every click.
  $("#refresh").on("click", function () {
    //clear the current articles
    $("#articles").empty();
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=8c98008a0c5c4802822597e13a53eab0";
    $.ajax(url).done(function (data) {
      console.log(data.articles[0].title)
      const articles = data.articles;
      articles.forEach(function (a) {
        // create an article.
        const article = $(`<div class='article'><h2>${a.title}</h2><img src="${a.urlToImage}" class="thumb"><p>${a.description}</p><p><a href="${a.url}">Link to full article</p></div>`);

        //article.text(a.title);
        // populate the grid with the top atricles.
        $("#articles").append(article);
      });

    });
  }).trigger("click");

  // create a button, and refresh the call with every click.
  $("#search").on("submit", function (e) {
    e.preventDefault();
    const term = $("#keyword").val();
    console.log(term);
    //clear the current articles
    $("#articles").empty();
    const url2 = 'https://newsapi.org/v2/everything?' +
              `q=${term}&` +
              'from=2019-08-06&' +
              'sortBy=popularity&' +
              'apiKey=8c98008a0c5c4802822597e13a53eab0'
    $.ajax(url2).done(function (data) {
      console.log(data.articles[0].title)
      const articles = data.articles;
      articles.forEach(function (a) {
        // create an article.
        const article = $(`<div class='article'><h2>${a.title}</h2><img src="${a.urlToImage}" class="thumb"><p>${a.description}</p><p><a href="${a.url}">Link to full article</p></div>`);

        //article.text(a.title);
        // populate the grid with the top atricles.
        $("#articles").append(article);
      });

    });
  });



});
