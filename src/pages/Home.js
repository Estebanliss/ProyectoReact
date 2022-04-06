import '../App.css';
import NavBar from '../componentes/NavBar.js';
import ItemListContainer from '../componentes/ItemListContainer.js';
import ItemCount from '../componentes/ItemCount';

function Home() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer contenido="Texto de prueba" />
        <ItemCount stock={5} initial={1} onAdd />
      </div>
    </>
  );
}

export default Home;