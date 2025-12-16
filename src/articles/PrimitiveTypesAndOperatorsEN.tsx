import CodeBlock from "../components/CodeBlock/CodeBlock";

const PrimitiveTypesAndOperatorsEN = () => {
  return (
    <div className="article">
      <h1>Primitive Types and Operators</h1>
      <div>
        <b>PRIMITIVE TYPE</b> - a type of data that represents a single value
        and is not an object. There are 7 primitive types.
        <p>
          <b>undefined</b> - represents lack of existence. Don't set a variable
          to this. Leave it for the engine.
        </p>
        <p>
          <b>null</b> - represents lack of existence. You can set a variable to
          this.
        </p>
        <p>
          <b>boolean</b> - true or false.
        </p>
        <p>
          <b>number</b> - floating point number.
        </p>
        <p>
          <b>string</b> - a sequence of characters between <b>""</b> or{" "}
          <b>''</b>.
        </p>
        <p>
          <b>symbol</b> – a unique and immutable value, introduced in ES6,
          mainly used as object property keys.
        </p>
        <p>
          <b>bigint</b> – represents integers larger than the safe limit for the
          number type.
        </p>
      </div>
      <h3>Operators</h3>
      <p>
        <b>OPERATOR</b> - a special function that is written differently with a
        specific syntax. Operators take 2 arguments and return one result.
        Inside those special syntax functions there is literally written a code
        that do something for you.
      </p>
      <CodeBlock
        code={`const a = 3 + 2 // '+' is operator
// Conceptually similar to a function:
const add = (a, b) => {
return a + b;
}; `}
      />
      <p>
        <b>OPERATOR PRECEDENCE</b> - which operator runs first. Higher
        precedence wins.
      </p>
      <p>
        <b>ASSOCIATIVITY</b> - what order operators get called in: left-to-right
        or right-to-left in case{" "}
        <b>when operators have the same precedence level</b>.
      </p>
      <CodeBlock
        code={`const a = 2 + 3 * 5;
console.log(a); // 17 '*' has higher precedence than '+'`}
      />
      <CodeBlock
        code={`let a = 2;
let b = 4;
let c = 6;

a = b = c;
console.log(a, b, c); // 6 6 6 — right-to-left associativity`}
      />
      <p>
        Operator Precedence list can be found here:{" "}
        <a
          style={{ color: "green" }}
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence"
          target="_blank"
        >
          CLICK
        </a>
      </p>
      <p>
        <b>COERCION</b> - converting a value from one type to another. This
        happens because JavaScript is dynamically typed.
      </p>
      <CodeBlock
        code={`let a = 1 + '2';
// 12 - first parameter gets converted from number to string`}
      />
      <p>
        In general always use triple equals "===" (sctrict one) that besides of
        checking values, also checks TYPE of values. More on the topic:{" "}
        <a
          style={{ color: "green" }}
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness"
          target="_blank"
        >
          CLICK
        </a>
      </p>
    </div>
  );
};

export default PrimitiveTypesAndOperatorsEN;
