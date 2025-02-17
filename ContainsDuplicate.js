// function to check atleast one element should be occur more then one time.

var containsDuplicate = function(nums) {
    
    const uniqueElements = new Set(nums);
    console.log(uniqueElements.size);
    
    return uniqueElements.size !== nums.length;
    
};

// let nums1 = [1,2,3,1]
// let data1 = containsDuplicate(nums);
// console.log(data1);


