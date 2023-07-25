// let arr = [`a`, `b`, `c`, `d`]
// // console.log(arr.splice(1, 2));
// let arrRemove = arr.splice(1, 2)
// console.log(arr);

// console.log(1 == `1`)
// console.log(null == undefined)

// let a = `string`
// a = 5
// console.log(a);

// let a = `1`
// let b = 1
// let c = a - b
// console.log(c);
// console.log(typeof c);

// let arr = [2, 4, 5, 6, 3]
// let newArr = arr.reduce(function (a, b) {
//     return a + b
// })
// console.log(newArr);
// let people = [{
//     id: 1,
//     name: `John`,
//     age: 26
// },

// {
//     id: 3,
//     name: `alex`,
//     age: 23
// },
// {
//     id: 4,
//     name: `John`,
//     age: 12
// }
// ]

// let young = people.filter(function (person) {
//     return person.age < 13
// })
// console.log(young);


// let arr = [2, 56, 2, 112, 32, `a`, `A`, `j`]
// let sorted = arr.sort((a, b) => { return a.toString().localeCompare(b) })
// console.log(sorted);

// let arr = [`xebra`, `dogs`, `elephants`, `penguins`].sort(function (a, b) {
//     return b.length - a.length
// })
// console.log(arr);

// let arr = [3, 6, 22, 2, 1, 10].sort(function (a, b) {
//     //     // return a - b
//     //     // return b - a
//     return (a & 1) - (b & 1) || a - b
// })
// console.log(arr);

// for (; ;) { console.log(`.`); }
// let myArr = [4, 5, 6]
// myArr.a = `hey`
// console.log(myArr);
// for (value in myArr) {
//     console.log(value);
// }

// for (value of myArr) {
//     console.log(value);
// }


// const triangle = [3, 4, 5]
// const [l, h, b] = triangle
// console.log(l===3);


// let arr = [`a`, 1, `1`, `a`, 2, 22]
// let arrUnique = [...new Set(arr)]
// console.log(arrUnique);

// let arr = [4, 5, 6, 3].reverse()
// console.log(arr);

// let arr1 = [5, 6, 3, 4]
// let arr2 = [35, 6576, 345]
// // console.log(arr1.concat(arr2));
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);



// let longArray = [5, 6, 7, 8, 8]
// let shortArray = [3]
// // longArray.push.apply(longArray, shortArray)
// longArray.push(...shortArray)
// console.log(longArray);


// let col = [`Date`, `Number`, `Size`]
// let row = [`2001`, `5`, `Big`]
// let res = row.reduce(function (res, field, index) {
//     res[col[index]] = field
//     return res
// }, {})
// console.log(res);


// let arr = [4, 5, 6, 4]
// let res = arr.filter(function (val) {
//     return val > 4
// })
// console.log(res);

// let arr = [true, null, undefined]
// let res = arr.filter(Boolean)
// console.log(res);

// function startWithA(str) {
//     if (str && str[0].toLowerCase() == `a`) {
//         return true
//     }
//     return false
// }

// let str = `Since alpha amino and there are atom`
// let strArr = str.split(" ")
// let word = strArr.filter(startWithA)
// console.log(word);

// let people = [{
//     myName: `hey`,
//     age: 23
// },
// {
//     myName: `zzz`,
//     age: 23
// },
// ]
// let myname = people.find(people => people.myName == `hey` && people.age == 23)
// console.log(myname);

// let arr = [3, 5, 6, 3, 76]
// console.log(typeof Array);

// let arr = [
//     [`key1`, 10],
//     [`key2`, 20],
//     [`key3`, 30],
//     [`key4`, 3],
// ]

// let res = arr.sort(function (a, b) {
//     return a[1] - b[1]
// })
// console.log(res);

// let arr = true + true - false
// console.log(arr);

// let res = `hello`
// console.log(res.match(`jello`));

// const exist = [
//     `a`, 1,
//     `b`, 2
// ]

// const clone = [...exist]
// console.log(clone);


// const obj = {
//     name: `sam`,
//     id: 23
// }
// const { ...cloned } = obj
// console.log(obj);
// const clone = Object.assign(obj)
// console.log(clone);


// const obj = {
//     name: `sam`,
//     value: true,
//     foo: `foo`,
//     id: 34
// }
// // Object.freeze(obj)
// obj.foo = `not foo`
// obj.newPropertyzzz = true;
// delete obj.foo
// console.log(obj);



// let myObj = {
//     name: `sam`,

// }

// Object.assign(myObj, { age: 24, value: 3333 })
// console.log(myObj);

// let obj = {
//     a:1
// }
// let newObj = {...obj, b:3}
// console.log(newObj);

const prompt = require("prompt-sync")()
var dictionary = {
    lettuce: `vegge`,
    banana: `fruit`,
    tomato: `depends`,
    apple: `Appy`
}
let word = prompt("what would you like to look up today")
let def = dictionary[word]
console.log(word + `\n` + def);