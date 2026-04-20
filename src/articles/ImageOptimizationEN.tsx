import CodeBlock from "../components/CodeBlock/CodeBlock";

const ImageOptimizationEN = () => {
  return (
    <div className="article">
      <h1>Image Optimization</h1>

      <p>
        To optimize images in Next.js, you can use the built-in <b>Image</b>{" "}
        component. Here are the advantages you get out of the box:
      </p>

      <ul>
        <li>
          <b>Size optimization</b> – automatically serves correctly sized images
          depending on the user’s device.
        </li>
        <li>
          <b>Visual stability</b> – prevents layout shifts while images are
          loading.
        </li>
        <li>
          <b>Faster page loads</b> – images are lazy-loaded only when they enter
          the viewport.
        </li>
        <li>
          <b>Asset flexibility</b> – images can be resized and optimized on
          demand.
        </li>
      </ul>

      <CodeBlock
        code={`// page.tsx
import Image from 'next/image'
 
export default function Page() {
  return <Image src="" alt="" />
}`}
      />

      <h2>Local Images</h2>

      <p>
        You can store images (and fonts) inside a folder called <b>public</b>.
        This folder should be placed at the same level as the <b>app</b>
        directory.
      </p>

      <CodeBlock
        code={`// page.tsx
import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}`}
      />

      <p>
        If the image is statically imported, Next.js can automatically determine
        its width and height.
      </p>

      <CodeBlock
        code={`import Image from 'next/image'
import ProfileImage from './profile.png'
 
export default function Page() {
  return (
    <Image
      src={ProfileImage}
      alt="Picture of the author"
    />
  )
}`}
      />

      <h2>Images Without Static Imports</h2>

      <p>
        If you cannot use a static import, you can switch to a dynamic import.
      </p>

      <CodeBlock
        code={`import Image from 'next/image'
 
async function PostImage({
  imageFilename,
  alt,
}: {
  imageFilename: string
  alt: string
}) {
  const { default: image } = await import(
    \`../content/blog/images/\${imageFilename}\`
  )

  // image contains width, height, and blurDataURL
  return <Image src={image} alt={alt} />
}`}
      />

      <h2>Remote Images</h2>

      <p>
        To use a remote image, provide a URL string for the <b>src</b>
        property. In this case, you also need to set <b>width</b> and
        <b> height</b>, or use the <b>fill</b> property instead.
      </p>

      <p>
        To safely allow images from remote servers, define a list of supported
        URL patterns inside <b>next.config.js</b>.
      </p>

      <CodeBlock
        code={`import type { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
        search: '',
      },
    ],
  },
}
 
export default config`}
      />

      <h2>Image Component</h2>

      <p>
        The <b>Image</b> component from Next.js extends the standard HTML
        <b> img</b> element with automatic image optimization.
      </p>

      <CodeBlock
        code={`import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}`}
      />

      <h2>Important Props</h2>

      <h3>src</h3>

      <p>An internal path:</p>
      <CodeBlock code={`<Image src="/profile.png" />`} />

      <p>
        An absolute external URL configured with <b>remotePatterns</b>:
      </p>
      <CodeBlock code={`<Image src="https://example.com/profile.png" />`} />

      <p>A static import:</p>
      <CodeBlock
        code={`import profile from './profile.png'
 
export default function Page() {
  return <Image src={profile} />
}`}
      />

      <h3>width and height</h3>

      <p>
        The <b>width</b> and <b>height</b> properties define the intrinsic
        dimensions of the image and help Next.js preserve the correct aspect
        ratio to prevent layout shifts.
      </p>

      <p>
        <b>Intrinsic size</b> means the natural size of the image without
        considering the surrounding layout context.
      </p>

      <p>
        You must always set <b>width</b> and <b>height</b> unless:
      </p>

      <ul>
        <li>
          the image is <b>statically imported</b>
        </li>
        <li>
          the image uses the <b>fill</b> property
        </li>
      </ul>

      <p>
        If width and height are unknown, use the <b>fill</b> property.
      </p>

      <h3>fill</h3>

      <p>
        A boolean property that makes the image expand to the size of its parent
        element.
      </p>

      <p>
        The parent must have <b>position: relative</b>, <b>absolute</b>, or
        <b> fixed</b>.
      </p>

      <p>
        You can use the <b>objectFit</b> prop to control how the image behaves
        inside the container.
      </p>

      <p>
        <b>objectFit</b> supports two common values:
      </p>

      <ul>
        <li>
          <b>contain</b> – the image scales down to fit the container while
          preserving aspect ratio.
        </li>
        <li>
          <b>cover</b> – the image fills the container and may be cropped.
        </li>
      </ul>

      <CodeBlock
        code={`import Image from 'next/image'
import mountains from '../public/mountains.jpg'
 
export default function Fill() {
  return (
    <div
      style={{
        display: 'grid',
        gridGap: '8px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, auto))',
      }}
    >
      <div style={{ position: 'relative', width: '400px' }}>
        <Image
          alt="Mountains"
          src={mountains}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  )
}`}
      />

      <h3>preload</h3>

      <p>
        Use <b>preload</b> for important above-the-fold images like hero
        sections or the main product image.
      </p>

      <p>
        It tells Next.js to prioritize loading that image earlier, which helps
        improve LCP (Largest Contentful Paint) performance.
      </p>

      <p>
        Do not use it for every image—only for the most important one on the
        page.
      </p>

      <CodeBlock
        code={`<Image
  src="/hero.png"
  alt="Hero image"
  width={1200}
  height={600}
  preload
/>`}
      />

      <h3>loading</h3>

      <p>Controls when the image should start loading.</p>

      <ul>
        <li>
          <b>lazy</b> – loads the image once it enters the viewport.
        </li>
        <li>
          <b>eager</b> – loads the image immediately regardless of its position
          on the page.
        </li>
      </ul>
    </div>
  );
};

export default ImageOptimizationEN;
