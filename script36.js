// var students = [['Summit', 80], ['Kalpesh', 77], ['Amit', 88], ['Tejas', 93],
// ['Abhishek', 65]];
// var Avgmarks = 0;
// for (var i = 0; i < students.length; i++) {
//     Avgmarks += students[i][1];
// }
// var avg = (Avgmarks / students.length);
// console.log("Average grade: " + (Avgmarks) / students.length);
// console.log("<br>");
// if (avg < 60) {
//     console.log("Grade : E");
// }
// else if (avg < 70) {
//     console.log("Grade : D");
// }
// else if (avg < 80) {
//     console.log("Grade : C");
// } else if (avg < 90) {
//     console.log("Grade : B");
// } else if (avg < 100) {
//     console.log("Grade : A");
// }


let Students = [['Summit', 80], ['Kalpesh', 77], ['Amit', 88], ['Tejas', 93], ['Abhishek', 65]]
let totalMarks = 0
for (let i = 0; i < Students.length; i++) {
    totalMarks += Students[i][1]
}
let averageMarks = (totalMarks / Students.length)
console.log("Average grade: " + averageMarks);
if (averageMarks < 60) {
    console.log('E');
}
else if (averageMarks < 70) {
    console.log('D');
}
else if (averageMarks < 80) {
    console.log('C');
}
else if (averageMarks < 90) {
    console.log('B');
}
else if (averageMarks < 100) {
    console.log('A');
}

let myStr = 'i will fail'
let newStr = myStr.replace('fail', 'pass')
console.log(newStr);

let elements = ['red', 'green', 'blue', 'grey', 'white', 'black']
console.log('Array elements before sort ' + elements);
console.log('Array elements after sort ' + elements.sort());