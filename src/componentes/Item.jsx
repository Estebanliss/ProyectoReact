import React from "react";
import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

import { ContainerItem, ImageItem, ContainerIcon, IconItem } from "./StyledComponents";

const Items = ({ id, stock, cost, pictureUrl }) => {
  return (
    <ContainerItem>
      <ImageItem src={pictureUrl} />
      <ContainerIcon>
        <IconItem>
          <LocalOfferOutlined />
          <strong>${cost}</strong>
        </IconItem>
        <IconItem>
          <InfoOutlined />
          <strong>{stock} unid.</strong>
        </IconItem>
        <IconItem style={{ cursor: "pointer" }}>
          <Link style={{ textDecoration: "none" }} to={`/item/${id}`}>
            <DescriptionOutlined />
            <strong>Details</strong>
          </Link>
        </IconItem>
      </ContainerIcon>
    </ContainerItem>
  );
};

export default Items;
