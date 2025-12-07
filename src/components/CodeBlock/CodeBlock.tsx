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
      customStyle={{
        fontSize: "1.4rem",
        marginBottom: "2rem",
        padding: "5px 10px",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
