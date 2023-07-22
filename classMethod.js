//Class Methods of javascript


//Instance Method
class MyClass {
  instanceMethod() {
    return "This is an instance method.";
  }
}

const myInstance = new MyClass();
console.log(myInstance.instanceMethod()); // Output: "This is an instance method."

//Static Method
class MyClass {
  static staticMethod() {
    return "This is a static method.";
  }
}

console.log(MyClass.staticMethod()); // Output: "This is a static method."

//Prototype Method
class MyClass {}

MyClass.prototype.prototypeMethod = function() {
  return "This is a prototype method.";
};

const myInstance = new MyClass();
console.log(myInstance.prototypeMethod()); // Output: "This is a prototype method."


//Using the Class Expression
const MyClass = class {
  method1() {
    return "Method 1";
  }

  method2() {
    return "Method 2";
  }
};

const myInstance = new MyClass();
console.log(myInstance.method1()); // Output: "Method 1"
console.log(myInstance.method2()); // Output: "Method 2"


//Using External Function Declaration
class MyClass {}

function method1() {
  return "Method 1";
}

function method2() {
  return "Method 2";
}

MyClass.prototype.method1 = method1;
MyClass.prototype.method2 = method2;

const myInstance = new MyClass();
console.log(myInstance.method1()); // Output: "Method 1"
console.log(myInstance.method2()); // Output: "Method 2"


//Consturctor method
class CompanyName {
  constructor() {
    this.company = "Javatpoint";
  }
}

class Employee extends CompanyName {
  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
  }
}

const emp = new Employee(1, "John");
console.log(`${emp.id} ${emp.name} ${emp.company}`);

