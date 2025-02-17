let pricesArray = [1,2,5,5,6,1];

const Prices =  pricesArray.map((prices,index)=>(
    ({prices, day:index+1})
))


let minPrice =  Infinity;
let maxPrice = 0;
let maxProfit = 0;
let buyDate = 0;
let sellDay = 0;
let inputDay =2;

Prices.forEach(({prices,day})=>{

    if(day >= inputDay){
        console.log(prices);
        
    minPrice = Math.min(minPrice, prices);
    let profit = prices - minPrice;
    console.log(profit);
    

    if(profit>minPrice){
        maxProfit = profit;
        buyDate = Prices.find(item=> item.prices === minPrice)?.day || 0;
        sellDay = day
    }
}
})

console.log("MaxProfitday:", maxProfit);
console.log("Buy day:", buyDate);
console.log("Sell day:", sellDay);