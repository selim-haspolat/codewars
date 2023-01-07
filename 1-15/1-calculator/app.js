// const calculator = (operator,value1,value2) =>{
//     if(operator === '+'){
//         return value1 + value2
//     }
//     else if(operator === `-`){
//         return value1 - value2
//     }
//     else if(operator === `*`){
//         return value1 * value2
//     }
//     else if(operator === `/`){
//         return value1 / value2
//     }
//     else{
//         return `invalid number or operator`
//     }
// }
// console.log(calculator("+",5,7));

function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}
console.log(basicOp("+",4,7));