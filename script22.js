let factorial = (n) => n == 1 ? 1 : n * factorial(n - 1)
// console.log(factorial(5));

// let fibonnaci = (a, b) => {

// }
let fibo = n => {
    if (n == 1) {
        return 0
    }
    if (n == 2) {
        return 1
    }
    return fibo(n - 1) + fibo(n - 2)
}
console.log(fibo(9));

function fibonacci(n) {
    let n1 = 0
    let n2 = 1
    let temp = 0
    for (let i = 0; i < n; i++) {
        temp = n1 + n2
        n1 = n2
        n2 = temp
    }
    return n2
}
console.log(fibonacci(5));




let movies = [`zsjl`, `nwh`, `tdk`, `bb`, `dkr`]
let movie = movies.map((item) => item += ` greatest`)
// console.log(movie);