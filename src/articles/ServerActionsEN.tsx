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
    </div>
  );
};

export default ServerActionsEN;
