// removeDuplicates = function(nums) {
//     let count = 0;
//     let k = 0
//     for(let i=0; i<nums.length; i++){
//         if(i ===0 || nums[i] !== nums[i - 1] ){
//             count = 1;
//             nums[k] = nums[i];
//             k++;
//         }else{
//                 if (count < 2) {
//                     nums[k] = nums[i]; // Place the duplicate element
//                     k++; // Move to the next position
//                     count++; // Increment the count for the current element
//                 }
//         }
//     }
//     console.log(nums);
//     return k;
// };

/////////////////////////////////////////////////////
// let nums =[2,2];
// // removeDuplicates(nums);

// // let n = nums.length;
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// // var majorityElement = function(nums) {
//     let n = Math.ceil(nums.length / 2);

//     let result = 0;
//     const charCount = {};

//      for (const char of nums) {
//         charCount[char] = (charCount[char] || 0) + 1;
//      }

//      console.log(charCount)
//      for(const key in charCount){
//         if(charCount[key] == n){
//             result = key;
//             break;
//         }

//      }
//      console.log(result)
//      return Number(result);

//   return charCount;
// }

// var rotate = function(nums, k) {
// let k =3;
// let nums = [1,2,3,4,5,6,7];
// let n = nums.length;

// nums.reverse();
// array =nums.slice(0,k).reverse();
// reverseRemaining = nums.slice(k).reverse();
// nums = [...array, ...reverseRemaining];

// console.log(nums)
/**
 * @param {number[]} prices
 * @return {number}
 */
let prices = [7,1,5,3,6,4];

// var maxProfit = function(prices) {
//     let maxProfit = 0;
//     let resultArray = []
//     for(let i=0; i<prices.length; i++){
//         let buyingPrice = prices[i];

//         for(let j=i+1; j<prices.length; j++){
//             let sellingPrice = prices[j];
//             profitAmt = sellingPrice - buyingPrice;
//             if(profitAmt > maxProfit){
//                 maxProfit = profitAmt;
//             }
//         }

//     }

//     console.log(maxProfit);
//     return maxProfit || 0;

// };

var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;  // Update the minimum price if the current price is lower
            console.log("minPrice", minPrice);

        } else {
            // Calculate profit if sold at the current price
            maxProfit = Math.max(maxProfit, price - minPrice);
            console.log("maxProfit", maxProfit,price);
        }
    }

    console.log(maxProfit);
    return maxProfit;
};


// maxProfit(prices);

let symBolValue = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}


var romanToInt = function(s) {
    s = s.split('');
    let numberValue = 0
    for(let i=0; i<s.length; i++){
        if(i==0){
            numberValue = numberValue + symBolValue[s[i]];
        }else{
            if (symBolValue[s[i]] > symBolValue[s[i-1]]) {

                numberValue = numberValue + symBolValue[s[i]] - 2 * symBolValue[s[i-1]];
            }else{
                numberValue = numberValue + symBolValue[s[i]];
            }
        }
        console.log(numberValue);
    }
    return numberValue;

};


romanToInt("MCMXCIV")
