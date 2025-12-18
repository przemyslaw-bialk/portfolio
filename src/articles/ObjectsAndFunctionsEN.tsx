import CodeBlock from "../components/CodeBlock/CodeBlock";

const ObjectsAndFunctionsEn = () => {
  return (
    <div className="article">
      <h1>Objects and functions</h1>
      <p>
        <b>OBJECT</b> - a collection of name/value pairs. Objects are stored by
        reference, meaning variables point to a MEMORY LOCATION, not a copy of
        the value.
      </p>
      <CodeBlock
        code={`let person = new Object();
person["firstname"] = "Przemek";
person["lastname"] = "Bialk";
const firstNameProperty = "firstname";
// ways to access object properties
console.log(person[firstNameProperty]); // Przemek. Bracket notation is useful when the property name is dynamic.
console.log(person.firstname); // Przemek

person.address = new Object();
person.address.street = "str. 12"; // creating object with street property and its value set to "str. 12"`}
      />
      <CodeBlock
        code={`const person = {
  name: "Przemek",
  age: 30
};

for (let key in person) {
  console.log(person[key]);
}
// Przemek 30 - 'for in' loop iterates over keys of object (in this case: name, age) and logs its values
// Loops don’t return values — functions do.
Object.values(person); // ["Przemek", 30]
`}
      />
      <CodeBlock
        code={`// object literal
let person = {firstname: 'Przemek', lastname: 'Bialk'}; // object literal is created using {}`}
      />
      <p>
        <b>NAMESPACE</b> – a container used to organize variables and functions
        and avoid naming conflicts.
      </p>
      <h3>JSON and converting</h3>
      <p>
        <b>JSON</b> – JavaScript Object Notation. A text-based lightweight data
        format used for sending and storing data, especially across the
        internet. JSON looks similar to JavaScript objects, but it is a text
        format and has stricter rules. Its keys are written between DOUBLE
        quotes.
      </p>
      <CodeBlock
        code={`{
  "firstname": "Przemek",
  "age": 30
}`}
      />
      You can convert JavaScript Object to JSON format using:
      <CodeBlock code={`JSON.stringify(object_to_convert);`} />
      <p>To convert JSON back into a JavaScript object, use:</p>
      <CodeBlock code={`JSON.parse(json_string)`} />
      <h3>functions are objects</h3>
      <p>
        <b>FIRST CLASS FUNCTIONS</b> - functions are treated like any other
        value. They can be assigned to variables, passed as arguments to other
        functions, returned from functions, and you can create them on the fly.
      </p>
      <CodeBlock
        code={`function log(fn) {
  fn();
}

log(function () {
  console.log("hi");
});`}
      />
      <p>
        <b>EXPRESSION</b> - a piece of code that results in a value. It ends up
        creating a value.
      </p>
      <CodeBlock
        code={`// expressions - they evaluate to a value
1 + 2;  // 3
"hi";   // "hi"
a = 10;  // 10
`}
      />
      <p>
        Function declarations are hoisted entirely, function expressions are
        not.
      </p>
      <CodeBlock
        code={`// function statement / function declaration 
// Hoisted – can be invoked before the function definition
greet(); // hi
function greet() {
console.log("hi");
} `}
      />
      <CodeBlock
        code={`// function expression - NOT hoisted, cant call it before assigment.
greet(); // ❌ WRONG! ReferenceError
const greet = function() {
console.log("hi");
} `}
      />
      <h3>by value vs by reference</h3>
      <p>
        <b>by value (for primitives)</b> - passes a copy of the value and
        creates a new memory address.
      </p>
      <CodeBlock
        code={`let a = 10; // address 0x0001
let b = a; // address 0x0002
b = 20;
console.log(a); // 10
console.log(b); // 20`}
      />
      <p>
        <b>by reference (for objects including functions)</b> - passes a
        REFERENCE to a memory address. Both variables point to the same object,
        so mutations affect the original.
      </p>
      <CodeBlock
        code={`const obj1 = { name: "Przemek" }; // address 0x0001
const obj2 = obj1;  // address is still the same: 0x0001
obj2.name = "John"; // mutate
console.log(obj1.name); // John - original object changed
console.log(obj2.name); // John`}
      />
      <p>
        <b>MUTATE</b> - to change something.
      </p>
      <p>
        <b>IMMUTABLE</b> - can't be changed.
      </p>
    </div>
  );
};

export default ObjectsAndFunctionsEn;
