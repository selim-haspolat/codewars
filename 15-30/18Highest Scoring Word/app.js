function high(x) {
    let alphabet = " abcdefghijklmnopqrstuvwxyz";
    let a = x.toLowerCase().split(" ").map(word => word.split("").map(i => alphabet.indexOf(i)).reduce((a,b)=> a+b))
    let b = [...a]
    b = b.sort((a,b) => b-a)[0]
    return x.split(" ")[a.indexOf(b)]
}
console.log(high("what time are we climbing up the volcano"));