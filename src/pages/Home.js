import '../App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../componentes/NavBar';
import ItemListContainer from '../componentes/ItemListContainer';
import ItemDetailContainer from "../componentes/ItemDetailContainer"
import Cart from "../componentes/Cart"


function Home() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;