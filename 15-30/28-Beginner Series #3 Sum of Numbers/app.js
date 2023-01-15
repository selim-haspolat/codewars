//? Beginner Series #3 Sum of Numbers

let getSum = (a,b) => {
    sum = 0
    if(a < b){
        for(i = a; i <= b; i++){
            sum += i
        }
    }
    else if(a == b){
        return b
    }
    else{
        for(j = b; j <= a; j++){
            sum += j
        }
    }
    return sum
}
console.log(getSum(3,1));
