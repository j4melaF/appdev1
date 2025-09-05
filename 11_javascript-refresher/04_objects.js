
let aboutMe = {
  name: "Jamela",
  age: 20,
  course: "BSIT",
  introduce: function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

aboutMe.hobby = "Sleeping"; 

aboutMe.introduce();
console.log("Hobby:", aboutMe.hobby);
