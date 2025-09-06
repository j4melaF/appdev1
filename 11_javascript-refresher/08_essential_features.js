
let hobbies = ["Reading", "Sleeping", "Cooking"];
hobbies.map(h => console.log(h));

let student = { name: "Jamela", age: 20 };
let { name, age } = student;
console.log(name, age);

// spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2);