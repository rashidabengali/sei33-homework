console.log("runs");

const fetchBook = function () {

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
if (xhr.readyState !== 4) {
 return;  //it is too soon for us to see any data yet
}

const data = JSON.parse ( xhr.responseText );
console.log(data, data.text);

const p = document.createElement('p');
p.innerHTML = data.text; //data["text"]

document.body.appendChild(p);

};

book_search =
book_url =

xhr.open('Get', 'https://www.googleapis.com/books/v1/volumes?q=title:');
xhr.send();
};

document.getElementById('bookSearch').addEventListener('click', fetchBook);
fetchFact();
