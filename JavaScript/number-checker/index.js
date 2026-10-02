function isPositive(n) {
  if (n > 0) {
    return true;
  }
  return false;
}

function isNegative(n) {
  if (n < 0) {
    return true;
  }
  return false;
}

function isZero(n) {
  if (n === 0) {
    return true;
  }
  return false;
}

function isEven(n) {
  if (n % 2) {
    return true;
  }
  return false;
}

function describeNumber(n) {
  const number = {
    positive: isPositive(n),
    negative: isNegative(n),
    zero: isZero(n),
    odd: isEven(n),
  };
  return number;
}

// Test log
console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
