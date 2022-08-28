function* iterate(arr) {
  for (let value of arr) {
    yield value;
  }
}

const it = iterate(["OScar", "Eduardo", "Ana", "David", "Ulises"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
