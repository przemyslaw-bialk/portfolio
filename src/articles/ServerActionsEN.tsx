import CodeBlock from "../components/CodeBlock/CodeBlock";

const ServerActionsEN = () => {
  return (
    <div className="article">
      <h1>Server actions in next.js</h1>
      <p>
        <b>Server action</b> is an async function that runs on the server. They
        are great for form submissions. A server action can be defined by using
        "use server" directive on the top of your file or top of a function
        body.
      </p>
      <CodeBlock
        code={`
import { auth } from '@/lib/auth'
export async function createPost(formData: FormData) {
  'use server'
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
 
  const title = formData.get('title')
  const content = formData.get('content')
 
  // Mutate data
  // Revalidate cache
}
 
export async function deletePost(formData: FormData) {
  'use server'
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
 
  const id = formData.get('id')
 
  // Verify the user owns this resource before deleting
  // Mutate data
  // Revalidate cache
}`}
      />
      <h2>client components</h2>
      <p>
        It's not possible to define Server Functions in Client Components.
        However, you can invoke them in Client Components by importing them from
        a file that has the{" "}
        <span style={{ textDecoration: "underline" }}>"use server"</span>{" "}
        directive at the top of it:
      </p>
      <CodeBlock
        code={`//actions.ts
"use server"
export async function addProduct() {}`}
      />
      <CodeBlock
        code={`//button.ts
"use client"
import {addProduct} from "/actions"
export function Button() {
  return <button formAction={addProduct}>add</button>
}
`}
      />
      <p>
        You can also pass <b>action</b> to a <b>client component</b> as a prop:
      </p>
      <CodeBlock code={`<ClientComponent updateItemAction={updateItem} />`} />
      <CodeBlock
        code={`'use client'
 
export default function ClientComponent({
  updateItemAction,
}: {
  updateItemAction: (formData: FormData) => void
}) {
  return <form action={updateItemAction}>{/* ... */}</form>
}`}
      />
      <h2>invoking server actions</h2>
      <p>
        There are 2 ways you can invoke a server action:
        <ol>
          <li>via forms in server and client components</li>
          <li>by event handlers with useEffect() in client components</li>
        </ol>
      </p>
      <h3>forms</h3>
      <p>
        The easiest way is to create an <b>HTML form</b> and pass there{" "}
        <b>action</b> as <b>prop</b>. When invoked, you will get automatically
        access to <b>FormData</b> object and extract from there the data using
        native FormData methods (for example: <b>get</b>)
      </p>
      <CodeBlock
        code={`import { createPost } from '@/app/actions'
 
export function Form() {
  return (
    <form action={createPost}>
      <input type="text" name="title" />
      <input type="text" name="content" />
      <button type="submit">Create</button>
    </form>
  )
}`}
      />
      <CodeBlock
        code={`'use server'
 
import { auth } from '@/lib/auth'
 
export async function createPost(formData: FormData) {
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
 
  const title = formData.get('title')
  const content = formData.get('content')
 
  // Mutate data
  // Revalidate cache
}`}
      />
      <p>via event handlers:</p>
      <CodeBlock
        code={`//page.js
import { createPost } from '@/app/actions'
import ClientForm from '@/app/ClientForm'
 
export default function Page() {
  return <ClientForm action={createPost} />
}`}
      />

      <CodeBlock
        code={`'use client'
 
export default function ClientForm({ action }) {
  return (
    <form action={action}>
      <input type="text" name="title" />
      <button type="submit">Send</button>
    </form>
  )
}`}
      />

      <CodeBlock
        code={`//actions.js
'use server'
 
export async function createPost(formData: FormData) {
  const title = formData.get('title')
 
  console.log(title)
 
  // Mutate data
  // Revalidate cache
}`}
      />
    </div>
  );
};

export default ServerActionsEN;
