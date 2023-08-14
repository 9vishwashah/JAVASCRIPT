const username = `vishwa`
const password = `flower`

let myuser = document.getElementById("validUsername")
let mypass = document.getElementById("validPassword")
let submit = document.getElementById("submit")


function onSub() {
    if (myuser.value == username) {
        if (mypass.value == password) {
            alert("Authentication successfull")
        }
        else {
            alert(`password incorrect`)
        }
        window.location.href = 'https://google.com/'
    } else {
        alert(`Authentication failed`)
         window.location.href = 'login.html'
    }
}


