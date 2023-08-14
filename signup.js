function signUp() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
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
    let myname = username
    var mypass = password
    alert('User ' + username + ' signed up successfully!');
    window.location.href = 'login.html';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('email').value = '';
}
