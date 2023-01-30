//? Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// const evenOrOdd = (number) => (number % 2) ? "Odd" : "Even"

// console.log(evenOrOdd(7));

//? This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//! Simple multiplication

// const simpleMultiplication = (number) => (number % 2 ? number * 9 : number * 8);

//! Number of People in the Bus

// const number = (busStops) => {
//   return busStops.reduce((acc, cur) => acc + cur[0] - cur[1], 0);
// };
// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// );

//! Adding values of arrays in a shifted way

// const addingShifted = (arr,shift) => {
//     a = []
//     arr.map((v,i,arr) => a)
//     return a
// }
// console.log(addingShifted([[1, 2, 3, 4, 5, 6], [7,8,9,0,12,13]],3));
// // i >= shift && a.push(v)

//! Collatz Conjecture Length

// const collatz = (n) => {
//     arr = [n]
//     soneleman = arr[arr.length-1]
//     while(arr[arr.length-1] > 1){
//         (arr[arr.length-1] % 2) ? arr.push((arr[arr.length-1]*3)+1) : arr.push(arr[arr.length-1]/2)
//     }
//     return arr.length
// }
// console.log(collatz(20));


//function collatz(n) {
//     var l = 1;
//     while(n > 1) {
//       l++
//       n = n % 2 == 0 ? n / 2 : n * 3 + 1;
//     }
//     return l;
//}


//! Flatten

// const flatten = (arr) => {
//     a = []
//     Array.isArray(...arr) ?
//     arr.map(x => a.push(...x)) :
//     a.push(...arr)
//     return a
// }
// console.log(flatten([1,2,3]));

// var flatten = function (array) {
//     return array.flat();
//   };


//! Third Angle of a Triangle

// const otherAngle = (a,b) => 180-(a+b)


//! Sum of angles

// const angle = (n) => ((n - 2) * 180)



//! Frequency sequence

const strCount = (str, letter) => (str.split("").filter(str => str === letter)).length
const freqSeq = (str,sep) => {
    a = str.split('').map(x => strCount(str,x))
    return a.join(sep)
}
console.log(freqSeq('hello world','-'));





// console.log(strCount('Hello', 'l'));


//! zipWith
const plus = (a,b) => a+b 
const minus = (a,b) => a-b 
const zipWith = (fn,a0,a1) => {
    counter = 0
    result = a0.map((n,i) => {
        console.log(
            typeof n
        );
        if(typeof a1[i] !== 'number'){
            counter++
        }
        else if(typeof n !== 'number'){
            counter++
        }
        return fn(n,a1[i])
    })
    for(i = 0; i < counter ; i++){
        result.pop()
    }
    return result
}
console.log(zipWith(plus, [0,1,2,3,4,], [6,5,4,3,2,1]));
