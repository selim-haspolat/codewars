//? Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//? Examples input/output:
//? XO("ooxx") => true
//? XO("xooxx") => false
//? XO("ooxXm") => true
//? XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//? XO("zzoo") => false


const XO = (str) =>{
    let x = 0
    let o = 0
    for(i = 0; i<str.length; i++){
        if(str.match(/str[i]/i) == "x"){
            x++
            console.log(x);
        }
        else if(str.match(/str[i]/i) == "o"){
            o++
            console.log(o);
        }
    }
    return (x === o)
}
console.log(XO("xxxo"));


let a = 5
let b = 5
console.log(a == b);