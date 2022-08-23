// Arrays destructuring
let fruits = ["Banana", "Apple"];
let [a, b] = fruits;
console.log(a, b);

// Object destructuring
let user = {
  userName: "Eduardo",
  age: 30,
};

const { age } = user;
console.log(age);

// Spread Operator

let person = { name: "oscar", age: 28 };
let country = "mx";

let data = { id: 1, ...person, country };
console.log(data);

// Rest Operator
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
}

sum(1, 0, 3, 4, 5);
