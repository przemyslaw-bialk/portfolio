import CodeBlock from "../components/CodeBlock/CodeBlock";

const RouteHandlersEN = () => {
  return (
    <div className="article">
      <h1>Route Handlers</h1>

      <p>
        Route handlers allow you to create custom request handlers for a given
        route. They are available only inside the <b>app</b> directory and are
        the modern replacement for API routes in Next.js.
      </p>

      <h2>Convention</h2>

      <p>
        Route handlers are defined in a <b>route.js</b> (or <b>route.ts</b>)
        file inside the <b>app</b> directory.
      </p>

      <p>
        They cannot exist at the same level as <b>page.js</b>. By default, route
        handlers are not cached.
      </p>

      <p>Supported HTTP methods:</p>

      <ul>
        <li>GET</li>
        <li>POST</li>
        <li>PUT</li>
        <li>PATCH</li>
        <li>DELETE</li>
      </ul>

      <CodeBlock
        code={`// app/api/route.ts
export async function GET(request: Request) {
  return Response.json({ message: 'Hello from route handler' });
}
`}
      />

      <h2>How it works</h2>

      <p>
        When a request is made to <b>/api</b>, Next.js looks for a{" "}
        <b>route.ts</b> file and executes the function that matches the HTTP
        method (GET, POST, etc.).
      </p>

      <p>
        Each function corresponds to a specific HTTP method, which means you can
        handle different types of requests within the same route file.
      </p>

      <h2>Using Services (Best Practice)</h2>

      <p>
        In real-world applications, you should avoid putting business logic
        directly inside route handlers. Instead, create a separate{" "}
        <b>services</b> layer.
      </p>

      <p>This keeps your code clean, reusable, and easier to maintain.</p>

      <CodeBlock
        code={`// services/user.service.ts

export type UpdateUserInput = {
  name?: string;
  email?: string;
};

export async function updateUser(id: string, data: UpdateUserInput) {
  const user = await UserModel.findByIdAndUpdate(
    id,
    data,
    { new: true }
  );

  if (!user) {
    throw new Error('User not found');
  }

  return user;
}
`}
      />

      <h2>Connecting Service with Route Handler</h2>

      <p>
        You can import your custom function (e.g. <b>updateUser</b>) into a
        route handler and execute it using <b>await</b>.
      </p>

      <CodeBlock
        code={`// app/api/users/route.ts

import { updateUser } from '@/services/user.service';

export async function PUT(request: Request) {
  try {
    const body = await request.json();

    const user = await updateUser(body.id, body);

    return Response.json(user);
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
`}
      />

      <h2>Why use this pattern?</h2>

      <ul>
        <li>Separation of concerns (API vs business logic)</li>
        <li>Reusable functions across your app</li>
        <li>Cleaner and more scalable architecture</li>
        <li>Easier testing</li>
      </ul>

      <p>
        <b>Dont return Response from service</b>
      </p>

      <CodeBlock
        code={`// Wrong (service layer)
return Response.json(...);

// Correct
return user;
`}
      />
    </div>
  );
};

export default RouteHandlersEN;
