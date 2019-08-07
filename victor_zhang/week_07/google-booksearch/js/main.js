const fetchBookCover = function() {

  const xhr = new XMLHttpRequest();

  const book_name = document.getElementById('book_name').value

  console.log(book_name);

  xhr.onreadystatechange = function () {

    if (xhr.readyState !== 4) {
      return; // It's too soon for us to see any data yet
    }

    const data = JSON.parse( xhr.responseText );

    console.log(data, data.text);

    const img = document.createElement('img');
    img.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];

    document.body.appendChild(img);

    // document.body.innerHTML = `Here is your number fact on state, ${xhr.readyState}: ${xhr.responseText}`;
  };

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ book_name }`);

  xhr.send(); // Asynchronous (happening in the background)

};


document.getElementById('fetch').addEventListener('click', fetchBookCover);
