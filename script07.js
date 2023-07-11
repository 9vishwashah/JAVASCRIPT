// data types 

const { time } = require("console");
const { json } = require("stream/consumers")

// Boolean, String, Number, Object, Symbol, undefined, null, 

// var ourString = "awesome!";
// var ourString2 = "Free Code Camp is ";

// ourString2 += ourString;
// console.log(ourString2);


// let myName = "vishwa";
// console.log(myName.length);


// let myName = "Hello";
// myName ="Bye";
// console.log(myName);


// let myMsg = "Hello"
// let lastLetter = myMsg[myMsg.length-1]
// console.log(lastLetter)

// function worldBlanks(myNoun, myAdjective, myVerb, myAdverb){
//     let result = ''
//     result+= `The ${myAdjective} ${myNoun} ${myVerb} ${myAdverb} to the store`
//     return result
// };

// console.log(worldBlanks('dog', 'big', 'ran', 'quickly'));
// console.log(worldBlanks('dog', 'big', 'ran', 'quickly'));


// let arr= [['white', 34],['black', 56]]
// console.log(arr)

// let ourArray = [0, 4, 7, 8]
// // let myArray = ourArray[0];

// ourArray[1] = 6
// console.log(ourArray)


// let arr = [[4, 5, 6], [7, 8, 9], [10, 11, 12], [[13, 14, 15], [16, 17, 18]], 19, 20]
// let arrIndex = arr[5]
// console.log(arrIndex)

// let arr = [["cat", 34]]
// arr.push(["dog", 24])
// console.log(arr)

// let arr = ['fod', 'cat', 'dog', 'array', 'bird', 'animal']
// arr.pop();
// console.log(arr)

// let arr = ['fod', 'cat', 'dog', 'array', 'bird', 'animal']
// arr.shift();
// console.log(arr)

// let arr = [['string'], ['fod'], ['cat', 'dog', 'array', 'bird', 'animal']]
// arr.unshift(['value'], ['pod'])
// console.log(arr)

// let globaVariable = 10

// function localVar() {
//      loVar = 34;             If you wanna make a var inside func globally then dont use let / var
// }

// function glo(){
//     let op = ''
//     if (typeof globaVariable != 'undefined') {
//         op += globaVariable
//     }

//     if (typeof loVar != 'undefined') {
//         op += loVar
//     }
//     console.log(op)
// }
// localVar();
// glo();


// function myScope(){
//     myNo= 234;
//     console.log(myNo)
// }

// myScope()
// console.log(myNo)

// let myOuter = 'hey'

// function myOutfit() {
//     let myOuter = 'hello'           /*local var myOuter took precedence over global var*/ 
//     return myOuter;
// }

// console.log(myOutfit());
// console.log(myOuter);                the global var remains same on print outside

// function timeFive() {
//     console.log("hello\n".repeat(3))         repeat function to repeat string 
// }
// // timeFive(6)
// timeFive()

// let num = 5;
// function addNo(){
//     num+=3
//     return(num)
// }
// function addFive(){
//     num+=5
//     return num
// }

// console.log(addNo());
// console.log(addFive());

// function nextLine(arr, item){
//     arr.push(item)
//     return arr.shift()
// }

// let arr= [5, 6, 7, 8]
// console.log("Before: "+ JSON.stringify(arr))
// console.log(nextLine(arr, 9))
// console.log("After: "+ JSON.stringify(arr))

// function testEqual(_value) {
//     if (_value === '13') {
//         return true
//     }

//     return false
// }
// console.log(testEqual('13'))

// console.log('34')

