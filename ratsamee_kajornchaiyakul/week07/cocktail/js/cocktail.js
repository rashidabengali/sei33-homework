const searchFunction = function(event) {
    event.preventDefault();

    const $txtCocktail = $("#txtCocktail");
    const drinkName = $txtCocktail.val();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName.toLowerCase()}`;
    
    $.ajax(url).done((data)=>{
        if (data && data.drinks && data.drinks.length > 0){
            const drink = data.drinks[0];
            const p = document.createElement('p');
            p.innerHTML = `Name: ${drink.strDrink}`;
            const p2 = document.createElement('p');
            p2.innerHTML = `Instructions: ${drink.strInstructions}`;
            const img = document.createElement('img');
            img.setAttribute('src', drink.strDrinkThumb);
            img.setAttribute('width', "300px");
            $(".show").append(p).append(p2).append(img);
            $txtCocktail.val("");
        } else {
            alert(`${drinkName} doesn't exits!!`);
        }
    });
}

$(document).ready(()=>{
    $("#search").on('submit', searchFunction);
})