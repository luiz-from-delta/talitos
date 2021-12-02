function arrayCount(array, query) {
  return array.filter((element) => element === query).length;
}

const numbers = [1, 2, 2, 2, 3, 4, 4, 6, 20];

console.log(arrayCount(numbers, 2));
console.log(arrayCount(numbers, 4));
console.log(arrayCount(numbers, 20));
console.log(arrayCount(numbers, 27));
