import '../App.css';
import NavBar from '../componentes/NavBar.js';
import ItemListContainer from '../componentes/ItemListContainer.js';

function Home() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer contenido="Texto de prueba" />
      </div>
    </>
  );
}

export default Home;