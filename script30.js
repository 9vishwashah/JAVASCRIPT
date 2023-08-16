// let movies = [`zsjl`, `tdk`, `nwh`, `atsv`, `itsv`, `bvs`, `mos`]
// let movie = movies.map((item) => item.concat(` :best movie`))
// console.log(movie);

// var no = 35

// let no = 53
// console.log(no);

// console.log(no);

// let exponent = Math.pow(2, 2)
// console.log(exponent);
// console.log(typeof Math);

// const flatten = (...param) => param.flat(Infinity)
// let arr = [[12, 434], [3, 5, 3, 44, 2, 1], [34]]
// console.log(flatten(arr));

// const arr = [3, 54, 7, 34, 5]
// const [firstValue, secondValue, ThirdValue, ...rest] = arr
// console.log(rest);

// let arr = [3, 5, 7, 8, 80]
// [[arr[0], arr[1]] = [arr[1], arr[0]]]
// console.log(arr);

// let arr = [4, 5, 6, 7, 3]
// // arr.push(9)
// let newArr = [...arr, 9]
// console.log(newArr);


// let obj1 = {
//     prop1: 1
// }
// let obj2 = {
//     prop2: 2
// }

// let obj3 = {
//     ...obj1,
//     ...obj2,
// }
// console.log(obj3);



// const arr = [
//     { prop2: 20 },
//     { prop1: 10 }
// ]

// let newArr = arr.findIndex((item) => item.prop1 === 10)
// console.log(newArr);




// let arr = [34, 4, 400, 3, 6, 2, 0]
// let element = arr.slice(-1)
// console.log(element);

// console.log(arr.at(0));
// console.log(arr.at(3));


// const arr = [false, `1`, 20, 0, true, undefined]
// console.log(arr.filter(Boolean));
// console.log(arr.includes(5));
// console.log(arr.copyWithin(2));

// const fact = n => n > 1 ? n * fact(n - 1) : 1
// console.log(fact(5));

let arr = [4, 5, 7, 3]
let newArr = arr.forEach((item) => console.log(item))
console.log(newArr);