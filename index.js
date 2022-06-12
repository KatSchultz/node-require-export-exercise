const data = require("./data");
const sum = require("./sum");
const cowsay = require("cowsay");
const lodash = require("lodash");

console.log(data.numbers);
console.log(`${data.name} is from ${data.hometown}`);
console.log(sum(data.numbers));
console.log(
  cowsay.say({
    text: "Hello World",
  })
);
console.log(lodash.shuffle(data.numbers));
