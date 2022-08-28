async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = anotherGenerator();

other.next().then((r) => console.log(r.value));
other.next().then((r) => console.log(r.value));
other.next().then((r) => console.log(r.value));
console.log("Hello!");

async function arrayOfNames(array) {
  for await (let value of array) {
    console.log(value);
  }
}

const names = arrayOfNames(["Edu", "Ana", "Jose"]);

console.log(names);
console.log('after')