// enhace object literals

function newUser(user, age, country) {
  return {
    user,
    age,
    country,
  };
}

console.log(newUser("oscar", 30, "mx"));
