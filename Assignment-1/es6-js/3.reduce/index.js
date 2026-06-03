// Start Coding Here


const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);