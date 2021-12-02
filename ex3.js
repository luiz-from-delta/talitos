function getMiddleLetters(string = "") {
  const array = string.split("");
  const length = array.length;
  const isEven = length % 2 === 0;
  const start = isEven ? length / 2 - 2 : (length - 1) / 2 - 1;
  const end = start + (isEven ? 4 : 3);
  return array.slice(start, end).join("");
}

console.log(getMiddleLetters("Luiz Antônio"));
console.log(getMiddleLetters("Purquim"));
console.log(getMiddleLetters("JavaScript"));
console.log(getMiddleLetters("React"));
console.log(getMiddleLetters("React Native with Expo"));
