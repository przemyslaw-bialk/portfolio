import CodeBlock from "../components/CodeBlock/CodeBlock";

const ServerAndClientComponentsEN = () => {
  return (
    <div className="article">
      <h1>Server and Client Components</h1>

      <p>
        By default, layouts and pages are Server Components. If you need
        interactivity or access to browser APIs, you can use Client Components.
      </p>

      <h2>When to use Client Components:</h2>
      <ul>
        <li>state and event handlers (onClick, onChange, etc.)</li>
        <li>lifecycle logic (useEffect)</li>
        <li>browser-only APIs (localStorage, etc.)</li>
        <li>custom hooks</li>
      </ul>

      <h2>When to use Server Components:</h2>
      <ul>
        <li>fetching data from databases or APIs close to the source</li>
        <li>
          using API keys, tokens, and other secrets without exposing them to the
          client
        </li>
      </ul>

      <h2>Passing data from a Server Component to a Client Component</h2>
      <p>
        Let's say you have a <b>Server Component</b> called <b>page.js</b> and
        you want to pass data down to a <b>Client Component</b>. The simplest
        way is to pass data via props.
      </p>

      <CodeBlock
        code={`// app/[id]/page.js
import { Likes } from "./Likes"
import { getProduct } from "@/lib/data"

export default async function Page({ params }) {
  const product = await getProduct(params.id)

  return (
    <div>
      <h1>{product.title}</h1>
      <Likes likes={product.likes} />
    </div>
  )
}
`}
      />

      <CodeBlock
        code={`// app/components/ui/likes.js
'use client'
import { useState } from 'react'

export default function Likes({ likes }) {
  const [count, setCount] = useState(likes)

  const handleClick = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <p>Likes: {count}</p>
      <button onClick={handleClick}>Like</button>
    </div>
  )
}
`}
      />

      <h2>Passing a Server Component to a Client Component</h2>
      <p>
        You can pass a <b>Server Component</b> as a prop to a{" "}
        <b>Client Component</b>. A common pattern is using{" "}
        <b>children in a Client Component</b>.
      </p>

      <CodeBlock
        code={`// ui/modal.js
'use client'

export default function Modal({ children }) {
  return <div>{children}</div>
}
`}
      />

      <p>
        Then, in a parent <b>Server Component</b>, you can pass another
        component as a child (in this case, <b>Modal</b> is the wrapper):
      </p>

      <CodeBlock
        code={`// app/page.js
import Modal from './ui/modal'
import Cart from './cart'

export default function Page() {
  return (
    <Modal>
      <Cart />
    </Modal>
  )
}
`}
      />
    </div>
  );
};

export default ServerAndClientComponentsEN;
