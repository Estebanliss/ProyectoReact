import '../App.css';
import NavBar from '../componentes/NavBar.js';
import ItemListContainer from '../componentes/ItemListContainer.js';

function Home() {
  return (
    <>
      <NavBar />
      <ItemListContainer  contenido="Texto de prueba"/>
    </>
  );
}

export default Home;