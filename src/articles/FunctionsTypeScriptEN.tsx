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
    </div>
  );
};

export default FunctionsTypeScriptEN;
