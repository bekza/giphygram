import React from "react";
import { Input } from "semantic-ui-react";

export const Search = ({ handleSearch, searchValue }) => {
  return (
    <div className="search-input">
      <Input
        icon={{ name: "search", circular: true, link: true }}
        placeholder="Search..."
        onChange={handleSearch}
        value={searchValue}
      />
    </div>
  );
};
