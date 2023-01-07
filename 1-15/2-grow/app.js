//? Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//? [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//! #1
// function grow(x){
//     multiply = 1
//     x.forEach(element => {
//         multiply *= element
//     });
//     return multiply
// }

//! #2
// function grow(x){
//     return x.reduce((a, b)=> a * b,1);
//   }

//! #3
// const grow = (x) => eval(x.join("*"))

// console.log(grow([1,2,3]));



//? Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

//? Examples
//? "the-stealth-warrior" gets converted to "theStealthWarrior"
//? "The_Stealth_Warrior" gets converted to "TheStealthWarrior

