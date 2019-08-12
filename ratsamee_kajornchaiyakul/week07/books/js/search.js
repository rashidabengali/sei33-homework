const searchFunc = function() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if (xhr.readyState !== 4){
            return;
        }

        const data = JSON.parse(xhr.responseText);
        if (data !== null && data.items.length > 0){
            const book = data.items[0];
            const img = document.createElement('img');
            img.src = book.volumeInfo.imageLinks.thumbnail;
            $(".show").append(img);
        }
        
    }

    let url = `https://www.googleapis.com/books/v1/volumes?q=title:${ $("#txtSearch")[0].value }?json`;
    xhr.open('GET', url);
    xhr.send();
}

$(document).ready(()=>{
    $("#btnSearch").on('click', searchFunc);
})