//? Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.
//? Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

const consonantCount = (str) => {
    vowels = ["a","e","i","o","u"," "]
    return str.toLowerCase().replace(/[0-9]/g, '').replace(/[\W_,\,]/g,"").split("").filter(x => !vowels.includes(x)).length
}
console.log(consonantCount("0123456789"));
