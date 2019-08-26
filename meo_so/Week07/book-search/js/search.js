console.log('run')
// add an event listener for the click event on the button
const search = document.getElementById('search');

search.addEventListener('submit', function () {

    event.preventDefault(); //Prevent the form submission

    // get the value of the user has provided
    const bookTitle = document.getElementById('book_title').value;
    // generate the URL with infor about that title 
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`;

    // make an AJAX request for that URL
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    
    // wait for the response 
    xhr.onreadystatechange = function () {

        if (xhr.readyState !== 4 ) return;
        
        // find the book cover thumbnail URL
        const data = JSON.parse( xhr.responseText );
        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;

        // select the img tag on the page
        // set the src to that thumbnail
        document.getElementById('cover').setAttribute('src', 'cover');
    }
});

