import ItemCount from "./ItemCount";
import styled from "styled-components";

const ItemDetail = ({ item }) => {

    const ContainerGeneral = styled.div`
        width: 70%;
        display: flex;
        margin: auto;
    `;

    const ContainerImage = styled.div`
        width: 40%;
        margin: 0;

    `;

    const ProductsImage = styled.img`
        padding: 20px;
        width:80%;
        margin: 0;
    `;

    const ContainerDetails = styled.div`
        width: 60%;
        display: column;
        margin: 0;
    `;

    const Title = styled.h1`
        h1{
            text-aling: left;
            width: 80%;
            font-size: 30px;
            color: black;
            margin: 0;
        }
    `;

    const Description = styled.p`
        p{
            text-aling: left;
            width: 80%;
            font-size: 14px;
            margin: 0;
        }    
    `;

    const Price = styled.h6`
        text-aling: left;
        width: 80%;
        font-size: 12px;
        margin: 0;
    `;


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