import React, { useState, useEffect } from "react";
import { Input, Checkbox, Button, Loader } from "semantic-ui-react";

export const Giphygram = ({ state, setState }) => {
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [checked, setChecked] = useState(false);

  const api = `https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&q=${searchValue}&limit=10&offset=${offset}&rating=G&lang=en`;
  const getData = () => {
    if (searchValue && load) {
      setLoading(true);
      fetch(api)
        .then((response) => response.json())
        .then(
          (response) => {
            setState([
              ...state,
              ...response.data.map((item) => item.images.original.url),
            ]);
            setOffset(offset + 5);
            setLoading(false);
          },
          (error) => {
            setState({
              error,
            });
            console.log(error);
            setLoading(false);
          }
        );
    }
  };
  useEffect(() => {
    getData();
    setLoad(false);
  }, [load]);

  useEffect(() => {
    const list = document.querySelector(".list");
    window.addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight ===
        list.clientHeight + list.offsetTop
      ) {
        setLoad(true);
      }
    });
  });

  useEffect(() => {
    const list = document.querySelector(".list");

    if (list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoad(true);
    }
  }, [state]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(inputValue);
    setState([]);
    setOffset(0);
    setLoad(true);
    getData();
  };

  return (
    <div>
      <h1>GIPHYGRAM</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <Input
          focus
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="search-input"
        />
        <Button primary disabled={!inputValue}>
          Search
        </Button>
      </form>
      <Checkbox
        toggle
        label="3-column display"
        className="display-toggle"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <ul className="list" style={{ maxWidth: checked ? "700px" : "300px" }}>
        {state.map((img, i) => (
          <li style={{ backgroundImage: `url(${img})` }} key={i} />
        ))}
        {loading && <Loader size="big" active inline="centered" />}
      </ul>
    </div>
  );
};
