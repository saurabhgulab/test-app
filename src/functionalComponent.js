import React, { useState } from "react";
import { handleConsole } from "./handleConsole";

export default function Users() {
  const [data, setData] = useState("");
  const handleClick = () => {
    setData("Functional Component Test Passed");
  };
  return (
    <div>
      <h1>Functional Component Testing</h1>
      <button data-testid="btn" onClick={handleClick}>
        Click Me to Test
      </button>
      <button onClick={handleConsole}>Click me & check console</button>
      <p>{data}</p>
    </div>
  );
}
