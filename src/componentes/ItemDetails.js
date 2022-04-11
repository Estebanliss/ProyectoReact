import ItemCount from "./ItemCount";
import styled from "styled-components";

const ItemDetail = ({ item }) => {

    const ContainerGeneral = styled.div`
        width: 70%;
        background-color: silver;
    `;

    const ContainerImage = styled.div`
        width:300px;
        background-color: red;
    `;

    const Otraimage = styled.img`
        height: 35%;
    `;
    const ContainerDetails = styled.div`
        width: 60%;
        display: flex;
    `;

    const Title = styled.h1`
        font-size: 30px;
        color: black;
    `;

    const Description = styled.p`
        font-size: 14px;
    `;

    const Price = styled.h6`
        font-size: 12px;
    `;


    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    

    return (
        <>
        {
            item && item.image
            ?
            < ContainerGeneral >
                <ContainerImage>
                    <Otraimage src={item.image[0]} />
                </ContainerImage>
                <ContainerDetails>
                    <Title>{item.name}</Title>
                    <Description>${item.description}</Description>
                    <Price>${item.price}</Price>
                </ContainerDetails>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </ContainerGeneral>
            : <p>Banca un toque...</p>
        }
        </>
    )


}

export default ItemDetail;