const numbers=[1,23,34,89,0.02]
const string=["week1", "week2", "week3"]

console.log(numbers.toString());

console.log(string.join("*"));

console.log(string.pop());

let sumOfNumbers = numbers.reduce((x,y) => x+y);
console.log(sumOfNumbers);

let multiplicantOfNumbers = numbers.reduce((x,y) => x*y);
console.log(multiplicantOfNumbers);
	


