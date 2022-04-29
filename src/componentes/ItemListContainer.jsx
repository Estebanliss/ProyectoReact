import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

import db from "../utils/firebaseConfig";
console.log(db);

import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchFromFirestore = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));

      const dataFromFirestore = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return dataFromFirestore;
    };

    fetchFromFirestore()
      .then((result) => setDatos(result))
      .catch((error) => console.log(error));
  }, [categoryId]);

  useEffect(() => {
    return () => {
      setDatos([]);
    };
  }, []);

  return (
    <div>
      <ItemList items={datos} />
    </div>
  );
};

export default ItemListContainer;
