function logger() {
  console.log("My name is Skyie");
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));
const orangeJuice = fruitProcessor(0, 10);
console.log(orangeJuice);
const mixedJuice = fruitProcessor(4, 6);
console.log(mixedJuice);    
