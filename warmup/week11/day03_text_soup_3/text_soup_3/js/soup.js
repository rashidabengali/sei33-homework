$(document).ready( function () {

  let timer = null;

  let story;

  const url = new URLSearchParams(window.location.search);

  // The URLSearchParams interface defines utility methods to work with the query string of a URL.

  let page = url.get('page');

  console.log('page', page);

  // found the api link from stackoverflow https://stackoverflow.com/questions/2381642/returning-data-from-wikipedia-using-ajax

  $.getJSON("http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", {page: page})
  .done(data => {

    console.log(data);

    let wikiHTML = data.parse.text["*"];

    // this is the shape of the object returned by the Wikipedia API

    // A trick to strip the HTML tags out of our response by setting them as the contents of a DIV tag we
      // create on-the-fly, and then using jQuery's .text() method to get just the text, HTML tags removed.
      // Note the errors this causes in the console, however, as the browser suddenly tries to parse all that
      // HTML and load any image files referenced in IMG tags.

    let text = $('<div>').html(wikiHTML).text();

    story = text.split(/\W+/);

    timer = setInterval(displayWord, 100);
    // want this function to run after the json data has been loaded
  });


  const controller = {
    fadeIn: 1000,
    fadeOut: 2000,
    fontSize: 80,
    timeInterval: 100,
    textColor: '#32df1d'
  }

  const gui = new dat.GUI();

  gui.add(controller, 'fadeIn', 0, 5000);
  gui.add(controller, 'fadeOut', 0, 5000);
  gui.add(controller, 'fontSize', 10, 500);

  const timerController = gui.add(controller, 'timeInterval', 1, 1000);

  timerController.onFinishChange(function (value) {
    clearInterval(timer);
    timer = setInterval(displayWord, value)
  });

  gui.addColor(controller, 'textColor');

  // const story = $('#story').text().split(/\W+/);
  //console.log(story);

  // commented this out as not using the id text anymore

  const getRandomValue = function (maxValue) {
    const random = Math.floor(Math.random() * maxValue);
    return random;
  };

  const displayWord = function () {

    const randomIndex = getRandomValue(story.length);
    //console.log(randomIndex);
    const word = story[randomIndex];
    //console.log(word);

    const content = $('<p>').text(word);
    $('body').append(content);

    content.css({
      fontSize: (30 + getRandomValue(controller.fontSize)) + "px",
      top: getRandomValue(window.innerHeight) + "px",
      left: getRandomValue(window.innerWidth) + "px",
      transform: "rotate(" + getRandomValue(360) + "deg)",
      color: controller.textColor
    });

    content.fadeIn(controller.fadeIn).fadeOut(controller.fadeOut, function () {
      $(this).remove();
    });

  };

  // displayWord();

  // timer = setInterval(displayWord, 100);
  // commented this out and moved it up as dont want the function to run as soon as the page loads

  }
});
