// console.log(1 != '1');
// console.log(1 !== '1');

// let myHeight = 12
// let myAge = 21;
// const myStatus = 'royalty';
// hasInvitation = true;
// let age;
// let isLegal = age >= 18;
// if (isLegal)
//     console.log(`yes`);
// console.log(argument[0]);
// console.log(isLegal);

// if ((myAge >= 18 && myHeight >= 5.11) && (myStatus == 'royalty' && hasInvitation)) {
//     console.log("You can enter our club");
// }

// let animal = `cat`;
// let res = (animal == `kitty`) ? `cute` : `still nice`;
// console.log(res);

// let foo = true;
// let bar = true;
// let res = foo ? (bar ? 1 : 2) : 3;
// console.log(res);

// let switchCaseValue = 20
// switch (switchCaseValue) {
//     case 1: console.log(`i will always run`);
//         break;
//     case 10: console.log(`i will never run`);
//         break;
//     default:
//         console.log(`forever`);
// }
// console.log();

// let firstName = () => `John`;
// let secondName = () => `Jacob`;

// let myName = firstName();
// switch (myName) {
//     case firstName():
//         console.log(`Im John`);
//         break
//     case firstName() + '' + secondName():
//         console.log(`his name is equal`);
//         break
//     case `ja` + `ne`:
//         console.log(`Im Jane`);
//         break
// }

// let num = 8;
// if (num > 10)
//     console.log(`Number is less than 10`);
// console.log(`This will run regardless the condition`);


// const AnimalSays = {
//     cat() {
//         return `meo`
//     },

//     dog() {
//         return `woof`
//     },

//     lion() {
//         return `roar`
//     },

//     default() {
//         return `moo`
//     }
// }

// let makeAnimalSpeak = (_animal) => {
//     const speaks = AnimalSays[_animal] || AnimalSays.default
//     console.log(_animal + " says " + speaks());
// }

// console.log(makeAnimalSpeak(`cat`));
// console.log(typeof AnimalSays);

// let num = 10;
// num == 10 && console.log(`The no is also 10`);

// let arr = [`a`, `b`, `c`];
let arrLike = {
    0: `a`,
    1: `b`,
    2: `c`,
    length: 3
}
// console.log(arr);
// console.log(arrLike);

// const realArray = Array.from(arrLike)
// realArray.forEach(value => { `Do` })


// let realArray = []
// let arr = [4, 5, 6]
// // element = `hh`
// for (const element of arr) {
//     realArray.append(element)
// }
// console.log(realArray);

// let arr = Object.values(arrLike)
// let arr = Object
//     .keys(arrLike)
// console.log(arr);

let str = `hello`
let newStr = str
    .replace(`hi`)
    .concat(items)