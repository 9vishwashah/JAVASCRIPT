// let age = prompt("enter your age")
// if (age >= 18) {
//     alert("eligible")
// }
// else {
//     alert("not eligible")
// }

// let text = "Hello World ";
// let n = text.search(/World/i);

// function alertAfter3Seconds() {
//     alert("3 Second completed hi!");
// }
// setTimeout(alertAfter3Seconds, 3000);

// function charToUnicode(character) {
//     return character.charCodeAt(0);
// }
// function UnicodeToString(Unicode) {
//     return String.fromCharCode(Unicode)
// }
// console.log(charToUnicode("A"));
// console.log(UnicodeToString(65));

// function stringLen(inputString) {
//     let count=0
//     for (let i = 0; i <= inputString.length; i++) {
//         count++
//     }
//     return count
// }
// console.log(stringLen("hello"));

let arr = ['a', 'b', 'c']
for (let i in arr) {
    console.log(i);
}

function p() {

    var n, i, flag = true;
    n = document.myform.n.value;
    for (i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
    if (flag == true) {
        alert(n + " is prime");

    }
    else {
        alert(n + " is not prime");
    }

}
