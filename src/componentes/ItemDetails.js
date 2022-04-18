import ItemCount from "./ItemCount";
import { ContainerGeneral, ContainerImage, ProductsImage, ContainerDetails, Title, Description, Price } from "./StyledComponents"

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.");
    }

    return (
        <>
        {
            item && item.image
            ?
            < ContainerGeneral >
                <ContainerImage>
                    <ProductsImage src={item.image[0]} />
                </ContainerImage>
                <ContainerDetails>
                    <Title>{item.name}</Title>
                    <Description>${item.description}</Description>
                    <Price>${item.cost}</Price>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </ContainerDetails>
            </ContainerGeneral>
            : <p>Banca un toque...</p>

        }
        </>
    )


}

export default ItemDetail;