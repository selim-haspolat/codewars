const combine = (...obj) => {
    let result = {}
    for (const i of obj){ 
        for(const j in i){
            if(Object.keys(result).includes(j)){
                result[j] += Object.entries(i)[Object.keys(i).indexOf(j)][1]
            }
            else{
                result[j] = Object.entries(i)[Object.keys(i).indexOf(j)][1]
            }
        }
    }
    return result
}
obj1 ={a:1,b:2,c:3}
obj2 ={a:3,b:1,c:5}
console.log(combine(obj1,obj2));