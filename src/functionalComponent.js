import React, { useState } from "react";

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
      <p>{data}</p>
    </div>
  );
}
