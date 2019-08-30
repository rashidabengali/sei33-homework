
const getBook = function () {

  xhr = new XMLHttpRequest();

  let title = document.getElementsByName("book_input")[0].value
  console.log(title)

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    const data = JSON.parse( xhr.responseText );

    // create title element
    const heading = document.createElement('h1')
    heading.innerHTML = data["items"][0]["volumeInfo"]["title"]
    document.body.appendChild(heading)

    // create author element
    const author = document.createElement('h3')
    author.innerHTML = `Author: ${data["items"][0]["volumeInfo"]["authors"][0]}`
    document.body.appendChild(author)

    // create published element
    const published = document.createElement('p')
    published.innerHTML = `Published: ${data["items"][0]["volumeInfo"]["publishedDate"]}`
    document.body.appendChild(published)

    // create image thumbnail element
    const thumbnail = document.createElement('img')
    thumbnail.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    document.body.appendChild(thumbnail)
    // append to document body
  }

  // open xhr request
  // send the request
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`);
  xhr.send();


};

// get the title of the book from the input tag
// attach event listener to send_info
document.getElementById("send_info").addEventListener('click', getBook);
