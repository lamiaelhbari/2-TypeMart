"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// An import path cannot end with a '.ts' extension!!!! :
const products_1 = require("./products");
const productName = 'fanny pack';
// Find a product within 'products' that matches the string stored in the 'productName' : 
const product = products_1.default.filter(product => product.name === productName)[0];
console.log(product);
// Check if the 'preOrder' property is true on the product : 
if (product.preOrder === 'true') {
    console.log('We will send you a message when your product is on its way.');
}
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = '575 Broadway, New York City, New York';
// Check if the price of an item exceeds $25, we will offer free shipping :
//  if (Number(product.price) > 25) {
//         console.log('Free shipping');
//         shipping = 0;
//     } else {
//         console.log('Shipping: $5');
//         shipping = 5;
//     } or : 
shipping = (Number(product.price) > 25) ? 0 : 5;
console.log((shipping === 0) ? 'Free shipping' : 'Shipping: $5');
// Check if the 'shippingAddress' contains 'New York' :
(shippingAddress.match('New York')) ? taxPercent = 0.1 : taxPercent = 0.5;
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log(total);
// The receipt : 
console.log(`Thank you for your purchase!
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total :    $${total.toFixed(2)}
`);
