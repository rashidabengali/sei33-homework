// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
const cartForParty = {
  banana: '1.25',
  handkerchief: '.99',
  Tshirt: '25.01',
  apple: '0.60',
  nalgene: '10.34',
  proteinShake: '22.36'
};
//
const array = ['banana','handkerchief']
console.log( cartForParty[array[0]] );

const cashRegister = function ( shoppingList ) {
  let listValues = Object.values(shoppingList);
  let total = 0;
  for (i = 0; i < listValues.length; i++) {
    total = total + Number(listValues[i]);
  }
  console.log(`The total price is $${ total }`);
}
//
// const cashRegister = function ( shoppingList ) {
//   let a = Object.keys(shoppingList);
//   console.log ( a );
//   console.log ( a.length );
//   let total = 0;
//   for (i = 0; i < a.length; i++) {
//     let key = a[i];
//     console.log (key);
//     total = total + shoppingList[a[i]]; //shoppingList is Object, banana is key parameter, 1.25 is value parameter
//     /* why is it shoppingList[a[i]] instead of shoppingList.a[i]? */
//     /* its supposed to be at the end cartForParty.banana
//     where shoppingList is cartForParty
//     and a[i] is banana for first instance from Object.keys(shoppingList)
//       Object.keys(shoppingList) returns an array of keys ['banana',etc]
//       so if I want to get banana, i need to run array[0]
//       which in essence is Object.keys(shoppingList)[0] */
//         /*so if I turn it into what i had from above:
//               Objects.keys(shoppingList) = a
//           so */
//       // ]
//   }
//   console.log(`The total price is $${ total }`);
// }

// Output
cashRegister(cartForParty); // 60.55
// ```
