// function digitalClock() {
//     setTimeout(digitalClock, 1000)
//     let timeNow = new Date;
//     let newHour = timeNow.getHours();
//     let newMin = timeNow.getMinutes();
//     let newSec = timeNow.getSeconds();
//     // let newDate = timeNow.getDate();
//     // console.log(newTime)

//     let time = `${newHour}: ${newMin}: ${newSec}`
//     document.getElementById("clock").innerHTML = time


// }
// digitalClock();
function switchCase(_no) {
    let ans = ``
    switch (_no) {
        case 1:
            ans = `java`
            break

        case 2:
            ans = `python`
            break
        case 3:
            ans = `js`
            break
        case 4:
            ans = `c`
            break
    }
    return ans
}

// switchCase(2)
console.log(switchCase(2))