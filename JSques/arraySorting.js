let array = [{date: '2022-01-02', age: 25},{date: '2021-01-01', age: 20},{date: '2023-01-03', age: 30}];

const currentDate = new Date();
array.sort((a, b) => 
    Math.abs(new Date(a.date) - currentDate) - Math.abs(new Date(b.date) - currentDate)
);
console.log(array);

for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if (array[i].age > array[j].age) {
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
};

array.sort((a, b) => a.age - b.age);

console.log(array);
