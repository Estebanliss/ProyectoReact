import React from "react";
import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "../componentes/NavBar";
import ItemListContainer from "../componentes/ItemListContainer";
import ItemDetailContainer from "../componentes/ItemDetailContainer";
import Cart from "../componentes/Cart";
import ContexProvider from "../componentes/CartContext";

function Home() {
  return (
    <ContexProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<ItemListContainer />} path="/" />
          <Route element={<ItemListContainer />} path="/category/:categoryId" />
          <Route element={<ItemDetailContainer />} path="/item/:idItem" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </BrowserRouter>
    </ContexProvider>
  );
}

export default Home;
