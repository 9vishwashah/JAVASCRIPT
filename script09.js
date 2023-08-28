let obj = {
    firstCourse: `c`,
    secondCourse: `Java`,
    thirdCourse: `Python`
}

let value = ``
for (let item in obj) {
    // console.log(item);
    value += obj[item] + " "
}
console.log(value);

// let arr = [
//     `a`,
//     `b`,
//     `c`,
//     `d`,
//     `e`
// ]
// for (let item of arr){
//     console.log(item);
// }