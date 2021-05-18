import React from "react";
import { Grid, Image } from "semantic-ui-react";
import "./styles.css";

export const Item = ({ itemUrl, itemSlug, import_datetime }) => (
  <Grid.Column className="item" width={9}>
    <Image src={itemUrl} />
  </Grid.Column>
);
