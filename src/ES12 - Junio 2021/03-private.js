// Constructor
class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  #speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
}

const david = new user("David", 10);
console.log(david.uAge);
console.log((david.uAge = 20));
