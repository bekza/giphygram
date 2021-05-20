import React from "react";
import { Input, Checkbox, Button } from "semantic-ui-react";
import { GIPHYGRAM } from "./Contstants";

export const Header = ({
  handleSearch,
  inputValue,
  setInputValue,
  setChecked,
  checked,
}) => {
  return (
    <div className="header">
      <h1>{GIPHYGRAM}</h1>
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
        label={"3-column display"}
        className="display-toggle"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
    </div>
  );
};
