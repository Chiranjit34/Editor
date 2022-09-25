import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const App = () => {
  const [state, setState] = React.useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyConent: "space-evenly",
      }}
    >
      <div style={{ width: "50%" }}>
        <textarea
          style={{ width: "90%", minHeight: "400px"}}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div style={{ width: "50%" }}>
        <SyntaxHighlighter language="javascript" style={docco}>
          {state}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default App;
