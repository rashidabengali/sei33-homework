//add an event listener for the click event on the button
const search = document.getElementById('search');
search.addEventListener('submit', function (event) {

event.preventDefault();  //prevent the form submission - because AJAX is doing it on the same page, we do not wanna go to the new page
//get the value the user has provided
const bookTitle = document.getElementById('book_title').value;
console.log(bookTitle);

//generate the URL with info about that book_title

const url = `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`;


const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) return;
const data  = JSON.parse(xhr.responseText);

const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
console.log(cover);

document.getElementById('cover').setAttribute('src', cover);
}

console.log( url );
//make an AJAX request for that URL
// wait for the response
// find the book cover thumbnail URL
// select the img tag on teh page
// set the src to that thumbnail
});

//
// const fetchFact = function () {
//
//   //fetchfact appends the data almost single file but we need a button
// const xhr = new XMLHttpRequest();
//
// xhr.onreadystatechange = function () {
// if (xhr.readyState !== 4) {
//   return;  //it is too soon for us to see any data yet
// }
//
// //turn into js object
// const data = JSON.parse(xhr.responseText);
//
// console.log(data,data.text);
//
// //set text
// const p = document.createElement('p');
// p.innerHTML = data.text;
//
// document.body.appendChild(p);
//
// };
//
//
// //we only run this code when we fire the request
// xhr.open('Get', 'https://www.googleapis.com/books/v1/volumes?q=title:${ @title }');
// xhr.send('search=jaws');
// };
//
//
// document.getElementById('fetch').addEventListener('click', fetchFact);
