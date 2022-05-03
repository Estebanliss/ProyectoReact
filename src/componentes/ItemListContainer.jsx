// Solución con FIREBASE

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { firestoreFetch } from "../utils/firestoreFetch";

import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    firestoreFetch(categoryId)
      .then((result) => setDatos(result))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [categoryId]);

  useEffect(() => {
    return () => {
      setDatos([]);
    };
  }, []);

  return <ItemList items={datos} />;
};

export default ItemListContainer;
