function sortArray(array = [], ascending = true, key = null) {
  return array.sort((a, b) => {
    const elements = [a, b];
    const values = key ? elements.map((object) => object[key]) : elements;
    const [first, second] = ascending ? values : values.reverse();
    const isString = [first, second].some((value) => typeof value === "string");
    return isString ? String(first).localeCompare(second) : first - second;
  });
}

const numbers = [1, 3, 0.5, 9, 2, 1000, -3];

console.log(sortArray(numbers));
console.log(sortArray(numbers, false));

const strings = [
  "Luizão",
  "Talitos",
  "Cantuzeira",
  "Lakitos",
  "Duzão",
  "Filipão",
];

console.log(sortArray(strings));
console.log(sortArray(strings, false));

const objects = [
  {
    id: 1,
    name: "Luizão",
    role: "Front-End Engineer/UI Designer",
    company: "Carteira Global",
  },
  {
    id: 2,
    name: "Talitos",
    role: "Front-End Engineer",
    company: "Carteira Global",
  },
  {
    id: 3,
    name: "Cantuzeira",
    role: "CEO",
    company: "Carteira Global",
  },
  {
    id: 4,
    name: "Lakitos",
    role: "CTO",
    company: "Carteira Global",
  },
  {
    id: 5,
    name: "Duzão",
    role: "Full-Stack Engineer/Tech Lead",
    company: "Carteira Global",
  },
  {
    id: 6,
    name: "Filipão",
    role: "Back-End Engineer",
    company: "Carteira Global",
  },
];

console.log(sortArray(objects, true, "name"));
console.log(sortArray(objects, false, "role"));
