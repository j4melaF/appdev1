
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}


class Student extends Person {
  study() {
    console.log(this.name + " is studying");
  }
}

// Example
const p1 = new Person("Eva");
p1.sayHello();

const s1 = new Student("Jamela");
s1.sayHello();
s1.study();
