import Items from "./Item";
import styled from "styled-components";


const ItemList = ({items}) => {

    const ProductsContainer = styled.div`
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    `;

    return (
        <ProductsContainer>
            {
                items.length > 0
                    ? items.map(item => <Items key={item.id} id={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
                    : <p>En proceso de carga...</p>
            }
        </ProductsContainer>

    )
}

export default ItemList;
