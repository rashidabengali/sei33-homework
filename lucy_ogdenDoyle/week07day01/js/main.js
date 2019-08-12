// const bookSearch = function () {
//   const inputField = document.getElementById("book");
//   const searchTerm = inputField.value;
//   const bookSearch = `https://www.googleapis.com/books/v1/volumes?q=title:${ searchTerm }`
//   console.log(bookSearch);
//
//
//   const image = document.getElementById("coverImage");
//   image.setAttribute("src") = bookSearch;
//
// }


const fetchBook = function () {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    const data = JSON.parse (xhr.responseText);
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    const image = document.getElementById("coverImage");
    console.log(cover);
    image.setAttribute("src", cover);
  }

  const inputField = document.getElementById("book");
  const searchTerm = inputField.value;
  const bookSearch = `https://www.googleapis.com/books/v1/volumes?q=title:${ searchTerm }`

  xhr.open("GET", bookSearch);
  xhr.send();
}


const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", fetchBook);
