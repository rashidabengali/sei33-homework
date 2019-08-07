console.log("Test");
const fetchFact = function() {

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return;
    }
    const data = JSON.parse(xhr.responseText);

    data.items.forEach(function(element) {

          const p = document.createElement('p')
          const img = document.createElement('img')
          p.innerHTML = element.volumeInfo.title;
          img.src = element.volumeInfo.imageLinks.smallThumbnail;

          document.body.appendChild(p);
          document.body.appendChild(img);

    });


  };

  const name = document.getElementById('book_title').value;


  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${name}`);
    xhr.send();

  };

  document.getElementById('fetch').addEventListener('click', fetchFact);
