const fetchBooksByTitle = function (title) {

  const xhr = new XMLHttpRequest();
  document.querySelector('.container').innerHTML = '';
  xhr.onreadystatechange = function () {
    const fetchIsReady = 4;
    const fetchIsPending = xhr.readyState !== fetchIsReady;

    if (fetchIsPending) {
      // It's too soon for us to see any data yet.
      return;
    }

    const data = JSON.parse(xhr.responseText);
    const books = data.items;
    books.forEach(book => {

      const img = document.createElement('img');
      img.src = book.volumeInfo.imageLinks.thumbnail;

      document.querySelector('.container').appendChild(img);
    });

  };


  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
  xhr.send(); // Asynchronous

};

document.querySelector('.button').addEventListener('click', function () {
  fetchBooksByTitle(document.querySelector('.search').value);
});
