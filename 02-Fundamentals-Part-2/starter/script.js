
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

// //Array Methods
// const friends = ['bhole', 'fatty', 'skyie'];
// const newLength = friends.push('shruti');

// console.log(friends);
// console.log(newLength);

// friends.unshift('shiro');
// console.log(friends);
// friends.pop();

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);   
// friends.shift();

// console.log(friends);
// console.log(friends.indexOf('skyie'));
// console.log(friends.indexOf('bhole'));
// console.log(friends.includes('skyie'));
// 1. Function to calculate tip

// // Coding challenge  #2
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// // Test the function
// console.log(calcTip(100)); // Expected output: 15

// // array of bills
// const bills = [125, 555, 44];

// // array of tips using the calcTip function
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// // array of totals (bill + tip)
// const totals = [ bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2],];

// // Display the results
// console.log("Bills:", bills);
// console.log("Tips:", tips);
// console.log("Totals:", totals);


// // Objects

// const skyiearray= [
//     'Skyie',
//     'koltepatil',
//     2037 - 2008,
//     'student',
//     ['fatty', 'skyie', 'shruti']
// ];
//  // Dot Array Notation
// const skyie = {
//   firstName: 'Skyie',   
//     lastName: 'koltepatil',
//     age: 2037 - 2008,   
//     job: 'student',
//     friends: ['bhole', 'fatty',]
// };
// console.log(skyie);

// console.log(skyie.lastName);
// console.log(skyie['lastName']); // Bracket Notation use for to modify property later on 

// const nameKey = 'Name';
// console.log(skyie['first' + nameKey]);
// console.log(skyie['last' + nameKey]);

// // console.log(skyie.'last' + nameKey); // Dot Notation will not work in this case
// const interestedIn = prompt('What do you want to know about Skyie? Choose between firstName, lastName, age, job, and friends');
// console.log(skyie[interestedIn]);
// console.log(skyie.interestedIn); // Dot Notation will not work in this case
// if (skyie[interestedIn]) {  
//     console.log(skyie[interestedIn]);
// }  
// else {      
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }       
// skyie.location = 'India';   
// skyie['twitter'] = '@skyiekoltepatil';
// console.log(skyie);

// // Challenge
// // "Skyie has 2 friends, and his best friend is called fatty"
// console.log(`${skyie.firstName} has ${skyie.friends.length} friends, and his best friend is called ${skyie.friends[0]}`);

// // // Object Methods
// const skyie = {
//   firstName: 'Skyie',       
//     lastName: 'koltepatil', 
//     birthYear: 2008,
//     job: 'student', 
//     friends: ['bhole', 'fatty', 'shruti'],
//     hasDriversLicense: true,


//     calcAge: function () {  
//         this.age = 2025 - this.birthYear;
//         return this.age;

//     },
//     getSummary: function () { 
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;    
//     }                                                                                                                                                                                                           
// };      
// console.log(skyie.calcAge());
// console.log(skyie.age);
// console.log(skyie.getSummary());

// // Coding Challenge #3
//  objects for skyie and bhole
// const skyie = {
//   fullName: "skyie",
//   mass: 90, // in kg
//   height: 1.60, // in meters

//   //  Calc BMI method
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height ** 2);
//     return this.bmi;
//   }
// };

// const bhole = {
//   fullName: "bhole",
//   mass: 156,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height ** 2);
//     return this.bmi;
//   }
// };

// //  Methods To Calculate BMI
// skyie.calcBMI();
// bhole.calcBMI();

// // Compare Who Has The Higher BMI
// if (skyie.bmi > bhole.bmi) {
//   console.log(`${skyie.fullName}'s BMI is (${skyie.bmi.toFixed(1)}) & higher than ${bhole.fullName}'s (${bhole.bmi.toFixed(1)})!`);
// } else if (bhole.bmi > skyie.bmi) {
//   console.log(`${bhole.fullName}'s BMI is (${bhole.bmi.toFixed(2)}) & higher than ${skyie.fullName}'s (${skyie.bmi.toFixed(2)})!`);
// } else {
//   console.log(`${skyie.fullName} and ${bhole.fullName} have the same BMI (${skyie.bmi.toFixed(1)})!`);
// }

// // Loops

// // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`loop running in loop ${rep} `);
//   console.log(`loop running in loop ${rep} `);
//   console.log(`loop running in loop ${rep} `);
//   console.log(`loop running in loop ${rep} `);
//   console.log(`loop running in loop ${rep} `);
//   console.log(`loop running in loop ${rep} `);
//   console.log(`loop running in loop ${rep} `);

// }

// Arrays and Loops
const skyiearray= [
    'Skyie',
    'koltepatil',
    2037 - 2008,
    'student',
    ['fatty', 'skyie', 'shruti']
];
    const types = [];

for (let i = 0; i < skyiearray.length; i++) {
    console.log(skyiearray[i]);

    // Filling types array
    //types[i] = typeof skyiearray[i];
    types.push(typeof skyiearray[i]);
}
console.log(types);

// Continue and Break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < skyiearray.length; i++) {
    if (typeof skyiearray[i] !== 'string') continue;
    console.log(skyiearray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < skyiearray.length; i++) {
    if (typeof skyiearray[i] === 'number') break;
    console.log(skyiearray[i]);
}