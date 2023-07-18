// function checkTernary(a, b) {
//     return a === b ? true : false;

// }

// console.log(checkTernary(6, 6));

// function checkNo(num) {
//     return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
// }


// console.log(checkNo(0));

// let  a = 'a';
// var a = `b`;
// console.log(a);

// const arr = [4, 5, 6, 7]
// function editArr() {
//     arr[0] = 3;
//     arr[1] = 9;
//     arr[2] = 10;
// }
// editArr();
// console.log(arr);

// const magic = () => {
//     return new Date();
// }
// console.log(magic);

// const arr = (arr1, arr2) => arr1.concat(arr2);
// console.log(arr([2, 5], [5, 6]));

// const increment = (function(){
//     return function inc(no, value=1){
//         return no+value
//     }
// })();
// console.log(increment(4,5));
// console.log(increment(5));

// const sum = (function () {
//     return function (...args) {
//         return args.reduce((a, b) => a + b, 0);
//     }
// })()
// console.log(sum(4, 5, 6, 7));

// const arr1 = [`jan`, `feb`, `march`];
// let arr2;
// (function () {
//     arr2 = [...arr1];
//     arr1[0] = `potato`;

// })();
// console.log(arr2);

// const [x, y, , z] = [1, 2, 3, 4];
// console.log(x, y, z);

// let a = 4;
// let b = 43;
// (() => {
//     [a, b] = [b, a]

// })();
// console.log(a);
// console.log(b);

// const person = {
//     name: `vishwa`,
//     age: 12
// };

// const greet = `hello my name is ${person.name}!
// I am ${person.age} years old`;
// console.log(greet);

// const creatPerson = (name, age, gender) => ({ name, age, gender });
// console.log(creatPerson(`vishwa`, 12, `male`));

// function makeClass() {
//     class vegetable {
//         constructor(name) {
//             this.name = name;
//         }
//     }
//     return vegetable;
// }

// const vegetable = makeClass();
// const carrot = new vegetable(`banana`);
// console.log(carrot.name);

// const stringCase = (msg) => msg.toUpperCase();
// console.log(stringCase(`m`));
let count = document.getElementById("count");
let c = 0;

function inc() {
    c += 1;
    count.innerText = c;
}
function save() {
    console.log(c);
}