import CodeBlock from "../components/CodeBlock/CodeBlock";

const StaticVsDynamicNext = () => {
  return (
    <div className="article">
      <h1>Static vs Dynamic rendering in next js</h1>
      <p>
        Both server and client components are rendered on the server on the
        initial render in Next.js. Next.js server-side rendering work is split
        by routes. Each route can be aither static (also called pre-renderd) or
        dynamic. There is also one which mix 2 of these and its called partial
        pre-rendering PPR. <b>Static rendering is a default option</b>. In some
        cases a route switches to dynamic rendering.
      </p>
      <h3>static rendering</h3>
      <p>
        HTML is generated at <b>built time</b> or periodically in the background
        by re-fetchin data. This is usefull when data doesn't change very often.
        B
      </p>
      <h3>DYNAMIC RENDERING</h3>
      <p>
        HTML is generated at <b>request time</b> for each new request that
        reaches the server - when information <b>depends on request</b> (e.g.
        search params). Usefull when data changes very often and is
        personalized, for example a shopping cart.
      </p>
      <h3>when next.js switches to dynamic rendering</h3>
      <ul>
        <li>
          when the route has a dynamic segment (page uses params) because it
          cannot be known at built time.
        </li>
        <li>
          when <b>searchParams</b> are used in the page component
        </li>
        <CodeBlock code={`/product?quantity=103`} />
        <li>
          when <b>headers()</b> or <b>cookies</b> are used in any of the route's
          server component.
        </li>
        <li>
          when <b>uncached data request</b> is made in any of the route's server
          component.
        </li>
        <p>
          How to force Next.js to render a route dynamically:
          <CodeBlock
            code={`export const dynamic = 'force dynamic'; // from page.js
export const revalidate = 0 // from page.js
{cache: 'no-store'} // added to a fetch request  in any of the route's server component
noStore() // in any of the route's server component
            `}
          />
        </p>
      </ul>
    </div>
  );
};

export default StaticVsDynamicNext;
