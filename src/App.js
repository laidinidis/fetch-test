import React, { useState } from "react";

import "./App.css";

function App() {
  const [results, setResults] = useState([]);

  function fetchFromApi() {
    fetch(
      "https://webservices.mouzenidis.com/AviaWebApi/v1/locations/origins",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          origin_code: "MOW",
          destination_code: "SKG",
          direct: 0
        })
      }
    )
      .then(res => {
        return res.json();
      })
      .then(data => setResults(data))
      .catch(e => {
        console.log(e);
      });
  }
  async function fetchFromApiAsync() {
    try {
      const res = await fetch(
        "https://webservices.mouzenidis.com/AviaWebApi/v1/locations/origins",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            origin_code: "MOW",
            destination_code: "SKG",
            direct: 0
          })
        }
      );
      const data = await res.json();

      setResults(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <button onClick={fetchFromApi}>Fetch</button>
      <button onClick={fetchFromApiAsync}>Fetch async</button>
      <div>
        {results.map(result => (
          <div key={result.code}>{result.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
