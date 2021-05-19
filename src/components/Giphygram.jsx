import React, { useState, useEffect } from "react";

export const Giphygram = ({ state, setState }) => {
  const [loadMore, setLoadMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const getData = () => {
    if (inputValue && loadMore) {
      setLoading(true);
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&q=${inputValue}&limit=5&offset=${offset}&rating=G&lang=en`
      )
        .then((response) => response.json())
        .then((response) => {
          setState([
            ...state,
            ...response.data.map((item) => item.images.original.url),
          ]);
          setOffset(offset + 5);
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    getData();
    setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    const list = document.getElementById("list");
    window.addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight ===
        list.clientHeight + list.offsetTop
      ) {
        setLoadMore(true);
      }
    });
  });

  useEffect(() => {
    const list = document.getElementById("list");
    if (list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoadMore(true);
    }
  }, [state]);

  const handleSearch = () => {
    setState([]);
    setOffset(0);
    setLoadMore(true);
    getData();
  };
  return (
    <div>
      <h1>GIPHYGRAM</h1>
      <input
        type="test"
        value={inputValue}
        placeholder="search here..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul id="list">
        {state.map((img, i) => (
          <li style={{ backgroundImage: `url(${img})` }} key={i} />
        ))}
        {loading && <b>LOADING...</b>}
      </ul>
    </div>
  );
};
