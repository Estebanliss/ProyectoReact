import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import db from "../utils/firebaseConfig";
console.log(db);

import ItemDetail from "./ItemDetails";

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    const fetchDataProducts = async () => {
      const docRef = doc(db, "name", "cost", "description", "stock");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
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
