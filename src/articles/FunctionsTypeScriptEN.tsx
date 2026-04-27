import CodeBlock from "../components/CodeBlock/CodeBlock";

const FunctionsTypeScriptEN = () => {
  return (
    <div className="article">
      <h1>functions in typescript</h1>
      <h2>function parameters</h2>
      <p>
        To declare type of a parameter you can use a <b>type annotation</b>{" "}
        approach. All parameters declared in typescript are required.
      </p>
      <CodeBlock
        code={`function sing(song: string) {
    console.log(song);
}`}
      />
      <h3>optional parameters</h3>
      <p>
        If a paramter is not provided than its argument value inside the
        function body defaults to <b>undefined</b>. You can make a parameter
        optional with "?" before ":". Any optional parameters for a function
        must be the last parameters.
      </p>
      <CodeBlock
        code={`function announceSong(song: string, singer?: string) {

  console.log(song);

  if (singer) {

    console.log(singer);

  }

}

announceSong("Greensleeves"); // Ok

announceSong("Greensleeves", undefined); // Ok

announceSong("Chandelier", "Sia"); // Ok`}
      />
      <h3>default parameters</h3>
      <p>
        Optional parameters in JavaScript may be given a default value with an =
        and a value in their declaration. For these optional parameters, because
        a value is provided by default, their TypeScript type does not
        implicitly have the | undefined union added on inside the function.
        TypeScript will still allow the function to be called with missing or
        undefined arguments for those parameters.
      </p>
      <CodeBlock
        code={`function rateSong(song: string, rating = 0) {
    console.log(song, rating);
    
rateSong("Photograph"); // Ok
rateSong("Set Fire to the Rain", 5); // Ok
rateSong("Set Fire to the Rain", undefined); // Ok

rateSong("At Last!", "100"); // ERROR


}`}
      />
      <h3>Rest Parameters</h3>
      <p>
        The ... spread operator may be placed on the last parameter in a
        function declaration to indicate any “rest” arguments passed to the
        function starting at that parameter should all be stored in a single
        array. You declare it using [] syntax at the end.
      </p>
      <CodeBlock
        code={`function singAllTheSongs(singer: string, ...songs: string[]) {

  for (const song of songs) {

    console.log({song, singer);

  }

}

singAllTheSongs("Alicia Keys"); // Ok

singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face"); // Ok`}
      />
      <h2>return types</h2>
      <p>
        TypeScript is perceptive: if it understands all the possible values
        returned by a function, it’ll know what type the function returns. In
        this example, singSongs is understood by TypeScript to return a number:
      </p>
      <CodeBlock
        code={`// Type: (songs: string[]) => number

function singSongs(songs: string[]) {

  for (const song of songs) {
    console.log(song);
  }

  return songs.length;

}`}
      />
      <h3>Explicit Return Types</h3>
      <p>
        Function declaration return type annotations are placed after the {")"}{" "}
        following the list of parameters. For a function declaration, that falls
        just before the {"{"} :
      </p>
      <CodeBlock
        code={`function singSongsRecursive(songs: string[], count = 0): number {

  return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;

}`}
      />
      <p>
        For arrow functions (also known as lambdas), that falls just before the
        ={">"} :
      </p>
      <CodeBlock
        code={`const singSongsRecursive = (songs: string[], count = 0): number =>

  songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;`}
      />
      <h2>function types</h2>
      <p>
        Functions in javascript are <b>first-class functions</b> which basically
        means they can be treated as normal variables. Function type syntax
        looks similar to an arrow function, but with a type instead of the body.
      </p>
      <p>Function with no parameters that must return string as a value:</p>
      <CodeBlock
        code={`let nothingInGivesString: () => string;
`}
      />
      <p>
        This inputAndOutput variable’s type describes a function with a string[]
        parameter, an optional count parameter, and a returned number value:
      </p>
      <CodeBlock
        code={`let inputAndOutput: (songs: string[], count?: number) => number;
`}
      />
      <p>
        Function types are frequently used to describe callback parameters
        (parameters meant to be called as functions).
      </p>
      <CodeBlock
        code={`function calculate(a: number, b: number, callback: (result: number) => void) {
  const sum = a + b;
  callback(sum);
}

calculate(5, 3, (value) => {
  console.log(value);
});`}
      />
      <h3>Function Type Parentheses</h3>
      <p>
        Function types may be placed anywhere that another type would be used.
        That includes union types.
      </p>
      <CodeBlock
        code={`// Type is a function that returns a union: string | undefined
let returnsStringOrUndefined: () => string | undefined;

// Type is either undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined;`}
      />
      <h3>Parameter Type Inferences</h3>
      <p>
        TypeScript can infer the types of parameters in a function provided to a
        location with a declared type.
      </p>
      <CodeBlock
        code={`const names = ["Tom", "Anna", "John"];

names.forEach((name) => {
  console.log(name.toUpperCase());
});
`}
      />
      <h3>Function Type Aliases</h3>
      <p>
        Function type aliases in TypeScript let you create a custom name for a
        function type, making code cleaner and easier to reuse.
      </p>
      <CodeBlock
        code={`type Greet = (name: string) => void;
    const sayHi: Greet = (name) => {
      console.log("hi" + name);    
    }`}
      />
      <h3>Function Overloads</h3>
      <p>
        Function overloads in TypeScript allow a function to have multiple
        possible type signatures depending on how it is called.
      </p>
      <CodeBlock
        code={`function format(value: string): string;
function format(value: number): string;

function format(value: string | number): string {
  return value.toString();
}

format("hello"); // OK
format(123);     // OK`}
      />
      <h3>Call-Signature Compatibility</h3>
      <p>
        TypeScript checking whether one function can safely replace another
        based on parameters and return type.
      </p>
      <CodeBlock
        code={`type FnA = (a: number, b: number) => number;
type FnB = (x: number, y: number) => number;

let a: FnA;
let b: FnB;

a = b; // OK`}
      />
    </div>
  );
};

export default FunctionsTypeScriptEN;
