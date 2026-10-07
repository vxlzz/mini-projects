function calculateDiscount(price, discountPercent) {
  return price * (discountPercent / 100);
}

function calculateTax(priceAfterDiscount, taxPercent) {
  return priceAfterDiscount * (taxPercent / 100);
}

function calculateFinalPrice(price, discountPercent, taxPercent) {
  let discountedPrice = price - calculateDiscount(price, discountPercent);
  return discountedPrice + calculateTax(discountedPrice, taxPercent);
}

function createPriceSummary(price, discountPercent, taxPercent) {
  return {
    price: price,
    discount: calculateDiscount(price, discountPercent),
    tax: calculateTax(
      price - calculateDiscount(price, discountPercent),
      taxPercent,
    ),
    finalPrice: calculateFinalPrice(price, discountPercent, taxPercent),
  };
}

// Test Log
console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));
