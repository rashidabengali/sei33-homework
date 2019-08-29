const openBook = function(){
    const url = window.location.origin + "/book";
    window.location.replace(url);
}

const searchBook = function () {
    const url = window.location.origin + "/bookresult/" + document.getElementById("searchBook").value;
    window.location.replace(url);
}

const openStock = function(){
    const url = window.location.origin + "/stock";
    window.location.replace(url);
}

const searchStock = function(){
    const url = window.location.origin + "/stockresult/" + document.getElementById("searchStock").value;
    window.location.replace(url);
}