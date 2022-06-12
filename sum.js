function sum(array) {
  let total = 0;
  array.map((number) => {
    total += number;
  });

  return total;
}

module.exports = sum;
