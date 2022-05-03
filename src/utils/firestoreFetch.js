import {
  query,
  orderBy,
  where,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "@firebase/firestore";

import db from "./firebaseConfig";

export const firestoreFetch = async (categoryId) => {
  let q;

  if (categoryId) {
    q = query(collection(db, "products"), where("categoryId", "==", categoryId));
  } else {
    q = query(collection(db, "products"), orderBy("name"));
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));

  return dataFromFirestore;
};

export const firestoreFetchOne = async (idItem) => {
  const docRef = doc(db, "products", idItem);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: idItem,
      ...docSnap.data(),
    };
  } else {
    // eslint-disable-next-line no-console
    console.log("No existe este documento");
  }
};

// export const createOrderInFirestore = async (order) => {
//   const newOrderRef = doc(collection(db, "orders"));

//   await setDoc(newOrderRef, order);

//   return newOrderRef;
// };
