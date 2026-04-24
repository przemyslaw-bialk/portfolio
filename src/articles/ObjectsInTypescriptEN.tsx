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
    </div>
  );
};

export default ObjectsInTypeScriptsEN;
