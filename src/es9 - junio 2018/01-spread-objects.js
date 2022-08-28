const user = { username: "eduardo", age: 30, country: "CO" };
const { username, ...values } = user;

console.log(username, values);
