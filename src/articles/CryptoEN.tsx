import CodeBlock from "../components/CodeBlock/CodeBlock";

const CryptoEN = () => {
  return (
    <div className="article">
      <h1>crypto in node.js</h1>
      <p>
        This module provides cryptographic functionality for working with
        hashes, encryption, random values, and other security-related
        operations.
      </p>

      <h2>common use cases</h2>
      <ul>
        <li>creating hashes</li>
        <li>generating checksums</li>
        <li>generating random values</li>
        <li>encrypting and decrypting data</li>
        <li>working with cryptographic keys</li>
      </ul>

      <h2>Creating a Hash</h2>
      <p>
        A <b>hash</b> is a fixed-length value generated from input data. The
        same input always produces the same hash. Hashes are commonly used for
        checking data integrity.
      </p>

      <CodeBlock
        code={`const crypto = require('crypto');

const data = 'Hello, World!';

const hash = crypto
  .createHash('sha256')
  .update(data)
  .digest('hex');

console.log(hash);`}
      />

      <h2>Creating MD5 Hash</h2>
      <p>
        <b>MD5</b> is a hashing algorithm that produces a 128-bit hash, usually
        represented as a 32-character hexadecimal string. It is useful for
        checksums and file integrity checks, but it should not be used for
        passwords or other security-sensitive data.
      </p>

      <CodeBlock
        code={`const crypto = require('crypto');

const data = 'Hello, World!';

const md5 = crypto
  .createHash('md5')
  .update(data)
  .digest('hex');

console.log(md5);`}
      />

      <h2>Creating a SHA-256 Hash</h2>
      <p>
        <b>SHA-256</b> is a commonly used cryptographic hash function that
        produces a 256-bit hash, usually represented as a 64-character
        hexadecimal string.
      </p>

      <CodeBlock
        code={`const crypto = require('crypto');

const data = 'Hello, World!';

const hash = crypto
  .createHash('sha256')
  .update(data)
  .digest('hex');

console.log(hash);`}
      />

      <h2>Hashing a File</h2>
      <p>
        You can also create a hash from a file. The file should be read as a{" "}
        <b>Buffer</b> so that the hash is calculated from the exact bytes of the
        file.
      </p>

      <CodeBlock
        code={`const fs = require('fs/promises');
const crypto = require('crypto');

async function hashFile() {
  try {
    const file = await fs.readFile('myfile.txt');

    const md5 = crypto
      .createHash('md5')
      .update(file)
      .digest('hex');

    console.log('MD5:', md5);
  } catch (err) {
    console.error('Error creating hash:', err);
  }
}

hashFile();`}
      />

      <h2>Generating Random Data</h2>
      <p>
        <b>crypto.randomBytes()</b> generates cryptographically secure random
        bytes. It can be used for generating tokens, identifiers, and other
        random values.
      </p>

      <CodeBlock
        code={`const crypto = require('crypto');

const randomBytes = crypto.randomBytes(16);

console.log(randomBytes.toString('hex'));`}
      />
    </div>
  );
};

export default CryptoEN;
