function signUp() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    const minLength = 8;
    const maxLength = 32;
    const letterNumberRegexSpecialChar = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

    if (password == "") {
        alert("Please fill the field.")
    }

    if (password.length < minLength || password.length > maxLength) {
        alert("Password length should be minimum 8 & maximum 32 characters.");
    }

    if (!letterNumberRegexSpecialChar.test(password)) {
        alert("Password should contain alphabetic, numeric and special characters.");
    }

    if (username === '' || password === '' || email === '') {
        alert('Please fill in all fields.');
    }
    userData = {
        username: username,
        email: email
    };
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == "") {
        alert("Please fill the field.");
    }
    if (emailRegex.test(email) == false) {
        alert("This is not a valid email.");
    }



    var myname = username.value
    console.log(myname);
    var mypass = password.value
    console.log(mypass);
    alert('User ' + username + ' signed up successfully!');
    window.location.href = 'login.html';
}

const loginUsername = `vishwa`
const loginPassword = `flower`
function onSub() {

    let myuser = document.getElementById("validUsername")
    let mypass = document.getElementById("validPassword")

    if (myuser.value == loginUsername) {
        if (mypass.value == loginPassword) {
            alert("Authentication successfull")
        }
        else {
            alert(`password incorrect`)
        }
        window.location.href = 'https://diploma-notes.netlify.app/'
    } else {
        alert(`Authentication failed`)
        window.location.href = 'login.html'
    }
}

