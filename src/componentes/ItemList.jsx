import React from "react";

import Items from "./Item";
import { DivEjemplo } from "./StyledComponents";

const ItemList = ({ items }) => {
  return (
    <DivEjemplo>
      {items.length !== 0 ? (
        items.map((item) => (
          <Items
            key={item.id}
            cost={item.cost}
            id={item.id}
            pictureUrl={item.image}
            price={item.cost}
            stock={item.stock}
            title={item.name}
          />
        ))
      ) : (
        <p>En proceso de carga...</p>
      )}
    </DivEjemplo>
  );
};

export default ItemList;
