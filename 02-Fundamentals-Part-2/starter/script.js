
// // Functions
// function logger() {
//   console.log("My name is Skyie");
// }
// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// fruitProcessor(5, 0);
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
// const orangeJuice = fruitProcessor(0, 10);
// console.log(orangeJuice);
// const mixedJuice = fruitProcessor(4, 6);
// console.log(mixedJuice);    

// // Function Declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(2008);
// console.log(age1);
// // Function Expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(2007);
// console.log(age2);
// console.log(age1, age2);

// // Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2010);
// console.log(age3);  
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }
// console.log(yearsUntilRetirement(2008, 'Skyie'));
// console.log(yearsUntilRetirement(2007, 'Shruti'));

// // Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }  
// console.log(fruitProcessor(2, 3));
// // Reviewing Functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}   
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years.`);
      return retirement;
    } else {
      console.log(`${firstName} has already retired.`);
      return -1;
    }   
}
console.log(yearsUntilRetirement(2008, 'Skyie'));
console.log(yearsUntilRetirement(1950, 'Shruti'));