import CodeBlock from "../components/CodeBlock/CodeBlock";

const FetchingInNextEN = () => {
  return (
    <div className="article">
      <h1>fetching in next.js</h1>

      <h2>server components</h2>
      <p>
        You can fetch data in <b>server components</b> via the standard{" "}
        <b>fetch</b> API or perform standard operations like <b>CRUD</b> using a
        database (e.g. with an ORM or database client). Fetch requests are{" "}
        <b>memoized</b> - if you make an identical request during a single
        render, the second one will reuse the response from the first call
        without making another request, which improves performance.
        <br />
        <b>
          Note: Memoization works per request. Caching behavior can be
          configured separately in Next.js.
        </b>
      </p>

      <CodeBlock
        code={`// page.js
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}`}
      />

      <CodeBlock
        code={`import { getDb } from "@/lib/mongodb";

export default async function Page() {
  const db = await getDb();

  const posts = await db
    .collection("posts")
    .find({})
    .toArray();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id.toString()}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}`}
      />

      <h2>streaming</h2>
      <p>
        When you fetch data in Server Components, the data is fetched and
        rendered on the server for each request. Without streaming, the user
        would have to wait until all data is loaded before seeing anything.
      </p>

      <p>
        To improve the initial load time, you can split the page into smaller
        chunks and progressively send them from the server to the client.
      </p>

      <p>There are 2 ways you can use streaming in your application:</p>

      <ol>
        <li>
          by creating a <b>loading.js</b> file in the same folder as page.js
        </li>
        <li>
          using <b>Suspense</b> - you can show content that is{" "}
          <b>outside of the suspense boundary</b> while the rest is loading
        </li>
      </ol>

      <CodeBlock
        code={`import { Suspense } from 'react'
import BlogList from '@/components/BlogList'
import BlogListSkeleton from '@/components/BlogListSkeleton'

export default function BlogPage() {
  return (
    <div>
      {/* This content will be sent immediately */}
      <header>
        <h1>Welcome to the Blog</h1>
        <p>Read the latest posts below.</p>
      </header>

      <main>
        {/* This part can be streamed */}
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogList />
        </Suspense>
      </main>
    </div>
  )
}`}
      />

      <h2>Client components</h2>

      <p>
        There are 2 main ways to fetch data in a <b>client component</b>:
      </p>

      <ol>
        <li>
          using React's <b>use</b> API
        </li>
        <li>using libraries, for example React Query</li>
      </ol>

      <h3>streaming data via react use</h3>

      <p>
        You can use React's <b>use</b> API to stream data from the server to the
        client. Start by fetching data in your Server Component and pass the
        promise to your Client Component as a prop. Please note that <b>use</b>{" "}
        only works from passing data from server component to client streaming
        with <b>suspense</b>.
      </p>

      <CodeBlock
        code={`import Posts from '@/app/ui/posts'
import { Suspense } from 'react'

export default function Page() {
  // Don't await the data
  const posts = getPosts()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}`}
      />

      <p>
        Then, in your Client Component, use the <b>use</b> API to read the
        promise:
      </p>

      <CodeBlock
        code={`'use client'
import { use } from 'react'

export default function Posts({ posts }) {
  const allPosts = use(posts)

  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}`}
      />
      <h2>client fetching vs route handlers</h2>

      <p>
        You can also fetch data directly in <b>Client Components</b> using the
        standard <b>fetch</b> API. In this case, requests are executed in the
        browser and usually go to a <b>Route Handler</b> (API endpoint).
      </p>

      <CodeBlock
        code={`"use client";

import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}
      />

      <p>
        Route Handlers in Next.js act as backend endpoints that handle these
        requests. They run on the server and can safely access databases or
        external services.
      </p>

      <CodeBlock
        code={`//route.js
  export async function GET() {
  const posts = await db
    .collection("posts")
    .find({})
    .toArray();

  return Response.json(posts);
}`}
      />

      <p>
        This approach is useful for interactive applications, but compared to
        Server Components it introduces an extra network request from the
        browser to the server.
      </p>

      <p>In general:</p>

      <ul>
        <li>
          <b>Server Components</b> → direct database access, no API layer needed
        </li>
        <li>
          <b>Client fetch</b> → requires API (Route Handlers), more interactive
        </li>
      </ul>
    </div>
  );
};

export default FetchingInNextEN;
