const minMinMax = (arr) => {
    let result = []
    arr.sort((a,b) => a-b)
    result.push(arr[0])
    for(i = arr[0]; i< arr[arr.length-1] ; i++){
        if(arr.includes(i) === false){
            result.push(i)
            break
        }
    }
    result.push(arr[arr.length-1])
    return result
}
console.log(minMinMax([-1, 4, 5, -23, 24]));
