// let userName = `vishwa`;
// let userPassword = `vishwashah`;

// let submit = document.getElementById("submit");
// submit.onclick = formValidate;

// function formValidate() {
//     let name = document.getElementById("nameText");
//     let password = document.getElementById("namePassword");

//     let nameValue = name.value;
//     let passValue = password.value;

//     let msg = document.getElementById("msg");


//     if (nameValue != '') {
//         if (nameValue == userName && passValue == userPassword) {
//             alert(`username not filled`);
//         }

//         if (nameValue == userName) {
//             // alert(`valid username`);
//             if (passValue == userPassword) {
//                 document.write(`valid password`)
//                 document.msg.innerHTML = 'valid'
//                 document.getElementById("msg").innerHTML = "New text!";
//             }
//         }

//         else {
//             alert(`invalid`)
//         }
//     }
//     else {
//         alert(`uername and password not filled`)
//     }


// }

// // formValidate();

// let arr = [];
// let i = 0;
// while (i < 5) {
//     arr.push(i);
//     i++;
// }
// //console.log(arr);

// let arr = [];
// for (let i = 1; i < 6; i++) {
//     arr.push(i);
// }
// //console.log(arr);

// let arr = [];
// for (let i = 1; i < 10; i += 2) {
//     arr.push(i);
// }
// //console.log(arr);

// let arr = [];
// for (let i = 10; i > 0; i -= 2) {
//     arr.push(i);
// }
// //console.log(arr);

// let a = `Hello`;
// let b = `hello`;
// let res = a < b;
// //console.log(res);

// const add = (_no1, _no2) => _no1 + _no2;
// //console.log(add(4, 5));

// let arr2 = [4, 5, 6, 7, 3];
// let total = 0;
// for (let i = 0; i < arr2.length; i++) {
//     total += arr2[i];
// }
// console.log(total)

// let arr = [];
// let i = 10;
// do {
//     arr.push(i);
//     i++
// } while (i < 5);
// console.log(i,arr);

// const randomNumber = () => { return Math.round(Math.random() * 20) };
// console.log(randomNumber());

const converString = (str) => { return parseFloat(str) };

console.log(converString("456.67"));