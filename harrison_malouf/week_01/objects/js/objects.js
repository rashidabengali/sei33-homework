// Exercises: Objects
// The Recipe Card
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
const favouriteRecipe = {
  title: "Pasta",
  servings: 2,
  ingredients: [ "spag" , "Olive Oil" , "salt" ],
}
console.log(favouriteRecipe)

//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
// The Reading List
// Keep track of which books you read and which books you want to read!
console.log(favouriteRecipe.title)
console.log('serves:', favouriteRecipe.servings)
// console.log(favouriteRecipe.ingredients[0])
// console.log(favouriteRecipe.ingredients[1])
// console.log(favouriteRecipe.ingredients[2])

// better way of showoing the ingredients incase there are changes to the array in the future.

for (let i = 0; i < favouriteRecipe.ingredients.length; i++) {
  console.log( recipe.ingredients[ i ] );
}

// lazier way of doing it. the join allows us to put all the words together while the \n gives us a new line after each word from the ingredients

console.log( recipe.ingredients.join('\n'));

recipe.ingredients.join('\n')



// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".


const library = [
  { title: 'the Hobbit', author: 'J.R.R Tolkein', alreadRead:},
  { title: 'The Lord of the Rings', author: 'J.R.R Tolkein', alreadRead: false},
  { title: 'Godel, Escher, Bach', author: 'Yeeet MEEEt', alreadRead:},
  { title: 'The Process', author: 'arbrbrbrbrb', alreadRead:},
];

for (let i = 0; i < library.length; i++) {
  // better way
  const book = library[i];
  //
  console.log(`you already read "${ book.title}" by "${ book.author}"');
  if (book.alreadyRead === true){}\
    console.log(`${ library[i].title} by ${ library[i].author}');
} else {
    console.log(`${ library[i].title} by ${ library[i].author}');
}













//
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
// The Movie Database
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."



const favMovie = {
  title: 'Shoot',
  duration: 105,
  stars:['George', 'Sam', 'Will', 'Jack'],
};


//not correct way of doing it can only pass information which is titled fav movie, what if we want more!?

const moveinfo = function () {
  const info = ${ favMovie.tittle} lasts for ${favMovie.duration} minutes. stars: ${favMovie.stars.join(', ')}` ;
  console.log(info);
};
movieInfo();
//better, this allows us to have interchangable inputs for our tittle, duration, stars
const moveinfo = function (movie) {
  const info = ${ movie.tittle} lasts for ${movie.duration} minutes. stars: ${movie.stars.join(', ')}` ;
  console.log(info);
};

movie(favMovie);
//these movie functions haven't been made yet, only favMovie.
movie( ghostbusters) ;
movieInfo()
