const CachingInNext = () => {
  return (
    <div className="article">
      <h1>Caching in Next.js</h1>

      <p>
        <b>Caching</b> – storing fetched or computed data in a temporary
        location for future access. Next.js uses aggressive caching and provides
        APIs for cache revalidation.
      </p>

      <h2>Caching mechanisms</h2>

      <table border={1} cellPadding="5">
        <thead>
          <tr>
            <th>Mechanism</th>
            <th>Where?</th>
            <th>What is cached?</th>
            <th>How long?</th>
            <th>Why? Usecases</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Request Memoization</td>
            <td>Server</td>
            <td>Same GET requests (same URL + options)</td>
            <td>Single request (one render at multiple places)</td>
            <td>
              Prevents duplicate fetches in component tree (same request = one
              call)
            </td>
          </tr>

          <tr>
            <td>Data Cache</td>
            <td>Server</td>
            <td>Data fetched in a route or a single fetch</td>
            <td>Indefinietly (until revalidated)</td>
            <td>data for static pages + ISR when revalidated</td>
          </tr>

          <tr>
            <td>Full Route Cache</td>
            <td>Server</td>
            <td>Entire static pages (HTML + RSC payload)</td>
            <td>Until revalidation / build time</td>
            <td>Fast page loads (SSG / ISR behavior)</td>
          </tr>

          <tr>
            <td>Router Cache</td>
            <td>Client</td>
            <td>pre-fetched and visited pages: static and dynamic</td>
            <td>30s-dynamic / 5min-static</td>
            <td>SPA-like navigation with no reloads</td>
          </tr>
        </tbody>
      </table>

      <h2>Revalidation</h2>
      <ul>
        <li>
          <b>Time-based:</b> <code>revalidate: 60</code>
        </li>
        <li>
          <b>On-demand:</b> <code>revalidatePath()</code>,{" "}
          <code>revalidateTag()</code>
        </li>
      </ul>

      <h2>Disabling cache</h2>
      <ul>
        <li>
          <code>fetch(url, {"{ cache: 'no-store' }"})</code>
        </li>
        <li>
          <code>export const dynamic = "force-dynamic"</code>
        </li>
      </ul>
    </div>
  );
};

export default CachingInNext;
