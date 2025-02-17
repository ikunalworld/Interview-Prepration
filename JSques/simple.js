// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
function createHelloWorld(){
    return function helloWorld(...params) {
        return "Hello World";
    }
}

let data = createHelloWorld();
// console.log(data);



// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
var expect = function(val) {

    return { toBe(value){
        if(val === value){
            return true;
        }else if(val !== value){
            throw "Not Equal";
            //  "Not Equal";
        }

    },

     notToBe(value){
        if(val !== value){
            return true;
        }else{
            throw "Equal";
        }

    }}
    
};

// let result = expect(5).toBe(null);
// console.log(result);

// result = expect(5).notToBe(5);
// console.log(result);


// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
var createCounter = function(init) {
    let count = init;
    
    return {
        increment(){   
            // let count = init;
            count++         
            return Number(count);
        },

        decrement(){
            // let count = init;
            count--
            return Number(count);
        },

        reset(){
            count = init
            return Number(init);
        }
    }
    
};

const counter = createCounter(5);
let result = counter.increment(); // 6
let result1 = counter.increment(); // 5
let result2 = counter.decrement(); // 4

// console.log(result,result1,result2);

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
var map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i],i);
    }
    return arr;    
};

fn = function plusone(n) { return n + 1; };
arr = [1,2,3];

result = map(arr,fn);
console.log(result);



// ---------------------------------------------------------


// let arr =[10,
//     15,
//     9,
//     1,
//     5,
//     15,
//     3,
//     3,
//     4,
//     6,
//     9]

const { log } = require("async");

// arr.sort((a,b)=>a-b);
// console.log(arr);

// let initialValue = arr[0];
//     if(initialValue !=1){
//         for(let i=0; i<arr.length; i++){
//             // console.log(arr[i]);
            
//             arr[i] = arr[i] - (initialValue-1);
//         }
//         // arr[0] = initialValue - (initialValue-1)
//     }
//     console.log(arr);
//     // return arr[arr.length-1];







//     function tasks(n, a, b) {
//         // n = total number of tasks (1..n)
//         // a[i] → b[i] means: b[i] depends on a[i], so a[i] must come before b[i].
//         // We assume a and b have the same length = m, the number of "must come before" rules.
      
//         // 1) Build a "next" array, where nextOf[x] = y means x -> y
//         //    If 0, then x has no outgoing edge (no dependency requiring x -> something).
//         const nextOf = new Array(n + 1).fill(0);
//         for (let i = 0; i < a.length; i++) {
//           const dep = a[i];
//           const principal = b[i];
//           nextOf[dep] = principal;
//         }
      
//         // 2) We will track visitation:
//         //    0 = unvisited, 1 = visiting (in recursion stack), 2 = visited (completely processed)
//         const visited = new Array(n + 1).fill(0);
//         let cycleCount = 0;
      
//         // 3) Depth-first search (iterative version)
//         function dfs(start) {
//           let current = start;
//           while (true) {
//             if (visited[current] === 0) {
//               // Mark current node as "visiting"
//               visited[current] = 1;
      
//               const nxt = nextOf[current];
//               if (nxt === 0) {
//                 // No further edge, we can mark it "visited" and stop
//                 visited[current] = 2;
//                 return;
//               }
//               // Move on to the next node in the chain
//               current = nxt;
      
//             } else if (visited[current] === 1) {
//               // We found a node that is "visiting" → cycle detected
//               cycleCount++;
//               return;
      
//             } else {
//               // visited[current] === 2 → already fully explored, so no new cycle here
//               return;
//             }
//           }
//         }
      
//         // 4) Run DFS from each unvisited task
//         for (let taskId = 1; taskId <= n; taskId++) {
//           if (visited[taskId] === 0) {
//             dfs(taskId);
//           }
//         }
      
//         // 5) The result is total tasks minus the number of cycles
//         return n - cycleCount;
//       }
      
//       // ----- Quick example check -----
//       const n_ex = 7;
//       const a_ex = [1, 2, 3, 4, 6, 5];  // Dependent array
//       const b_ex = [7, 6, 4, 1, 2, 1];  // Principal tasks
//       console.log(tasks(n_ex, a_ex, b_ex)); 
      // Expected output: 6
      

// var arr = [1,2,3,4,5,6,7];
// var d = 5;
// let newArray= [...new Set(arr)]



// let newArray = arr.filter((item,index)=>arr.indexOf(item) === index);
// console.log(newArray);

// let newArray =  arr.slice(d);
// newArray.push(...arr.slice(0,d));
// console.log(newArray);

let stringList = ['aba','baba','aba','xzxb'];
let queries = ['aba','xzxb','ab'];

function matchingStrings(stringList, queries) {
    let resultArray = [];
    for(let i =0; i<queries.length; i++){
        let existenceOfElements = stringList.filter((item)=>item === queries[i]);
        resultArray.push(existenceOfElements.length);                
    }
    return resultArray; 

}

let resultA = matchingStrings(stringList, queries);
console.log(resultA);

let array = [
    [-9, -9, -9,  1, 1, 1], 
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

// console.log(array[0]);

let find16hoursumglasses = (array) =>{
    let sumArray = [];
    for(let i =0; i<array.length-2; i++){
        for(let j =0; j<array[i].length-2; j++){
            let sum = array[i][j] + array[i][j+1] + array[i][j+2] + array[i+1][j+1] + array[i+2][j] + array[i+2][j+1] + array[i+2][j+2];
            sumArray.push(sum);
        }
    }
    return Math.max(...sumArray);
}

let resultD = find16hoursumglasses(array);
console.log(resultD);