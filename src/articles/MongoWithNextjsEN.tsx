import CodeBlock from "../components/CodeBlock/CodeBlock";

const MongoWithNextjsEN = () => {
  return (
    <div className="article">
      <h1>Mongodb with nextjs interaction</h1>
      <p>Step 1: create a new NextJS project</p>
      <CodeBlock code={`npx create-next-app@latest name-your-project`} />
      <p>Step 2: install mongoose</p>
      <CodeBlock code={`npm i mongoose`} />
      <p>
        Step 3: in your app create a new folder called "lib" in the root level
        and inside of it create a file "mongodb.js"
        <CodeBlock
          code={`import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;`}
        />
      </p>
      <p>
        Step 4: create .env.local file in the project's root directory and add
        there a connection string from mongoDB
        <CodeBlock
          //Replace the <username>, <password>, and mydatabase with your MongoDB credentials.
          code={`MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase
`}
        />
      </p>
      <p>
        Step 5: create schema. Create folder called "models", insert there a new
        file called Item.js
      </p>
      <CodeBlock
        code={`import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);`}
      />
      <p>
        Step 6: create folder inside app/api called "items", place there
        route.js for GET and POST. Within "items" create a new folder like this
        [id]. Put there route.js file for PUT and DELETE operations.
      </p>
      <CodeBlock
        code={`
// GET POST
import dbConnect from '@/lib/mongodb';
import Item from '@/models/Item';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();
  const items = await Item.find({});
  return NextResponse.json({ success: true, data: items });
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();
  const item = await Item.create(body);
  return NextResponse.json({ success: true, data: item }, { status: 201 });
}`}
      />
      <CodeBlock
        code={`// PUT DELETE
import dbConnect from '@/lib/mongodb';
import Item from '@/models/Item';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  await dbConnect();
  const body = await request.json();

  const item = await Item.findByIdAndUpdate(params.id, body, {
    new: true,
    runValidators: true,
  });

  if (!item) {
    return NextResponse.json({ success: false }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: item });
}

export async function DELETE(request, { params }) {
  await dbConnect();

  const deleted = await Item.findByIdAndDelete(params.id);

  if (!deleted) {
    return NextResponse.json({ success: false }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}`}
      />
      <p>
        Step 7: create 'page.js' file in app folder to sync data with frontend.
        Because we are using App Router, we must add "use client" to enable
        React hooks like useState and useEffect.
      </p>
      <CodeBlock
        code={`"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/items");
      const data = await res.json();
      setItems(data.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setForm({ name: "", description: "" });
      fetchItems();
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>MongoDB CRUD with Next.js</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          name="name"
          placeholder="Item name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <input
          type="text"
          name="description"
          placeholder="Item description"
          value={form.description}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <strong>{item.name}</strong> — {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
      />
      <p>Final folder structure</p>
      <CodeBlock
        code={`
project-root/
│
├── app/
│   ├── page.js
│   └── api/
│       └── items/
│           ├── route.js
│           └── [id]/
│               └── route.js
│
├── lib/
│   └── mongodb.js
│
├── models/
│   └── Item.js
│
└── .env.local`}
      />
    </div>
  );
};

export default MongoWithNextjsEN;
