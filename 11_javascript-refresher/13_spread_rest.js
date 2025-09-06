
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);


const user = { name: "Jamela", age: 20 }; 
const newUser = { ...user, hobby: "Sleeping" };
console.log(newUser);


function sum(...args) {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
