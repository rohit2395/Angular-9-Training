// default arguments
function test(a, b = 0) {
    console.log(a, b);
  }
  test(1, 2);
  test(1);
  
  // rest params/arguments : ... (spread operator)
  function sumOfNos(a, b, c, ...d) {
    console.log(a, b, c, d);
  }
  sumOfNos(1, 2, 3);
  sumOfNos(1, 2, 3, 4);
  sumOfNos(1, 2, 3, 4, 5);

  // ... : spread : objects & arrays
// keep objects immutable
// original ref
const product = { id: 1000, name: "product", price: 12999 };
// object : mutable
const cart = [
  // product // ref
  { ...product }, // new ref
];
console.log(product);
console.log(JSON.stringify(cart));
cart[0].qty = 3;
console.log(JSON.stringify(cart));
console.log(product);

  