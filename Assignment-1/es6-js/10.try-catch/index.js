// Start Coding Here

async function login() {
    try {
        throw new Error("Invalid Password");
    }
    catch(error) {
        console.log(error.message);
    }
}

login();