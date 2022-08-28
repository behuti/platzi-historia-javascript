const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, Apple, Kiwi, Orange.";

for (const match of fruit.matchAll(regex)) {
  console.table(match);
}
