// Start Coding Here

async function getData() {
    return "User Data";
}

async function showData() {
    let data = await getData();

    console.log(data);
}

showData();