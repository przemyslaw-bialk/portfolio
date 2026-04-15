import CodeBlock from "../components/CodeBlock/CodeBlock";

const ImageOptimizationEN = () => {
  return (
    <div>
      <h1>Image Optimization</h1>
      <p>
        To optimize images in Next.js you can use a pre-built{" "}
        <b>image component</b>. Advatanges you get out of the box:
      </p>
      <ul>
        <li>
          <b>size optimization</b> - automatically sizes your image depending on
          the device.
        </li>
        <li>
          <b>visual stability</b> - prevents layout shifts while images are
          being loaded.
        </li>
        <li>
          <b>faster page loads</b> - only loading images when they are in a view
          port using lazy loading approach.
        </li>
        <li>
          <b>asset flexibility</b> - resizes images on demand.
        </li>
      </ul>
      <CodeBlock
        code={`//page.tsx
import Image from 'next/image'
 
export default function Page() {
  return <Image src="" alt="" />
}`}
      />
      <h2>Local images</h2>
      <p>
        You can store images (and fonts) in folder called <b>public</b>. The
        folder needs to be placed at the same level as <b>app</b>.{" "}
      </p>
      <CodeBlock
        code={`//page.tsx
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
        If image is statically imported than Next.js will automatically
        determine its width and height.
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
      <h2>images without static imports</h2>
      <p>
        If you can't use a static import than you can switch to a dynamic
        import.
      </p>
      <CodeBlock
        code={`
        import Image from 'next/image'
 
async function PostImage({
  imageFilename,
  alt,
}: {
  imageFilename: string
  alt: string
}) {
  const { default: image } = await import(
    '../content/blog/images/$(imageFilename)'
  )
  // image contains width, height, and blurDataURL
  return <Image src={image} alt={alt} />
}`}
      />
      <h2>remote images</h2>
      <p>
        To use a remote image, you can provide a URL string for the <b>src</b>
        property. You also need to set its width and height in this case.
        Alternatively, you can use <b>fill</b> property. To safely allow images
        from remote servers, you need to define a list of supported URL patterns
        in <b>next.config.js</b>.
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
    </div>
  );
};

export default ImageOptimizationEN;
