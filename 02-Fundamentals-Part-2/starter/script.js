
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
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }   
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//     if (retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years.`);
//       return retirement;
//     } else {
//       console.log(`${firstName} has already retired.`);
//       return -1;
//     }   
// }
// console.log(yearsUntilRetirement(2008, 'Skyie'));
// console.log(yearsUntilRetirement(1950, 'Shruti'));

// // Coding Challenge #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);      
//     } else if (avgKoalas >= 2 * avgDolphins) {  
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No one wins...');
//     }   
// }
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(576, 111);
// checkWinner(45, 189);   

// // Arrays
// const friends = ['bhole', 'fatty', 'skyie'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);    

// const y = new Array(1991, 1984, 2008, );

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'skyie';
// console.log(friends);
// const firstName = 'fatty';
// const skyie = [firstName, 'bhole', 2037 - 1991, 'teacher', friends];
// console.log(skyie);
// console.log(skyie.length);

// const calcAge = function (birthYear) {
//   return 2050 - birthYear;
  

// }
// const ages = [1991, 1984 , 2008, 2020];

//   const age1 = calcAge(ages[0]);
//   const age2 = calcAge(ages[1]);
//   const age3 = calcAge(ages[ages.length - 2]);
//   const age4 = calcAge(ages[3]);

//   console.log(age1, age2, age3, age4);

//Array Methods
const friends = ['bhole', 'fatty', 'skyie'];
const newLength = friends.push('shruti');

console.log(friends);
console.log(newLength);

friends.unshift('shiro');
console.log(friends);
friends.pop();

const popped = friends.pop();
console.log(popped);
console.log(friends);   
friends.shift();

console.log(friends);
console.log(friends.indexOf('skyie'));
console.log(friends.indexOf('bhole'));
console.log(friends.includes('skyie'));
