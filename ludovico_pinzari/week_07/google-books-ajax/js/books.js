const getBookCover = function (event) {

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    const data = JSON.parse(xhr.responseText);
    const link = data.items[0].volumeInfo.imageLinks.thumbnail;
    const image = document.createElement('img');
    image.setAttribute('src', link);
    document.body.appendChild(image);
  };

  const title = document.getElementById('bookName').value;
  const p = document.createElement('p');
  p.innerHTML = title;
  document.body.appendChild(p);
  const link = 'https://www.googleapis.com/books/v1/volumes?q=title?' + title;
  xhr.open('GET', link);

  xhr.send();
};

document.getElementById('cover').addEventListener('click',getBookCover);
