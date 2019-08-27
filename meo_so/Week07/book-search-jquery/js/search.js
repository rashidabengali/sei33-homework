console.log('run')

const apiKey = "13234561-024f752d2690c112955b7fabe"
$(document).ready(function () {



        $('#search').on('submit', function (event) {
            event.preventDefault(); //Prevent the form submission

            const bookTitle = document.getElementById('book_title').value;
            const url = `https://pixabay.com/api/?key=13234561-024f752d2690c112955b7fabe&q=${ bookTitle }&image_type=photo`;

            const getRandom = function (number) {
                return Math.floor(Math.random() * number);
            };
                
                // $.ajax returns a deferred object
                $.ajax(url).done(function (data) {
                    setInterval( function () { 
                    const url = data.hits[getRandom(data.hits.length)].largeImageURL;
                    setTimeout(function () {$('body').css('background', `url("${ url }")`)}, 3000);
                
                }, 6000);
                }).fail(function () {
                    alert('There was error');
            });
        
        });
    




});