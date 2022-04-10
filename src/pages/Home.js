import '../App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../componentes/NavBar.js';
import ItemListContainer from '../componentes/ItemListContainer.js';
import ItemDetailContainer from "../componentes/ItemDetailContainer"


function Home() {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/id:Category' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;