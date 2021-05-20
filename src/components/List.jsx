import React from "react";
import { Loader } from "semantic-ui-react";

export const List = ({ state, checked, loading }) => {
  return (
    <ul className="list" style={{ maxWidth: checked ? "700px" : "300px" }}>
      {state.map((img, i) => (
        <li style={{ backgroundImage: `url(${img})` }} key={i} />
      ))}
      {loading && <Loader size="big" active inline="centered" />}
    </ul>
  );
};
