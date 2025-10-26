// Coding Challenge #1 true, flase, boolean, undefined
let mango= false;
let apple;

console.log(typeof mango);
console.log(typeof banana);
console.log(typeof cherry);
console.log(typeof apple);

//Coding Challenge #2 if else statement
// Calculate average scores
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log("Dolphins average:", scoreDolphins);
console.log("Koalas average:", scoreKoalas);

// Compare and print winner
if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}
// Coding Challenge #3 — ternary operator

const bill = 275;

// Using ternary operator: 15% tip if bill is between 50-300, otherwise 20%
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

// Calculate total value
const total = bill + tip;

// Print the formatted string using the variables
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}.`);
