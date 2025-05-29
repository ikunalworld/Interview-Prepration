function findTwoSum(arr, target) {
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    console.log(complement,seen);
    

    if (seen[complement] !== undefined) {
      return [complement, arr[i]]; // return the pair
    }

    seen[arr[i]] = i;
  }

  return null;
}

let arr = [3,2,3,9,5];
const data = findTwoSum(arr,7);
console.log(data);
