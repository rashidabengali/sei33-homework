$(document).ready( function () {

  let timer = null;

  const controller = {
    fadeIn: 1000,
    fadeOut: 2000,
    fontSize: 80,
    timeInterval: 100,
    textColor: '#32df1d',
    addWord: '',
    clearWord: function () {
      $('<p>').remove()
    }
  };

  const gui = new dat.GUI();

  gui.add(controller, 'fadeIn', 0, 5000);
  gui.add(controller, 'fadeOut', 0, 5000);
  gui.add(controller, 'fontSize', 10, 200);

  const timerController = gui.add(controller, 'timeInterval', 1, 1000);

  timerController.onFinishChange(function (value) {
    clearInterval(timer)
    timer = setInterval(displayWord, value)
  });

  gui.addColor(controller, 'textColor');
  gui.add(controller, 'addWord');
  gui.add(controller, 'clearWord');


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

  timer = setInterval(displayWord, 100);
});
