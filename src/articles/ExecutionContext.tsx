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
              Reference to outer Lexical Environment - links to outer scope,
              this mechanism is called <b>scope chain</b>. If you have a
              function "A" inside of other function "B", then its outer
              reference is function "B".
            </li>
          </ol>
        </p>
      </p>
      <p>
        <b>EXECUTION CONTEXT</b> - a wrapper to help manage the code that is
        running. Execution Context is created in 2 phases. First phase is called
        <b> Creation Phase</b> (global object, "this", outer environment). It
        setups for you memory spaces for variables and functions. This process
        is called - <b>hoisitng</b>. So before even running your code, JS
        already created for you memory spaces so basically you can call the
        functions (except function declararations!!!) before declaring it first.
        THEY ALREADY EXIST IN MEMORY. Important note: Variables declared with
        <b>var</b> are initialized with <b>undefined</b>.
        <p>
          Second phase is called <b>Execution Phase</b> which basically means
          that your code is executed line by line from top to bottom.
          <CodeBlock
            code={`console.log(a); // undefined (Creation Phase)
a = 10;
console.log(a); // 10 (Execution Phase)
function foo() {
  console.log("foo");
}

foo(); // foo - function is executed in Execution Phase`}
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
        <b>INVOCATION</b> - running a function, calling a function using "()".
      </p>
      <p>
        Let's take a look and go step by step
        <CodeBlock
          code={`function b() {}
function a() {
b();
}
a();`}
        />
        First - Global Execution Context is created (global context, "this"
        keyword), memory spaces are taken/reserved/. After that programm goes
        from top to bottom meeting call of function a. EVERY TIME you call a
        function a new <b>execution context</b> is created and put on the top of
        the
        <b> call stack</b>. Now it will execute the code within your function
        from top to bottom. Once its finished it gets POPPED off the call stack.
      </p>
      <p>
        <b>UNDEFINED</b> - special value which means that value of variable
        hasn't been defined. NEVER DO THIS: (it would be hard debugging)
        <CodeBlock code={`var a = undefined;`} />
      </p>
      <p>
        <b>SINGLE-THREADED</b> – JavaScript executes code using a single call
        stack, meaning only one task can run at a time. However, the browser
        itself is not single-threaded and can handle asynchronous tasks in the
        background.
      </p>
      <p>
        <b>SYNCHRONOUS</b> - one at a time and in the order it appears. Second
        line waits for the execution of the previous one.
      </p>
      <p>
        <b>ASYNCHRONOUS</b> - more than one at a time.
      </p>
      <p>
        <b>VARIABLE ENVIRONEMNT</b> - where the variable live when you created
        it. Think about it: "where is the variable".
      </p>
      <p>
        <b>SCOPE</b> - where a variable is available in your code.
      </p>
      <p>
        <b>EVENT QUEUE</b> – a queue that holds callback functions waiting to be
        executed once the Call Stack is empty. It contains callbacks from Web
        APIs such as <b>setTimeout</b> and DOM events (for example, click
        events).
      </p>
      <CodeBlock
        code={`console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

console.log("end");

// Output:
// start
// end
// timeout

// Explanation:
// setTimeout is handled by Web APIs.
// Once the timer finishes, its callback is placed in the Event Queue.
// When the Call Stack becomes empty, the Event Loop moves the callback
// from the Event Queue to the Call Stack, where it gets executed.
`}
      />
    </div>
  );
};

export default ExecutionContext;
