import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import db from "../utils/firebaseConfig";
console.log("Console.log de db en ItemDetailContainer", db);

import ItemDetail from "./ItemDetails";

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    const fetchDataProducts = async () => {
      const docRef = doc(db, "products", idItem);
      const docSnap = await getDoc(docRef);

      console.log(docSnap.data());

      return docSnap.data();
    };

    fetchDataProducts()
      .then((result) => setDatos(result))
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <>
      <ItemDetail item={datos} />
    </>
  );
};

export default ItemDetailContainer;
