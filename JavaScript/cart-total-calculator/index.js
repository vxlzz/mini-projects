function calculateSubtotal(items) {
  let subTotal = 0;
  for (const item of items) {
    subTotal += item.price * item.quantity;
  }
  return subTotal;
}

function calculateDiscount(subTotal, discountPercent) {
  return subTotal * (discountPercent / 100);
}

function calculateTax(amtAfterDiscount, taxPercent) {
  return amtAfterDiscount * (taxPercent / 100);
}

function createCartSummary(items, discountPercent, taxPercent) {
  const subTotal = calculateSubtotal(items);
  const discount = calculateDiscount(subTotal, discountPercent);
  const tax = calculateTax(subTotal - discount, taxPercent);
  const total = subTotal - discount + tax;

  const summary = {
    subTotal: subTotal,
    discount: discount,
    tax: tax,
    total: total,
  };

  return summary;
}

// Test Data
const cartItems = [
  { name: "Notebook", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
  { name: "Bag", price: 30, quantity: 1 },
];

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));

const singleItemCart = [{ name: "Mouse", price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));
