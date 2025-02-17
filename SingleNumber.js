
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.


var singleNumber = function(nums) {
    
    const uniqueArray = [...new Set(nums)];
    console.log(uniqueArray);
    
    
    for (let i = 0; i < uniqueArray.length; i++) {
        const element = uniqueArray[i];    
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            
            if(element == nums[j]){
                count = count + 1;                
            };
        
            if(j === (nums.length -1)){
                if(count < 2) return element;
            };
            
        };       

    }
    return "Not Found";
    
};

let nums = [4,1,2,1,2]
let data = singleNumber(nums);
console.log(data);