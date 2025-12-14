import CodeBlock from "../components/CodeBlock/CodeBlock";

const ExecutionContext = () => {
  return (
    <div className="article">
      <h1>Execution Context</h1>
      <h3>important concepts and definitions</h3>
      <b>SYNTAX PARSER</b> - program that reads your code and determines what it
      does and if its grammar is correct. It runs every time when you run your
      js code.
      <p>
        <b>LEXICAL ENVIRONMENT</b> - where something sits physically in the code
        you write (its important where you put your code). JS creates this and
        store there your variables and functions and decide wheter you have
        access to it (<span>scope</span>).
        <p>
          Each <b>lexical environment</b> is made by 2 parts:
          <ol>
            <li>
              Environment Record - it keeps variables, functions and their
              parameters.
            </li>
            <li>
              Reference to outer Lexical Environment - links to outer scope.
            </li>
          </ol>
        </p>
      </p>
      <p>
        <b>EXECUTION CONTEXT</b> - a wrapper to help manage the code that is
        running. Execution Context is created in 2 phases. First phase is called
        "Creation Phase" (global object, "this", outer environment). It setups
        for you memory space for variables and functions. This process is called
        - <b>hoisitng</b>. So before even running your code, JS already created
        for you memory spaces so basically you can call the functions (except
        function declararations!!!) before declaring it first. THEY ALREADY
        EXIST IN MEMORY. Important note: Variables declared with <b>var</b> are
        initialized with <b>undefined</b>.
        <p>
          Second phase is called "Execution Phase" which basically means that
          your code is executed line by line from top to bottom.
          <CodeBlock
            code={`console.log(a); // undefined (Creation Phase)
a = 10;
console.log(a); // 10 (Execution Phase)
function foo() {
  console.log("foo");
}

foo(); // function is executed in Execution Phase`}
          />
        </p>
        <CodeBlock
          code={`a(); // called the function
funtion(a) {console.log("a called")} // called a <-- GOT HOISTED!!!`}
        />
      </p>
      <p>
        <b>EXECUTION CONTEXT GLOBAL</b> - basically js creates this for you and
        give you access to <b>Global Object</b> and <b>this</b> keyword even if
        you didn't write any code yet. Global means accessible from everywhere.
        For example if you open a new tab and console.log(this) then the global
        object will point to "Window". So your Global Object in this case means
        Window (Global Object = "this"). If you open another tab then it creates
        it again for you.
        <p>
          <b>GLOBAL</b> - not inside a function
          <CodeBlock
            code={`var a = "hello world" 
function b () {}
console.log(window) // you will find there created code
// a: "hello world
// b: function(b)
// they got attached to the GLOBAL OBJECT, now you can access it by Window.a`}
          />
        </p>
      </p>
      <p>
        <b>OBJECT</b> - a collection of name/value pairs. That value might be
        another object.
      </p>
      <p>
        <b>UNDEFINED</b> - special value which means that value of variable
        hasn't been defined. NEVER DO THIS: (it would be hard debugging)
        <CodeBlock code={`var a = undefined;`} />
      </p>
    </div>
  );
};

export default ExecutionContext;
