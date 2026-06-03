// Start Coding Here

const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Sicky" }
];

const user = users.find(item => item.id === 2);

console.log(user);