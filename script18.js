// var element = document.createElement('p');
// element.textContent = `hello`;
// document.body.appendChild(element);

// console.log(Number.isNaN("10$"));

// console.table(['hello', 'world']);

// let Person = [
//     {
//         "personId": 12,
//         "name": `vishwa`,
//         "city": `vashi`,
//         "phone no": 123456789
//     },
//     {
//         "personId": 12,
//         "name": `vishwa`,
//         "city": `vashi`,
//         "phone no": 123456789
//     },
//     {
//         "personId": 12,
//         "name": `vishwa`,
//         "city": `vashi`,
//         "phone no": 123456789
//     },
//     {
//         "personId": 12,
//         "name": `vishwa`,
//         "city": `vashi`,
//         "phone no": 123456789
//     },
//     {
//         "personId": 12,
//         "name": `vishwa`,
//         "city": `vashi`,
//         "phone no": 123456789
//     },
// ]
// console.table(Person, ['name', 'personId']);
// var arr = [3, 5, 76, 76, 9]
// console.count(arr);
// var arr = [3, 5, 76, 76, 9]
// console.count(arr);
// console.clear();
// console.log(document);
// console.log(typeof 42);
// console.log(typeof "42");
// console.log(typeof true);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof Error());
// console.log(typeof Function);
// console.log(typeof var1);


// function sum(...arguments) {
//     if (arguments.length === 1) {
//         const [firstArg] = arguments
//         if (firstArg instanceof Array) {
//             return sum(...firstArg)
//         }
//     }
//     return arguments.reduce((a, b) => a + b)
// }

// console.log(sum(4, 5));
// console.log(sum([5, 5]));

// function sum(...no) {
//     let t = 0;
//     for (let number of no) {
//         t += number;
//     }
//     return t
// }
// console.log(sum(5, 6));

// const person = {
//     "name": "jack",
//     "age": 12
// }
// const copiedPerson = { ...person }
// console.log(copiedPerson);

// console.log(2 instanceof Number);
// console.log([] instanceof Array);


// ///////////////////////////////////////////////////////////
// let forString = new String(43);
// let trueString = new String("true");
// console.log(forString);
// console.log(trueString);

// console.log(String.raw`a\\b`);
// console.log(`a\\b`);

// function reverseString(arguments) {
//     return arguments.split('').reverse().join('');
// }

// console.log(reverseString("hi"));

// function add(arguments1, arguments2) {
//     return arguments1 + arguments2
// }
// console.log(add(10, 4));