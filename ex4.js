function pow(base, exponent) {
  return Array(Math.abs(exponent))
    .fill(base)
    .reduce((pow, factor) => pow * (exponent < 0 ? 1 / factor : factor), 1);
}

console.log(pow(3, 4));
console.log(pow(24, 2));
console.log(pow(2, 10));
console.log(pow(32, 0));
console.log(pow(2, -4));
console.log(pow(-12, 2));
console.log(pow(-3, 3));
