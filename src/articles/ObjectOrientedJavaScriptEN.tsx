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
    </div>
  );
};

export default ObjectOrientedJavaScriptEN;
