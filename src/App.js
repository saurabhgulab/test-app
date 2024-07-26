// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  console.log(data);
  return (
    <div className="App">
      <p>Testing API for Data Fetching</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      {/* <button onClick={fetchData}>Click Me to See Data !</button> */}
      <ul>
        {data.map((value) => {
          return <li key={value.id}>{value.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
