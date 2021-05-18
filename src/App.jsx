import React, { useState, useEffect } from "react";
import { Table } from "./components/Table";
import { Search } from "./components/Search";
import "./App.css";

const App = () => {
  const [searchValue, setSearchValue] = useState("kittens");
  const handleSearch = (e) => setSearchValue(e.target.value);

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&q=${searchValue}&limit=8&offset=0&rating=G&lang=en`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <h2>GIPHYGRAM</h2>
      <Search handleSearch={handleSearch} searchValue={searchValue} />
      {!isLoaded ? "Loading..." : ""}
      <Table items={items} isLoaded={isLoaded} />
    </div>
  );
};

export default App;
