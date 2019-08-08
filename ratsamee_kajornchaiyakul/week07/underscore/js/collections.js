

const collections = {
    numbers : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    people : [
      { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
      { id: 2, username: "B", active: false, age: 35, uid: 1352 },
      { id: 3, username: "C", active: false, age: 50, uid: 5418 },
      { id: 4, username: "D", active: true,  age: 65, uid: 216  },
      { id: 5, username: "E", active: true,  age: 80, uid: 18   },
      { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
    ],
    words : [
      "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
    ],
    sortPeopleById : function(){
        return _.sortBy(this.people, 'uid');
    },
    groupRandomWord : function () {
        // Group the random words by the lower case version of their first letter
        // _.groupBy(list, iteratee, [context]) 
        return _.groupBy(this.words, (word)=>{
            return word[0].toLowerCase();
        });
    },
    checkAllWordsMoreThanThree : function() {
        //Check to see if all the words have more than 3 characters
        return _.every(this.words, (word) => {
            return word.length > 3;
        });
    },
    getUid : function() {
        // Get an array of all of the uids in people
        return _.pluck(this.people, "uid"); 
    },
    getPersonHighestUid : function() {
        // Find the person with the highest uid
        return _.max(this.people, function(p){ return p.uid; });
    },
    countOddEvenNumbers : function() {
        // Return an object that says how many even numbers and how many odd numbers there are in numbers
        return _.countBy(this.numbers, function(num) {
            return num % 2 == 0 ? 'even': 'odd';
          });
    },
    getThreeRandomNumbers : function() {
        // Get three random numbers out of numbers
        return _.sample(this.numbers, 3);
    }
    
}

// console.log(collections.getThreeRandomNumbers());