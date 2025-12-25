import CodeBlock from "../components/CodeBlock/CodeBlock";

const AsyncAwaitEN = () => {
  return (
    <div className="article">
      <h1>Promises, async and await</h1>

      <p>
        <b>PROMISE</b> – an object that represents a future value. A Promise can
        be in one of three states:
      </p>
      <ul>
        <li>
          <b>pending</b> – initial state
        </li>
        <li>
          <b>fulfilled</b> – operation completed successfully
        </li>
        <li>
          <b>rejected</b> – operation failed
        </li>
      </ul>

      <CodeBlock
        code={`// fetch ALWAYS returns a Promise
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    // response is NOT the data yet
    // response.json() also returns a Promise
    return response.json();
  })
  .then(data => {
    // Promise fulfilled → we get the real data
    console.log(data);
  })
  .catch(error => {
    // Promise rejected → something went wrong
    console.error(error);
  });`}
      />

      <p>
        The same example using <b>async / await</b>:
      </p>

      <CodeBlock
        code={`async function getUser() {
  try {
    // await pauses execution until the Promise resolves
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    // response.json() also returns a Promise
    const data = await response.json();

    console.log(data);
  } catch (error) {
    // handles rejected Promise
    console.error(error);
  }
}

getUser();`}
      />

      <p>
        <b>IMPORTANT:</b> fetch does NOT reject the Promise on HTTP errors like
        404 or 500.
      </p>

      <CodeBlock
        code={`async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/999"
    );

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Request failed:", error.message);
  }
}`}
      />

      <p>
        <b>ASYNC FUNCTION</b> – always returns a Promise, even if you return a
        normal value.
      </p>

      <CodeBlock
        code={`async function getNumber() {
  return 42;
}

getNumber().then(value => console.log(value)); // 42`}
      />

      <p>
        <b>AWAIT</b> can be used only inside an <b>async</b> function.
      </p>

      <CodeBlock
        code={`// SyntaxError
const data = await fetch(url);

// correct
async function load() {
  const data = await fetch(url);
}`}
      />

      <p>
        <b>SEQUENTIAL vs PARALLEL</b> async operations:
      </p>

      <CodeBlock
        code={`// sequential (slower)
const user = await fetch("/user").then(r => r.json());
const posts = await fetch("/posts").then(r => r.json());

// parallel (faster)
const [user, posts] = await Promise.all([
  fetch("/user").then(r => r.json()),
  fetch("/posts").then(r => r.json())
]);`}
      />

      <p>
        <b>Promise.all</b> – runs multiple Promises in parallel and resolves
        when all of them are fulfilled. If one of them is rejected then the
        whole state becomes rejected.
      </p>
      <CodeBlock
        code={`async function loadData() {
  try {
    const [userRes, postsRes] = await Promise.all([
      fetch("/user"),
      fetch("/posts")
    ]);

    const user = await userRes.json();
    const posts = await postsRes.json();

    console.log(user, posts);
  } catch (error) {
    console.error("One request failed:", error);
  }
}`}
      />
    </div>
  );
};

export default AsyncAwaitEN;
