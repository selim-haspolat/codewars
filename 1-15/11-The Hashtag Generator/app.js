//? The marketing team is spending way too much time typing in hashtags.
//? Let's help them with our own Hashtag Generator!
//? Here's the deal:
//? It must start with a hashtag (#).
//? All words must have their first letter capitalized.
//? If the final result is longer than 140 chars it must return false.
//? If the input or the result is an empty string it must return false.

//? Examples
//? " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
//? "    Hello     World   "                  =>  "#HelloWorld"
//? ""                                        =>  false

const generateHashtag = (str) => {
    if(str.trim().length === 0){
        return false
    }
    else{
        hashtag = "#"
        arr = str.trim().split(" ")
        a = arr.indexOf("")
        b = arr.lastIndexOf("")
        if(a !== b){
            arr.splice(a,b)
        }
        for(i = 0; i < arr.length; i++){ 
                hashtag += arr[i][0].toUpperCase().concat(arr[i].slice(1))
        }
        if(hashtag.length> 140){
            return false
        }
        return hashtag
    }
}
console.log(generateHashtag("    Hello     World   "));