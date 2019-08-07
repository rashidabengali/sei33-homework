const fetchFact = function () {

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // It's too soon for us to see any data yet.
    }

    const data = JSON.parse( xhr.responseText );

    const p = document.createElement('p');
    p.innerHTML = data.text; // data["text"]

    document.body.appendChild(p);

  };

  xhr.open('GET', 'https://www.google.com/search?tbm=bks&q=jaws');
  xhr.send(); // Asynchronous

};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();
