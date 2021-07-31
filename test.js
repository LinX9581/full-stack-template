const str = '07/18/2021 - 07/18/2021';
const words = str.split('-');
// console.log(words);

var origin = ['www', 'www', 'babyou', 'petsmao', 'petsmao'];
var result = {};
// result[0] = '1'
// console.log(result);
origin.forEach(function(item) {
    result[item] = result[item] ? result[item] + 1 : 1;
});
// console.log(Object.keys(result)); // ["1", "2", "3", "a", "b"]
// console.log(result); // Object {1: 2, 2: 1, 3: 1, a: 2, b: 1}

let obj1 = { 'test': 'a' }
let val = 'test'
console.log(obj1[val]);