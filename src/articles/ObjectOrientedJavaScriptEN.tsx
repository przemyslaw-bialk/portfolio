import CodeBlock from "../components/CodeBlock/CodeBlock";

const ObjectOrientedJavaScriptEN = () => {
  return (
    <div className="article">
      <h1>Object Oriented JS</h1>
      <p>
        <b>INHERITANCE</b> - one object get access to the properties and methods
        of another object.
      </p>
      <CodeBlock
        code={`const person = {
firstname: 'Default',
lastname: 'Default',
getFullName: function() {
return this.firstname + this.lastname;
  }
}
const john = {
firstname: 'John',
lastname: 'Doe'
}
// DONT DO THIS EVER, FOR DEMO ONLY
john.__proto__ = person;
console.log(john.getFullName()); // John Doe
console.log(john.firstname); // John - because of protptype chain, it finds
// a property name in its own object so it doesn't look for it elsewhere.
const aga = {
firstname: 'Aga'
}
aga.__proto__ = person;
console.log(aga.getFullName()); // Aga Default
//this keyword points at the lowest level and only if it can't find a property
//it goes up of prototype chain. In this case 'this' refers to object aga. It finds
//there a property name 'firstname' but it can't find a 'lastname' so firstname 
//becomes "Aga", and it goes up a prototype chain to look for a 'lastname' that
//exist in a 'person' object.
 `}
      />
      <p>
        <b>REFLECTION</b> - an object can look at itself, listing and changing
        its properties and methods.
      </p>
      <CodeBlock
        code={`const person = {
  name: "Przemek",
  age: 30
};

// LIST properties (reflection)
console.log(Object.keys(person)); // ["name", "age"]

// CHECK if property exists
console.log("age" in person); // true

// READ property dynamically
const prop = "name";
console.log(person[prop]); // "Przemek"

// MODIFY object at runtime
person.age = 31;
person["name"] = "Aga";

console.log(person); // { name: "Aga", age: 31 }`}
      />
      <h3>Building objects</h3>
      <p>
        <b>FUNCTION CONSTRUCTOR</b> – a normal function used to construct
        objects called with the <b>new</b> keyword. Keyword <b>this</b> points
        to a newly created object, and that object is returned automatically.
        Prototype chain is created automatically for us.
      </p>
      <CodeBlock
        code={`function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

// Method shared by all instances
// Methods should be placed on the prototype, not inside the constructor! 
// This way you use less memory space
Person.prototype.getFullName = function () {
  return this.firstname + " " + this.lastname;
};

// 'new' creates a new empty object and binds 'this' to it
const john = new Person("John", "Doe");
const aga = new Person("Aga", "Nowak");

console.log(john.getFullName()); // John Doe
console.log(aga.getFullName());  // Aga Nowak`}
      />
      <p>
        You can add your own methods to prototype and use it in your project.
        The code example utilities <b>prototype</b> mechanism in JavaScript. In
        fact many libraries use this recipe to add their own functionality.
      </p>
      <CodeBlock
        code={`String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};

console.log("Aga".isLengthGreaterThan(2)); // true
console.log("Przemek".isLengthGreaterThan(10)); // false`}
      />
      <h3>Pure prototyple inheritance</h3>
      <CodeBlock
        code={`const person = {
  firstname: "Default",
  lastname: "Default",
  greet: function () {
    return "Hi " + this.firstname;
  }
};

const john = Object.create(person);
console.log(john.greet()); // Hi Default

// overwrite only what you need - this is the idea of prototypal inheritance
john.firstname = "John";
console.log(john.greet()); // Hi John`}
      />
      <h3>ES6 Way of creating objects</h3>
      <p>
        <b>CLASS</b> – syntactic sugar over JavaScript’s prototypal inheritance.
        Classes provide a cleaner and more familiar syntax for creating objects
        and handling inheritance, but under the hood JavaScript still uses
        prototypes.
      </p>
      <p>
        <b>EXTENDS</b> – used to create a subclass that inherits properties and
        methods from a parent class.
      </p>
      <p>
        <b>SUPER</b> – used inside a subclass to call the constructor or methods
        of the parent class. Call it before using <b>this</b> keyword.
      </p>
      <p>
        <b>CONSTRUCTOR</b> – runs automatically when using <b>new</b> to create
        an object and initializes its data.
      </p>
      <CodeBlock
        code={`class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return "Hi " + this.firstname;
  }
}

class Student extends Person {
  constructor(firstname, lastname, course) {
    // calls parent constructor
    super(firstname, lastname);
    this.course = course;
  }

  study() {
    return this.firstname + " is studying " + this.course;
  }
}

const john = new Student("John", "Doe", "JavaScript");

console.log(john.greet()); // Hi John
console.log(john.study()); // John is studying JavaScript`}
      />
    </div>
  );
};

export default ObjectOrientedJavaScriptEN;
