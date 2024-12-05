// Define variables
// let valueNull = null;
// let valueUndefined;

// Check if they are strictly equal
// console.log("Is valueNull === valueUndefined?", valueNull === valueUndefined); // false

// Check the types using typeof
// console.log("Type of valueNull:", typeof valueNull); // object
// console.log("Type of valueUndefined:", typeof valueUndefined); // undefined

// Check the difference
// if (valueNull === null) {
//   console.log("valueNull is explicitly set to null");
// } else {
//   console.log("valueNull is not null");
// }

// if (typeof valueUndefined === "undefined") {
//   console.log("valueUndefined is undefined (not assigned a value)");
// } else {
//   console.log("valueUndefined is not undefined");
// }

// var and let do not need to be initialized at the time of declaration.
// const must be initialized at the time of declaration.

// let languages = 'java javaScript python cSharp';

// let result = languages.lastIndexOf('S');

// console.log(result);

// let variable = 'hello programmers';
// let result = Number(variable);

// console.log(result);

// let num1 = 32;
// let num2 = '32';

// let result1 = num1 !== num2;
// let result2 = num1 != num2;

// console.log(result1, result2);

// let str = 'Hello Programmers';

// let result = str.includes('r');

// console.log(result);

// let num1 = 2;
// let num2 = 5;
// let result = num1 ** num2 * 2;

// console.log(result);

// let num1 = [1, 2, 4, 5];

// let num2 = [6, 5, 8, 0];

// let result = num1.concat(num2);

// console.log(result);

// let a = 5;
// let b = 7;
// let c = 8;

// let result = a < b > c;
// console.log(result);

// 1.10: If your State is split into four equal parts such that in each part there are 1/4 number of people live. You have to find how many people would live in each part? which operators will you use ?
// totalPopulation / parts divides the total population (1000) by 4, giving 250 as the number of people living in each part.
// So, the division operator (/) is used to calculate the number of people living in each part of the state.


// let i = 4;

// for (let j = 0; i < 10; i++) {
//   if (j === 1 || i === 6) {
//     continue;
//   } else {
//     console.log(i, j);
//     if (i === 7) {
//       break;
//     }
//   }
// }

// let i = 0;

// for (i; i < 5; i++) {
//   console.log(i);
// }



// for(i=10; i>0 ; i--){
//     console.log(i);
// }

// Lets say John is looking a new country to live in. He want to live in a country that speaks English, has less than 10 million people. One of the food option between these two must present Spanish food OR English food.

// Write an if/else if statement to help john figure out Your country is right for him?


// Variables representing the country's details
// let speaksEnglish = true;         // The country speaks English
// let population = 8000000;         // Population of the country
// let hasSpanishFood = true;        // The country has Spanish food
// let hasEnglishFood = false;       // The country has English food

// // Check if the country meets John's criteria
// if (speaksEnglish && population < 10000000 && (hasSpanishFood || hasEnglishFood)) {
//     console.log("Your country is right for John!");
// } else {
//     console.log("Your country is NOT right for John.");
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
  
//   console.log(i);


// let age = 19;
// height = 5.11;

// if (age>18){
//     if(height > 5.10 ){
//         console.log("I can sit in exam");
//     } 
// }


// let grade = "A";
//  let passingYear = 2010;

// let result = grade =="A" ? (passingYear <2020 ? "pass" : "fail") :"fail";

// console.log(result);