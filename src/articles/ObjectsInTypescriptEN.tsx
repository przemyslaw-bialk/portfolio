import CodeBlock from "../components/CodeBlock/CodeBlock";

const ObjectsInTypeScriptsEN = () => {
  return (
    <div className="article">
      <h1>Objects in TypeScript</h1>
      <h2>Aliased Object Types</h2>

      <p>
        You can declare an object type by using the <b>type</b> keyword. It is
        also possible to describe an object type by using an <b>interface</b>.
        Both ways are pretty similar.
      </p>

      <CodeBlock
        code={`type Singer = {
  age: number;
  name: string;
};

let rockSinger: Singer;

rockSinger = {
  age: 34,
  name: "Freddie Mercury",
};
`}
      />

      <p>
        Another way of writing type "Song" would be to extract out the author
        property's shape into its own aliased object type called: "Author".
      </p>
      <CodeBlock
        code={`type Author = {
  firstName: string;
  lastName: string;
};

type Song = {
  author: Author;
  title: string;
};

const song: Song = {
  author: {
    firstName: "Freddie",
    lastName: "Mercury",
  },
  title: "Killer Queen",
};

        `}
      />
      <p>
        <b>optional properties</b> - object properties that MAY NOT exist marked
        with "?".
      </p>
      <CodeBlock
        code={`type User = {
  name: string;
  age?: number;
};

const user1: User = {
  name: "Tom", // OK - age is NOT required
};

const user2: User = {
  name: "Anna",
  age: 25,
};`}
      />
      <p>
        Keep in mind there is a difference between optional properties and
        properties whose type happens to include undefined in a type union. A
        property declared as optional with ? is allowed to not exist. A property
        declared as required and | undefined must exist, even if the value is
        undefined .
      </p>
      <h2>Union Types with Objects</h2>
      <p>
        If you have two object types in a union, you can safely use only the
        properties that exist in both types. If a property exists in only one of
        them, you need to check it conditionally using type narrowing.{" "}
        <b>
          Note that TypeScript won’t allow truthiness existence checks like "if
          (poem.pages)".
        </b>
      </p>
      <CodeBlock
        code={`type A = {
  name: string;
  pages: number;
};

type B = {
  name: string;
  rhymes: boolean;
};

type Poem = A | B;

poem.name // OK

poem.pages // Error

// TRUTHINESS CHECK - NOT ALLOWED
if (poem.pages) // ERROR

// CONDITIONAL CHECK
if ("pages" in poem) {
  console.log(poem.pages); //OK
}
`}
      />
      <h2>Discriminated unions</h2>
      <p>
        Discriminated unions in TypeScript are union types where each object has
        a common property (called a discriminant) with a different literal
        value, allowing TypeScript to narrow the type automatically
      </p>
      <CodeBlock
        code={`type RequestState =
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string };
  
  function handle(state: RequestState) {
  if (state.status === "success") {
    console.log(state.data); // OK
  }

  if (state.status === "error") {
    console.log(state.message); // OK
  }
}
  `}
      />
      <h2>Intersection Types</h2>
      <p>
        Intersection types in TypeScript combine multiple types into one using
        &, meaning the value must satisfy all included types at the same time.
      </p>
      <CodeBlock
        code={`type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;

const user: Person = {
  name: "Tom",
  age: 25,
};`}
      />
    </div>
  );
};

export default ObjectsInTypeScriptsEN;
