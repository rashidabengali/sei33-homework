
const search = document.getElementById('search');
search.addEventListener('submit', function(event) {

  event.preventDefault(); //prevent the form submission to send somewhere in the server, make it stay on this page

  const bookTitle = document.getElementById('book_title').value;

  //generate the url with info about that book_title//make an AJAX request for that url
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onreadystatechange = function () {
    if(xhr.readyState !== 4) return;

    const data = JSON.parse( xhr.responseText );
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;

    document.getElementById('cover').setAttribute('src', cover);
  }


});






//wait for the response
//find the book cover thumnail url
//select the img taf on the page
//set the src to that thumbnail


// const fetchThumbnail = function (title) {
//
// const xhr = new XMLHttpRequest();
//
// xhr.onreadystatechange = function () {
//     if (xhr.readyState !== 4) {
//       return; // It's too soon for us to see any data yet.
//     }
//     const data = JSON.parse(xhr.responseText);
//
//     const books = data.items;
//     books.forEach(book => {
//       const img = document.createElement('img');
//       img.src = book.volumeInfo.imageLinks.thumbnail;
//
//       document.getElementById('container').appendChild(img);
//     });
//
//
//   };
//
//   xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
//   xhr.send();
//
//   };
//   document.getElementById('search').addEventListener('click', fetchThumbnail);
//   fetchThumbnail();
