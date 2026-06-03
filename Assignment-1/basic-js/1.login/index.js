// Start Coding Here
let username = "admin";
let password = "12345";

function login(user, pass) {
    if (user === username && pass === password) {
        console.log("Login Successful");
    } else {
        console.log("Invalid Credentials");
    }
}

login("admin", "12345"); 