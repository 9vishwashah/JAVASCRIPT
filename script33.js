// function validatePalin(str) {  

//     // get the total length of the words  
//     const len = string.length;  

//     // Use for loop to divide the words into 2 half  
//     for (let i = 0; i < len / 2; i++) {  

//         // validate the first and last characters are same  
//         if (string[i] !== string[len - 1 - i]) {  
//             alert( 'It is not a palindrome');  
//         }  
//     }  
//     alert( 'It is a palindrome');  
// }  





function checkPalindrome(str) {

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return `it is not pallindrome`
        }
        else {
            return `it is pallindrome`
        }
    }

}
console.log(checkPalindrome("level"));










