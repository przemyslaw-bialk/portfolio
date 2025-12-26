import CodeBlock from "../components/CodeBlock/CodeBlock";

const IteratorsEN = () => {
  return (
    <div className="article">
      <h1>iterators</h1>
      <p>
        <b>ITERATION</b> – repeating a block of code, usually to process a
        sequence of values one by one.
      </p>
      <p>
        <b>ENUMERABLE</b> – a property which will appear when looping over the
        properties of an object.
      </p>
      <p>
        <b>for-of</b> – iterates over values, great for <b>arrays</b>.
      </p>
      <p>
        <b>for-in</b> – iterates over keys, for objects mainly. (rare, care)
      </p>
      <p>
        <b>Object.values()</b> – iterates over values, for <b>objects</b>.
      </p>
      <p>
        <b>Object.entries()</b> – iterates over key and values, for{" "}
        <b>objects</b>.
      </p>
      <h3>for-of vs for-in</h3>
      <CodeBlock
        code={`const arr = ["a", "b", "c"];

for (const value of arr) {
  console.log(value); // a, b, c
}

for (const index in arr) {
  console.log(index); // 0, 1, 2
}`}
      />
      <CodeBlock
        code={`const user = {
  name: "Przemek",
  age: 30
};

// for-in - iterates over KEYS (object properties)
for (const key in user) {
  console.log(key, user[key]);
}
// name Przemek
// age 30

// for-of - ONLY VALUES
for (const value of Object.values(user)) {
  console.log(value);
}
// Przemek
// 30

// KEY + VALUE (most flexible)
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
// name Przemek
// age 30
`}
      />
    </div>
  );
};

export default IteratorsEN;
