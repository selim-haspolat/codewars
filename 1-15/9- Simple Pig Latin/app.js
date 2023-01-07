//? Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//? Examples
//? pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//? pigIt('Hello world !');     // elloHay orldway !

const pigIt = (str) => {
    arr = str.split(" ")
    newText = ""
    for(i = 0; i < arr.length ; i++){
        if(arr[i] !== "!" && arr[i] !== "?" ){
            removed = arr[i].split("")
            a = removed.shift()
            newText += removed.join("") + a + "ay "
        }
        else{
            newText += arr[i]
        }
    }
    return newText.trim()
}
console.log(pigIt("Hello world !"));