import React from "react";
import { Grid } from "semantic-ui-react";
import { Item } from "./Item";
import "./styles.css";

export const Table = ({ items, isLoaded }) => {
  return (
    <Grid centered columns={1} className="table-content">
      <Item />
      {items.data &&
        items.data.map((item) => {
          return (
            <Item
              itemSlug={item.slug}
              import_datetime={item.import_datetime}
              itemUrl={item.images.original.url}
            />
          );
        })}
      {!isLoaded && "Loading..."}
    </Grid>
  );
};
