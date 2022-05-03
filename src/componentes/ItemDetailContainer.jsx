import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { firestoreFetchOne } from "../utils/firestoreFetch";

import ItemDetail from "./ItemDetails";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchOne(idItem)
      .then((result) => setDato(result))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [idItem]);

  return <ItemDetail item={dato} />;
};

export default ItemDetailContainer;
