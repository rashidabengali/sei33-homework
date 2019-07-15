console.log('run');

// Version 1
/*
const theBottleSong = function (num) {
  for (let i = num; i >= 0; i--) {
    if (i === 0) {
      console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`);
    } else if (i === 1) {
      console.log(`1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.`);
    } else {
      console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${i - 1} bottles of beer on the wall.`);
    }
  }
};

theBottleSong(20);
*/

// Version 2

const theBottleSong = {

  stock: function (num) {
    if (num === 0) {
      return `No more bottles`
    } else if (num === 1) {
      return `1 bottle`;
    } else {
      return `${num} bottles`
    }
  },

  action: function (num) {
    if (num === 0) {
      return `Go to the store and buy some more,`
    } else if (num === 1) {
      return `Take it down and pass it around,`;
    } else {
      return `Take one down, pass it around,`
    }
  },

  stockLeft: function (num) {
    if (num === 0) {
      return `99 bottles`
    } else if (num === 1) {
      return `no more bottles`;
    } else if (num === 2) {
      return `1 bottle`
    } else {
      return `${num - 1} bottles`
    }
  },

  lyrics: function (num) {

    const lyricsOne = `${this.stock(num)} of beer on the wall, ${this.stock(num)} of beer.`;

    const lyricsTwo = `${this.action(num)} ${this.stockLeft(num)} of beer on the wall.`

    return lyricsOne + '\n' + lyricsTwo;
  },

  song: function (num) {
    for (let i = num; i >= 0; i--) {
      console.log(this.lyrics(i));
    }
  }
};

theBottleSong.song(20);
