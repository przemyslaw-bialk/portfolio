import CodeBlock from "../components/CodeBlock/CodeBlock";

const TypeScriptforReactEN = () => {
  return (
    <div className="article">
      <h1>TypeScript in React</h1>
      <h3>important concepts and definitions</h3>

      <p>
        <b>TYPESCRIPT</b> - a superset of JavaScript that adds static typing. It
        helps you catch errors earlier and makes your code more predictable.
      </p>

      <p>
        <b>BASIC TYPES</b> - the most commonly used types in TypeScript:
        <CodeBlock
          code={`let name: string = "John";
let age: number = 25;
let isActive: boolean = true;

let data: any = "anything"; // avoid using
let value: unknown = "safer than any";`}
        />
      </p>

      <p>
        <b>TYPE vs INTERFACE</b> - used to define shapes of objects (like
        props).
        <CodeBlock
          code={`// INTERFACE
interface User {
  name: string;
  age: number;
}

// TYPE
type User = {
  name: string;
  age: number;
};`}
        />
        Both are similar, but <b>type</b> is more flexible (unions,
        intersections).
      </p>

      <p>
        <b>PROPS</b> - define what data a component receives.
        <CodeBlock
          code={`type Props = {
  title: string;
  count: number;
};

const MyComponent = ({ title, count }: Props) => {
  return <h1>{title} - {count}</h1>;
};`}
        />
      </p>

      <p>
        <b>CHILDREN</b> - for wrapping components.
        <CodeBlock
          code={`type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return <div>{children}</div>;
};`}
        />
      </p>

      <p>
        <b>OPTIONAL PROPS</b> - not required fields.
        <CodeBlock
          code={`type Props = {
  name: string;
  age?: number;
};`}
        />
      </p>

      <p>
        <b>STATE (useState)</b> - you can explicitly define types.
        <CodeBlock
          code={`const [count, setCount] = useState<number>(0);

type User = {
  name: string;
};

const [user, setUser] = useState<User | null>(null);`}
        />
      </p>

      <p>
        <b>EVENTS</b> - typing event handlers.
        <CodeBlock
          code={`const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log("clicked");
};`}
        />
      </p>

      <p>
        <b>USEREF</b> - referencing DOM elements.
        <CodeBlock code={`const inputRef = useRef<HTMLInputElement>(null);`} />
      </p>

      <p>
        <b>UNION TYPES</b> - allow multiple possible values.
        <CodeBlock
          code={`type Status = "loading" | "success" | "error";

let state: Status = "loading";`}
        />
      </p>

      <p>
        <b>ARRAYS AND OBJECTS</b>
        <CodeBlock
          code={`let numbers: number[] = [1, 2, 3];

type User = {
  name: string;
};

let users: User[] = [];`}
        />
      </p>

      <p>
        <b>FUNCTION TYPES</b>
        <CodeBlock
          code={`type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;`}
        />
      </p>
      <p>
        <b>PROMISE (ASYNC)</b>
        <CodeBlock
          code={`const fetchData = async (): Promise<string> => {
  return "data";
};`}
        />
      </p>

      <p>
        <b>RECORD</b> - for dynamic object keys.
        <CodeBlock
          code={`type Users = Record<string, number>;

const scores: Users = {
  john: 10,
  anna: 15
};`}
        />
      </p>

      <p>
        <b>FULL EXAMPLE</b> - combining everything together
        <CodeBlock
          code={`type Props = {
  title: string;
  isActive?: boolean;
};

const Example = ({ title, isActive }: Props) => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};`}
        />
      </p>

      <p>
        <b>IMPORTANT NOTES</b>
        <ul>
          <li>Always type your props</li>
          <li>
            Avoid using <b>any</b>
          </li>
          <li>Use union types for better control</li>
          <li>Use generics for reusable logic</li>
          <li>Type your state and events</li>
        </ul>
      </p>
    </div>
  );
};

export default TypeScriptforReactEN;
