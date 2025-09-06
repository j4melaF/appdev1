// Using var
var myName = "Jamela";
var myAge = 20;
myAge = 21; // reassign works
console.log("var:", myName, myAge);

// Using let
let nickname = "Jam";
nickname = "Jammy"; // reassign works
console.log("let:", nickname);

// Using const
const name = "jam";
// name = "jamela"; //Error: cannot reassign const
console.log("const:", name);
