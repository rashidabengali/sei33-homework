console.log("cash");

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};


function cashRegister (cart) {
  let values = Object.values(cart);
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    price = parseFloat(values[i])
    sum += price;
  }
  console.log(sum);
  return sum;
}

cashRegister(cartForParty);
