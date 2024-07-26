import { useState } from "react";

const Users = () => {
  const [data1, setData1] = useState("");
  const handleClick = () => {
    setData1("I am clicked");
  };
  const [data2, setData2] = useState("");

  return (
    <div>
      Implementing User Event Functionality
      <button onClick={handleClick}>Click Me!</button>
      <p>{data1}</p>
      <input
        type="text"
        placeholder="Enter Admin"
        onChange={(e) => setData2(e.target.value)}
      />
      <p>{data2}</p>
    </div>
  );
};

export default Users;
