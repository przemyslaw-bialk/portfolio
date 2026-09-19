import CodeBlock from "../components/CodeBlock/CodeBlock";

const FileSystemEN = () => {
  return (
    <div className="article">
      <h1>file system in node.js</h1>
      <p>
        This module provides a set of useful methods for working with files.
      </p>

      <h2>common use cases</h2>
      <ul>
        <li>read, write files</li>
        <li>create, delete files</li>
        <li>rename, move files</li>
        <li>changing file permissions</li>
        <li>managing directories</li>
      </ul>

      <h2>Creating and Writing Files</h2>
      <p>
        <b>fs.writeFile()</b> - a function for creating and writing to files. It
        usually takes 3 arguments: <b>filepath, file content, encoding</b>. The
        third <b>encoding</b> argument is optional.
      </p>

      <CodeBlock
        code={`const fs = require('fs').promises;

async function writeFileExample() {
  try {
    const fileContent = 'Hello, World!';

    await fs.writeFile('myfile.txt', fileContent, 'utf8');

    console.log('File created successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

writeFileExample();`}
      />

      <h2>Appending to Files</h2>
      <p>
        <b>fs.appendFile()</b> - a function for adding content to the end of a
        file. It usually takes 3 arguments:{" "}
        <b>filepath, file content, encoding</b>. The third <b>encoding</b>{" "}
        argument is optional. If no file was found, it will create a new one.
      </p>

      <CodeBlock
        code={`const fs = require('fs').promises;

async function appendFileExample() {
  try {
    const fileContent = '\\nThis text was appended to the file.';

    await fs.appendFile('myfile.txt', fileContent, 'utf8');

    console.log('Content appended successfully');
  } catch (err) {
    console.error('Error appending to file:', err);
  }
}

appendFileExample();`}
      />

      <h2>Updating Files</h2>
      <p>
        There is no separate <b>updateFile()</b> function. To update existing
        content, you can read the file, modify the data, and then use{" "}
        <b>fs.writeFile()</b> to save the updated content.
      </p>

      <CodeBlock
        code={`const fs = require('fs').promises;

async function updateFileExample() {
  try {
    const data = await fs.readFile('myfile.txt', 'utf8');

    const updatedData = data.replace('Hello', 'Hi');

    await fs.writeFile('myfile.txt', updatedData, 'utf8');

    console.log('File updated successfully');
  } catch (err) {
    console.error('Error updating file:', err);
  }
}

updateFileExample();`}
      />

      <h2>Deleting Files and Directories</h2>
      <p>
        <b>fs.unlink()</b> - a function for deleting a file. It takes the{" "}
        <b>filepath</b> as its argument.
      </p>

      <CodeBlock
        code={`const fs = require('fs').promises;

async function deleteFileExample() {
  try {
    await fs.unlink('myfile.txt');

    console.log('File deleted successfully');
  } catch (err) {
    console.error('Error deleting file:', err);
  }
}

deleteFileExample();`}
      />
      <h2>Renaming and Moving Files</h2>
      <p>
        The <b>fs.rename()</b> method can be used for both renaming and moving
        files. It takes 2 main arguments: <b>old filepath</b> and{" "}
        <b>new filepath</b>.
      </p>

      <CodeBlock
        code={`const fs = require('fs').promises;

async function renameFileExample() {
  try {
    await fs.rename('myfile.txt', 'renamed-file.txt');

    console.log('File renamed successfully');
  } catch (err) {
    console.error('Error renaming file:', err);
  }
}

renameFileExample();`}
      />

      <p>
        You can also use <b>fs.rename()</b> to move a file by providing a
        different directory in the new filepath.
      </p>

      <CodeBlock
        code={`const fs = require('fs').promises;

async function moveFileExample() {
  try {
    await fs.rename(
      'myfile.txt',
      'documents/myfile.txt'
    );

    console.log('File moved successfully');
  } catch (err) {
    console.error('Error moving file:', err);
  }
}

moveFileExample();`}
      />
    </div>
  );
};

export default FileSystemEN;
