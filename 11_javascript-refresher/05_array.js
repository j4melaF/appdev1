
let foods = ["Pizza", "Champorado", "Sushi"];

foods.push("Pasta"); 
foods.shift();         

for (let food of foods) {
  console.log(food);
}

let likes = foods.map(f => "I like " + f);
console.log(likes);
