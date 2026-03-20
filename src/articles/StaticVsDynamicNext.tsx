const StaticVsDynamicNext = () => {
  return (
    <div className="article">
      <h2>Static vs Dynamic rendering in next js</h2>
      <p>
        Both server and client components are rendered on the server on the
        initial render in Next.js. Next.js server-side rendering work is split
        by routes. Each route can be aither static (also called pre-renderd) or
        dynamic. There is also one which mix 2 of these and its called partial
        pre-rendering PPR.
      </p>
      <h3>STATIC RENDERING</h3>
      <p>
        HTML is generated at <b>built time</b> or periodically in the bacgkround
        by re-fetchin data. This is usefull when data doesn't change very often.
      </p>
      <h3>DYNAMIC RENDERING</h3>
      <p>
        HTML is generated at <b>request time</b> for each new request that
        reaches the server - user triggers the action. Usefull when data changes
        very often and is personalized, for example shopping cart.
      </p>
    </div>
  );
};

export default StaticVsDynamicNext;
