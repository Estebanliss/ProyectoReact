import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import db from "../utils/firebaseConfig";

import ItemDetail from "./ItemDetails";

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    const fetchDataProducts = async () => {
      const docRef = doc(db, "products", idItem);
      const docSnap = await getDoc(docRef);

      return docSnap.data();
    };

    fetchDataProducts()
      .then((result) => setDatos(result))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <>
      <ItemDetail item={datos} />
    </>
  );
};

export default ItemDetailContainer;
