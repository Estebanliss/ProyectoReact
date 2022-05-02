// Solución con FIREBASE

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

import db from "../utils/firebaseConfig";

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
  }, [datos]);

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

// Solución con MOCK
// import React from "react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import customFetch from "../utils/customFetch";

// import ItemList from "./ItemList";

// const { products } = require("../utils/products");

// const ItemListContainer = () => {
//   const [datos, setDatos] = useState([]);
//   const { categoryId } = useParams();

//   useEffect(() => {
//     customFetch(
//       2000,
//       products.filter((item) => {
//         if (categoryId === undefined) return item;

//         return item.categoryId === categoryId;
//       })
//     )
//       .then((result) => setDatos(result))
//       .catch((error) => console.log(error));
//   }, [categoryId]);

//   return (
//     <div>
//       <ItemList items={datos} />
//     </div>
//   );
// };

// export default ItemListContainer;
