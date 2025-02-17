let collection = new Map();

collection.set('key',"kunal");
collection.set('key1',"kunal1");

console.log(collection.values());
console.log(collection.keys());

for (let col of collection.values()){
    console.log(col);
}