function generateInteger(min, max) {
  return Math.floor(Math.random() * ((max-min)+1) + min);
}

function generateFloat(min, max, decimal = 2) {
  return (Math.random() * (max - min) + min).toFixed(decimal);
}

function generateArray(array) {
  const min = 0;
  const max = array.length
  const newArray = [...Array(generateInteger(min + 1, max))];
  let randomElement
  for (let i = 0; i < newArray.length; i++) {
    do {
      randomElement = array[generateInteger(min, max - 1)];
    }
    while(newArray.includes(randomElement))
    newArray[i] = randomElement;
  }
  return newArray;
}

module.exports = {generateInteger, generateFloat, generateArray}
