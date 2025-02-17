// let inputPrices = [7, 1,1, 5, 3, 6, 4];

// const Prices = inputPrices.map((price, index) => ({ price, day: index + 1 }));

// let minPrice = Infinity;
// let maxProfit = 0;
// let buyDay = 0;
// let sellDay = 0;

// // Calculate maximum profit and find buy and sell days
// Prices.forEach(({ price, day }) => {

//     minPrice = Math.min(minPrice, price);
//     let currentProfit = price - minPrice;

//     if (currentProfit > maxProfit) {
//         maxProfit = currentProfit;
//         buyDay = Prices.find(item => item.price === minPrice).day;
//         sellDay = day;
//     }
// });

// console.log("MaxProfitday:", maxProfit);
// console.log("Buy day:", buyDay);
// console.log("Sell day:", sellDay);
