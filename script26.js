// let obj = {
//     foo: `foo`,
//     bar: function () {
//         return `bar`
//     }
// }

// Object.seal(obj)
// obj.newFoo = `newFo`
// console.log(obj);

// let obj = {
//     a: `1`,
//     b: `2`,
//     c: `3`,
// }
// let keys = Object.keys(obj);
// let val = Object.values(obj);
// console.log(keys);
// console.log(val);


// let a = 3
// let b = 2
// console.log(Math.round(a));
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.trunc(a));
// console.log(Math.pow(a, b));
// // console.log(Math.random());

// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandom(2, 400));


// console.log(null + undefined);
// console.log(false + 5);
// console.log(true + 5);
// console.log(true - "5");


// function Car(name, sound) {
//     this.name = name;
//     this.sound = sound
// }
// let mycar = new Car(`honda`, `honking`)
// console.log(mycar);
// console.log(mycar instanceof Car);

// let a;
// console.log(a);
// console.log(typeof a === `undefined`);


const arr = [`a`, `b`, `c`, `d`]
const uni = new Set(arr)
for (const item of uni) {
    console.log(item);
}