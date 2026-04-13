import CodeBlock from "../components/CodeBlock/CodeBlock";

const ErrorsInNextEN = () => {
  return (
    <div className="article">
      <h1>error handling </h1>
      <p>
        Errors can be devided in 2 categories: <b>expeted errors</b> and{" "}
        <b>uncaught exceptions</b>.{" "}
      </p>
      <h2>expected errors</h2>
      <p>
        Expected errors are those that can occur during normal operation of the
        application like server-side form validation.
      </p>
      <h3>server functions</h3>
      <p>
        You can use <b>useActionState</b> hook to handle expeected errors in{" "}
        <b>server functions</b>. Avoiid <b>try / catch</b> as model expects
        errors are returned values.
      </p>
      <CodeBlock
        code={`//actions.ts
'use server'
 
export async function createPost(prevState: any, formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')
 
  const res = await fetch('https://posts', {
    method: 'POST',
    body: { title, content },
  })
  const json = await res.json()
 
  if (!res.ok) {
    return { message: 'Failed to create post' }
  }
}`}
      />
      <p>
        You can pass your action to the <b>useActionState</b> hook and use the
        returned state to display an error message.
      </p>
      <CodeBlock
        code={`//form.tsx
'use client'
 
import { useActionState } from 'react'
import { createPost } from '@/app/actions'
 
const initialState = {
  message: '',
}
 
export function Form() {
  const [state, formAction, pending] = useActionState(createPost, initialState)
 
  return (
    <form action={formAction}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" required />
      {state?.message && <p aria-live="polite">{state.message}</p>}
      <button disabled={pending}>Create Post</button>
    </form>
  )
}`}
      />
      <p>
        When fetching data inside of <b>Server Component</b> you can use the
        response to conditionally render an error message.
      </p>
      <CodeBlock
        code={`//page.tsx 
export default async function Page() {
    const res = await fetch("...");
    const data = await res.json();
    
    if (!res.ok) {
    return "there was en error!"
}}
  `}
      />
      <h3>not found</h3>
      <p>
        You can call the notFound function within a route segment and use{" "}
        <b>not-found.js</b> file to show a 404 UI.
      </p>
      <CodeBlock
        code={`//app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/posts'
 
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
 
  if (!post) {
    notFound()
  }
 
  return <div>{post.title}</div>
}`}
      />
      <CodeBlock
        code={`//app/blog/[slug]/not-found.tsx
  export default function NotFound() {
  return <div>404 - Page Not Found</div>
}`}
      />
      <h2>handling uncaught exceptions</h2>
      <p>
        Uncaught exceptions are unexpected errors that indicate bugs or issues
        that should not occur during the normal flow of your application.
      </p>
      <h3>error.js</h3>
      <p>
        You can create a file called <b>error.js</b> in a route segment to
        handle errors in your application. It will create an{" "}
        <b>error boundary</b> for all of its <b>children</b>. Please note it
        must that <b>error.js must be a client component</b>. Errors will bubble
        up to the nearest error boundary.
      </p>
      <CodeBlock
        code={`//app/dahsboard/error.tsx
'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by re-fetching and re-rendering the segment
          () => unstable_retry()
        }
      >
        Try again
      </button>
    </div>
  )
}`}
      />
      <p>
        Error boundaries don't catch errors inside event handlers because they
        run after rendering. To handle these kind of errors you must use
        standard approach with <b>useState</b>.
      </p>
      <CodeBlock
        code={`'use client'
 
import { useState } from 'react'
 
export function Button() {
  const [error, setError] = useState(null)
 
  const handleClick = () => {
    try {
      // do some work that might fail
      throw new Error('Exception')
    } catch (reason) {
      setError(reason)
    }
  }
 
  if (error) {
    /* render fallback UI */
  }
 
  return (
    <button type="button" onClick={handleClick}>
      Click me
    </button>
  )
}`}
      />
      <h3>global errors</h3>
      <p>
        You can handle errors in the root layout using <b>global-error.js</b>{" "}
        file located in app directory. You must include <b>html</b> and{" "}
        <b>body</b> tags as it will replace your entire root layout.
      </p>
      <CodeBlock
        code={`//app/global-error.tsx
            
'use client' // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => unstable_retry()}>Try again</button>
      </body>
    </html>
  )
}`}
      />
    </div>
  );
};

export default ErrorsInNextEN;
