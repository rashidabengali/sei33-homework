// add an event listener for the click event on the button
// get the value the user has provided
// generate the URL with info about that title
// make an AJAX request for that URL
// wait for the response
// find the book cover thumbnail URL
// select the img tag on the page
// set the src to that thumbnail

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();

    const bookTitle = document.getElementById('book_title').value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`;

//$ajax() returns a Deferred object
// .done
// .fail
$.ajax(url).done(function (data) {
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    $('#cover').attr('src',cover);
}).done(function (d) {
  console.log(d);
}).fail(function () {
  $('h1').text('There is error');
});

// //This is the historic way of writing AJAX with jQuery
//     $.ajax(url, {
//       success: function (data) {
//         const cover = data.items[0].volume.Info.imageLinks.thumbnail;
//         $('#cover').attr('src',cover);
//       }
//     });

  });
});
