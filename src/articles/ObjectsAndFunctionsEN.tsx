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
      <h3>"this"</h3>
      <p>
        Every time a function is invoked, a new execution context is created. It
        contains:
      </p>
      <ul>
        <li>Variable Environment (local variables)</li>
        <li>Outer Environment Reference</li>
        <li>
          The <b>this</b> keyword (its value depends on how the function is
          called)
        </li>
      </ul>
      <p>
        The value of <b>this</b> is determined at <b>call time</b>, not at
        declaration time. If you have a function inside of an object (
        <b>method</b>) than <b>this</b> will point to the object itself.
      </p>
      <p style={{ color: "red", fontWeight: "bold" }}>WARNING:</p>
      <p>
        Method inside of another method will point to the <b>global object</b>{" "}
        or <b>undefined</b> when using a <b>strict mode</b>.
      </p>
      <CodeBlock
        code={`function a() {
  console.log(this); // window (or undefined in strict mode)
  this.age = 22;     // attaches to global object in non-strict mode
}

a();
console.log(age); // 22`}
      />
      <CodeBlock
        code={`const person = {
  name: "Przemek",
  // creating a method
  greet: function() {
  this.name = "Aga";
  console.log(this); // this will point to the Object "person"
  // due to reference mechanism, my name is "Aga".
    }
  person.greet(); `}
      />
      <h3>Arrays</h3>
      <p>
        <b>ARRAY</b> – an ordered, zero-based index collection of values. In
        JavaScript, arrays are objects and can contain values of any type.
      </p>
      <CodeBlock code={`const arr = [1, "hi", true, { name: "Aga" }];`} />
      <h3>Parameters, arguments, spread and rest</h3>
      <p>
        Parameters are variables in a function definition, arguments are values
        passed during invocation.
      </p>
      <p>
        <b>PARAMETERS</b> – variables listed in a function definition. They act
        as placeholders for the values the function expects.
      </p>
      <p>
        <b>ARGUMENTS</b> – the actual values passed to a function when it is
        invoked.
      </p>
      <p>
        <b>SPREAD OPERATOR</b> (<b>...</b>) – spreads (array, string) or an
        object into individual elements. Creates a shallow copy, not a deep
        copy. Spread copies values for primitives, but copies references for
        objects — nested objects remain shared. Essentailly, it{" "}
        <b>unpack values</b> from array or object.
      </p>
      <p>
        <b>REST PARAMETERS</b> (<b>...name</b>) – collects all remaining
        arguments passed to a function into a single array. Useful when you
        don't know exactly how many arguments will be passed. Essentially, it{" "}
        <b>packs values</b> into an array.
      </p>
      <CodeBlock
        code={`function greet(name, age = 22) { // 22 is the default value
  // name, age → parameters
  console.log(name, age);
}

greet("Przemek", 30); // "Przemek", 30 → arguments
greet("Przemek");     // "Przemek", 22 → age uses default value when secodn argument not provided`}
      />
      <p>
        <b>SPREAD (unpacking)</b> examples:
      </p>
      <CodeBlock
        code={`function greet(name, age) {
  console.log(name, age);
}

const args = ["Przemek", 30];
greet(...args); // "Przemek", 30 - spread operator unpack array of arguments`}
      />
      <CodeBlock
        code={`const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // copy
arr2.push(4);
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]`}
      />
      <CodeBlock
        code={`const person = { name: "Przemek", age: 30 };
const copy = { ...person }; // shallow copy
copy.name = "Aga";

console.log(person.name); // "Przemek"
console.log(copy.name);   // "Aga"`}
      />
      <CodeBlock
        code={`const user = {
  name: "Przemek",
  address: { city: "Warsaw" }
};

const copy = { ...user };
// name → copied VALUE
// address → copied REFERENCE because value of address is an object

copy.name = "Aga";             // changes only copy.name
copy.address.city = "Krakow";  // affects both copy.address.city and user.address.city

console.log(user.name);          // "Przemek"
console.log(copy.name);          // "Aga"
console.log(user.address.city);  // "Krakow" - mutated, object is a reference type
console.log(copy.address.city);  // "Krakow"`}
      />
      <p>
        <b>REST (packing into an array)</b> example:
      </p>
      <CodeBlock
        code={`function sum(...numbers) { // numbers is an array of all arguments
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(5, 10, 15, 20)); // 50`}
      />
      <p>
        REMEMBER - JavaScript always copies values; if a value is an{" "}
        <b>object</b>, it copies it by <b>reference</b>.
      </p>
      <h3>Immediately Invoked Functions Expressions - IIFE</h3>
      <p>
        <b>Immediately Invoked Function Expression</b> - a function expression
        that is executed immediately after it is created.
      </p>
      <CodeBlock
        code={`(function(name) {
  console.log("Hello" + name);
})("Przemek"); // Hello Przemek`}
      />
      <h3>CLOSURES</h3>
      <p>
        <b>CLOSURE</b> – a mechanism that lets functions access variables from
        its outer scope even after that scope is gone.
      </p>
      <CodeBlock
        code={`function outer() {
  let x = 10;
 function inner() {
// it has access to "X" due to closure mechanism
  console.log(x);
  }
  return inner;
}
const fn = outer();
fn(); // 10`}
      />
      <h3>CALLBACK FUNCTION</h3>
      <p>
        <b>CALLBACK FUNCTION</b> – a function that is passed as an argument to
        another function and is executed later, usually after an operation is
        completed or when a specific event occurs.
      </p>
      <CodeBlock
        code={`function greet(callback) {
  console.log("Hello");

  // setTimeout takes a CALLBACK FUNCTION
  setTimeout(function() {
    // this function is the CALLBACK
    callback();
  }, 1000);
}

// this anonymous function is a CALLBACK
greet(function() {
  console.log("I am a callback!");
});

// Output:
// Hello
// (after 1 second)
// I am a callback!`}
      />
    </div>
  );
};

export default ObjectsAndFunctionsEn;
