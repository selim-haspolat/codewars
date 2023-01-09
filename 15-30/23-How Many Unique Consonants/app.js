//   ![b-df-hj-np-tv-z] 

const countConsonants = (str) => {
    arr = str.toLowerCase().split("").filter(letter => letter.match(/[b-df-hj-np-tv-z]/))
    arr = new Set(arr)
    return arr.size
}
console.log(countConsonants("q1QeS"));