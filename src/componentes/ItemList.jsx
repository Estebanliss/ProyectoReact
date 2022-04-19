import Items from "./Item";
import { DivEjemplo } from "./StyledComponents"


const ItemList = ({ items }) => {

    return (
        <DivEjemplo>
            {
                items.length > 0 ? items.map(item => <Items key={item.id} id={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
                : <p>En proceso de carga...</p>
            }
        </DivEjemplo>
    )
}

export default ItemList;
