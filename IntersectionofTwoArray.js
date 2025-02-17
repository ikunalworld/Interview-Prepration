// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.


var intersect = function(nums1, nums2) {
    let newArray = [];

    for (let i = 0; i < nums1.length; i++) {
        const element1 = nums1[i];

        for (let j = 0; j < nums2.length; j++) {
            const element2 = nums2[j];
            if(element1 === element2){
                    newArray.push(element1);
                    nums2.splice(j,1)
                    break;
            }

        }
        
    }
    return newArray;
    
};

let nums1 = [1,2,2,1]; nums2 = [2,2];
let result = intersect(nums1,nums2);
console.log(result);
