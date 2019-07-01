// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function ( cart ) {

  const prices = Object.values(cart);
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total += parseFloat(prices[i]);
  }

  return total;
}

//test cashRegister function
console.log("Test cashRegister function:");
console.log(`cashRegister(cartForParty): ${cashRegister(cartForParty)}`);
