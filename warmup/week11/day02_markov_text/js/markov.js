let markov = {};

let beginnings = [];

const file = '../story.txt'

// Build our markov chain by iterating over given text

const makeMarkov = (text) => {

// split huge string  into array of individual words
  const words = text.split(/[ ;\-\n]+/);
  console.log('words', words);
  const story = text.split(/\W+/);
  console.log('story', story);

  for (let i = 0; i < words.length-1; i++) {
    let word = words[i]

    if (!markov[word]) {
      markov[word] = [] // key's value must be initialozed or .push wont work
    }

    let nextWord = words[i+1]
    console.log('vddd', nextWord);
    markov[word].push(nextWord)

    // keep a track of suitable sentence starting with capital letter
    if (word.match(/^[A-Z][a-z]/)) {
      beginnings.push(word)
    }
  }
  console.log('begin', beginnings);
};

// helper function to get random value
const getRandom = (max) => {
  return Math.floor(Math.random() * max)
}

// helper function to get random element from array

const chooseText = (array) => {
  return array[getRandom(array.length)]
}


const generate = (length) => {

  let upcomingText = chooseText(beginnings)
  let output = upcomingText;

  for (let i = 0; i < length; i++) {
    let word = chooseText(markov[upcomingText]);
    output += " " + word
    upcomingText = word
  }

  return output

}

$(document).ready(function() {

    $.ajax(file)
    .done((res) => {
      makeMarkov(res);

      let nextText = generate(60)

      let $el = $('<p>').text(nextText)
      console.log('5555', $el);
      $('#output').append($el)
    })
    .fail((err) => {
      console.warn(err);
    })
    // listen for keypress and generate new text when enter is pressed
    $(document).keypress(function (event) {
      if (event.keyCode === 13) {
        let nextText = generate(60)

        let $el = $('<p>').text(nextText)
        console.log('5555', $el);
        $('#output').append($el)
      }
    })
});
