// const mean = (a, b, c, d) => (a + b + c + d) / 4
// console.log(mean(4,5,6,7));

let global = 23

let localFunction = () => {
    let local = 80
    console.log(local);
    console.log(global);
};
// console.log(global);
localFunction()
// console.log(local);