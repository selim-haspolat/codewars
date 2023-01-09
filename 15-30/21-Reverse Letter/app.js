const reverseLetter = (str) => {
    return str.split("").reverse().filter(letter => letter.match(/^[a-zA-Z]+$/)).join("")
}
console.log(reverseLetter("ultr53o?n"));