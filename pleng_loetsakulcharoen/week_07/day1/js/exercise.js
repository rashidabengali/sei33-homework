const fetchThumbnail = function (title) {

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // It's too soon for us to see any data yet.
    }
    const data = JSON.parse(xhr.responseText);

    const books = data.items;
    books.forEach(book => {
      const img = document.createElement('img');
      img.src = book.volumeInfo.imageLinks.thumbnail;

      document.getElementById('container').appendChild(img);
    });


  };

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
  xhr.send();

  };
  document.getElementById('search').addEventListener('click', fetchThumbnail);
  fetchThumbnail();







  //
  // const fetchFact = function () {
  //
  //   const xhr = new XMLHttpRequest();
  //
  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState !== 4) {
  //       return; // It's too soon for us to see any data yet.
  //     }
  //
  //     const data = JSON.parse( xhr.responseText );
  //
  //     const img = document.createElement('img');
  //     img.innerHTML = data.thumbnail_url;
  //
  //     document.body.appendChild(img);
  //
  //   };
  //
  //   xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  //   xhr.send(); // Asynchronous
  //
  // };
  //
  // document.getElementById('fetch').addEventListener('click', fetchFact);
  // fetchFact();
