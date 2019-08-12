// add an event listener for the click event on the button
// get the value the user has provided
// generate the URL with info about that title
// make an AJAX request for that URL
// wait for the response
// find the book cover thumbnail URL
// select the img tag on the page
// set the src to that thumbnail


const search = document.getElementById('search');

search.addEventListener('submit', function (event) {

  event.preventDefault(); // Stay on this page: prevent the form submission.

  const bookTitle = document.getElementById('book_title').value;
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`;


  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();


  xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;

      const data = JSON.parse( xhr.responseText );
      const cover = data.items[0].volumeInfo.imageLinks.thumbnail; //in javascript we can't say first have to put 0 :(

      document.getElementById('cover').setAttribute('src', cover);
    }

});
