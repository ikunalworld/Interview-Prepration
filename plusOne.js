
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var plusOne = function(digits) {
        
    digits = digits.join('');    
    digits = BigInt(digits) + BigInt(1);
    digits = String(digits).split('');
    digits = digits.map(Number);    
    return digits;
    
    
};

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
let result = plusOne(digits);
console.log(result);
