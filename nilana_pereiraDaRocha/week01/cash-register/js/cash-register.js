// Write a function called cashRegister that takes a shopping cart object. 
// The object contains item names and prices (itemName: itemPrice). 
// The function should return the total price of the shopping cart. Example

const shoppingCart = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

const cashRegister = function (shoppingCart) {
    const totalPrice =
        Number(shoppingCart.banana) +
        Number(shoppingCart.handkerchief) +
        Number(shoppingCart.Tshirt) +
        Number(shoppingCart.apple) +
        Number(shoppingCart.nalgene) +
        Number(shoppingCart.proteinShake);

    return totalPrice;
}

console.log(cashRegister(shoppingCart));






// // Input
// const cartForParty = {  
//     banana: "1.25",
//     handkerchief: ".99",
//     Tshirt: "25.01",
//     apple: "0.60",
//     nalgene: "10.34",
//     proteinShake: "22.36"
//   };

//   // Output
//   cashRegister(cartForParty)); // 60.55

// const rectangle = {
//     length: 4,
//     width: 4,
// };

