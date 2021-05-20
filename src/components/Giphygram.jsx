import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { List } from "./List";
import { API_KEY } from "./Contstants";

export const Giphygram = ({ state, setState }) => {
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [checked, setChecked] = useState(false);
  const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchValue}&limit=10&offset=${offset}&rating=G&lang=en`;

  const getData = () => {
    if (searchValue && load) {
      setLoading(true);
      fetch(api_url)
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

    const list = document.querySelector(".list");
    window.addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight ===
        list.clientHeight + list.offsetTop
      ) {
        setLoad(true);
      }
    });
  }, [load]);

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
      <Header
        handleSearch={handleSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setChecked={setChecked}
        checked={checked}
      />
      <List state={state} checked={checked} loading={loading} />
    </div>
  );
};
