$(document).ready( function () {

  const story = $('#story').text().split(/\W+/);
  //console.log(story);

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
      fontSize: (30 + getRandomValue(50)) + "px",
      top: getRandomValue(window.innerHeight) + "px",
      left: getRandomValue(window.innerWidth) + "px",
      transform: "rotate(" + getRandomValue(360) + "deg)",
      color: "rgb(" + getRandomValue(256) + "," + getRandomValue(256) + "," + getRandomValue(256) + ")"
    });

    content.fadeIn(1000).fadeOut(2000, function () {
      $(this).remove();
    });

  };

  displayWord();

  //setInterval(displayWord, 100);
});
