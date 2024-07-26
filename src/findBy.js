import { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 1000);
  });
  return (
    <div>
      <h1>findBy & findByAll Testing with setTimeout Functionality.</h1>
      {data ? <h1>data found</h1> : <h1>data not found</h1>}
    </div>
  );
};

export default Users;
