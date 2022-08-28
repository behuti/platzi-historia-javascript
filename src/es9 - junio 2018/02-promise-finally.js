const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!!");
    } else {
      reject("Oh no!");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => { console.log('Finally') })
