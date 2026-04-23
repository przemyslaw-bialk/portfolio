import CodeBlock from "../components/CodeBlock/CodeBlock";

const UnionsAndNarrowingEN = () => {
  return (
    <div className="article">
      <h1>unions and narrowing in Typescript</h1>
      <p>
        <b>unions</b> - A union type in TypeScript allows a value to be one of
        several different types, using the | operator.
      </p>
      <CodeBlock
        code={`type Status = "loading" | "success" | "error";
let status: Status;

status = "loading"; // OK
status = "done";    // ERROR`}
      />
      <b>narrowing</b> - process of reducing a <b>union</b> type to a more
      specific type by using checks (for example: typeof, conditionals).
      <CodeBlock
        code={`function print(id: string | number) {
  if (typeof id === "number") {
    console.log(id.toFixed(2)); // number
  }
}`}
      />
      <b>literal types</b> - types that allow only specific exact values instead
      of general types like string or number.
      <CodeBlock
        code={`type Status = "loading" | "success" | "error";
let status: Status;

status = "loading"; // OK
status = "done";    // ERROR`}
      />
      <b>strict null checking</b> - means that <b>null</b> and <b>undefined</b>{" "}
      are treated as separate types and cannot be assigned to other types unless
      explicitly allowed. Works great with <b>type narrowing</b>.
      <CodeBlock
        code={`let nameMaybe: string | undefined
nameMaybe.toLowerCase(); // ERROR - possibly undefinde

// WITH TYPE NARROWING:
if (typeof nameMaybe === "string") {
  nameMaybe.toLowerCase();
} `}
      />
      <b>Truthiness Narrowing</b> - all values in javascript are <b>truthy</b>{" "}
      except: false , 0 , -0 , 0n , "" , null , undefined , and NaN.
      <CodeBlock
        code={`let geneticist = Math.random() > 0.5

    ? "Barbara McClintock"

    : undefined;

if (geneticist) {
    geneticist.toUpperCase(); // Ok: string
}

geneticist.toUpperCase(); // Error: Object is possibly 'undefined'

geneticist?.toUpperCase(); // Ok: string | undefined

`}
      />
      <b>type aliases</b> - let you create a custom name for a type, making code
      cleaner and easier to reuse. You can create them using keyword <b>type</b>
      .
      <CodeBlock
        code={`type UserID = string | number;

let id: UserID;

id = "abc"; // OK
id = 123; // OK`}
      />
      <p>Combining type aliases:</p>
      <CodeBlock
        code={`type Id = number | string;

type IdMaybe = Id | undefined | null; // Equivalent to: number | string | undefined | null`}
      />
    </div>
  );
};

export default UnionsAndNarrowingEN;
