




$(document).ready(function () {

// prompt("What is your name?");
//
// alert("Pick your picture");

// $(".one").click(function(){
//   $("td:first").addClass("pic");

$("#image-one").click(function(){

console.log("you clicked the headgehog");

});

//
// var firstSrc = "https://media1.giphy.com/media/3xz2BCohVTd7h2Kvfi/200.webp?cid=790b76115d22c46545414a44552b6e55&rid=200.webp";
//    var secondSrc = "https://media0.giphy.com/media/23xN9cYQSKwFy/200w.webp?cid=790b76115d22c4df78505038595e6040&rid=200w.webp";
//    alert(firstSrc == secondSrc);


// const tiles = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight"];




  $('#one').one("click",function(){
          // $('.one').addClass(".image-two");
const img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
img.attr('src', "https://media1.giphy.com/media/3xz2BCohVTd7h2Kvfi/200.webp?cid=790b76115d22c46545414a44552b6e55&rid=200.webp");
img.appendTo('#one');});

$('#two').one("click",function(){
              // $('.one').addClass(".image-two");
const img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
img.attr('src', "https://media1.giphy.com/media/3xz2BCohVTd7h2Kvfi/200.webp?cid=790b76115d22c46545414a44552b6e55&rid=200.webp");
img.appendTo('#two');});

  $('#three').one("click",function(){
                  // $('.one').addClass(".image-two");
  const img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
  img.attr('src', "https://media1.giphy.com/media/3xz2BCohVTd7h2Kvfi/200.webp?cid=790b76115d22c46545414a44552b6e55&rid=200.webp");
  img.appendTo('#three');

              });


});
