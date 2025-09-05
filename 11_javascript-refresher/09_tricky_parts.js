

console.log("5" == 5);   // true 
console.log("5" === 5);  // false 


var a;          
var b = null;   

console.log("a:", a); // undefined
console.log("b:", b); // null


var obj = {
  regularFunc: function() {
    console.log("regularFunc this:", this);
  },
  arrowFunc: () => {
    console.log("arrowFunc this:", this);
  }
};

obj.regularFunc(); 
obj.arrowFunc();   


var arr1 = [1, 2, 3];
var arr2 = arr1;   

arr2.push(4);  
console.log("arr1:", arr1);
console.log("arr2:", arr2);


var arr3 = [1, 2, 3];
var arr4 = [...arr3];  

arr4.push(4);         
console.log("arr3:", arr3);
console.log("arr4:", arr4);
