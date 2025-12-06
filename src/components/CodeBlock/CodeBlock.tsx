import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBlockProps = {
  code: string;
};

const CodeBlock = ({ code }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{ fontSize: "1.6rem", margin: "0 auto", padding: "20px" }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
