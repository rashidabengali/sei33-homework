const serch = function () {


  const xhr = new XMLHttpRequest();
  const book_name = $('input#book_name').val();

  console.log(book_name);

  xhr.onreadystatechange = function () {

    console.log(xhr);

    if (xhr.readyState !== 4) {
      console.log(xhr.readyState);
      return;
    }

    console.log('before')
    const received_data = JSON.parse(xhr.responseText);

    console.log('running');

    $('body').append(`<img src=${received_data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]}>`)

  };

  xhr.open( "GET", `https://www.googleapis.com/books/v1/volumes?q=title:${ book_name }` );
  xhr.send();

};

$('button#serch').on('click', serch);
