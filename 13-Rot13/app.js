//? ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//? Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

const rot13 = (message) => {
    result = ""
    function containsUppercase(str) {
        return /[A-Z]/.test(str);
      }      
    a = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z".split(", ").join("")
    aLower = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z".toLowerCase().split(", ").join("")
    for(i = 0; i < message.length; i++){
        if(containsUppercase(message[i])){
            indx = a.indexOf(message[i])
            if(indx >= 13){
                indx = (indx + 13)-26
                result += a[indx];
            }
            else if(indx < 0){
                result += message[i];
            }
            else if(indx <= 13 && indx >= 0){
                indx += 13
                result+= a[indx]
            }
        }
        else{
            indx = aLower.indexOf(message[i])
            console.log(indx);
            if(indx >= 13){
                indx = (indx + 13)-26
                result += aLower[indx];
            }
            else if(indx < 0){
                result += message[i];
            }
            else if(indx <= 13 && indx >= 0){
                indx += 13
                result+= aLower[indx]
            }
        }
    }
    return result
}
console.log(rot13("n"));
